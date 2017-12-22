<template>
  <div class="header-container">
    <div class="testing-header-fixed">
      <router-link to="" tag="a"><img class="logo" src="../../assets/images/module/logo.png" alt=""></router-link>
      <div class="progress-box">
        <div class="progress-dev"></div>
      </div>
      <p class="residue-number">剩余{{aaa}}题</p>
      <p class="count-time">20:00</p>
    </div>
  </div>
</template>

<script>
  let alltime=1200;
    export default {
        name: "testing-header",
      data(){
          return{
            times:alltime,
            last:this.allTopic,
            abc:0,
            allTopic:0
          }
      },
      created(){
        this.allTopic=sessionStorage.getItem('project_num_1');
      },
      watch:{

      },
      computed:{
        aaa(){
          return this.allTopic-this.residueTopic
        }

      },
      props:{
        // allTopic:{
        //   type:Number,
        //   default:Number(sessionStorage.getItem('project_num_1'))
        // },
        residueTopic:{
          type:Number,
          default:0
        },
        countTime:{
          type:Number,
          default:null
        }
      },
      watch:{
        residueTopic(a,b){

        }
      },
      methods:{

      },
      filters:{
        conversion(num){
          num=Number(num);
          let seconds=num%60;
          let minutes=parseInt(num/0);
          return minutes+':'+seconds
        }
      }
    }
</script>

<style scoped>
  .count-time{
    width: 200px;
    color: #F84541;
    font-size: 28px;
    padding-left: 40px;
    background: url('../../assets/images/module/clock.png') no-repeat;
    background-size: 28px 28px;
    background-position: left center;
  }
</style>
