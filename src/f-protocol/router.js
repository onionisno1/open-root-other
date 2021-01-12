import Vue from 'vue'
import Router from 'vue-router'
import RegServer from './reg-server/RegServer.vue'
import RegPrivacy from './reg-privacy/RegPrivacy.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/reg-server',
      name: 'reg-server',
      component: RegServer
    }, {
      path: '/reg-privacy',
      name: 'reg-privacy',
      component: RegPrivacy
    }
  ]
})
