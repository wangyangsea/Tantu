<template>
  <div class="sale-container">
      <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <h2 class="">亲,欢迎你</h2>
        <h3 class="">第三步，职位设计权责平衡</h3>
      </div>
      <div class="balance-text">
        <div class="">
          <div class="computations-box">
            <div class="">
              <h3 class="computations-title">控制范围</h3>
              <ul class="computations-list">
                <li class="" v-for="(item,index) in attributeData1">
                  <label @click="greenSub(index)"><img src="../../assets/images/analysis/green-sub.png" alt=""></label>
                  <span>{{item}}</span>
                  <label @click="greenAdd(index)"><img src="../../assets/images/analysis/green-add.png" alt=""></label>
                </li>
              </ul>
            </div>
            <div class="">
              <h3 class="computations-title">影响力</h3>
              <ul class="computations-list">
                <li class="" v-for="(item,index) in attributeData2">
                  <label @click="blueSub(index)"><img src="../../assets/images/analysis/blue-sub.png" alt=""></label>
                  <span>{{item}}</span>
                  <label @click="blueAdd(index)"><img src="../../assets/images/analysis/blue-add.png" alt=""></label>
                </li>
              </ul>
            </div>

          </div>
          <div class="progress-line-box">
            <m-progress :lineWidth="line1"></m-progress>
            <m-progress lineColor="red-matter" :lineWidth="line3" line-point="red-point"></m-progress>
            <m-progress lineColor="blue-matter" :lineWidth="line2" line-point="blue-point"></m-progress>
            <m-progress lineColor="purple-matter" :lineWidth="line4" line-point="purple-point"></m-progress>
          </div>
          <div class="computations-box">
            <div class="">
              <h3 class="computations-title">岗位职责/绩效</h3>
              <ul class="computations-list">
                <li class="" v-for="(item,index) in attributeData3">
                  <label @click="redSub(index)"><img src="../../assets/images/analysis/red-sub.png" alt=""></label>
                  <span>{{item}}</span>
                  <label @click="redAdd(index)"><img src="../../assets/images/analysis/red-add.png" alt=""></label>
                </li>
              </ul>
            </div>
            <div class="">
              <h3 class="computations-title">支持力</h3>
              <ul class="computations-list">
                <li class="" v-for="(item,index) in attributeData4">
                  <label @click="purpleSub(index)"><img src="../../assets/images/analysis/purple-sub.png" alt=""></label>
                  <span>{{item}}</span>
                  <label @click="purpleAdd(index)"><img src="../../assets/images/analysis/purple-add.png" alt=""></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-link to="/all-success" tag="a" class="btn-default">下一步</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  import MProgress from '../basics/progress'
    export default {
        name: "balance",
      data(){
        return{
          attributeData1:['报价权限','公司客户线索','相关客户预算','决定权：产品与服务','决定权：无形资源'],
          attributeData2:['目标达成','跨部门协调','直线汇报','职责矩阵'],
          attributeData3:['合同额','收入','客户满意度','续约率','回款额'],
          attributeData4:['合同额','收入','客户满意度','续约率'],
          line1:0,
          line2:0,
          line3:0,
          line4:0,
        }
      },
      components:{
        MHeader,
        MProgress
      },
      methods:{
        greenSub(idx){
          if(this.line1<=0){
            return false
          }
          this.line1=this.line1-1;
        },
        greenAdd(idx){
          if(this.line1>=10){
            return false
          }
          this.line1=this.line1+1;
        },
        blueSub(idx){
          if(this.line2<=0){
            return false
          }
          this.line2=this.line2-1;
        },
        blueAdd(idx){
          if(this.line2>=10){
            return false
          }
          this.line2=this.line2+1;
        },
        redSub(idx){
          if(this.line3<=0){
            return false
          }
          this.line3=this.line3-1;
        },
        redAdd(idx){
          if(this.line3>=10){
            return false
          }
          this.line3=this.line3+1;
        },
        purpleSub(idx){
          if(this.line4<=0){
            return false
          }
          this.line4=this.line4-1;
        },
        purpleAdd(idx){
          if(this.line4>=10){
            return false
          }
          this.line4=this.line4+1;
        },
      }
    }
</script>

<style scoped>
  .content-title h2{
    font-size: 60px;
  }
  .content-title h3{
    font-size: 28px;
    margin-top: 20px;
  }
  .balance-text{
    width: 100%;
    background: #fff;
    padding: 70px 40px;
  }
  .balance-text>div{
    display: flex;
    justify-content: space-between;
  }
  .computations-box{
    width: 220px;
  }
  .computations-list{
    width: 100%;
    border: 1px solid #ddd;
    padding: 20px 10px;
  }
  .computations-list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #757575;
  }
  .computations-list li:not(:last-child){
    margin-bottom: 16px;
  }
  .computations-list label{
    cursor: pointer;
  }
  .computations-list img{
    width: 20px;
    height: 20px;
  }
  .computations-box>div:not(:last-child){
    margin-bottom: 35px;
  }
  .progress-line-box{
    margin-top: 30px;
  }
  .progress-line-box .progress-box{
    margin-bottom: 34px;
  }
  .computations-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .btn-default{
    margin-top: 50px;
  }
</style>
