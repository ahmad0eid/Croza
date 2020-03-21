import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./css/bootstrap.min.css" // this import for bootstrap.css
import "bootstrap"  // this import for bootstrap.js
import jquery from 'jquery'
import 'popper.js'

const $ = jquery;
window.$ = $;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')