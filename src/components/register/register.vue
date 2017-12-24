<template>
  <div class="register-container">
    <m-header></m-header>
    <div class="content">
      <div class="content-title">
        <h2 class="">亲,欢迎你</h2>
        <p class="">请填写如下基本信息，便于我们生成最终报告</p>
      </div>
      <div class="register-form-box">
        <form @submit.prevent="validateForm('form-login-code')" data-vv-scope="form-login-code">
         <div class="validator-component">
           <p class="form-row">
             <label for="real_name">姓名</label>
             <input id="real_name" type="text" name="real_name" v-validate="'required'">
           </p>
           <span v-show="errors.has('form-login-code.real_name')" class="help is-danger">{{ errors.first('form-login-code.real_name') }}</span>
         </div>
          <div class="validator-component">
            <div class="form-row year-mouth-row">
              <label>出生年月</label>
              <datepicker format="yyyy-MM-dd" v-model="pikerVal" placeholder="请选择出生年月"></datepicker>
              <input type="hidden" name="date" v-validate="'required'" :value="dateHidden" ref="input">
            </div>
            <span v-show="errors.has('form-login-code.date')" class="help is-danger">{{ errors.first('form-login-code.date') }}</span>
          </div>
          <div class="validator-component">
            <p class="form-row">
              <label for="education">教育程度</label>
              <multiselect :options="options" :show-labels="false" placeholder="" v-model="aaa"></multiselect>
            </p>
            <input id="education" type="hidden" name="education" v-validate="'required'" :value="aaa">
            <span v-show="errors.has('form-login-code.education')" class="help is-danger">{{ errors.first('form-login-code.education') }}</span>
          </div>
          <div class="validator-component">
            <p class="form-row">
              <label for="industry">所在行业</label>
              <input id="industry" type="text" name="industry" v-validate="'required'">
            </p>
            <span v-show="errors.has('form-login-code.industry')" class="help is-danger">{{ errors.first('form-login-code.industry') }}</span>
          </div>
          <div class="validator-component">
            <p class="form-row">
              <label for="email">邮箱</label>
              <input id="email" type="text" name="email" v-validate="'required'">
            </p>
            <span v-show="errors.has('form-login-code.email')" class="help is-danger">{{ errors.first('form-login-code.email') }}</span>
          </div>
          <button class="btn-default">下一步</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../basics/home-header'
  import Multiselect from 'vue-multiselect'
  import Datepicker from 'vuejs-datepicker';
  export default {
    name: "home",
    data(){
      return{
        pikerVal:'',
        options:['初中','高中','本科','硕士','博士','其他'],
        aaa:'',
        dateVal:[],
        dateHidden:''
      }
    },
    components:{
      MHeader,
      Datepicker,
      Multiselect
    },
    watch:{
      pikerVal(news,olds){
        this.dateHidden=GMTToStr(news);
        this.$refs.input.focus()
        this.$refs.input.blur()
      }
    },
    methods:{
      validateForm(scope) {
        let that=this;
        this.$validator.validateAll(scope).then(result => {
          if (result) {
            that.$router.push('/project1-recommend')
          }
        });
      }
    }
  }
  function GMTToStr(time){
    let date = new Date(time)
    let Str=date.getFullYear() + '-' +
      (date.getMonth() + 1) + '-' +
      date.getDate() + ' '
    return Str
  }
</script>

<style scoped>
  .content-title h2{
    font-size: 60px;
  }
  .content-title p{
    font-size: 28px;
    margin-top: 20px;
  }
  .register-form-box{
    width: 520px;
    margin: 0 auto;
    background: #fff;
    padding: 80px 0 40px;
  }
  .form-row{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .form-row label{
    width: 100px;
    text-align: right;
    margin-right: 20px;
  }
  .form-row input{
    width: 400px;
    height: 44px;
    line-height: 44px;
    border: 1px solid #e6e6e6;
    padding: 0 1rem;
    font-size: 14px;
  }
  .other-row input{
    width: 220px;
  }
  .other-row a{
    width: 160px;
    display: block;
    text-align: center;
    color: #fff;
    background: #00B489;
    line-height: 44px;
    margin-left: 19px;
  }
  .register-form-box .btn-default{
    margin-top: 60px;
  }
  .register-form-box .is-danger{
    color: red;
    position: absolute;
    font-size: 12px;
    bottom: -19px;
    left: 120px;
  }
  .validator-component{
    position: relative;
  }
  .year-mouth-row {

  }
  .year-mouth-row>div{
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .year-mouth-row label{
    width: 100px;
    text-align: right;
    margin-right: 20px;
  }
  .multiselect{
    width: auto;
    flex: 2;
  }
  .calendar-dropdown{
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    z-index: 2;
  }
  .calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
  }
  .calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
  }
  .vdp-datepicker{
    width: 400px;
    height: 44px;
    border: 1px solid #ddd;
  }
</style>
