import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueExtends from "./utils/vueExtends";
// 样式
import "./less/index.less";
//rem
import computed_rem from './utils/rem'
//common
import common from './utils/common'
// 引入 ant
import { Button, message, Carousel, Icon } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Icon);

//计算rem
computed_rem()
// 挂载common
Vue.prototype.$common = common;
Vue.prototype.$message = message;
// 使用扩展函数
Vue.use(VueExtends);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
