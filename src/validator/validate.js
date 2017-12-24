import Vue from 'vue'
import  VeeValidator from 'vee-validate';
import { Validator } from 'vee-validate';
const config = {
  events: 'blur'
};
Vue.use(VeeValidator, config);

Validator.extend('mobile', {
  getMessage: field => '必须是11位手机号码',
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});


//  自定义中文提示文字
const dictionary = {
  en: {
    messages: {
      email: () => '邮箱格式不正确',
      // required:(field) => field+'不能为空',
      between: () => '金额不能小于1,金额不能大于账户余额',
      confirmed:()=> '两次输入的密码不相同'
    },
    custom: {
      real_name: {
        required: '姓名不能为空'
      },
      date: {
        required: '请选择出生年月'
      },
      education: {
        required: '请选择教育程度'
      },
      industry: {
        required: '所在行业不能为空'
      },
      email: {
        required: '邮箱不能为空'
      },
      mobile: {
        required: '手机号码不能为空'
      },
      phone_code: {
        required: '手机验证码不能为空'
      },
      position: {
        required: '当前销售职位不能为空'
      },
      experience: {
        required: '几年销售经验不能为空'
      },
      new_position: {
        required: '期望新的销售职位s不能为空'
      }

    }
  }

};
Validator.localize(dictionary);
