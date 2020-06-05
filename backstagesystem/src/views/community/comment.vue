<template>
	<div id="newsIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4 class="title">评论管理</h4>
			<commentlist></commentlist>
		</div>
	</div>
</template>

<script>
	
	import commentlist from '../../components/content/community/CommentList.vue'
	import {getCookie} from '../../assets/js/cookie.js'
	
	export default{
		name:'comment',
		mounted(){
			document.title = '评论管理'
		    /*页面挂载获取保存的cookie值*/
		    let uname = getCookie('username')
		    /*如果cookie不存在，则跳转到登录页*/
		    if(uname == ""){
		        this.$router.push('/login')
		    }        
		},
		components:{
			commentlist
		}
	}
</script>

<style>
</style>