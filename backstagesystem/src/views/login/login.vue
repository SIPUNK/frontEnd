<template>
	<div id="login">
		<div class="col-sm-8">
			<h2>烤盐屋后台管理系统</h2>
			<h2>登录页面</h2>
			<form>
			  <div class="form-group">
			    <label for="admin">账号</label>
			    <input type="input" class="form-control" v-model="admin" placeholder="请输入你的账号">
				<span class="error" v-model="adminError">{{ adminError }}</span>
			  </div>
			  <div class="form-group">
			    <label for="password">密码</label>
			    <input type="password" autocomplete="new-password" class="form-control" v-model="password" placeholder="请输入你的密码">
				<span class="error" v-model="passwordError">{{ passwordError }}</span>
			  </div>
			  <button type="submit" class="btn btn-default" id="loginButton" @click="login">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		data:function(){
			return{
				admin:"",
				password:"",
				adminError:"",
				passwordError:""
			}
		},
		methods:{
			login(){
				this.adminError="";
				this.passwordError="";
				if(this.admin == "")
				{
					this.adminError = "用户名不能为空!";
					return false;
				}
				if(this.password == "")
				{
					this.passwordError = "密码不能为空!";
					return false;
				}
			}
		}
	}
</script>

<style>
</style>
