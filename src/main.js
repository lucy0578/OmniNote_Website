// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 后端创建后
// import axios from 'axios'
// import VueAxios from "vue-axios"

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 后端写好后可以删掉
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// 后端创建后
// axios.defaults.baseURL = "/api"
// axios.defaults.withCredentials = true
// Vue.use(VueAxios, axios)
