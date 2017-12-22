<template>
  <div class="recommend-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <img src="../../assets/images/module/heart.png" alt="">
        <p>第一部分：心理测试</p>
      </div>
      <div class="content-text">
        <p class="">测试即将开始请做好准备</p>
        <router-link to="/project1-testing/test-1" tag="a" class="btn-default">下一步</router-link>
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
    padding: 182px 0 156px;
    font-size: 28px;
  }
</style>
