<template>
  <div class="container">
    <testing-header :countTime="countDown" :residueTopic="answerNum"></testing-header>
    <div class="content">
      <div class="content-title">
        <h3 class="">请在以下每一个描述后的5个选项中，选择最符合你的看法的一项。</h3>
        <p>1 = “不重要” 2 = “不是很重要” 3 = “有些重要” 4= “比较重要” 5 = “非常重要”</p>
      </div>
      <div class="topic-box">
        <div class="" v-for="(item,index) in topicDatas" :key="item.id">
          <h4 class="topic-title">{{item}}</h4>
          <ul class="topic-select-box">
            <li class="" v-for="(option,num) in option1" :key="option.id">
              <label>
                <input type="radio" :name="'option-'+index" class="topic-option" :value="index+'-'+num" v-model="arr[index]"><span>{{option}}</span>
              </label>
            </li>
          </ul>
        </div>
        <button class="btn-default" @click="testSubmit">下一步</button>
      </div>
    </div>
  </div>
</template>
<script>
  import TestingHeader from '../../basics/testing-header'
  import topicDatas from '../../../datas/topic'
  import {option3} from '../../../datas/options'
  export default {
    name: "step1",
    data(){
      return{
        topicDatas:[],
        option1:option3,
        check:'',
        arr:new Array(5),
        answerNum: null,
        countDown:1200
      }
    },
    components:{
      TestingHeader
    },
    created(){
      this.topicDatas=topicDatas.project4.slice(0,5);
    },
    watch:{
      arr(oldArr,newArr){
        this.answerNum= oldArr ? _answer(oldArr) : '';
      }
    },
    methods:{
      testSubmit(){
        if(arr_empty(this.arr)){
          let oldNum=sessionStorage.getItem('project_num_4');
          sessionStorage.setItem('project_num_4',String(oldNum-5))
          this.$router.push('/project4-testing/test-2')
        }else{
          this.$layer.toast({content:'您还没有选完' ,time: 3000});
        }
      }
    }
  }

  function arr_empty(arr) {
    for(let i=1;i<arr.length;i++){
      if(arr[i]==undefined){
        return false
      }
    }
    return true
  }
  function _answer(arr) {
    let num=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]!=undefined){
        num++;
      }
    }
    return num;
  }
</script>

<style scoped>
  .content-title h3{
    font-size: 24px;
    margin-bottom: 40px;
  }
  .content-title p{
    font-size: 22px;
  }
  .btn-default{
    margin-top: 70px;
  }
</style>
