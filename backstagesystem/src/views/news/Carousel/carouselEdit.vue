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
			      <input type="input" class="form-control" v-model="carousel.title" placeholder="请输入轮播图名称">
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="firstname" class="col-sm-2 control-label">轮播图素材：</label>
			    <div class="col-sm-3">
			      <div id="myPhoto">
			          <div class="viewPhoto" >
			              <img :src="carousel.url" alt="" id="portrait" style="width: 200px;height: 200px" @click="monidianji"/>
			          </div>
			          <p>提示：请选择本地图片上传，支持各种图片格式</p>
			          <input type="file" id="saveImage" name="myphoto" style="display:none;">
			      </div>   	
			    </div>
			  </div>
			  <div class="form-group detail_form_group">
			    <label for="lastname" class="col-sm-2 control-label">说明：</label>
			    <div class="col-sm-3">
			      <input type="input" class="form-control" v-model="carousel.content" placeholder="请输入说明">
			    </div>
			  </div>
			</form>
			<button class="btn btn-success btn-lg submit_button" @click="edit">编辑</button>
		</div>
	</div>
</template>

<script>
	
	import { getCookie } from "../../../assets/js/cookie.js"
	
	export default{
		name:"userEdit",
		data:function(){
			return{
				carousel:{
					title:"",
					content:"",
					url:""
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
			let data = {"carousel_id":parseInt(this.$route.params.id)}
			this.$http.post('http://118.178.184.69:4396/carousel/getCarousel',data).then((res)=>{
				//console.log(res)
				this.carousel = res.data;
			})
			this.yulan();//预览图片
		},
		methods:{
			returnTo (){
				this.$router.push("/news/carousel");
			},
			edit (){
				this.carousel.url = document.getElementById('portrait').src;
				this.$http.post('http://118.178.184.69:4396/carousel/updateCarousel',this.carousel).then((res)=>{
					alert("轮播图修改成功！返回轮播图管理页面以查看！");
					this.$router.push("/news/carousel");
				})
			},
			//图片库模拟点击input file
			monidianji(){
			   document.getElementById('saveImage').click()
			},         
			yulan(){
			    document.getElementById('saveImage').onchange = function () {
			    var imgFile = this.files[0];
			    var fr = new FileReader();
			    fr.onload = function () {
					document.getElementById('portrait').src = fr.result;
			    };
			    fr.readAsDataURL(imgFile);
			    }
			}            
		}
	}
</script>

<style>
</style>

