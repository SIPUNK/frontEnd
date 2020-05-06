import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		user:{},
		isLogin: true
	},
	mutations:{
		login (state,user){
			state.isLogin = true
			state.user = user
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