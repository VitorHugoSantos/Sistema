import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/pt'
import Vuex from 'vuex';
import Axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ElementUI, { locale })
Vue.use(Vuex)
Vue.use(Axios)
Vue.use(VueSweetalert2)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
