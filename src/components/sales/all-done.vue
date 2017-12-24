<template>
  <div class="completed-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-text">
        <img src="../../assets/images/module/done.png" alt="">
        <h3 class="">恭喜你，完成全部测试，请稍后查看报告</h3>
        <p class=""></p>
        <router-link to="" tag="a" class="btn-default">查看报告</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'

  export default {
    components:{
      MHeader
    }
  }
</script>

<style scoped>
  .completed-container .content-text{
    height: auto;
    padding: 181px 0;
  }
  .completed-container .content-text img{
    width: 100px;
    margin-bottom: 40px;
  }
  .completed-container .content-text h3{
    font-size: 28px;
  }
  .completed-container .content-text p{
    margin: 30px 0 81px;
  }
</style>
