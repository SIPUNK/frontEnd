<template>
	<div>
		<div class="signIn-div" v-show="!isLogined">
			<el-link :underline="false" href="/">登录/注册</el-link>
		</div>
		<div class="signOut-div" v-show="isLogined">
			<span>欢迎 {{name}}, </span>
			<a href="/" @click="quit" id="quit" class="signOut-a">注销登录</a>
		</div>

	</div>

</template>

<script>
	/*引入公共方法*/
	import {
		setCookie,
		getCookie,
		delCookie
	} from 'assets/js/cookie.js'

	export default {
		name: 'signIn',
		data() {
			return {
				name: '',
				isLogined: false
			}
		},
		watch: {
			$route() {
				if (getCookie('username')) {
					this.isLogined = true
					let uname = getCookie('username')
					this.name = uname
				}
			}
		},
		methods: {
			quit() {
				/*删除cookie*/
				delCookie('username')
			},
			refresh() {
				this.$router.push(0)
			}
		}
	}
</script>

<style>
	.signIn-div {
		/* display: inline; */
		float: right;
		position: relative;
		bottom: 50px;
		right: 50px;
	}

	.signOut-div {
		float: right;
		position: relative;
		bottom: 47px;
		right: 30px;
	}

	.signOut-a {
		text-decoration: none;
		color: #aa0000;
	}

	.signOut-a:hover {
		color: #ff0000;
	}
</style>
