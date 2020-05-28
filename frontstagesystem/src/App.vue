<template>
  <div id="app">
		<logo></logo>
		<div v-show="showNav">
			<Navigation></Navigation>
		</div>
		<router-view></router-view>
		
  </div>
	
</template>

<style>
	body{
			margin: 0;
		}
</style>

<script>
	import Navigation from '@/components/common/Navigation.vue'
	import logo from '@/components/common/logo.vue'
	
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
			Navigation,
			logo
		},
		methods: {
			
		}
	}
</script>