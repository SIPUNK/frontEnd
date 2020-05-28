<template>
	<div class="colleges">
		<p class="colleges-title">院校资讯</p>
		<a class="colleges-more" href="#">更多</a>
		<div>
			<router-link :to="collegesList[0].clickUrl" class="colleges-link">
				<img :src="collegesList[0].image" alt="0" class="colleges-img">
				<p class="colleges-name">福州大学</p>
			</router-link>
			<router-link :to="collegesList[1].clickUrl" class="colleges-link">
				<img :src="collegesList[1].image" alt="1" class="colleges-img">
				<p class="colleges-name">福州大学</p>
			</router-link>
			<router-link :to="collegesList[1].clickUrl" class="colleges-link">
				<img :src="collegesList[1].image" alt="1" class="colleges-img">
				<p class="colleges-name">福州大学</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	import fzuLogo from 'assets/img/news/collegeLogo/fzuLogo.jpg'

	export default {
		name: 'colleges',
		data() {
			return {
				collegesList: [{
						image: fzuLogo,
						clickUrl: '/news/detail',
						name: 'fzu'
					},
					{
						image: fzuLogo,
						clickUrl: '/news/detail',
						name: 'fzu'
					},
				]
			}
		},
		created() {
			for (let i = 0; i < this.collegesList.length; i++) {
				this.collegesList[i].clickUrl = '/news/detail/' + this.collegesList[i].name
			}
		}
	}
</script>

<style>
	.colleges {
		position: absolute;
		width: 339px;
		height: 247px;
		left: 14px;
		top: 565px;
		z-index: 79;
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
	}

	.colleges-title {
		font-family: SourceHanSansSC;
		font-weight: 700;
		font-size: 20px;
		color: rgb(33, 64, 200);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 29px;
		text-decoration: none;
		display: inline-block;
		padding-left: 20px;
	}

	.colleges-more {
		font-family: SourceHanSansSC;
		font-weight: 700;
		font-size: 14px;
		color: rgba(4, 98, 153, 0.88);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 20px;
		text-decoration: none;
		display: inline-block;
	}

	.colleges-img {
		top: 0;
		left: 0;
		width: 80px;
		height: 80px;
		overflow: hidden;
		border-radius: inherit;
		-webkit-transition: inherit;
		transition: inherit;
	}

	.colleges-link {
		display: inline-block;
	}

	.colleges-name {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 18px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 27px;
		text-decoration: none;
	}
</style>
