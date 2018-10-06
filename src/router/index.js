import Vue from 'vue'
import Router from 'vue-router'
import KoreanClock from '@/components/KoreanClock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KoreanClock',
      component: KoreanClock
    }
  ]
})
