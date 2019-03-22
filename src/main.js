// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUi from 'mint-ui'
import store from './vuex/index'
import 'mint-ui/lib/style.min.css'
Vue.config.productionTip = false
Vue.use(mintUi)

require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
