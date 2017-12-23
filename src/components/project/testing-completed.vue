<template>
  <div class="completed-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-text">
        <img src="../../assets/images/module/done.png" alt="">
        <h3 class="">{{details.testTitle}}</h3>
        <p class="">{{details.nextStep}}</p>
        <router-link :to="url" tag="a" class="btn-default">开始</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  import {testName} from "../../datas/options";

  export default {
        name: "testing-completed",
      data(){
          return{
            details:{},
            num:null,
            url:''
          }
      },
      components:{
        MHeader
      },
      created(){
          if(sessionStorage.hasOwnProperty('testName_num')){
            this.num=Number(sessionStorage.getItem('testName_num'));
            this.details=testName[this.num];
            if(this.num==0){
              this.url='/project2-testing/basbis'
            }else if(this.num==1){
              this.url='/project3-testing/dark-triad'
            }else if(this.num==2){
              this.url='/project4-testing/agency'
            }else if(this.num==3){
              this.url='/project5-testing/eq'
            }else if(this.num==4){
              this.url=''
            }
          }
      },
    methods:{
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
