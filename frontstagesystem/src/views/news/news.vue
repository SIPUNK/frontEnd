<template>
	<div>
		<div>
			<carousel></carousel>
			<regulations></regulations>
			<procedure></procedure>
		</div>

		<div>
			<colleges></colleges>
		</div>
	</div>

</template>

<script>
	import carousel from '@/components/content/news/carousel.vue'
	import regulations from '@/components/content/news/regulations.vue'
	import procedure from '@/components/content/news/procedure.vue'
	import colleges from '@/components/content/news/colleges.vue'

	export default {
		components: {
			carousel,
			regulations,
			procedure,
			colleges
		}
	}
</script>

<style>
</style>
