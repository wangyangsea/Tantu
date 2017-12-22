<template>
  <div class="completed-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-text">
        <img src="../../assets/images/module/no-done.png" alt="">
        <h3 class="">完成35题， 剩余25题</h3>
        <p class="">放欢迎回来， Jade 继续 HEXACO 测试</p>
        <router-link to="" tag="a" class="btn-default">继续答题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  export default {
    name: "testing-completed",
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
