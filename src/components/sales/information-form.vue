<template>
    <div class="sale-container">
      <m-header></m-header>
      <div class="content">
        <div class="content-title">
          <h2 class="">亲,欢迎你</h2>
          <h3 class="">第一步，请填写职位与行业</h3>
        </div>
        <div class="content-text">
          <div class="form-box">
            <form @submit.prevent="validateForm('form-information-code')" data-vv-scope="form-information-code">
              <div class="validator-row">
                <p class="form-row">
                  <label for="position">当前销售职位</label>
                  <input id="position" type="text" name="position" v-validate="'required'">
                </p>
                <span v-show="errors.has('form-information-code.position')" class="help is-danger">{{ errors.first('form-information-code.position') }}</span>
              </div>
              <div class="validator-row">
                <p class="form-row">
                  <label for="experience">几年销售经验</label>
                  <input id="experience" type="text" name="experience" v-validate="'required'">
                </p>
                <span v-show="errors.has('form-information-code.experience')" class="help is-danger">{{ errors.first('form-information-code.experience') }}</span>
              </div>
              <div class="validator-row">
                <p class="form-row">
                  <label for="new_position">期望新的销售职位</label>
                  <input id="new_position" type="text" name="new_position" v-validate="'required'">
                </p>
                <span v-show="errors.has('form-information-code.new_position')" class="help is-danger">{{ errors.first('form-information-code.new_position') }}</span>
              </div>


              <button class="btn-default">下一步</button>
            </form>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import MHeader from '../basics/home-header'
    export default {
        name: "information-form",
      components:{
        MHeader
      },
      methods:{
        validateForm(scope) {
          let that=this;
          this.$validator.validateAll(scope).then(result => {
            if (result) {
              that.$router.push('/analysis')
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
  }
  .form-box {
    width: 620px;
    margin: 0 auto;
    padding: 80px 0 40px;
  }
  .form-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
  }
  .form-row label{
    width: 140px;
    text-align: right;
  }
  .form-row input{
    flex: 2;
    height: 44px;
    margin-left: 23px;
    border:1px solid #ddd;
    padding-left: 10px;
  }
  .validator-row{
    position: relative;
  }
  .validator-row .is-danger{
    color: red;
    position: absolute;
    font-size: 12px;
    bottom: -19px;
    left: 163px;
  }
  .btn-default{
    margin-top: 100px;
  }
</style>
