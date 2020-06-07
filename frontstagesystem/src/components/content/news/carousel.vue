<template>
	<div class="carousel-wrap" id="carousel">
		<transition-group tag="ul" class='slide-ul' name="list">
			<li v-for="(list,index) in carouselList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
				<a :href="list.clickUrl">
					<img :src="list.url" alt="" id="carousel-img">
				</a>
			</li>
		</transition-group>
		<div class="carousel-items">
			<span v-for="(item,index) in carouselList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	// import carousel1 from 'assets/img/news/carousel1.png'
	// import carousel2 from 'assets/img/news/carousel2.png'
	// import carousel3 from 'assets/img/news/carousel3.png'

	export default {
		name: 'carousel',
		data() {
			return {
				// slideList: [{
				// 		"clickUrl": "#",
				// 		"desc": "nhwc",
				// 		"image": carousel1
				// 	},
				// 	{
				// 		"clickUrl": "#",
				// 		"desc": "hxrj",
				// 		"image": carousel2
				// 	},
				// 	{
				// 		"clickUrl": "#",
				// 		"desc": "rsdh",
				// 		"image": carousel3
				// 	}
				// ],
				carouselList:[],
				currentIndex: 0,
				timer: ''
			}

		},
		mounted() {

			this.$http.post('http://118.178.184.69:4396/carousel/getAllCarousels', ).then((res) => {
				for (let i = 0; i < res.data.length; i++) {
					this.carouselList.push(res.data[i])
					this.$set(this.carouselList[i], 'clickUrl', '#/news/' + this.carouselList[i].carousel_id)
				}
				console.log(this.carouselList)
			},
			(error) => {
				
			})
		},
		methods: {
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 2000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.carouselList.length - 1) {
					this.currentIndex = 0
				}
			}
		},
		created() {
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 2000)
			})
		}
	}
	
</script>

<style>
	.carousel-wrap {
		/* height: 453px;
		width: 100%; */
		height: 280px;
		width: 22%;
		overflow: hidden;
		background-color: #fff;
		display: inline-block;
		padding-bottom: 320px;
	}

	.slide-ul {
		position: relative;
		width: 100%;
		height: 100%;
		list-style: none;
	}

	.slide-ul li {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	#carousel-img {
		/* width: 100%;
		height: 100%; */
		position: relative;
		/* bottom: 30px; */
		right: 25px;
		width: 320px !important;
		height: 260px !important;
		display: block !important;
		margin: 0 auto !important;
	}

	.carousel-items {
		position: absolute;
		z-index: 10;
		top: 460px;
		width: 24%;
		margin: 0 auto;
		text-align: center;
		font-size: 0;
	}

	.carousel-items span {
		display: inline-block;
		height: 6px;
		width: 30px;
		margin: 0 3px;
		background-color: #b2b2b2;
		cursor: pointer;
	}

	.carousel-items .active {
		background-color: orange;
	}

	.list-enter-to {
		transition: all 1s ease;
		transform: translateX(0);
	}

	.list-leave-active {
		transition: all 1s ease;
		transform: translateX(-100%)
	}

	.list-enter {
		transform: translateX(100%)
	}

	.list-leave {
		transform: translateX(0)
	}
</style>
