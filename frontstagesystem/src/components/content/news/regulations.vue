<template>
	<div class="regulations">
		<p class="title">2020全国硕士学位研究生招生信息公布院校汇总</p>
		<ul class="regulations-ul">
			<li v-for="(value,index) in contentList" class="regulations-li">
				<router-link :to="value.href" class="regulations-link">
					{{value.content}}
				</router-link>
			</li>
		</ul>

		<p class="title">2020考研如何解读各校专业目录</p>
		<ul class="regulations-ul">
			<li v-for="(value,index) in contentList2" class="regulations-li">
				<a :href="value.href" class="regulations-link">
					{{value.content}}
				</a>
			</li>
		</ul>


		<p class="title">2020年最新院校复试分数线</p>
		<ul class="regulations-ul" >
			<li v-for="(value,index) in contentList3" class="regulations-li">
				<a :href="value.href" class="regulations-link">
					{{value.content}}
				</a>
			</li>
		</ul>


	</div>
</template>

<script>
	import Vue from 'vue'
	import carousel from '@/components/content/news/carousel.vue'

	export default {
		name: 'regulations',
		data() {
			return {
				contentList: [{
						href: '/news/detail/fzu/1',
						content: '2020福州大学招生简章',
					},
					{
						href: '#',
						content: '2020厦门大学招生简章',
					}
				],

				contentList2: [{
						href: '#',
						content: '2020福州大学考研专业目录',
					},
					{
						href: '#',
						content: '2020厦门大学考研专业目录',
					},
					{
						href: '#',
						content: '2020北京大学考研专业目录',
					},
					{
						href: '#',
						content: '2020清华大学考研专业目录',
					},
				],

				contentList3: [{
						href: '#',
						content: '2020福州大学复试分数线公布',
					},
					{
						href: '#',
						content: '2020浙江大学复试分数线公布',
					},
					{
						href: '#',
						content: '2020福州大学复试分数线公布',
					},
					{
						href: '#',
						content: '2020浙江大学复试分数线公布',
					},
					{
						href: '#',
						content: '2020福州大学复试分数线公布',
					},
					{
						href: '#',
						content: '2020浙江大学复试分数线公布',
					},
				],
			}
		},
		components: {
			carousel
		},

	}
</script>

<style>
	.regulations {
		display: inline-block;
		position: relative;
		left: 50px;
	}

	.title {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgba(10, 75, 117, 1);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 41px;
		text-decoration: none;
		text-align: center;
	}

	.regulations-link {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 18px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 30px;
		text-decoration: none;
	}
	.regulations-ul {
		list-style: none;
	}
	.regulations-li {
		text-align: center;
	}
	

</style>
