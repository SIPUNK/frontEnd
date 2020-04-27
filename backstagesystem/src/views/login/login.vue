<template>
	<div id="login">
		<div class="col-sm-8">
			<h2>烤盐屋后台管理系统</h2>
			<h2>登录页面</h2>
			<form>
			  <div class="form-group">
			    <label for="admin">账号</label>
			    <input type="input" class="form-control" id="admin" placeholder="请输入你的账号">
			  </div>
			  <div class="form-group">
			    <label for="password">密码</label>
			    <input type="password" class="form-control" id="password" placeholder="请输入你的密码">
			  </div>
			  <button type="submit" class="btn btn-default" id="loginButton">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login'
	}
</script>

<style>
</style>
