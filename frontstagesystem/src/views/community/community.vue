<template>
	<div class="contain_box">
		<div class="left_box">
			<div class="search_box">
				<el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="search">
				</el-input>
				<img :src="require(`assets/bianji.png`)" @click="gooPosting" style="cursor: pointer;width: 30px;height: 30px;margin-left: 20px;" />
			</div>
			<div class="Ranking_box">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">热帖排行</span>
					<span @click="go">更多</span>
				</div>
				<div class="Ranking_content">
					<div v-for="(item,key) in hotLists" :key="item.invitation_id" >
						<div v-if="key<3">
							<img :src="require(`assets/num${key+1}.png`)" style="width: 20px;height: 20px;"/>
						</div>
						<span @click="goPostDetail(item.invitation_id)" :class="key<3?'topThree':'bottomList'">{{item.invitation_title||"暂无"}}</span>
					</div>
				</div>

			</div>
			<div class="Hot_box">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">休闲区热帖</span>
					<span @click="go">更多</span>
				</div>
				<div class="Ranking_content">
					<div v-for="(item,key) in leisureLists" :key="item.invitation_id">
						<div v-if="key<3">
							<img :src="require(`assets/num${key+1}.png`)" style="width: 20px;height: 20px;"/>
						</div>
						<span @click="goPostDetail(item.invitation_id)" :class="key<3?'topThree':'bottomList'">{{item.invitation_title||"暂无"}}</span>
					</div>
				</div>
			</div>

		</div>
		<div class="mid_box">
			<div class="mid_title">
				<span style="font-size: 22px;font-weight: bold;">最新精华帖子</span>
				<span @click="go">更多</span>
			</div>
			<div class="mid_content" v-for="item in essenceLists" :key="item.invitation_id">
				<span @click="goPostDetail(item.invitation_id)" style="cursor: pointer;" >{{item.invitation_title}}</span>
			</div>
		</div>
		<div class="right_box">
			<div class="HotSectors">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">热门版块</span>
					<span @click="go">更多</span>
				</div>
				<div class="HotSectors_content">
					<div v-for="(item, index) in HotSectorsList" :key="index">
						<el-image style="width: 100px; height: 100px" :src="item.url"></el-image>
						<span style="font-size: 14px;font-weight: bold;">{{item.name}}</span>
						<span style="color: #101010;">帖数：{{item.PostNum}}</span>
						<el-button type="primary" size="medium">关注</el-button>
					</div>
				</div>
			</div>
			<div class="newData_box">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">最新资料帖</span>
					<span @click="go">更多</span>
				</div>
				<div class="Ranking_content">
					<div v-for="(item,key) in latestLists" :key="item.invitation_id">
						<div v-if="key<3">
							<img :src="require(`assets/num${key+1}.png`)" style="width: 20px;height: 20px;"/>
						</div>
						<span @click="goPostDetail(item.invitation_id)" :class="key<3?'topThree':'bottomList'">{{item.invitation_title}}</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import request from '@/api/request'

	export default {
		data() {
			return {
				search: '',
				RankingList: [],
				allinvitations:[],
				hotLists: [],
				leisureLists: [],
				essenceLists: [],
				latestLists: [],

				HotSectorsList: [{
					name:'政治',
					PostNum:'12345',
					url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
				},{
					name:'政治',
					PostNum:'12345',
					url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
				}]


			}
		},
		created() {
			this.gethot()
			this.getplateinvition(2, 'leisure')
			this.getplateinvition(1, 'essence')
			this.getplateinvition(3, 'latest')
		},
		methods:{
			gethot() {
				this.$http.post('http://118.178.184.69:4396/invitation/gethot').then(result => {
					this.hotLists = result.data
				})
			},
			// 获取帖子
			getinvitation(){
					this.$http.post('http://118.178.184.69:4396/invitation/getinvitation').then(result => {
					this.allinvitations = result.data
				})
			},
			getplateinvition(map, field) { 
				this.$http.post('http://118.178.184.69:4396/invitation/getplateinvition',{
					plate:map
				}).then(result => {
					this[`${field}Lists`] = result.data
				})
			},
			gooPosting(){
				this.$router.push({
					path:'/community/Posting'
				})
			},
			goPostDetail(invitationId){
				this.$router.push({
					path:`/community/PostDetail`,query:{invitationId:invitationId}
				})
			},
			go(){
				this.$router.push({
					path:'/community/MorePassage'
				})
			}
		}
	}
</script>

<style>
	.contain_box {
		/* margin: 20px; */
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}

	.left_box,
	.mid_box,
	.right_box {
		width: 31%;
		/* border: 1px solid #000000; */
		display: flex;
		flex-flow: column;
		/* justify-content: space-between; */

	}

	.search_box {
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 10px;
	}

	.Ranking_box,
	.Hot_box {
		border: 1px solid #EFEFEF;
		margin-bottom: 40px;
	}

	.Ranking_title {
		text-align: center;
		font-weight: bold;
	}

	.Ranking_title span:last-child {
		float: right;
		font-size: 14px;
		line-height: 40px;
		margin-right: 10px;
		color: #046299;
		cursor: pointer;
	}

	.Ranking_content {
		width: 100%;
		margin: auto;
		margin-bottom: 15px;
	}

	.Ranking_content>div {
		margin: 10px 10px 0 10px;
		font-size: 16px;
		font-weight: 700;
		display: flex;
		flex-direction: row;
		cursor: pointer;

	}

	.topThree {
		color: red;
		margin-left: 10px;
	}
	.bottomList{

		margin-left: 30px;
	}

	.mid_box {
		border: 1px solid #EFEFEF;
	}

	.mid_title {
		width: 100%;
		height: 44px;
		background-color: #188EDB;
		color: #FFFFFF;
		text-align: center;
		line-height: 44px;
	}

	.mid_title span:last-child {
		float: right;
		font-size: 14px;
		font-weight: bold;
		margin-right: 10px;
	}

	.mid_content {
		margin: 10px 10px 0 40px;
		font-size: 15px;
		font-size: 18px;

		/* font-weight: 700; */
	}

	.HotSectors,
	.newData_box {
		border: 1px solid #EFEFEF;
		margin-bottom: 40px;
	}
	.HotSectors_content{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top:40px;
		margin-bottom:40px;
	}
	.HotSectors_content>div{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
