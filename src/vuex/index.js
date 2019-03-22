import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './action.js'
Vue.use(Vuex)

const store = {
  isRoute: '/',
  pullData: []
}

export default new Vuex.Store({
  store,
  mutations,
  actions
})