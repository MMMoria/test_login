import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import "./router/permission"
import ElementUI from 'element-ui'
// import "./assets/css/index.scss"
import 'echarts-liquidfill'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.config.devtools = true;
