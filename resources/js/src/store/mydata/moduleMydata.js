import state from './moduleMydataState'
import mutations from './moduleMydataMutations.js'
import actions from './moduleMydataActions.js'
import getters from './moduleMydataGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
