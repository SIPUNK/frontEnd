<template>
	<div>
		<div class="detailFile-div">
			<p class="detailFile-head">招生简章</p>
			<p v-for="(value,index) in fileList">
				<router-link :to="value.clickUrl" class="detailFile-title">{{value.invitation_title}}</router-link>
			</p>
		</div>
		<br>
		<div class="detailFile-div">
			<p class="detailFile-head">专业目录</p>
			<p v-for="(value,index) in fileList2">
				<a :href="value.clickUrl" class="detailFile-title">{{value.title}}</a>
			</p>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'detailFile',
		data() {
			return {
				// fileList: [{
				// 		title: '福州大学2020年招生简章',
				// 		clickUrl: '#'
				// 	},
				// 	{
				// 		title: '福州大学2019年招生简章',
				// 		clickUrl: '#'
				// 	},
				// 	{
				// 		title: '福州大学2018年招生简章',
				// 		clickUrl: '#'
				// 	},
				// ],
				fileList2: [{
						title: 'xx大学2020年专业目录',
						clickUrl: '#'
					},
					{
						title: 'xx大学2019年专业目录',
						clickUrl: '#'
					},
					{
						title: 'xx大学2018年专业目录',
						clickUrl: '#'
					},
				],
				school_id: '',
				school_name: this.$route.params.school,
				fileList: [],
			}
		},
		created() {
			this.$http.post('http://118.178.184.69:4396/school/getallschool', ).then((res) => {
					for (let i = 0; i < res.data.length; i++) {
						if (res.data[i].school_name == this.school_name) {
							this.school_id = res.data[i].school_id
						}
					}
					let data = {
						"school_id": parseInt(this.school_id)
					}
					console.log(data)
					this.$http.post('http://118.178.184.69:4396/invitation/getinvitationbyschool', data).then((response) => {
							for (let i = 0; i < response.data.length; i++) {
								this.fileList.push(response.data[i])
								this.$set(this.fileList[i], 'clickUrl', '/news/detail/' +
									this.school_name + '/' + this.fileList[i].invitation_id)
							}
							console.log(response.data)
							
						},
						(error) => {})
				},
				(error) => {})

		}
	}
</script>

<style>
	.detailFile-div {
		width: 380px;
		height: 300px;
		left: 0px;
		top: 0px;
		z-index: 5;
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
		margin-left: 30px;

	}

	.detailFile-title {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 42px;
		text-decoration: none;
	}

	.detailFile-head {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgba(56, 148, 255, 1);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 42px;
		text-decoration: none;
	}
</style>
