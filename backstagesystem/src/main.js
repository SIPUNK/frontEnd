import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "./assets/css/base.css"
//导入富文本编辑器
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
