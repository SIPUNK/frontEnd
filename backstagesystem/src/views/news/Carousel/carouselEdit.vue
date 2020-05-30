<template>
	<div id="addCarousel" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>编辑轮播图</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form class="form-horizontal" role="form" style="position: relative;left: 30px;">
			  <div class="form-group detail_form_group">
			    <label for="firstname" class="col-sm-2 control-label">轮播图名称：</label>
			    <div class="col-sm-3">
			      <input type="input" class="form-control" v-model="user.username" placeholder="请输入轮播图名称">
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="firstname" class="col-sm-2 control-label">轮播图素材：</label>
			    <div class="col-sm-3">
			      <preview-img></preview-img>
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="lastname" class="col-sm-2 control-label">说明：</label>
			    <div class="col-sm-3">
			      <input type="input" class="form-control" v-model="user.password" placeholder="请输入说明">
			    </div>
			  </div>
			  <button class="btn btn-success btn-lg submit_button" @click="add">添加</button>
			</form>

		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../../assets/js/cookie.js"
	import PreviewImg from "../../../components/common/PreviewImg.vue"
	
	export default{
		name:"userAdd",
		data:function(){
			return{
				user:{
					username:"",
					password:""
				}
			}
		},
		mounted() {
			document.title = "编辑轮播图";
			/*页面挂载获取保存的cookie值*/
			let uname = getCookie('username')
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == ""){
			    this.$router.push('/login')
			}     
		},
		methods:{
			returnTo (){
				this.$router.push("/news/carousel");
			},
			add (){
				this.$http.post('http://118.178.184.69:4396/User/regist',this.user).then((res)=>{
					alert("用户添加成功！返回用户管理页面以查看！");
					this.$router.push("/news/carousel");
				})
			}
		},
		components:{
			PreviewImg
		}
	}
</script>

<style>
</style>

