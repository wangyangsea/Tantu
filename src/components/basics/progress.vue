<template>
  <div class="progress-box">
    <ul class="scale-box">
      <li v-for="item in number">{{item}}</li>
    </ul>
    <div class="receptacle">
      <div :class="'matter '+lineColor" ref="line">
        <span :class="linePoint"></span>
      </div>
    </div>
    <p class="line-information">
      <span>较少资源</span>
      <span>较多资源</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "m-progress",
      data(){
          return{
            number:[0,1,2,3,4,5,6,7,8,9,10]
          }
      },
      props:{
        lineColor:{
          type:String,
          default:'green-matter'
        },
        lineWidth:{
          type:Number,
          default:0
        },
        linePoint:{
          type:String,
          default:'green-point'
        }
      },
      mounted(){
          this.$refs.line.style.width=this.lineWidth*10+'%'
      },
      watch:{
        lineWidth(news,olds){
          this.$refs.line.style.width=this.lineWidth*10+'%'
        }
      }
    }
</script>

<style scoped>
  .progress-box{
    width: 400px;
    margin-bottom: 30px;
  }
  .scale-box{
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .receptacle{
    width: 400px;
    height: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius:10px ;
    border-radius:10px ;
    background: #e5e5e5;
    position: relative;
  }
  .matter{
    width: 30%;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius:10px ;
    border-radius:10px ;
  }
  .matter.green-matter{
     background: #00B489;
   }
  .matter.red-matter{
    background: #FF5877;
  }
  .matter.blue-matter{
    background: #64B7FE;
  }
  .matter.purple-matter{
    background: #9E69FF;
  }
  .matter span{
    position: absolute;
    display: block;
    width: 44px;
    height: 44px;
    right: -22px;
    top: -10px;
  }
  .matter span.green-point{
    background: url('../../assets/images/analysis/green-round.png') no-repeat;
    background-size: contain;
  }
  .matter span.red-point{
    background: url('../../assets/images/analysis/red-round.png') no-repeat;
    background-size: contain;
  }
  .matter span.blue-point{
    background: url('../../assets/images/analysis/blue-round.png') no-repeat;
    background-size: contain;
  }
  .matter span.purple-point{
    background: url('../../assets/images/analysis/purple-round.png') no-repeat;
    background-size: contain;
  }
  .line-information{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #757575;
    margin-top: 20px;
  }
</style>
