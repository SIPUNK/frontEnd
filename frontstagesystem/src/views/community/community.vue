<template>
	<div class="contain_box">
		<div class="left_box">
			<div class="search_box">
				<el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="search">
				</el-input>
				<img src="~assets/bianji.png" @click="gooPosting" style="cursor: pointer;width: 30px;height: 30px;margin-left: 20px;" />
			</div>
			<div class="Ranking_box">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">热帖排行</span>
					<span @click="go">更多</span>
				</div>
				<div class="Ranking_content">
					<div v-for="item in RankingList" >
						<div v-if="item.weight<4">
							<img src="~assets/num1.png" style="width: 20px;height: 20px;" v-if="item.weight==1" /> 
							<img src="~assets/num2.png" style="width: 20px;height: 20px;" v-if="item.weight==2" />
							<img src="~assets/num3.png" style="width: 20px;height: 20px;" v-if="item.weight==3" />
						</div>
						<span @click="goPostDetail" :class="item.weight<4?'topThree':'bottomList'">{{item.value}}</span>
					</div>
				</div>

			</div>
			<div class="Hot_box">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">休闲区热帖</span>
					<span @click="go">更多</span>
				</div>
				<div class="Ranking_content">
					<div v-for="item in RankingList">
						<div v-if="item.weight<4">
							<img src="~assets/num1.png" style="width: 20px;height: 20px;" v-if="item.weight==1" /> 
							<img src="~assets/num2.png" style="width: 20px;height: 20px;" v-if="item.weight==2" />
							<img src="~assets/num3.png" style="width: 20px;height: 20px;" v-if="item.weight==3" />
						</div>
						<span @click="goPostDetail" :class="item.weight<4?'topThree':'bottomList'">{{item.value}}</span>
					</div>
				</div>
			</div>

		</div>
		<div class="mid_box">
			<div class="mid_title">
				<span style="font-size: 22px;font-weight: bold;">最新精华帖子</span>
				<span @click="go">更多</span>
			</div>
			<div class="mid_content" v-for="item in EssenceList">
				<span @click="goPostDetail" style="cursor: pointer;" >{{item.value}}</span>
			</div>
		</div>
		<div class="right_box">
			<div class="HotSectors">
				<div class="Ranking_title">
					<span style="font-size: 20px;line-height: 40px;color: #2140C8;">热门版块</span>
					<span @click="go">更多</span>
				</div>
				<div class="HotSectors_content">
					<div v-for="item in HotSectorsList">
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
					<div v-for="item in RankingList">
						<div v-if="item.weight<4">
							<img src="~assets/num1.png" style="width: 20px;height: 20px;" v-if="item.weight==1" /> 
							<img src="~assets/num2.png" style="width: 20px;height: 20px;" v-if="item.weight==2" />
							<img src="~assets/num3.png" style="width: 20px;height: 20px;" v-if="item.weight==3" />
						</div>
						<span @click="goPostDetail" :class="item.weight<4?'topThree':'bottomList'">{{item.value}}</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				RankingList: [{
					weight: '1',
					value: '我的考研之路征文，写下你的故事'
				}, {
					weight: '2',
					value: '【参考】19考研各大院校复试分数线汇总'
				}, {
					weight: '3',
					value: '晒出你的复习计划，赢取英语全套参考书'
				}, {}, {
					weight: '4',
					value: '帮找！帮找专业课'
				}, {
					weight: '5',
					value: '诚招男友，希望你单身挺久了'
				}, {
					weight: '6',
					value: '考研找研友'
				}],
				EssenceList: [{
					value: '2019年福州大学化学学院复试经验分享'
				}, {
					value: '2019年福州大学材料学院复试经验分享'
				}, {
					value: '2019年福州大学同济学院复试经验分享'
				}, {
					value: '2019年福州大学水电学院复试经验分享'
				}, {
					value: '2019年福州大学光电学院复试经验分享'
				}, {
					value: '2019年福州大学软件学院复试经验分享'
				}, {
					value: '2019年福州大学自动化学院复试经验分享'
				}],

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
		methods:{
			gooPosting(){
				this.$router.push({
					path:'/community/Posting'
				})
			},
			goPostDetail(){
				this.$router.push({
					path:'/community/PostDetail'
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
