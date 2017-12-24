<template>
  <div class="hexaco-container">
    <m-header></m-header>
    <div class="content">
      <div class="model-box">
        <img src="../../../assets/images/basbis/bas-banner.png" alt="">
        <div class="model-text">
          <h2 class="model-title">BAS/BIS行为抑制/激活模型</h2>
          <h3 class="sub-modul-title">Gray的人格生物学理论强调人格、情绪与神经物学的关系，主要有两大机制调节控制人的情绪和行为：</h3>
          <ul class="">
            <li>
              <h3 class="">行为激活系统</h3>
              <p class="">对奖励、非惩罚刺激作出反应，一旦激活就产生趋近行为，并体会到到正向情绪，如兴奋、快乐、希望等。其神经机制可能与大脑中央边缘区域的多巴胺系统有关。</p>
            </li>
            <li>
              <h3 class="">行为抑制系统</h3>
              <p class="">对惩罚、非奖赏及新奇的刺激比较敏感，它会抑制个体停止或减慢自已的行为反应，以免造成负面的后面。当BIS被激发时，个体主观感受常是负向情绪，如焦虑、害怕等，其神经机制可能与中隔-海马回系统有关。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-range">
        <h2>测试范围</h2>
        <ul>
          <li class="">
            <img src="../../../assets/images/hexaco/chengshi@2x.png" alt="">
            <p>奖赏反应</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/qingxu@2x.png" alt="">
            <p>愉悦追求</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/waixiang@2x.png" alt="">
            <p>奖励反应</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/yiren@2x.png" alt="">
            <p>行为抑制</p>
          </li>
        </ul>
        <router-link to="/project2-testing/test-1" tag="a" class="btn-default">下一步</router-link>
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
