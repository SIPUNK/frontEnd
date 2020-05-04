<template>
	<div class="carousel-wrap" id="carousel">
		<transition-group tag="ul" class='slide-ul' name="list">
			<li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
				<a :href="list.clickUrl">
					<img :src="list.image" :alt="list.desc" id="carousel-img">
				</a>
			</li>
		</transition-group>
		<div class="carousel-items">
			<span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import carousel1 from 'assets/img/news/carousel1.png'
	import carousel2 from 'assets/img/news/carousel2.png'
	import carousel3 from 'assets/img/news/carousel3.png'
	
	export default{
		name: 'carousel',
		data() {
			return {
				slideList: [{
						"clickUrl": "#",
						"desc": "nhwc",
						"image": carousel1
					},
					{
						"clickUrl": "#",
						"desc": "hxrj",
						"image": carousel2
					},
					{
						"clickUrl": "#",
						"desc": "rsdh",
						"image": carousel3
					}
				],
				currentIndex: 0,
				timer: ''
			}
			
		},
		methods: {
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 4000)
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
				if (this.currentIndex > this.slideList.length - 1) {
					this.currentIndex = 0
				}
			}
		},
		created() {
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 8000)
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
		    right: 220px;
		    top: 40px;
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
