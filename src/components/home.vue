<template>
  <div class="home-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <img src="../assets/images/module/man_head.png" alt="">
        <p class="">销售岗位认知能力测试</p>
      </div>
      <div class="content-text">
        <p class="home-text">坦途测试是哈佛心理学家与MIT脑神经科学家的研发出的全能工具，用来评估销售岗位人员的销售能力。此测试共有三部分组成，请协助完成基础信息的填写，用来跟您相同年纪，性别、教育背景的人群去对比。</p>
        <p class="home-remark">为了提高心理测试部分准确性，请一次完成全部测试。部分测试需要鼠标，请提前准备好</p>
        <router-link to="/login" tag="a" class="btn-default">开始</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from './basics/home-header'
    export default {
        name: "home",
      components:{
        MHeader
      }
    }
</script>

<style scoped>
  .content-title img{
    width: 121px;
  }
  .content-title p{
    font-size: 28px;
    margin-top: 16px;
  }
  .content-text .home-text{
    font-size: 24px;
    width: 90%;
    margin: 100px auto;
    line-height: 40px;
  }
  .content-text .home-remark{
    font-size: 16px;
    color: #F84541;
  }
  .btn-default {
    margin-top: 36px;
  }
</style>
