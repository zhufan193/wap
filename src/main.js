// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//初始化样式
import './common/stylus/index.styl'
//移动端适配
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
import Mint from 'mint-ui';
Vue.use(Mint);

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

Vue.directive('title', {
  inserted: function(el, binding) {
    document.title = el.dataset.title
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
