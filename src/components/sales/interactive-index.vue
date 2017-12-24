<template>
  <div class="completed-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-text">
        <img src="../../assets/images/module/done.png" alt="">
        <h3 class="">接下来，我们进入互动环节。</h3>
        <h3 class="">这是我们整个测试的最后一个环节。</h3>
        <router-link to="/information-from" tag="a" class="btn-default">开始</router-link>
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
  .completed-container .content-text .btn-default{
    margin-top: 70px;
  }
</style>
