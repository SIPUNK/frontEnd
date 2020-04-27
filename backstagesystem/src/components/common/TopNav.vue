<template>
	<div id="topNav">
	  <nav class="navbar navbar-default">
	    <div class="container-fluid">
	      <div class="navbar-header">
	        <a class="navbar-brand">烤盐屋后台</a>
	      </div>
		  <div id="user" class="nav navbar-nav navbar-right">
			   <a class="navbar-brand">{{ $store.state.nickname }}</a>
			   <a class="navbar-brand">  你好 !</a>
			   <a id="skip" href="#" @click="skip">
				  退出登录
			   </a>
		  </div>
	    </div>
	  </nav>
	</div>
</template>

<script>
	export default{
		name:'TopNav',
		methods:{
			skip:function(){
				alert("退出登录!")
			}
		}
	}
</script>

<style>
	
</style>
