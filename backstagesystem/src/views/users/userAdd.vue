<template>
	<div id="addAdmin" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>增加用户</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1">用户名：</label>
			    <input type="input" class="form-control" v-model="username" placeholder="请输入用户名">
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1">密码：</label>
			    <input type="input" class="form-control" v-model="password" placeholder="请输入密码">
			  </div>
			  <button type="submit" class="btn btn-success btn-lg submit_button" @click="add">增加</button>
			</form>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"userAdd",
		data:function(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			returnTo (){
				this.$router.go(-1);
			},
			add (){
			}
		},
		components:{
		}
	}
</script>

<style>
</style>
