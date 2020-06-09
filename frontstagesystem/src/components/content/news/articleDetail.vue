<template>
	<div>
		<!-- <el-button type="primary" icon="el-icon-arrow-left" @click="back">返回</el-button> -->
		<div class="articleDetail-contain">
			<div class="articleDetail-main">
				<h1 class="articleDetail-title">{{title}}</h1>
				<p class="articleDetail-createtime">发布时间：{{create_time}}
				   &emsp;&emsp;&emsp;&emsp;&emsp;发布单位：{{school_name}}研究生院</p>
				<p v-html="content" class="articleDetail-content"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'articleDetail',
		data() {
			return {
				invitation_id:'' ,
				title:'',
				content:'',
				school_name:'',
				create_time: ''
			}
		},
		methods: {
			back() {
				this.$router.go(-1); //返回上一层
			},
		},
		created() {
			this.invitation_id = this.$route.params.id
			this.school_name = this.$route.params.school
			let data = {
				"invitation_id": parseInt(this.invitation_id)
			}
			this.$http.post('http://118.178.184.69:4396/invitation/getinvitationbyid', data).then((res) => {
					console.log(res.data[0])
					this.title = res.data[0].invitation_title
					this.create_time = res.data[0].create_time
					this.content = res.data[0].content
				},
				(error) => {
			
				})
		}
	}
</script>

<style>
	.articleDetail-main {
		width: 100%;
		/* border: 1px solid #BBBBBB; */
		min-width: 600px;
	}
	
	.articleDetail-contain {
		margin: 20px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}
	
	.articleDetail-title {
		font: 28px/44px "\5FAE\8F6F\96C5\9ED1";
		color: #333;
		margin-bottom: 10px;
	}
	
	.articleDetail-createtime {
		font-size: 12px;
		color: #999;
	}
	
	.articleDetail-content {
		color: #333;
		line-height: 28px;
		margin-bottom: 30px;
		overflow: hidden;
		font-size: 16px;
		text-align: justify;
		white-space: pre-wrap;
	}
</style>
