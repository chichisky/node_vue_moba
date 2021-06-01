import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import http from './network/index'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
import './assets/scss/common.scss'
Vue.config.productionTip = false

Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
