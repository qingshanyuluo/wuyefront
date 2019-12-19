import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'
import Axios from 'axios'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(ElementUI)

Vue.use(VueParticles)

Vue.prototype.$axios = Axios
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
