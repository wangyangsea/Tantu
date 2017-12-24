<template>
  <div class="sale-container">
    <m-header></m-header>
    <div class="content">
      <div class="sale-title">
        <h4 class="">范例：</h4>
        <p class="">你好，我是Jack / Jade，非常荣兴来介绍“佳保”这款安全保险产品。保证客户的文件，电脑安全，远离病毒攻击是我们公司这么多年一直追求的目标。我们都知道病毒对个人，对公司都非常重要我们有二款产品比较适合咱们公司：1。文件恢复和解锁，此产品是由我们的专家团队来负责。如果我们专家团队没有成功恢复或解锁文件，我们不收费。并且我们会还得到我们的赔偿。</p>
      </div>
      <div class="sale-text">
        <ul class="demo-list">
          <li>
            <strong>01</strong>
            <p>标准版：¥10 /月</p>
            <label>1台电脑或一块硬盘</label>
          </li>
          <li>
            <strong>02</strong>
            <p>月畅想版：¥20 /月</p>
            <label>5台电脑或5块硬盘</label>
          </li>
          <li>
            <strong>03</strong>
            <p>尊享版：¥50 /月</p>
            <label>无限制电脑台数</label>
          </li>
        </ul>
        <p class="simulation-instructions">限制条件：非法复制下载或其它非法使用，或非常内容与活动都不在本产品安保范围。</p>
        <router-link to="/interactive-index" tag="a" class="btn-default">结束请确认</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  export default {
    name: "sale-step1",
    components:{
      MHeader
    }
  }
</script>

<style scoped>
  .sale-title h4{
    margin-bottom: 50px;
  }
  .sale-title p{
    margin-bottom: 50px;
  }
  .demo-list{
    /*width: 90%;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .demo-list strong{
    font-size: 40px;
    color: #4d4d4d;
  }
  .demo-list p{
    font-size: 18px;
    margin-top: 12px;
  }
  .demo-list label{
    display: block;
    color: #757575;
    margin-top: 10px;
  }
  .simulation-instructions{
    padding: 60px 0 36px;
    font-size: 18px;
  }

</style>
