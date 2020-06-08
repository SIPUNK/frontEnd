<template>
	<div class="carouselDetail-contain">
		<div class="carouselDetail-main">
			<h1 class="carouselDetail-title">{{title}}</h1>
			<p class="carouselDetail-createtime">发布时间：{{create_time}}</p>
			<p v-html="content" class="carouselDetail-content"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'carouselDetail',
		data() {
			return {
				carousel_id: '',
				title: '',
				content: '',
				create_time: ''
			}
		},
		mounted() {
			this.carousel_id = this.$route.params.id
			let data = {
				'carousel_id': parseInt(this.carousel_id)
			}
			this.$http.post('http://118.178.184.69:4396/carousel/getCarousel', data).then((res) => {
					console.log(res.data)
					this.title = res.data.title
					this.content = res.data.content
					this.create_time = res.data.create_time
				},
				(error) => {

				})
			this.content.replace()
		}
	}
</script>

<style>
	.carouselDetail-main {
		width: 100%;
		/* border: 1px solid #BBBBBB; */
		min-width: 600px;
	}

	.carouselDetail-contain {
		margin: 20px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}

	.carouselDetail-title {
		font: 28px/44px "\5FAE\8F6F\96C5\9ED1";
		color: #333;
		margin-bottom: 10px;
	}

	.carouselDetail-createtime {
		font-size: 12px;
		color: #999;
	}
	.carouselDetail-content {
		color: #333;
		    line-height: 28px;
		    margin-bottom: 30px;
		    overflow: hidden;
		    font-size: 16px;
		    text-align: justify;
	}
</style>
