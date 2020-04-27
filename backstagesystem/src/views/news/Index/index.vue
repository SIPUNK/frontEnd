<template>
	<div id="newsIndex" class="container">
		<div class="col-sm-10 col-sm-offset-1">
			<h4>资讯</h4>
			<div id="news1" class="newsDiv">
				资讯筛选
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
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
	
	import brochures from "../../../components/content/news/brochures.vue"
	
	export default{
		name:'newsIndex',
		created() {
			
		},
		methods:{
			
		},
		data:function(){
			return{
			}
		},
		components:{
			brochures
		}
	}
</script>

<style>
</style>

