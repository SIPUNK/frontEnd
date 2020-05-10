<template>
	<div>
		<img :src="image" alt="0" class="detailTitle-img">
		<p class="detailTitle-name">{{name}}</p>
		<!-- <div class="detailTitle-div"> -->
		<p class="detailTitle-label" v-for="value in label">{{value}}</p>
		<!-- </div> -->
		<label for=""></label>
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


	// let imgUrl = 'assets/img/news/collegeLogo/' + theRequest.school + 'Logo.jpg'

	export default {
		name: 'detailTitle',
		data() {
			return {
				image: require('assets/img/news/collegeLogo/' + theRequest.school + 'Logo.jpg'),
				name: theRequest.school,
				label: [
					'双一流', '211'
				]
			}
		},
	}
</script>

<style>
	.detailTitle-img {
		top: 0;
		left: 0;
		width: 160px;
		height: 160px;
		margin-left: 600px;
	}

	.detailTitle-name {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 36px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 53px;
		text-decoration: none;
		display: inline-block;
		position: relative;
		left: 50px;
		bottom: 85px;
	}

	/* 	.detailTitle-div {
	} */
	.detailTitle-label {
		width: 81px;
		/* height: 33px; */
		left: 273px;
		top: 95px;
		z-index: 7;
		background-color: rgb(165, 222, 255);
		border-color: rgb(187, 187, 187);
		border-width: 1px;
		border-style: solid;
		border-radius: 5px;
		font-size: 14px;
		padding: 0px;
		text-align: center;
		line-height: 20px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		color: #000000;
		display: inline-block;
		position: relative;
		/* right: 200px; */
		top: -45px;
		left: -60px;
		margin-right: 5px;
	}
</style>
