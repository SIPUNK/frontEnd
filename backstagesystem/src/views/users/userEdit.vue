<template>
	<div id="addUser" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>编辑用户</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			
			<form class="form-horizontal" role="form">
			  <div class="form-group detail_form_group">
			    <label class="col-sm-2 control-label">用户名：</label>
			    <div class="col-sm-3">
			     <input type="input" class="form-control" v-model="user.username" placeholder="请输入用户名">
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label class="col-sm-2 control-label">昵称：</label>
			  	<div class="col-sm-3">
			  	  <input type="input" class="form-control" v-model="user.nickname" placeholder="请输入昵称">
			  	</div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">密码：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="user.password" placeholder="请输入密码">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">电话号码：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="user.phone" disabled="disabled" placeholder="修改电话号码的接口未实现">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group" style="width: 140px;position: relative;left: 85px;">
			    <label class=" control-label">性别：</label>
				<select v-model="user.sex" style="position: relative;left: 30px;">
				    <option disabled value="">请选择</option>
				    <option value="1">男</option>
				    <option value="0">女</option>
				</select>			  
			  </div>
			  <button class="btn btn-success btn-lg submit_button" @click="edit" style="margin-top: 20px;">增加</button>
			</form>
		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../assets/js/cookie.js"
	
	export default{
		name:"userEdit",
		data:function(){
			return{
				user:{
					username:"",
					nickname:"",
					password:"",
					phone:"",
					sex:""
				},
				oldPassword:""
			}
		},
		mounted() {
			document.title = "编辑用户";
			/*页面挂载获取保存的cookie值*/
			let uname = getCookie('username')
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == ""){
			    this.$router.push('/login')
			}
			let data = {"user_id":parseInt(this.$route.params.id)}
			this.$http.post('http://118.178.184.69:4396/User/findbyid',data).then((res)=>{
				//console.log(res)
				this.user = res.data;
				this.oldPassword = this.user.password;
			})
		},
		methods:{
			returnTo (){
				this.$router.go(-1);
			},
			edit (){
				let data1 = {date:this.user.nickname,user_id:this.$route.params.id}
				let data2 = 
				{
					newPassword:this.user.password,
					oldPassword:this.oldPassword,
					user_id:this.$route.params.id,
				}
				let data3 = {date:parseInt(this.user.sex),user_id:this.$route.params.id}
				this.$http.post('http://118.178.184.69:4396/User/changenickname',data1)
				.then((res)=>{

				})
				this.$http.post('http://118.178.184.69:4396/User/changepassword',data2)
				.then((res)=>{

				})
				this.$http.post('http://118.178.184.69:4396/User/changesex',data3)
				.then((res)=>{

				})
				alert("修改成功！");
			}
		},
		components:{
		}
	}
</script>

<style>
</style>
