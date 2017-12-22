<template>
  <div class="completed-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-text">
        <img src="../../assets/images/module/done.png" alt="">
        <h3 class="">太棒了，您已经完成HEXACO人格结构模型测试</h3>
        <p class="">放松一下，玩个健脑小游戏，看看你能喂到多少鱼！</p>
        <router-link to="/not-completed" tag="a" class="btn-default">开始</router-link>
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
