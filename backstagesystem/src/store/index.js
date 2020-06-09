import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		user:{},
		isLogin: true,
		token:""
	},
	mutations:{
		login (state,user){
			state.isLogin = true
			state.user = user
		},
		logout (state){
			state.isLogin = false
		},
		set_token(t){
			state.token = t
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