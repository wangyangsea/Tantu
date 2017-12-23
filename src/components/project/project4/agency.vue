<template>
  <div class="hexaco-container">
    <m-header></m-header>
    <div class="content">
      <div class="model-box">
        <img src="../../../assets/images/agency/agency-banner.png" alt="">
        <div class="model-text">
          <h2 class="model-title">能动与共生模型</h2>
          <h3 class="sub-modul-title">能动意为个体通过权力，控制等方式追求自身的独立;共生意为个体通过关爱，交流等方式追求融入集体能动与共生模型，能够对特质，动机及价值观等领域进行有效划分。</h3>
          <h3 class="sub-modul-title">能力通常是反映一个人的自我聚焦，独立性，控制力以及追求成就的意愿。而共生反映的关注他人的能力，与别人建立关联交互的能力。</h3>

        </div>
      </div>
      <div class="test-range">
        <h2>测试范围</h2>
        <ul>
          <li class="">
            <img src="../../../assets/images/dark/fasan.png" alt="">
            <p>自我聚焦</p>
          </li>
          <li class="">
            <img src="../../../assets/images/dark/lixing.png" alt="">
            <p>关注他人</p>
          </li>
        </ul>
        <router-link to="/project4-testing/test-1" tag="a" class="btn-default">下一步</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../../basics/home-header'
  export default {
    name: "home",
    components:{
      MHeader
    }
  }
</script>

<style scoped>
  .model-box{
    display: flex;
    justify-content: space-between;
  }
  .model-box>img{
    width: 460px;
    height: 560px;
    background: #000;
  }
  .model-text{
    width: 500px;
    padding-left: 30px;
    padding-right: 20px;
  }
  .model-text li{
    line-height: 24px;
    position: relative;
    color: #757575;
  }
  .model-text li:not(:last-child){
    margin-bottom: 23px;
  }
  .model-text li:before{
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    position: absolute;
    left: -28px;
    top: 5px;
    background: url("../../../assets/images/hexaco/point.png") no-repeat;
    background-size: contain;
  }
  .model-text li h3{
    font-size: 18px;
    font-weight: bold;
  }
  .model-title{
    font-size: 26px;
    color: #4d4d4d;
    font-weight: bold;
    margin: 30px 0;
  }
  .sub-modul-title{
    font-size: 16px;
    margin-bottom: 46px;
  }
  .test-range{
    width: 84%;
    margin: 0 auto;
    text-align: center;
    padding: 70px 0 42px;
  }
  .test-range h2{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 36px;

  }
  .test-range ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .test-range li{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .test-range li img{
    width: 32px;
    height: 32px;
    margin-bottom: 20px;
  }
  .btn-default{
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>
