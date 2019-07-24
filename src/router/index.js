import Vue from 'vue'
import Router from 'vue-router'
import test from './module/test'

Vue.use(Router)

export default new Router({
  routes: [
    ...test
  ]
})
