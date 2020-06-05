<template>
	<div id="editPost" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>查看评论</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form class="form-horizontal" role="form" style="position: relative;left: 30px;">
			  <div class="form-group detail_form_group">
			    <label class="col-sm-2 control-label">评论ID：</label>
			    <div class="col-sm-3">
			     <input type="input" class="form-control" v-model="comment[0].comment_id" disabled="disabled">
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label class="col-sm-2 control-label">评论内容：</label>
			  	<div class="col-sm-3">
			  	  <textarea type="input" class="form-control" v-model="comment[0].content" disabled="disabled"></textarea>
			  	</div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">评论所属帖子：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="comment[0].comment_invitation" disabled="disabled">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">评论人ID：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="comment[0].comment_user" disabled="disabled">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">评论状态：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="comment[0].comment_status" disabled="disabled">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">评论时间：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="comment[0].create_time" disabled="disabled">
			  	  </div>		
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1" class="col-sm-2 control-label">评论更新时间：</label>
			  	  <div class="col-sm-3">
			  	  	<input type="input" class="form-control" v-model="comment[0].update_time" disabled="disabled">
			  	  </div>		
			  </div>
			</form>
		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../assets/js/cookie.js"
	
	export default{
		name:"commentEdit",
		data:function(){
			return{
				comment:{
					comment_id:"",
					content:"",
					comment_invitation:"",
					comment_status:"",
					comment_user:"",
					create_time:"",
					update_time:""
				}
			}
		},
		mounted() {
			document.title = "查看评论";
			/*页面挂载获取保存的cookie值*/
			let uname = getCookie('username')
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == ""){
			    this.$router.push('/login')
			}     
			let data = {"comment_id":parseInt(this.$route.params.id)};
			this.$http.post('http://118.178.184.69:4396/comment/getcommentbyid',data).then((res)=>{
				this.comment = res.data;
			})
		},
		methods:{
			returnTo (){
				this.$router.push("/community/comment");
			}
		},
		components:{
		}
	}
</script>

<style>
</style>

