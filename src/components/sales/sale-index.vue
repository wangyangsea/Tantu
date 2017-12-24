<template>
  <div class="recommend-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <img src="../../assets/images/sale/sale-title.png" alt="">
        <p>第二部分：销售实战模拟</p>
      </div>
      <div class="content-text">
        <p class="">在第二部分的销售实战模拟中，您将给出一个销售场景和一些信息，通过这些信息，您将给出您的销售思路与策略。</p>
        <p class="remark-p">此题需要开启摄像头，并上传你答题过程。</p>
        <router-link to="/sale-step1" tag="a" class="btn-default">开始</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  export default {
    name: "project1",
    components:{
      MHeader
    },

  }
</script>

<style scoped>
  .recommend-container .content-title img{
    width: 117px;
    margin-bottom: 30px;
  }
  .recommend-container .content-title p{
    font-size: 28px;
  }
  .recommend-container .content-text p{
    padding: 112px 0 144px;
    font-size: 28px;
  }
  .recommend-container .content-text .remark-p{
    padding: 0;
    font-size: 16px;
    color: #F84541;
    padding-bottom: 40px;
  }
</style>
