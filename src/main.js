import Vue from 'vue'
import App from './App.vue'

import './assets/css/base.css';
import './assets/css/style.css';

Vue.config.productionTip = false

import axios from './libs/axios'
Vue.prototype.$axios=axios;

import {API_ROOT,API_KEY} from './config'
Vue.filter('imgPath',function(url){
  return API_ROOT+'/'+url+'?apikey='+API_KEY
})

new Vue({
  render: h => h(App),
}).$mount('#app')
