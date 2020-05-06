<template>
	<div id="newsIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4>管理员管理</h4>
			<adminlist></adminlist>
			
			
		</div>
	</div>
</template>

<script>
	
	import adminlist from "../../components/content/users/AdminList.vue"
	import {getCookie} from '../../assets/js/cookie.js'
	
	export default{
		name:'newsIndex',
		mounted(){
			document.title = '管理员管理'
		    /*页面挂载获取保存的cookie值*/
		    let uname = getCookie('username')
		    /*如果cookie不存在，则跳转到登录页*/
		    if(uname == ""){
		        this.$router.push('/login')
		    }        
		},
		methods:{
			
		},
		data:function(){
			return{
			}
		},
		components:{
			adminlist
		}
	}
</script>

<style>
</style>


