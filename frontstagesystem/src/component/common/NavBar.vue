<template>
	<div class="content">
		<div class="header">
			<div class="head_box">
				<div class="head_left">
					<span>烤盐屋</span>
				</div>
				<div class="head_right">
					<span>注册</span>/<span>登录</span>
				</div>
			</div>
			<div class="head_menu">
				<el-menu style="width: 90%;
		margin: auto !important;display: flex;justify-content: space-between;
		" router background-color="rgb(115, 203, 236)" text-color="#fff"
				 active-text-color="#fff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item style="font-size: 20px;" index="/views/index">首页</el-menu-item>
					<el-menu-item style="font-size: 20px;"  index="2">资讯</el-menu-item>
					<el-menu-item style="font-size: 20px;"  index="/Community/index">社区</el-menu-item>
					<!-- <el-menu-item style="font-size: 20px;"  index="4">课程</el-menu-item> -->
					<el-menu-item style="font-size: 20px;"  index="/User/index">个人</el-menu-item>
				</el-menu>
			</div>
		</div>
		<el-container>


			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',

			}

		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	

	.head_menu {
		width: 100%;
		background-color: rgb(115, 203, 236);
		text-align: center;
	}




	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.head_box {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;


	}

	.head_left {
		margin: 10px 0 10px 0;
		width: 100px;
		height: 50px;
		border-radius: 10px;
		line-height: 50px;
		text-align: center;
		background-color: rgb(115, 203, 236);
		color: #FFFFFF;
	}

	.head_right {
		color: rgb(115, 203, 236);
	}
</style>
