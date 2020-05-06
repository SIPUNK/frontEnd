<template>
  <div id="app">
	<div v-show="$store.state.isLogin">
		<top-nav></top-nav>
		<side-bar></side-bar>
	</div>
	<div class="container">
		<router-view></router-view>
	</div>
  </div>
</template>

<script>

import TopNav from "./components/common/TopNav.vue"
import SideBar from "./components/common/SideBar.vue"

export default {
  name: 'app',
  components: {
	TopNav,
	SideBar
  }
}
</script>

<style>
	
</style>
