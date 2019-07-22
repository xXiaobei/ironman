import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//挂载Vuex到Vue
Vue.use(Vuex)

//实例化Vuex的核心Store
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
