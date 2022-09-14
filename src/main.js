import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import router from '../src/router/index'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
