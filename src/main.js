// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Affix from 'vue-affix'
import VeeValidate from 'vee-validate'
import VueClip from 'vue-clip'
import VmBackTop from 'vue-multiple-back-top'
import Meta from 'vue-meta'
import BaiduMap from 'vue-baidu-map'
import VueQriously from 'vue-qriously'
import messages from './translate'
import App from './App'
import router from './router'
import filter from './utility/filter'

Vue.use(Mint)
Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)
Vue.use(Affix)
Vue.use(VeeValidate)
Vue.use(VueClip)
Vue.use(Meta)
Vue.use(BaiduMap, {
  ak: '4jKfRKeN89bOn738sP8SeHO4MSOVDO08',
})
Vue.use(VueQriously)
Vue.component(VmBackTop.name, VmBackTop)

Vue.prototype.axios = axios
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages,
})
Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))


require('mint-ui/lib/style.css')
require('swiper/dist/css/swiper.min.css')
require('./assets/scss/index.scss')
require('vue-multiselect/dist/vue-multiselect.min.css')
require('./assets/scss/style-en.scss')
require('./assets/scss/mobile.scss')
require('./assets/scss/mobile.static.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  template: '<App/>',
  components: { App },
})
