<template>
	<div>
<!-- 		<h3>欢迎 {{name}}</h3>
		<a href="/" @click="quit" id="quit">注销登录</a> -->
		<div>
			<homeCount></homeCount>
			<timeDown :endTime='endTime' id="days"></timeDown>
		</div>
		<div>
			<timeLine></timeLine>
		</div>
	</div>
</template>

<script>
	/*引入公共方法*/
	// import {
	// 	setCookie,
	// 	getCookie,
	// 	delCookie
	// } from 'assets/js/cookie.js'

	import timeLine from '@/components/content/home/timeLine.vue'
	import homeCount from '@/components/content/home/homeCount.vue'
	import timeDown from '@/components/common/timeDown.vue'

	export default {
		data() {
			return {
				name: '',
				endTime: '2020-12-19 8:30:00'
			}
		},
		// mounted() {
		// 	/*页面挂载获取保存的cookie值，渲染到页面上*/
		// 	let uname = getCookie('username')
		// 	this.name = uname
		// 	/*如果cookie不存在，则跳转到登录页*/
		// 	if (uname == "") {
		// 		this.$router.push('/')
		// 	}
		// },
		// methods: {
		// 	quit() {
		// 		/*删除cookie*/
		// 		delCookie('username')
		// 	}
		// },
		components: {
			timeLine,
			homeCount,
			timeDown
		}
	}
</script>
<style>

	#days {
		position: relative;
		left: 900px;
		bottom: 300px;
		width: 200px;
	}
</style>
