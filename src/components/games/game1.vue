<template>
  <div class="game-board">
    <div class="game-wrapper">
      <div class="display-wrapper">
        <!-- 关卡提示 -->
        <div class="dialog" v-show="showNext">
          <p>
            <span v-if="clickRightCount !== curConfig.validBallNum">这一轮选对{{ clickRightCount }}个，有效球数是{{ curConfig.validBallNum }}</span>
            <span v-else>恭喜您全部选对了~</span>
            <br>
          </p>
          <div class="g1-btn next-btn" @click="nextLevel" v-if="!gameover">进入下一轮</div>
          <div class="g1-btn next-btn" @click="endGame" v-else>完成游戏</div>
        </div>
        <!-- 球运动区域 -->
        <div class="move-wrapper">
          <span
            class="ball"
            v-for="ball in list"
            :key="ball.key"
            :data-value="ball.value"
            :style="{left: `${ball.left}px`, top: `${ball.top}px`}"
            :class="{shrink: ball.value === 1}"
            @click="ballClick($event, ball.value)"
          ></span>
        </div>
      </div>
      <div class="g1-btn rule-btn" @click="showGameRule">游戏规则</div>
      <div class="g1-btn start-btn" @click="startGame">开始游戏</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      startTime: 0,
      duration: 10 * 60 * 1000, // 游戏时间为10分钟，单位毫秒
      start: false,
      gameover: false,  // 游戏是否结束
      showNext: false,  // 是否展示下一关提示
      timer: null,
      moveTime: 7000, // 球自由运动7s
      clickEnable: false, // 运动7s后，球才能点击
      // 球 列表
      list: [], // 当前渲染球列表
      newList: [],  // 生成的新列表
      currentSpeed: 3,
      baseSpeed: 3,  // 最小运动速度 px
      stepSpeed: 0.1, // 每关速度基数增加 10%
      // 关卡设置
      levelConfig: [
        {
          ballNum: 12,  // 球总数
          validBallNum: 3 // 有效球的个数
        },
        {
          ballNum: 12,
          validBallNum: 4
        },
        {
          ballNum: 12,
          validBallNum: 5
        },
        {
          ballNum: 12,
          validBallNum: 6
        },
        {
          ballNum: 15,
          validBallNum: 7
        },
        {
          ballNum: 20,
          validBallNum: 8
        },
        {
          ballNum: 20,
          validBallNum: 9
        },
        {
          ballNum: 20,
          validBallNum: 10
        },
      ],
      level: 1, // 当前 关
      maxLevel: 8,  // 最大 关

      positionList: [], // 记录所有球位置信息
      boardWidth: 900,  // 场地宽度
      boardHeight: 500, // 场地高度
      ballWidth: 24,  // 球的直径
      clickCount: 0, // 记录点击球的次数
      clickRightCount: 0, // 点击正确个数

      // 提交给接口数据
      api: 'http://www.51tantu.com/userTest/submit_neuro_test', // 接口
      testProfileId: 10,  // 测试ID
      parameters: [], // 每轮测试参数
      dataCollected: [] // 每轮测试数据
    }
  },
  computed: {
    curConfig () {
      return this.levelConfig[this.level - 1]
    },
    endTime () {
      return Date.now()
    }
  },
  watch: {
    endTime (val, oldVal){
      if ((endTime - startTime) >= this.duration){
        this.$layout.toast({content: '游戏超时！', duration: 3000})
        this.gameover = true
      }
    }
  },
  methods: {
    showGameRule () {
      console.log('显示游戏规则')
    },
    startGame () {
      this.startTime = Date.now()
      this.start = true
      this.resetGame()
    },

    // 球点击处理函数
    ballClick (e, value) {
      // 点击次数用光
      if (this.gameover || !this.clickEnable) {
        return
      }
      this.clickCount++
      const target = e.target
      if (value === 1) {
        this.clickRightCount++
        target.classList.add('active')
      } else {
        target.classList.add('wrong')
      }
      // 点击机会用完
      if (this.clickCount === this.curConfig.validBallNum) {
        // 如果关卡已经是最大level，游戏结束
        if (this.level === this.maxLevel){
          this.gameover = true
        }

        this.dataCollected.push({
          level: this.level,
          clickRightCount: this.clickRightCount,
          clickWrongCount: this.curConfig.validBallNum - this.clickRightCount
        })
        this.showNext = true
      }
    },

    // 当鼠标悬停在球上时，停止运动
    ballMouseOver () {
      if (this.showNext || this.gameover) {
        return
      }
      clearInterval(this.timer)
    },
    // 移出时继续运动
    ballMouseOut () {
      if (this.showNext || this.gameover) {
        return
      }
      this.startMove()
    },

    // 所有球开始运动
    startMove () {
      // return
      this.timer = setInterval(() => {
        this.list = this.list.map(ball => {
          ball.left += ball.xSpeed
          if (ball.left <= 0) {
            ball.left = 0
            ball.xSpeed = Math.abs(ball.xSpeed)
          }
          if (ball.left >= (this.boardWidth - this.ballWidth)) {
            ball.left = this.boardWidth - this.ballWidth
            ball.xSpeed = -Math.abs(ball.xSpeed)
          }
          ball.top += ball.ySpeed
          if (ball.top <= 0) {
            ball.top = 0
            ball.ySpeed = Math.abs(ball.ySpeed)
          }
          if (ball.top >= (this.boardHeight - this.ballWidth)) {
            ball.top = this.boardHeight - this.ballWidth
            ball.ySpeed = -Math.abs(ball.ySpeed)
          }
          return ball
        })
      }, 30)
      setTimeout(() => {
        clearInterval(this.timer)
        this.timer = null
        this.clickEnable = true
      }, this.moveTime);
    },

    // 创建球
    createBalls () {
      this.newList = []
      for (let i = 0; i < this.curConfig.ballNum; i++) {
        const {left, top} = this.randomBallPosition()
        const {xSpeed, ySpeed} = this.randomBallSpeed()
        this.newList.push({
          key: `${this.level}-${i}`,
          value: i < this.curConfig.validBallNum ? 1 : 0,
          xSpeed,
          ySpeed,
          left,
          top
        })
      }

      this.list = this.newList
    },

    /**
     * 随机出球的速度
     * baseSpeed 0.5 px
     */
    randomBallSpeed () {
      this.currentSpeed = this.baseSpeed + (this.level - 1) * this.stepSpeed * this.baseSpeed
      const randomAngle = this.randomValue(0, 360)
      const piAngle = randomAngle / 180 * Math.PI
      const xSpeed = Math.sin(piAngle) * this.currentSpeed
      const ySpeed = Math.cos(piAngle) * this.currentSpeed
      // const xSpeed = Math.random() > 0.5 ? this.randomValue(this.baseSpeed, this.baseSpeed) : -this.randomValue(this.baseSpeed, this.baseSpeed)
      // const ySpeed = Math.random() > 0.5 ? this.randomValue(this.baseSpeed, this.baseSpeed) : -this.randomValue(this.baseSpeed, this.baseSpeed)
      return {
        xSpeed,
        ySpeed
      }
    },

    /**
     * 随机出球的位置
     * maxWidth: 900,
     * maxHeight: 500
     * ballWidth: 40
     * ballWidth: 40
     */
    randomBallPosition () {
      // 记录球的位置，新产生的球之间距离必须大于一个求得直径
      const xMin = this.ballWidth
      const xMax = this.boardWidth - this.ballWidth * 2
      const yMin = this.ballWidth
      const yMax = this.boardHeight - this.ballWidth * 2

      let left = this.randomValue(xMin, xMax)
      let top = this.randomValue(yMin, yMax)

      let position = {left, top}
      // 检查球距离是否满足条件, 不满足则重新生成
      if (!this.checkBallDistance(left, top)) {
        position = this.randomBallPosition()
      }
      this.positionList.push(position)
      return position
    },

    checkBallDistance (left, top) {
      // const distance = this.calBallDistance(left, top)
      this.positionList.map(p => {
        const distance = this.calBallDistance(left, top, p.left, p.top)
        if (distance < this.ballWidth) {
          return false
        }
      })
      return true
    },

    // 计算两个球之间的距离
    calBallDistance(l1, t1, l2, t2) {
      return Math.sqrt(Math.pow((l1 - l2), 2) + Math.pow((t1 - t2), 2))
    },

    // 重置游戏
    resetGame () {
      this.showNext = false
      this.timer = null
      this.clickEnable = false
      this.clickCount = 0
      this.clickRightCount = 0
      // 增加移动速度
      // this.baseSpeed = this.baseSpeed
      this.createBalls()
      setTimeout(() => {
        this.startMove()
      }, 3000);
    },

    // 下一轮
    nextLevel () {
      this.level++
      this.resetGame()
    },

    // 结束游戏提交游戏数据
    async endGame () {
      try {
        const res = await this.$http.post(this.api, {
          testProfileId: this.testProfileId,
          parameters: this.levelConfig,
          dataCollected: this.dataCollected
        })
        console.log(res)
      } catch (e) {
        console.log(e)
      }

      this.goNext()
    },

    /*
    * 这里跳转到下一个测试页面
    * @sea 你来写
    */
    goNext () {
      this.$router.push('/project2-testing/basbis')
    },

    // min < 随机值 < max
    randomValue (min, max) {
      return (min + Math.ceil(Math.random() * (max - min)))
    }
  },
  created () {
    this.list = this.newList
  }
}
</script>
<style lang="scss" scoped>
$green: #00B489;
$orange: #F79F3C;

.g1-btn {
  width: 260px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  transition: opacity .2s ease;
  font-size: 18px;


  &:hover {
    cursor: pointer;
    opacity: .8;
  }

  &.rule-btn {
    background-color: #F79F3C;
    margin-left: 208px;
    float: left;
  }

  &.start-btn {
    background-color: #00B489;
    float: right;
    margin-right: 208px;
  }

  &.next-btn {
    background-color: #00B489;
    float: none;
    display: inline-block;
  }
}
.display-wrapper {
  width: 900px;
  height: 500px;
  background-color: #626569;
  margin: 50px auto;
  position: relative;

  .dialog {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    position: absolute;

    text-align: center;
    font-size: 30px;
    color: #fff;
    line-height: 50px;
    z-index: 100;
    font-weight: normal;
    p {
      margin: 120px auto;
    }

    // &.next-tip {
    //   display: none;
    // }
    // &.gameover {
    //   display: none;
    // }
  }
}
.move-wrapper {
  width: 900px;
  height: 500px;
  background-color: #626569;
  position: relative;

  .ball {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: $orange;
    position: absolute;
    z-index: 1;

    &.shrink {
      animation: shrink 1s .6s ease-in-out;
      animation-iteration-count: 2;
    }

    &.active {
      background-color: $green;
    }

    &.wrong {
      background-color: red;
    }

    &:hover {
      cursor: pointer;
      opacity: .7;
    }
  }
}

@keyframes shrink {
  0% {
    background-color: $orange;
  }
  50% {
    background-color: $green;
  }
  100% {
    background-color: $orange;
  }
}

</style>


