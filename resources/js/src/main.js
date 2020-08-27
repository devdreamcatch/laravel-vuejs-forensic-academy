import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)


// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// Filters
import './filters/filters.js'


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// VeeValidat
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)


// Multi translation
import i18n from '@/plugins/i18n'

// Vue mask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
