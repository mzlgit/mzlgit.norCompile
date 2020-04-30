import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 样式
import "./less/index.less";
//rem
import computed_rem from './utils/rem'
//计算rem
computed_rem()


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
