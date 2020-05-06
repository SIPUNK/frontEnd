<template>
	<div id="topNav">
	  <nav class="navbar navbar-default">
	    <div class="container-fluid">
	      <div class="navbar-header">
	        <a class="navbar-brand">烤盐屋后台</a>
	      </div>
		  <div id="user" class="nav navbar-nav navbar-right">
			   <a class="navbar-brand">{{ $store.state.user.nickname }}</a>
			   <a class="navbar-brand">  你好 !</a>
			   <a id="skip" @click="quit">
				  退出登录
			   </a>
		  </div>
	    </div>
	  </nav>
	</div>
</template>

<script>
	
	import {delCookie} from '../../assets/js/cookie.js'
	
	export default{
		name:'TopNav',
		methods:{
			quit:function(){
				/*删除cookie*/
				this.$store.commit('logout');
				delCookie('username');
				this.$router.push("/login");
			}
		}
	}
</script>

<style>
	
</style>
