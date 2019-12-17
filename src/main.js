import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import Register from "@/components/Register";
import UserPage from "@/components/UserPage";
import store from "@/components/store";


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes :[
    { path: '/', name:"login" ,component: Login},
    { path: '/register/', name:"register", component: Register},
    { path: '/userpage/', name:"userpage", component: UserPage}
    // { path: '/', name:"home", component: home},



  ],

  mode: 'history'

});




new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
