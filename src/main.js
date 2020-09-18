import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Popper from 'popper.js'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
