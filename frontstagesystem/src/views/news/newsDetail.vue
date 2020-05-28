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
	

	
</script>

<style>
</style>
