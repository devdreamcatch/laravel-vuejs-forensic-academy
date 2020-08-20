import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

import moduleMydata from './mydata/moduleMydata.js'
import moduleAuth from './auth/moduleAuth.js'


export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    mydata: moduleMydata,
    auth: moduleAuth,
  },
  strict: true//process.env.NODE_ENV !== 'production'
})
