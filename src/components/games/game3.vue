<template>
  <div class="game-board">
    <div class="g3-bg-wrapper">
      <!-- 气压显示滑块 -->
      <div class="press-slider-wrapper">
        <span class="label">气压</span>
        <div class="slider">
          <span class="slider-block" :style="{width: pressCount / 30 * 200 + 'px'}"></span>
        </div>
        <span class="slider-value">{{ pressCount }}</span>
      </div>

      <!-- 爆炸图片 -->
      <img ref="balloonExplode" src="/static/game3/img/balloon_explode.png" alt="" class="balloon-explode">

      <!-- 气球图片 -->
      <img v-show="!showNext" ref="balloon" :style="balloonStyle" :src="picSrc" alt="" class="balloon">

      <!-- 右侧得分 -->
      <div class="right-score">
        <span class="total-score">总得分:&nbsp;&nbsp;{{ totalScore }}</span>
        <span class="total-golden">金币:&nbsp;&nbsp;{{ roundGolden }}</span>
      </div>

      <!-- 关卡提示 -->
      <div class="dialog" v-show="showNext">
        <p>
          这一轮气球的压力值是{{ pressCount }}，爆点是{{ explodeValue }}
          <br>
          <span v-if="!exploded">本轮气球没有爆，得到{{ pressCount }}个金币</span>
          <span v-else>本轮气球爆了，没有得到金币</span>
        </p>
        <div class="g3-btn next-btn" @click="nextLevel" v-if="!gameover">进入下一轮</div>
        <div class="g3-btn next-btn" @click="goNext" v-else>完成游戏</div>
      </div>

    </div>

    <div :class="{disable: btnDisable}" class="g3-btn press-btn" @click="addPress">为气球增加压力</div>
    <div :class="{disable: btnDisable}" class="g3-btn gas-btn" @click="gasFill">气球充气</div>
  </div>
</template>

<script>
/* eslint-disable */


export default {
  data () {
    return {
      btnDisable: false,
      currentLevel: 1,
      maxLevel: 20,
      exploded: false,
      pressCount: 0,
      maxPress: 32, // 最大气压
      explodeValue: 10, // 随机爆点
      totalScore: 0,
      picSrc: '/static/game3/img/balloon.png',
      defaultBalloonStyle : {
        width: '82px',
        height: '132px',
        opacity: 1
      },
      balloonStyle: {
        width: '82px',
        height: '132px',
        opacity: 1
      },
      // 每轮获得金币数
      goldList: [

      ],

      // 爆点记录
      explodeValueList: [

      ],

      // 压力记录
      pressList: [

      ],

      showNext: false,
      gameover: false,

      // 提交给接口数据
      api: 'http://www.51tantu.com/userTest/submit_neuro_test', // 接口
      testProfileId: 9,  // 测试ID
      parameters: {
        maxPress: 32,
        totalScore: 0
      }, // 每轮测试参数
      dataCollected: [] // 每轮测试数据
    }
  },
  computed: {

    // 本轮金币数
    roundGolden () {
      return this.pressCount
    }
  },
  methods: {
    // 添加气压
    addPress () {
      if (this.pressCount === this.maxPress){
        return
      }
      this.pressCount++
    },

    // 气球充气动画
    balloonAnimate () {
      const rate = this.pressCount / this.maxPress
      this.balloonStyle = {
        width: 82 + rate * 140 + 'px',
        height: 132 + rate * 225 + 'px',
        opacity: 1
      }
    },

    // 给气球充气
    gasFill () {
      // 禁用按钮
      this.btnDisable = true

      // 记录游戏历史
      this.pressList.push(this.pressCount)
      this.explodeValueList.push(this.explodeValue)

      // 播放气球充气动画
      this.balloonAnimate()

      // 等待气球充气动画执行结束
      setTimeout(() => {
        this.dataCollected.push({
          explodeValue: this.explodeValue,
          pressCount: this.pressCount
        })
         // 达到爆点，开始爆炸
        if (this.pressCount >= this.explodeValue) {
          // this.totalScore = 0
          this.balloonExplode()
        } else {
          // 增加得分和金币
          // 重新开始
          this.totalScore += this.pressCount
          this.showNext = true

          // 游戏结束
          if (this.currentLevel === this.maxLevel) {
            this.endGame()
          }
        }
      }, 800)
    },

    // 气球爆照
    balloonExplode () {
      this.balloonStyle.opacity = 0
      this.$refs.balloonExplode.classList.add('active')
      this.exploded = true
      setTimeout(() => {
        this.$refs.balloonExplode.classList.remove('active')
        this.showNext = true

          // 游戏结束
        if (this.currentLevel === this.maxLevel) {
          this.endGame()
        }
      }, 300)
    },

    // 游戏结束
    async endGame () {
      this.gameover = true
      try {
        this.parameters.totalScore = this.totalScore
        const res = await this.$http.post(this.api, {
          testProfileId: this.testProfileId,
          parameters: this.parameters,
          dataCollected: this.dataCollected
        })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },

    // 继续下面的测试
    /**
     * @sea 你来添加逻辑
     */
    goNext () {
      this.$router.push('/sale-index')
    },

    // 新的一轮
    resetGame () {
      // 爆点为 1 ~ 32 之间的数
      this.explodeValue = Math.ceil(Math.random() * this.maxPress) + 1
      this.balloonStyle = this.defaultBalloonStyle
      this.pressCount = 0
      this.showNext = false
      this.exploded = false
      this.btnDisable = false
    },

    // 下一关
    nextLevel () {
      this.currentLevel++
      this.resetGame()
    }
  },
  created () {
    this.resetGame()
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  width: 500px;
  height: 304px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 30px;
  color: #fff;
  line-height: 50px;
  z-index: 100;
  font-weight: normal;
  p {
    margin: 30px auto;
  }

  // &.next-tip {
  //   display: none;
  // }
  // &.gameover {
  //   display: none;
  // }
}
.g3-bg-wrapper {
  width: 900px;
  height: 500px;
  background-color: #19205D;
  margin: 50px auto;
  position: relative;;

  .press-slider-wrapper {
    height: 24px;
    line-height: 24px;
    position: absolute;
    color: #fff;
    left: 26px;
    top: 20px;

    .label {
      float: left;
    }
    .slider-value {
      float: left;
    }
    .slider {
      display: inline-block;
      width: 200px;
      height: 100%;
      background-color: #fff;
      float: left;
      margin: 0 15px 0 9px;

      .slider-block {
        display: inline-block;
        height: 100%;
        background-color: #F79F3C;
        float: left;
      }
    }
  }

  .right-score {
    position: absolute;
    right: 26px;
    top: 20px;
    height: 24px;
    line-height: 24px;
    color: #fff;

    .total-score {
      margin-right: 20px;
    }
    .total-golden {

    }
  }

  .balloon {
    width: 222px;
    height: 357px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all .5s ease;
  }

  .balloon-explode {
    width: 373px;
    height: 240px;
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-50%) scale(.5);
    z-index: 10;
    opacity: 0;
    transition: all .3s ease;

    &.active {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }
}

.g3-btn {
  width: 260px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  float: left;
  transition: opacity .2s ease;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }

  &.disable {
    pointer-events: none;
  }

  &.press-btn {
    background-color: #F79F3C;
    margin-left: 208px;
    margin-right: 60px;
  }

  &.gas-btn {
    background-color: #00B489;
  }

  &.next-btn {
    background-color: #00B489;
    float: none;
    display: inline-block;
  }
}
</style>

