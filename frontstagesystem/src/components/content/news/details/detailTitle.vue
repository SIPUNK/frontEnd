<template>
	<div>
		<img :src="image" alt="0">
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
	console.log(theRequest.name)


	// let imgUrl = 'assets/img/news/collegeLogo/' + theRequest.name + 'Logo.jpg'
	
	export default {
		name: 'detailTitle',
		data() {
			return {
				image: require('assets/img/news/collegeLogo/' + theRequest.name + 'Logo.jpg')
			}
		},
	}
</script>

<style>
</style>
