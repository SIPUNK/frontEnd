<template>
	<div>
		<el-button type="primary" icon="el-icon-arrow-left" @click="back">返回</el-button>
		<h2>文章详情页</h2>
	</div>
</template>

<script>
	export default {
		name: 'articleDetail',
		methods: {
			back() {
				this.$router.go(-1); //返回上一层
			},
		}
	}
</script>

<style>
</style>
