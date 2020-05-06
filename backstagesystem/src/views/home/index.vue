<template>
	<div>
		<preview-img></preview-img>
	</div>
	
	
</template>

<script>
	import PreviewImg from "../../components/common/PreviewImg.vue"
	import {getCookie} from '../../assets/js/cookie.js'
	export default{
		name:'homeIndex',
		mounted(){
		    /*页面挂载获取保存的cookie值*/
		    let uname = getCookie('username')
		    /*如果cookie不存在，则跳转到登录页*/
		    if(uname == ""){
		        this.$router.push('/login')
		    }        
		},
		components:{
			PreviewImg
		}
	}
</script>

<style>

</style>
