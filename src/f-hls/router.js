import Vue from 'vue'
import Router from 'vue-router'
import Live from './live/Live.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'def',
      component: Live
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    }
  ]
})
