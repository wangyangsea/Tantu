// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  './validator/validate'
import layer from 'vue-layer-mobile'

// 引入vue axios 插件
import VueAxiosPlugin from 'vue-axios-plugin'
Vue.use(VueAxiosPlugin)

Vue.use(layer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
