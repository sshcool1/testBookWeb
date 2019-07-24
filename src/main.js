// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import store from './store'
import CONST from '../static/libs/const'

window.axios = require("axios")

// 초기 선언
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function() {
      return EventBus;
    }
  },
  $http: {
    get: function() {
      return axios;
    }
  },
  $config: {
    get: function() {
      return CONST;
    }
  }
});

/* eslint-disable no-new */
// const app = new Vue({
//   el: '#app',
//   components: { App, router, VeeValidate, Toasted },
//   template: '<App/>'
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
