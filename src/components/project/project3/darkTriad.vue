<template>
  <div class="hexaco-container">
    <m-header></m-header>
    <div class="content">
      <div class="model-box">
        <img src="../../../assets/images/dark/dark-banner.png" alt="">
        <div class="model-text">
          <h2 class="model-title">黑暗三合一 - 黑暗性格模型</h2>
          <h3 class="sub-modul-title">科学家把这三种黑暗人格的组合称为“黑暗三合一”（暗三元组），第一种，自恋癖（自恋）自我中心;第二种，心理变态（精神病）易冲动，喜刺激，冷漠无情;第三种，马基雅维利主义（马基雅维利主义）瞒骗和无情利用他人研究发现“这三种反社会人格实际上是同一东西，而且代表一种成功的进化策略”结果显示，黑暗性格分数越高的男子，女人缘越好。</h3>
          <ul class="">
            <li>
              <h3 class="">马基雅维利主义</h3>
              <p class="">在心理和行为上一般表现为：冷酷无情，擅长操纵，阴谋算计，实用主义，注重结果和忽视道德。</p>
            </li>
            <li>
              <h3 class="">自恋</h3>
              <p class="">一般具有以下特征：自我中心，爱慕虚荣，自我吹嘘，支配性，优越感，傲慢无礼和自以为是。</p>
            </li>
            <li>
              <h3 class="">精神病态</h3>
              <p class="">行为上一般表现为：行为冲动，寻求刺激，缺乏共情，缺乏责任感，缺乏焦虑。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-range">
        <h2>测试范围</h2>
        <ul>
          <li class="">
            <img src="../../../assets/images/dark/fasan.png" alt="">
            <p>马基雅维利主义</p>
          </li>
          <li class="">
            <img src="../../../assets/images/dark/lixing.png" alt="">
            <p>自恋</p>
          </li>
          <li class="">
            <img src="../../../assets/images/dark/shiye.png" alt="">
            <p>精神病态</p>
          </li>
        </ul>
        <router-link to="/project3-testing/test-1" tag="a" class="btn-default">下一步</router-link>
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
