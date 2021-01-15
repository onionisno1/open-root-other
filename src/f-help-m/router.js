import Vue from 'vue'
import Router from 'vue-router'
import Fqa from './fqa/Fqa.vue'
import instruction from './instruction/UseInstruction.vue'
import detailInfo from './instruction/DetailInfo.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'def',
      component: Fqa
    },
    {
      path: '/fqa',
      name: 'fqa',
      component: Fqa
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: instruction
    },
    {
      path: '/detailInfo/:parengId/:childId',
      name: 'detailInfo',
      component: detailInfo
    }
  ]
})
