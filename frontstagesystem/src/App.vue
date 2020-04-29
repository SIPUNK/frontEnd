<template>
  <div id="app">
		<div v-show="showNav">
			<Navigation></Navigation>
		</div>
		<router-view></router-view>
		
  </div>
	
</template>

<style>
</style>

<script>
	import Navigation from '@/components/content/Navigation.vue'
	
	import {
		setCookie,
		getCookie
	} from 'assets/js/cookie.js'
	
	export default {
		data() {
			return {
				showNav: true
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if (getCookie('username')) {
				this.showNav = true
			}
		},
		components: {
			Navigation
		},
		methods: {
			
		}
	}
</script>