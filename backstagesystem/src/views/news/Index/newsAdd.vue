<template>
	<div id="addBrochures" class="container">
		<div class="col-sm-10 col-sm-offset-1 add_panel">
			<h3>增加招生简章页面</h3>
			<button class="btn btn-success return_button" @click="returnTo">
				返回
			</button>
			<form>
			  <div class="form-group detail_form_group">
			    <label for="exampleInputEmail1">院校名称：</label>
			    <input type="input" class="form-control" id="" placeholder="请输入院校名称">
			  </div>
			  <div class="form-group detail_form_group">
				  <label for="exampleInputEmail1">院校显示图：</label>
				  <preview-img></preview-img>
			  </div>
			  <div class="form-group">
			  	  <label for="exampleInputEmail1">文章详情：</label>
				  <vue-editor></vue-editor>
			  </div>
			  <button type="submit" class="btn btn-success btn-lg submit_button">增加</button>
			</form>
		</div>
	</div>
</template>

<script>
	import PreviewImg from "../../../components/common/PreviewImg.vue"
	export default{
		name:"newsAdd",
		methods:{
			returnTo (){
				this.$router.push("/news/index");
			}
		},
		components:{
			PreviewImg
		}
	}
</script>

<style>
</style>
