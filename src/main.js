import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JwPagination from 'jw-vue-pagination';
import accounting from 'accounting';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.filter('mayuscula', (texto)=>{
  return texto.toUpperCase();
})
Vue.filter('recorte', (texto)=>{
  return texto.substr(1,100)+'...'
})
Vue.component('jw-vue-pagination', JwPagination);

Vue.filter('formato', (monto)=> {
  return accounting.formatMoney(monto, '',0,'.',',')
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
