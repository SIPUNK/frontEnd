<template>
	<div>
		<div class="login-wrap" v-show="showLogin">
			<h3>登录</h3>
			<p v-show="showRemind" class="login-p">{{remind}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username" class="login-input">
			<input type="password" placeholder="请输入密码" v-model="password" class="login-input">
			<button v-on:click="login" class="login-button">登录</button>
			<span v-on:click="ToRegister" class="login-span">没有账号？马上注册</span>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showRemind" class="login-p">{{remind}}</p>
			<input type="text" placeholder="请输入用户名" v-model="newUsername" class="login-input">
			<input type="password" placeholder="请输入密码" v-model="newPassword" class="login-input">
			<input type="password" placeholder="请输入密码" v-model="newPassword" class="login-input">
			<button v-on:click="register" class="login-button">注册</button>
			<span v-on:click="ToLogin" class="login-span">已有账号？马上登录</span>
		</div>
	</div>
</template>

<style>
	.login-wrap {
		text-align: center;
	}

	.register-wrap {
		text-align: center;
	}

	.login-input {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		margin-bottom: 10px;
		outline: none;
		border: 1px solid #888;
		padding: 10px;
		box-sizing: border-box;
	}

	.login-p {
		color: red;
	}

	.login-button {
		display: block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		border: none;
		background-color: #41b883;
		color: #fff;
		font-size: 16px;
		margin-bottom: 5px;
	}

	.login-span {
		cursor: pointer;
	}

	.login-span:hover {
		color: #41b883;
	}
</style>

<script>
	import {
		setCookie,
		getCookie
	} from 'assets/js/cookie.js'

	export default {
		data() {
			return {
				showLogin: true,
				showRegister: false,
				showRemind: false,
				remind: '',
				username: '',
				password: '',
				newUsername: '',
				newPassword: ''
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if (getCookie('username')) {
				this.$router.push('/home')
			}
		},
		methods: {
			ToRegister() {
				this.showRegister = true
				this.showLogin = false
			},
			ToLogin() {
				this.showRegister = false
				this.showLogin = true
			},
			login() {
				if (this.username == "" || this.password == "") {
					alert("请输入用户名或密码")
				} else {
					let data = {
						'username': this.username,
						'password': this.password
					}
					/*接口请求*/
					this.$http.post('http://118.178.184.69:4396/User/login', data).then((res) => {
						console.log(res)
						/*接口的传值是(false,密码错误)*/
						if (res.data == false) {
							alert("密码输入错误")
							this.password = ''
						} else if (res.data == true) {
							alert("登录成功")
							setCookie('username', this.username, 1000 * 60)
							setTimeout(function() {
								this.$router.push('/home')
							}.bind(this), 1000)
						}
					},
					(error) => {
						if(error.status == '500') {
							alert('用户不存在')
						}
					})
				}
			},
			register() {
				if (this.newUsername == "" || this.newPassword == "") {
					alert("请输入用户名或密码")
				} else {
					let data = {
						'username': this.newUsername,
						'password': this.newPassword
					}
					this.$http.post('http://118.178.184.69:4396/User/regist', data).then((res) => {
						console.log(res)
						if (res.data == true) {
							alert('注册成功')
							this.username = ''
							this.password = ''
							/*注册成功之后再跳回登录页*/
							setTimeout(function() {
								this.showRegister = false
								this.showLogin = true
								this.showRemind = false
							}.bind(this), 300)
						}
						else {
							alert('用户已存在')
						}
					})
				}
			}
		}
	}
</script>
