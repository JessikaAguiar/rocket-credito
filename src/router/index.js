import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QuemSomos from '../views/QuemSomos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quemsomos',
    name: 'QuemSomos',
    component: QuemSomos
  }
]

const router = new VueRouter({
  routes
})

export default router
