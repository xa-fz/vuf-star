import Vue from 'vue'
import Router from 'vue-router'
import doStar from '@/components/doStar'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doStar',
      component: doStar
    }
  ]
})
