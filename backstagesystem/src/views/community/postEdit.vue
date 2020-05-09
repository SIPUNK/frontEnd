<template>
	<div id="editPost" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>编辑帖子</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="my_label">帖子标题：</label>
			    <input type="input" class="form-control" v-model="postInvitation.invitation_title" placeholder="请输入帖子标题">
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="my_label">版块：</label>
			    <input type="input" class="form-control" v-model="postInvitation.plate" disabled="disabled" placeholder="未注入数据,没有版块信息">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1" class="my_label">帖子内容：</label>
			    <vue-editor v-model="postInvitation.content"></vue-editor>
			  </div>
			  <button class="btn btn-success btn-lg submit_button" @click="add">编辑</button>
			</form>
		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../assets/js/cookie.js"
	
	export default{
		name:"postEdit",
		data:function(){
			return{
				postInvitation:{
					post_user:"",
					invitation_title:"",
					plate:"",
					content:""
				}
			}
		},
		mounted() {
			document.title = "添加帖子";
			this.postInvitation.post_user = this.$store.state.user.user_id;
			/*页面挂载获取保存的cookie值*/
			let uname = getCookie('username')
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == ""){
			    this.$router.push('/login')
			}     
			
			this.$http.get('http://118.178.184.69:4396/User/findbyid',{params:{
			user_id:this.$route.params.id  
			}}).then((res)=>{
				//console.log(res)
				this.user = res.data;
			})
		},
		methods:{
			returnTo (){
				this.$router.push("/community/post");
			},
			add (){
				this.$http.post('http://118.178.184.69:4396/invitation/post',this.postInvitation).then((res)=>{
					alert("帖子添加成功！返回帖子管理页面以查看！");
					this.$router.push("/community/post");
				})
			}
		},
		components:{
		}
	}
</script>

<style>
</style>

