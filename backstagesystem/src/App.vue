<template>
  <div id="app">
	<div v-show="$store.state.isLogin">
		<top-nav></top-nav>
		<side-bar></side-bar>
	</div>
	<div class="container">
		<router-view v-if="isRouterAlive"></router-view>
	</div>
  </div>
</template>

<script>

import TopNav from "./components/common/TopNav.vue"
import SideBar from "./components/common/SideBar.vue"

export default {
  name: 'app',
  provide(){
      return {
        reload:this.reload
      }
  },
  data:function(){
	  return{
		  isRouterAlive:true
	  }
  },
  components: {
	TopNav,
	SideBar
  },
  methods:{
	  reload () {
	       this.isRouterAlive = false
	       this.$nextTick(() => (this.isRouterAlive = true))
	     }   
  }
}
</script>

<style>
	
</style>
