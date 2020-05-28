<template>
	<div id="carouselIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4 class="title">轮播图管理</h4>
			<carouselList></carouselList>
		</div>
	</div>
</template>

<script>
	
	import carouselList from '../../../components/content/news/CarouselList.vue'
	import {getCookie} from '../../../assets/js/cookie.js'
	
	export default{
		name:'carousel',
		mounted(){
			document.title = '轮播图管理'
		    /*页面挂载获取保存的cookie值*/
		    let uname = getCookie('username')
		    /*如果cookie不存在，则跳转到登录页*/
		    if(uname == ""){
		        this.$router.push('/login')
		    }        
		},
		components:{
			carouselList
		}
	}
</script>

<style>
</style>

