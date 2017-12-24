<template>
  <div class="game-board">
    <div class="intro-wrapper" v-if="!start">
      <img class="intro-pic" src="/static/game2/img/intro.png" alt="">

      <div class="g2-btn rule-btn" @click="showGameRule">游戏规则</div>
      <div class="g2-btn start-btn" @click="startGame">开始游戏</div>
    </div>
    <div class="play-wrapper" v-else>
      <div class="img-wrapper">
        <img class="mask" src="/static/game2/img/yuncai.png" alt="" :style="maskStyle">
        <img :src="curPic" alt="" class="face">
      </div>
      <div class="options" @click="handleOptionClick">
        <span class="btn" data-index="0">高兴</span>
        <span class="btn" data-index="1">生气</span>
        <span class="btn" data-index="2">悲伤</span>
        <span class="btn" data-index="3">害怕</span>
        <span class="btn" data-index="4">厌恶</span>
        <span class="btn" data-index="5">吃惊</span>
        <span class="btn" data-index="6">无表情</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      start: false, // 游戏是否开始
      over: false,
      rightCount: 0,  // 连续答对次数
      level: 0, // 当前模糊等级
      maxLevel: 15, // 最大模糊等级
      currentOpacity: 0,
      opacityStep: 0.04,  // 模糊递进值
      picIndex: 0,  // 图片 index, 也就是表情对应ID
      testedIndex: [],
      emotionList: [
        'happy',
        'angry',
        'sad',
        'fear',
        'disgust',
        'surprise',
        'natural'
      ],
      // 男图片列表
      picList1: [
        '/static/game2/img/male/happy.png',
        '/static/game2/img/male/angry.png',
        '/static/game2/img/male/sad.png',
        '/static/game2/img/male/fear.png',
        '/static/game2/img/male/disgust.png',
        '/static/game2/img/male/surprise.png',
        '/static/game2/img/male/natural.png'
      ],
      // 女图片列表
      picList2: [
        '/static/game2/img/female/happy.png',
        '/static/game2/img/female/angry.png',
        '/static/game2/img/female/sad.png',
        '/static/game2/img/female/fear.png',
        '/static/game2/img/female/disgust.png',
        '/static/game2/img/female/surprise.png',
        '/static/game2/img/female/natural.png'
      ],

      currentBlurArr: [], // 当前表情的测试结果一维数组
      blurArr: [],  // 根据blur等级，生成一维数组

      // 提交给接口数据
      api: 'http://www.51tantu.com/userTest/submit_neuro_test', // 接口
      testProfileId: 8,  // 测试ID
      parameters: {
        startOpacity: 0.96,
        opacityStep: this.opacityStep
      }, // 每轮测试参数
      dataCollected: [] // 每轮测试数据
    }
  },
  computed: {
    curPic () {
      return this.picList1[this.picIndex] || '/static/game2/img/yuncai.png'
    },
    maskStyle () {
      this.currentOpacity = (1 - (this.level + 1) * this.opacityStep)
      return {
        opacity: this.currentOpacity
      }
    }
  },
  methods: {
    showGameRule () {
      console.log('显示游戏规则')
    },
    startGame () {
      this.start = true
      this.currentBlurArr = JSON.parse(JSON.stringify(this.blurArr))
    },

    /**
     * 随机出一个图片index
     */
    randomPicIndex () {
      let index = Math.floor(Math.random() * 7)
      if (this.testedIndex.indexOf(index) !== -1) {
        index = this.randomPicIndex()
      }
      return index
    },
    /**
     * 检查是否游戏结束
     */
    checkGameOver () {
      if (this.testedIndex.length === 7) {
        this.gameOver()
        return true
      } else {
        return false
      }
    },
    /**
     * 游戏结束执行函数
     */
    gameOver () {
      this.over = true
      this.$layer.toast({content:'游戏结束', time: 3000});

      this.endGame()
    },

    // 结束游戏提交游戏数据
    async endGame () {
      try {
        const res = await this.$http.post(this.api, {
          testProfileId: this.testProfileId,
          parameters: this.parameters,
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
      this.$router.push('/project4-testing/agency')
    },

    /**
     * 点击选项执行函数
     */
    handleOptionClick (e) {
      if (this.over) {
        return
      }
      const target = e.target
      if (target.tagName === 'SPAN') {
        const index = parseInt(target.getAttribute('data-index'))
        // 答案选对
        if (index === this.picIndex) {
          this.currentBlurArr[this.level] = 1
          this.rightCount++
          if (this.rightCount === 3) {
            // 答对满 3 就将测试index 添加到缓存中
            this.testedIndex.push(this.picIndex)
            if (this.checkGameOver()) {
              return
            }
            // 切换下一个表情
            this.nextEmotion()
          } else {
            if (this.level === this.maxLevel) {
              // 如果当前测试level已经达到最大，则将测试index 添加到缓存中
              this.testedIndex.push(this.picIndex)
              if (this.checkGameOver()) {
                return
              }
              // 切换下一个表情
              this.nextEmotion()
            } else {
              this.level++
            }
          }
        } else {
          // 答案选错
          this.rightCount = 0

          if (this.level === this.maxLevel) {
            // 如果当前测试level已经达到最大，则将测试index 添加到缓存中
            this.testedIndex.push(this.picIndex)
            if (this.checkGameOver()) {
              return
            }
            // 切换下一个表情
            this.nextEmotion()
          } else {
            this.level++
          }
        }
      }
      this.debugOutput()
    },

    // next emotion
    nextEmotion () {
      this.dataCollected.push({
        emotion: this.emotionList[this.picIndex],
        testArr: this.currentBlurArr
      })
      this.picIndex = this.randomPicIndex()
      this.level = 0
      this.rightCount = 0
      this.currentBlurArr = JSON.parse(JSON.stringify(this.blurArr))
    },

    debugOutput () {
      console.log('level', this.level)
      console.log('picIndex', this.picIndex)
      console.log('rightCount', this.rightCount)
      console.log('testedIndex', this.testedIndex)
    }
  },
  created () {
    for (let i = 0; i < this.maxLevel; i++){
      this.blurArr.push(0)
    }
  }
}
</script>
<style lang="scss" scoped>
$green: #00B489;
.intro-pic {
  width: 906px;
  height: 516px;
  margin: 46px auto;
  display: block;
}
.g2-btn {
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
}

.img-wrapper {
  width: 380px;
  height: 380px;
  overflow: hidden;
  margin: 50px auto;
  position: relative;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .face {

  }
}
.options {
  margin: 0 auto;

  .btn {
    display: inline-block;
    box-sizing: border-box;
    width: 120px;
    height: 44px;
    border: 2px solid $green;
    color: $green;
    margin-right: 6px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    transition: all .3s ease;

    &:last-child {
      margin-right: 0;
    }

    &.active,&:hover {
      color: #fff;
      background-color: $green;
      cursor: pointer;
    }

  }
}
</style>


