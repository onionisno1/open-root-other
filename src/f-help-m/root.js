import Vue from 'vue'
import App from './RootMain.vue'
Vue.config.productionTip = false

// Import vue-awesome.
// Import all icon.
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

// Import element-ui.
// Import all elements.
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import '../m-style/element-variables.scss'
import '../m-style/element-override-m.scss'

// Import style.
import '../m-style/base.scss'
import '../m-style/transition-m.scss'
import '../m-style/global-m.scss'

// Import router.
import Router from './router'

/*import VConsole from 'vconsole'
new VConsole()*/

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
