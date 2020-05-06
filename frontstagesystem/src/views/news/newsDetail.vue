<template>
	<div>
		<detailTitle></detailTitle>
		<detailFile></detailFile>
		<detailGrade></detailGrade>
	</div>
</template>

<script>
	import detailFile from 'components/content/news/details/detailFile.vue'
	import detailTitle from 'components/content/news/details/detailTitle.vue'
	import detailGrade from 'components/content/news/details/detailGrade.vue'

	export default {
		components: {
			detailFile,
			detailTitle,
			detailGrade,
		}
	}
	
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
	
</script>

<style>
</style>
