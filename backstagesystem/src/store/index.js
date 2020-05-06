import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		nickname: '',
		isLogin: true
	},
	mutations:{
		login (state){
			state.isLogin = true
		},
		logout (state){
			state.isLogin = false
		}
	},
	actions:{
		
	},
	getters:{
		
	},
	modules:{
		
	},
	plugins: [createPersistedState()]
})

export default store