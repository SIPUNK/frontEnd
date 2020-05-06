<template>
	<div id="login">
		<div class="col-sm-8">
			<h2>烤盐屋后台管理系统</h2>
			<h2>登录页面</h2>
			<form>
			  <div class="form-group">
			    <label for="admin">账号</label>
			    <input type="input" class="form-control" v-model="user.username" placeholder="请输入你的账号">
				<span class="error" v-model="adminError">{{ adminError }}</span>
			  </div>
			  <div class="form-group">
			    <label for="password">密码</label>
			    <input type="password" autocomplete="new-password" class="form-control" v-model="user.password" placeholder="请输入你的密码">
				<span class="error" v-model="passwordError">{{ passwordError }}</span>
			  </div>
			  <button type="submit" class="btn btn-default" id="loginButton" @click="login">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	
	import {setCookie,getCookie} from '../../assets/js/cookie.js'
	
	export default{
		name:'login',
		data:function(){
			return{
				user:{
					username:"",
					password:""
				},
				adminError:"",
				passwordError:""
			}
		},
		mounted(){
		  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		  if(getCookie('username')){
			  console.log("挂载")
		      this.$router.push('/home');
		  }  
		  else
		  {
			  this.$store.commit('logout');
		  }
		},
		methods:{
			login(){
				this.adminError="";
				this.passwordError="";
				if(this.user.username == "")
				{
					this.adminError = "用户名不能为空!";
					return false;
				}
				if(this.user.password == "")
				{
					this.passwordError = "密码不能为空!";
					return false;
				}
				else
				{
					this.$http.post('http://118.178.184.69:4396/User/login',this.user).then((res)=>{
					  //console.log(res)
					  if(res.data == false)
					  {
					     this.passwordError = "密码错误!";
					  }
					  else
					  {
						  this.$store.commit('login');
					      setCookie('username',this.user.username,1000*60);
						  this.$http.get('http://118.178.184.69:4396/User/findbyname',{params:{
							username:this.user.username  
						  }}).then((res)=>{
							  console.log(res.data);
						  })
					      this.$router.push('/home');
					  }            
					})
				}
			}
		}
	}
</script>

<style>
</style>
