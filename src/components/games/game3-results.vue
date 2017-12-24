<template>
    <div class="home-container">
      <div class="content">
        <img class="smile-icon" src="../../assets/images/module/no-done.png" alt="">
        <h3 class="">恭喜你，你收集的金币为XX个。击败60%的人</h3>
        <p class="">注意：请等待我们的科研人员给您配戴下面二个设备后进入实战模拟阶段。</p>
        <div class="images-box">
          <img src="../../assets/images/sale/equipment-1.png" alt="">
          <img src="../../assets/images/sale/equipment-2.png" alt="">
        </div>
        <router-link to="/sale-confirm" tag="a" class="btn-default">下一步</router-link>
      </div>
    </div>
</template>

<script>
  import MHeader from '../basics/home-header'
    export default {
        name: "game3-results",
      components:{
        MHeader
      }
    }
</script>

<style scoped>
  .content{
    text-align: center;
    padding: 100px 0 60px;
  }
  .smile-icon{
    width: 100px;
  }
  .content h3{
    font-size: 28px;
    margin: 39px 0 30px;
  }
  .content>p{

  }
  .images-box{
    width: 540px;
    margin: 59px auto 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .images-box img{
    width: 240px;
  }
</style>
