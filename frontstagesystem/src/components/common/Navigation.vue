<template>
	<!-- 引入样式 -->
	<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> -->
	<!-- 引入组件库 -->
	<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->

	<!-- <el-tabs type="border-card" v-for="(item,index) in first">
	  <el-tab-pane label="{{item.name}}"></el-tab-pane>
	</el-tabs> -->
	<nav class="Navigation-nav">
		<ul class="Navigation-ul">
			<li class="Navigation-li">
				<router-link to="/home" class="Navigation-a">主页</router-link>
				<router-link to="/news" class="Navigation-a">资讯</router-link>
				<router-link to="/community" class="Navigation-a">社区</router-link>
				<router-link to="/user" class="Navigation-a">个人</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
		data() {
			return {

			}
		},
	}
</script>

<style>
	.Navigation-ul {
		list-style-type: none;
		/*消除黑点*/
		text-align: center;
		margin: 0;
	}

	.Navigation-li {
		display: inline-block;
		margin: 0 10px;
	}

	.Navigation-a {
		color: #fff;
		/*设置字体颜色*/
		text-decoration: none;
		/*消除下划线*/
		padding: 12px;
		border-radius: 5px;
	}

	.Navigation-nav {
		background: #68b9d6;
		padding: 30px 0;
		/* width: 1000px; */
		/* margin: 0 auto; */
	}

	/*选中则发生一些变化*/
	.router-link-active {
		background: rgba(255, 255, 255, 0.8);
		color: #444;
	}
</style>
