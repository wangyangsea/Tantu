<template>
  <div class="sale-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <h2 class="">亲,欢迎你</h2>
        <h3 class="">第二步，岗位职责分析</h3>
      </div>
      <div class="analysis-text">
        <div class="">
          <ul class="detail-text">
            <li class="">
              <h3 class="">控制范围</h3>
              <p class="">控制范围定义是销售为了完成绩效可利用的资源与决定权。</p>
            </li>
            <li class="">
              <h3 class="">岗位职责/绩效</h3>
              <p class="">绩效定义销售完成各项任务的具体指标的范围。</p>
            </li>
            <li class="">
              <h3 class="">影响力</h3>
              <p class="">影响力的定义是销售在收集数据，获取新信息并试图影响他人的能力。</p>
            </li>
            <li class="">
              <h3 class="">支持力</h3>
              <p class="">支持的定义是指销售可以从组织其它部门或者部门内获得的支持。</p>
            </li>

          </ul>
          <div class="display-effect">
            <m-progress :lineWidth="6"></m-progress>
            <m-progress lineColor="red-matter" :lineWidth="3" line-point="red-point"></m-progress>
            <m-progress lineColor="blue-matter" :lineWidth="8" line-point="blue-point"></m-progress>
            <m-progress lineColor="purple-matter" :lineWidth="5" line-point="purple-point"></m-progress>
          </div>
        </div>
        <router-link to="/balance" tag="a" class="btn-default">下一步</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  import MProgress from '../basics/progress'
  export default {
        name: "analysis",
    components:{
      MHeader,
      MProgress
    }
    }
</script>

<style scoped>
  .analysis-text{
    width: 100%;
    padding: 80px 60px 60px;
  }
  .content-title h2{
    font-size: 60px;
  }
  .content-title h3{
    font-size: 28px;
    margin-top: 20px;
  }
  .analysis-text>div{
    display: flex;
    justify-content: space-between;
  }
  .detail-text{
    width: 280px;
  }
  .detail-text li:not(:last-child){
    margin-bottom: 52px;
  }
  .detail-text h3{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail-text p{
    color: #757575;
  }
  .btn-default{
    margin-top: 50px;
  }
</style>
