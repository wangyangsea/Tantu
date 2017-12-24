<template>
    <div class="container">
      <m-header></m-header>
      <div class="content">
        <div class="content-title">
          <h2 class="">亲,欢迎你</h2>
          <h3 class="">请输入手机号码，进入坦途测试</h3>
        </div>
        <div class="content-text">
          <form @submit.prevent="validateForm('form-information-code')" data-vv-scope="form-information-code">
            <div class="validator-row">
              <p class="form-row">
                <label for="mobile">手机号</label>
                <input id="mobile" type="text" name="mobile" v-validate="'required'">
              </p>
              <span v-show="errors.has('form-information-code.mobile')" class="help is-danger">{{ errors.first('form-information-code.mobile') }}</span>
            </div>
            <div class="validator-row">
              <p class="form-row other-row">
                <label for="phone_code">手机验证码</label>
                <input id="phone_code" type="text" name="phone_code" v-validate="'required'" placeholder="请点击右侧获取验证码">
                <a href="javascript:;">获取验证码</a>
              </p>
              <span v-show="errors.has('form-information-code.phone_code')" class="help is-danger">{{ errors.first('form-information-code.phone_code') }}</span>
            </div>
            <button class="btn-default">下一页</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import MHeader from '../basics/home-header'
    export default {
        name: "login",
      components:{
          MHeader
      },
      methods:{
        validateForm(scope) {
          let that=this;
          this.$validator.validateAll(scope).then(result => {
            if (result) {
              that.$router.push('/register')
            }
          });
        }
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
  .validator-row{
    position: relative;
    margin-bottom: 30px;
    font-size: 16px;
  }
  .form-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-row label{
    width: 100px;
    text-align: right;
    margin-right: 20px;
  }
  .form-row input{
    width: 400px;
    height: 44px;
    border: 1px solid #ddd;
    padding-left: 10px;
    font-size: 14px;
  }
  .other-row input{
    flex: 2;
  }
  .other-row a{
    width: 160px;
    margin-left: 16px;
    display: block;
    text-align: center;
    line-height: 44px;
    color: #fff;
    background: #00B489;
  }
  .content-text{
    padding-top: 120px;
  }
  .content-text form{
    width: 521px;
    margin: 0 auto;
  }
  .btn-default{
    margin-top: 80px;
  }
  .validator-row .is-danger{
    color: red;
    position: absolute;
    font-size: 12px;
    bottom: -19px;
    left: 120px;
  }
</style>
