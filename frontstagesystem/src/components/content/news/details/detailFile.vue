<template>
	<div>
		<div class="detailFile-div">
			<p class="detailFile-head">招生简章</p>
			<p v-for="(value,index) in fileList">
				<a :href="value.clickUrl" class="detailFile-title">{{value.title}}</a>
			</p>
		</div>
		<br>
		<div class="detailFile-div">
			<p class="detailFile-head">专业目录</p>
			<p v-for="(value,index) in fileList2">
				<a :href="value.clickUrl" class="detailFile-title">{{value.title}}</a>
			</p>
		</div>
	</div>
	
</template>

<script>
	let url = window.location.search;
	let theRequest = new Object();
	if (url.indexOf("?") != -1) {
		let str = url.substr(1);
		let strs = str.split("&");
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	console.log(theRequest.school)
	// console.log(this.$route.query.school)

	export default {
		name: 'detailFile',
		data() {
			return {
				fileList: [{
						title: '福州大学2020年招生简章',
						clickUrl: '#'
					},
					{
						title: '福州大学2019年招生简章',
						clickUrl: '#'
					},
					{
						title: '福州大学2018年招生简章',
						clickUrl: '#'
					},
				],
				fileList2: [{
						title: '福州大学2020年专业目录',
						clickUrl: '#'
					},
					{
						title: '福州大学2019年专业目录',
						clickUrl: '#'
					},
					{
						title: '福州大学2018年专业目录',
						clickUrl: '#'
					},
				],
			}
		}
	}
</script>

<style>
	.detailFile-div {
		width: 380px;
		height: 300px;
		left: 0px;
		top: 0px;
		z-index: 5;
		border-color: rgb(187, 187, 187);
		border-width: 1px;
		border-style: solid;
		font-size: 14px;
		padding: 0px;
		text-align: center;
		line-height: 20px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		margin-left: 30px;
		
	}

	.detailFile-title {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 42px;
		text-decoration: none;
	}

	.detailFile-head {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgba(56, 148, 255, 1);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 42px;
		text-decoration: none;
	}
</style>
