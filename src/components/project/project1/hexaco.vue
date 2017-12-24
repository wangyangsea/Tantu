<template>
  <div class="hexaco-container">
    <m-header></m-header>
    <div class="content">
      <div class="model-box">
        <img src="../../../assets/images/hexaco/mans.png" alt="">
        <div class="model-text">
          <h2 class="model-title">HEXACO人格结构模型</h2>
          <ul class="">
            <li>
              <h3 class="">诚实-谦恭</h3>
              <p class="">通过真诚我，公平,不贪婪，谦虚。</p>
            </li>
            <li>
              <h3 class="">情绪性</h3>
              <p class="">自我管理，就是调控自己的情绪，使之适时适度地表现出来。换言之，就是能调控自己。</p>
            </li>
            <li>
              <h3 class="">外向性</h3>
              <p class="">能够依据活动的某种目标，调动、指挥情绪的能力。</p>
            </li>
            <li>
              <h3 class="">宜人性</h3>
              <p class="">能够通过细微的社会信号、敏感地感受到他人的需求与欲望，认知他人的情绪。</p>
            </li>
            <li>
              <h3 class="">尽职性</h3>
              <p class="">掌握好调控自己与他人的情绪反应的技巧。</p>
            </li>
            <li>
              <h3 class="">经验的开放性</h3>
              <p class="">强调求知欲、好奇心和创造力。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-range">
        <h2>测试范围</h2>
        <ul>
          <li class="">
            <img src="../../../assets/images/hexaco/chengshi@2x.png" alt="">
            <p>诚实-谦恭</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/qingxu@2x.png" alt="">
            <p>情绪性</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/waixiang@2x.png" alt="">
            <p>外向性</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/yiren@2x.png" alt="">
            <p>宜人性</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/jinzi@2x.png" alt="">
            <p>尽职性</p>
          </li>
          <li class="">
            <img src="../../../assets/images/hexaco/kaifang@2x.png" alt="">
            <p>经验的开放性</p>
          </li>
        </ul>
        <router-link to="/project1-testing/test-1" tag="a" class="btn-default">下一步</router-link>
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
