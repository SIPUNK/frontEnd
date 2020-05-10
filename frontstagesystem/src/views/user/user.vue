<template>
	<div class="user-contain">
		<div class="box_top">
			<div class="box_top_content">
				<div class="box_left">
					<el-image style="width: 220px; height: 220px;margin: auto;" :src="url"></el-image>
					<span>更换头像</span>
				</div>
				<div class="box_right">
					<ul style="padding-inline-start: 10px">
						<li style="font-weight: 700;">{{nickName}}</li>
						<li>性别：{{Sex}}</li>
						<li>发帖数：{{PostNum}}</li>
						<li>评论数：{{CommentNum}}</li>
						<li>我的课程：{{ClassNum}}</li>
					</ul>

				</div>
			</div>
		</div>
		<div class="box_bottom">
			<div class="bottom_menu">
				<el-menu style="width: 100%;display: flex;justify-content: space-between;" :default-active="activeIndex" class="el-menu-demo"
				 mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">参与课程</el-menu-item>
					<el-menu-item index="2">发帖记录</el-menu-item>
					<el-menu-item index="3">评论回复</el-menu-item>
				</el-menu>
			</div>
			<div class="bottom_content" v-if="fatieShow">
				<el-table :data="invitation_table" style="width: 100%;" :header-cell-style="headClass ">
					<el-table-column prop="invitation_title" label="主题">
					</el-table-column>
					<el-table-column prop="create_time" label="发帖时间" width="180px">
					</el-table-column>

				</el-table>

			</div>

			<div class="bottom_content" v-if="classShow">
				<el-table style="width: 100%;" :header-cell-style="headClass ">
					<el-table-column label="课程名">
					</el-table-column>
					<el-table-column label="时间" width="180px">
					</el-table-column>

				</el-table>

			</div>
			<div class="bottom_content" v-if="commentShow">
				<el-table :data="comment_table" style="width: 100%;" :header-cell-style="headClass ">
					<el-table-column prop="comment_invitation" label="评论帖子">
					</el-table-column>
					<el-table-column prop="content" label="评论详情">
					</el-table-column>
					<el-table-column prop="like_number" label="点赞数" width="180px">
					</el-table-column>
					<el-table-column prop="create_time" label="时间" width="180px">
					</el-table-column>

				</el-table>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		setCookie,
		getCookie,
		delCookie
	} from 'assets/js/cookie.js'

	export default {
		data() {
			return {
				name: '',
				user_id: '',
				nickName: '',

				activeIndex: '2',
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				Sex: '',
				PostNum: '',
				CommentNum: '',
				ClassNum: '0',
				invitation_table: [],
				comment_table: [],

				fatieShow: true,
				classShow: false,
				commentShow: false,
			}
		},
		created() {
			/*页面挂载获取保存的cookie值，渲染到页面上*/
			let uname = getCookie('username')
			this.name = uname
			/*如果cookie不存在，则跳转到登录页*/
			if (uname == "") {
				this.$router.push('/')
			}
		},
		beforeMount() {
			let data1 = {
				'username': this.name,
			}
			this.$http.post('http://118.178.184.69:4396/User/findbyname', data1).then((res) => {
					if (res.data.sex == "0") {
						this.Sex = "女"
					} else {
						this.Sex = "男"
					}
					this.PostNum = res.data.invitation_number
					this.CommentNum = res.data.comment_number
					this.user_id = res.data.user_id
					this.nickName = res.data.nickname
					
					//获取该用户的发帖记录
					let data2 = {
						"index": {},
						"user_id": res.data.user_id
					}
					this.$http.post('http://118.178.184.69:4396/User/getinvitation', data2).then((res) => {
							for (let i = 0; i < res.data.length; i++) {
								this.invitation_table.push(res.data[i])
							}
						},
						(error) => {})
						
					//获取该用户的评论记录
					let data3 = {
						"index": {},
						"user_id": res.data.user_id
					}
					this.$http.post('http://118.178.184.69:4396/User/getcomment', data3).then((res) => {
							for (let i = 0; i < res.data.length; i++) {
								this.comment_table.push(res.data[i])
							}
						},
						(error) => {})
				},
				(error) => {})

		},
		mounted() {

		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key)
				if (key == 2) {
					this.fatieShow = true;
					this.classShow = false;
					this.commentShow = false;
				} else if (key == 1) {
					this.fatieShow = false;
					this.classShow = true;
					this.commentShow = false;
				} else if (key = 3) {
					this.fatieShow = false;
					this.classShow = false;
					this.commentShow = true;
				}

				// console.log(key, keyPath);
			},
			headClass() {
				return 'text-align: left;background:#EFEFEF;'
			},
		}
	}
</script>

<style>
	.user-contain {
		width: 100%;
		margin-top: 20px;
	}

	.box_top,
	.box_bottom {
		width: 60%;
		margin: auto;
		display: flex;

	}

	.box_top_content {
		margin: auto;
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.box_bottom {
		flex-direction: column;
	}

	.box_left {
		width: 50%;
		display: flex;
		flex-direction: column;
		color: #56CCFB;
		text-align: center;
	}

	.box_left span {
		line-height: 40px;
	}

	.box_right {
		text-align: left;
		width: 50%;

	}

	.box_right ul li {
		list-style: none;
		line-height: 38px;
	}

	.bottom_menu {
		width: 100%;
		background-color: #FFFFFF
	}

	.bottom_content {
		width: 100%;
	}
</style>
