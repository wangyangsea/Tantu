<template>
    <div class="sale-container">
      <m-header></m-header>
      <div class="content">
        <div class="sale-title">
          <h4 class="">背景介绍：</h4>
          <p class="">今天你的销售工作是卖保险，我们常识是卖保险让人难堪，因为，很多人拒绝保险人是因为他们看上去不靠谱。所以让卖保险的工作更是难上加难。因此，今天我们给你这样一个挑战：你的任务是让你的潜在客户对你的保险感兴趣（假设你的用户就是这个摄像头）。</p>
          <p class="">我们今天卖的保险是电脑防病毒保险。有可能你也经历过“要崩溃”的状态，因为我们电脑里的文件被病毒感染而打不开或者损坏。现在我们有三个产品包你可以卖给客户，你来决定卖哪款并且可以拿到15％的佣金产品价格如下：</p>
        </div>
        <div class="sale-text">
          <ul class="demo-list">
            <li>
              <strong>01</strong>
              <p>标准版：¥10 /月</p>
            </li>
            <li>
              <strong>02</strong>
              <p>月畅想版：¥20 /月</p>
            </li>
            <li>
              <strong>03</strong>
              <p>尊享版：¥50 /月</p>
            </li>
          </ul>
          <p class="simulation-instructions">下面是范例是如何推荐这款保险产品，你可以根据你的习惯与销售思路调整，你有5分钟的准备时间来准备你的说词，熟悉上面描述的产品的信息.5分钟倒计时后，你将正式开始你的销售你的保险产品，时间为3分钟。</p>
          <router-link to="/sale-step2" tag="a" class="btn-default">开始</router-link>
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
  .simulation-instructions{
    padding: 60px 0 36px;
    font-size: 18px;
  }

</style>
