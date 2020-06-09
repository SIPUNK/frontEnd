<template>
	<div id="newsIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4 class="title">帖子管理</h4>
			<postlist></postlist>
			<platelist></platelist>
		</div>
	</div>
</template>

<script>
	
	import postlist from '../../components/content/community/PostList.vue'
	import platelist from '../../components/content/community/PlateList.vue'
	import {getCookie} from '../../assets/js/cookie.js'
	
	export default{
		name:'post',
		mounted(){
			document.title = '帖子管理'
		    /*页面挂载获取保存的cookie值*/
		    let uname = getCookie('username')
		    /*如果cookie不存在，则跳转到登录页*/
		    if(uname == ""){
		        this.$router.push('/login')
		    }        
		},
		components:{
			postlist,
			platelist
		}
	}
</script>

<style>
</style>