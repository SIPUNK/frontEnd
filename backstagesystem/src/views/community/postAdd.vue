<template>
	<div id="addUser" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>添加帖子</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form class="form-horizontal" role="form">
			  <div class="form-group detail_form_group">
			    <label for="firstname" class="col-sm-2 control-label">帖子标题：</label>
			    <div class="col-sm-3">
			     <input type="input" class="form-control" v-model="postInvitation.invitation_title" placeholder="请输入帖子标题">
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="lastname" class="col-sm-2 control-label">版块：</label>
			    <div class="col-sm-3" >
			       <select class="form-control" @change="changePlate($event)">
					 <template v-for="(item,index) in plates">
						 {{ item.name }}
						<option :value="item.id">{{ item.name }}</option>
					 </template>
			       </select>
			    </div>
			  </div>
			    <label for="lastname" class="control-label" style="margin-left: -14px;">帖子内容：</label>
				<vue-editor v-model="postInvitation.content" style="margin-top: 40px;"></vue-editor>

			  <button class="btn btn-success btn-lg submit_button" @click="add" style="margin-top: 20px;">添加</button>
			</form>
			
		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../assets/js/cookie.js"
	
	export default{
		name:"postAdd",
		data:function(){
			return{
				postInvitation:{
					post_user:"",
					invitation_title:"",
					plate:"",
					content:""
				},
				plates:[]
			}
		},
		created() {
			document.title = "添加帖子";
			this.postInvitation.post_user = this.$store.state.user.user_id;
			/*页面挂载获取保存的cookie值*/
			let uname = getCookie('username')
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == ""){
			    this.$router.push('/login')
			}     
			this.getAllPlate();
		},
		methods:{
			changePlate(event){
				this.postInvitation.plate = event.target.value;
			},
			getAllPlate(){
				this.$http.post('http://118.178.184.69:4396/plate/getPlate').then((res)=>{
					this.plates = res.data;
					this.postInvitation.plate = this.plates[0].id;
				})
			},
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

