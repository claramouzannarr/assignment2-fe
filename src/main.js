import Vue from 'vue'
import App from './App.vue'
import router from './router'
//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";


Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,  // Use the router
  render: h => h(App),
}).$mount('#app');
