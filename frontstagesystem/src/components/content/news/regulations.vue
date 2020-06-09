<template>
	<div class="regulations">
		<p class="title">2020全国硕士学位研究生招生信息公布院校汇总</p>
		<ul class="regulations-ul">
			<li v-for="(value,index) in contentList" class="regulations-li">
				<router-link v-if="index<=5&&value.href!=undefined" :to="value.href" class="regulations-link">
					{{value.invitation_title}}
				</router-link>
			</li>
		</ul>

		<p class="title">2020考研如何解读各校专业学位</p>
		<ul class="regulations-ul">
			<li v-for="(value,index) in contentList" class="regulations-li">
				<router-link v-if="index>5&&index<=11&&value.href!=undefined" :to="value.href" class="regulations-link">
					{{value.invitation_title}}
				</router-link>
			</li>
		</ul>


		<p class="title">2020年最新院校复试分数线</p>
		<ul class="regulations-ul">
			<li v-for="(value,index) in contentList3" class="regulations-li">
				<router-link :to="value.href" class="regulations-link">
					{{value.content}}
				</router-link>
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
				// contentList: [{
				// 		href: '/news/detail/福州大学/1',
				// 		content: '2020福州大学招生简章',
				// 	},
				// 	{
				// 		href: '#',
				// 		content: '2020厦门大学招生简章',
				// 	}
				// ],
				school_id: '',
				school_name: '',
				contentList: [],

				contentList3: [{
						href: 'news/detail/福州大学',
						content: '2020福州大学复试分数线公布',
					},
					{
						href: 'news/detail/厦门大学',
						content: '2020厦门大学复试分数线公布',
					},
				],
			}
		},
		components: {
			carousel
		},
		created() {
			this.$http.post('http://118.178.184.69:4396/invitation/getinvitation', ).then((res) => {
					for (let i = 0; i < res.data.length; i++) {
						if (res.data[i].invitation_type == 1) {
							this.contentList.push(res.data[i])
							this.$http.post('http://118.178.184.69:4396/school/getallschool', ).then((response) => {
									for (let j = 0; j < response.data.length; j++) {
										if (response.data[j].school_id == this.contentList[i].school_id) {
											this.$set(this.contentList[i], 'school_name', response.data[j].school_name)
										}
									}
									this.$set(this.contentList[i], 'href', '/news/detail/' +
										this.contentList[i].school_name + '/' + this.contentList[i].invitation_id)
								},
								(error) => {})
						}

					}
				},
				(error) => {})
		}

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
