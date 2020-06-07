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


	// let imgUrl = 'assets/img/news/collegeLogo/' + theRequest.school + 'Logo.jpg'

	export default {
		name: 'detailTitle',
		data() {
			return {
				image: require('assets/img/news/collegeLogo/' + this.$route.params.school + 'Logo.jpg'),
				name: this.$route.params.school,
				label: [
					
				]
			}
		},
		created() {
			this.$http.post('http://118.178.184.69:4396/school/getallschool', ).then((res) => {
					for (let i = 0; i < res.data.length; i++) {
						if(res.data[i].school_name == this.name){
							this.label = res.data[i].school_tag.split(',')
						}
					}
				},
				(error) => {
			
				})
		}
	}
</script>

<style>
	.detailTitle-img {
		position: relative;
		top: 10px;
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
		bottom: 70px;
	}

	/* 	.detailTitle-div {
	} */
	.detailTitle-label {
		width: 81px;
		/* height: 33px; */
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
		right: 100px;
		top: -30px;
		margin-right: 5px;
	}
</style>
