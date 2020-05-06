<template>
	<div id="newsIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4>资讯</h4>
			<newsfind></newsfind>
			<brochures></brochures>
			<div id="news2" class="newsDiv">
				复试分数线
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<div id="news2" class="newsDiv">
				热门院校
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	</div>
</template>

<script>
	
	import newsfind from "../../../components/content/news/Find.vue"
	import brochures from "../../../components/content/news/Brochures.vue"
	import {getCookie} from '../../../assets/js/cookie.js'
	
	export default{
		name:'newsIndex',
		created() {
			
		},
		mounted(){
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
			newsfind,
			brochures
		}
	}
</script>

<style>
</style>

