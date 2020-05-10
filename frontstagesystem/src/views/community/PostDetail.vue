<template>
	<div class="contain_box">
		<div class="postDetailBox">
			<div class="Detail_box">
				<div class="headImg">
					<el-image style="width: 120px; height: 120px" :src="headImgUrl"></el-image>
				</div>
				<div class="Detail_right">
					<div class="comment_title">
						<div class="Detail_title">
							<span>{{UserName}}</span>
							<el-tag type="info">楼主</el-tag>
							<span>{{date}}</span>
						</div>
						<div></div>
					</div>
					<div class="Detail_content">
						<span v-for="item in content"> {{item.value}}</span>
					</div>
				</div>
			</div>
			<div class="comment_box" v-for="item in commentList">
				<div class="headImg">
					<el-image style="width: 120px; height: 120px" :src="item.url"></el-image>
				</div>
				<div class="Detail_right">
					<div class="comment_title">
						<div style="display: flex;flex-direction: row;">
							<div class="Detail_title">
								<span>{{item.UserName}}</span>
								<span>{{item.date}}</span>
							</div>
							<div class="comment_mid">
								<img style="width: 24px; height: 24px;cursor: pointer;" src="~assets/zan.png"></img>
								<span style="margin-left: 10px;">赞({{item.number}})</span>
							</div>
						</div>
						<div style="margin-right: 20px;cursor: pointer;">
							<span>引用</span>
						</div>
					</div>
					<div class="Detail_content">
						<span>{{item.content}}</span>
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
				headImgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				UserName: '雪之下雪乃',
				date: '2020-03-22 22:28',
				content:[{
					value:'　本人是福大2011级研究生，是调剂过来的。当初准备复试时也是感觉毫无头绪、没有方向，论坛里也得不到什么实质性的有用信息。鉴于此，本人根据自己和周围同学的复试经历，特整理出了关于复试的相关内容，量虽然不多，但应该包含复试常见的一些基本问题。相信你会有收获！'
				},{
					value:'　复试成绩满分100分，其中专业课测试40分，综合素质及能力测试40分，专业外语8分，基础外语听力8分，基础外语口语4分。复试成绩占总成绩的50%。复试比例是比较重的，所以必须认真对待。初试成绩比较高的童鞋千万不能掉以轻心！'
				},{
					value:'　笔试'
				},{
					value:'　1．专业课部分'
				},{
					value:'　　本人考的是物理化学实验，一共是10个选择题，5个问答题（有一个关于原电池电动势的），一个实验设计（氧弹测反应热），考试时间1个小时。PS：监考没有那么严，考试应该可以不太过分的用用不良手段，反正都是以考高分为目的。'
				},{
					value:'　　2．专业外语'
				},{
					value:'　　专业外语跟专业课测试是同时进行的，就是在半个小时内翻译完一篇文章，不过时间有点小紧。物化专业翻译的是一篇关于化学变化和物理变化的文章，比较简单，无机等专业翻译的好像是关于色谱的一篇文章，个人觉得相对难度要大一点。应该注意的是，翻译是可以使用词典等工具的，但是在官方的通知上没看到这方面的说明。建议各位带上备用。'
				},{
					value:'　　3．外语听力'
				},{
					value:'　　难度就跟4级听力差不多，不过只有选择题，条件允许的话可以在考前练习一下听力稍微熟悉一下，以免考试时不在状态。'
				},{
					value:'　　面试'
				},{
					value:'　　综合素质及能力测试'
				},{
					value:'　　即为专业面试，是分组进行的，每组10多名同学，每组大概6位老师，复试顺序是各组抽签决定的。每位考生先抽取两道题回答，然后是老师自由提问。时间为15分钟到30分钟不等。个人觉得抽签顺序靠后的同学是比较有优势的，因为每组的题库都是一样的，前面复试的同学抽到的题目也有可能被你抽到，复试进行到一定时候，题目已经被你掌握得差不多了，当然这仅限于你见到题目不会完全无准备，老师也会拓展提问的，只要不至于完全冷场、什么都不说就行。'
				},{
					value:'　　注：这部分尤其重要，老师的态度决定一切！'
				},{
					value:'　　部分复试题目（由于记忆不全，可能会有偏差）'
				},{
					value:'　　1．什么是“三传一反”？你怎样与所学的课程相联系？'
				},{
					value:'　　2．能不能用直接分馏的方法制无水乙醇？为什么？（乙醇与水形成恒沸点化合物）'
				},{
					value:'　　3．食用油为什么不能用塑料桶装？'
				},{
					value:'　　4．鸡蛋能不能和豆浆一起食用？为什么？'
				},{
					value:'　　5．化学试剂有哪几种规格？各用什么颜色的字体标明？'
				},{
					value:'　　6．什么是热力学第一定律及第二定律？怎么体现？'
				},{
					value:'　　7．陈酒为什么越放越香？（酯类具芳香味）'
				},{
					value:'　　8．纳米材料与其他材料相比有什么优势？'
				},{
					value:'　　9．蒸发与蒸馏的区别。'
				},{
					value:'　　10．分离混合物的方法有哪些？原理？'
				},{
					value:'　　11．红外、紫外、荧光的原理？'
				},{
					value:'　　12．怎样把糖水中的糖、水分离？'
				},{
					value:'　　基础外语口语'
				},{
					value:'　　这部分一般是一对一进行的（本来是2个老师，此举是为提高效率），每个人3到5分钟。就是有若干题目，自己抽取一道就行。前面一个人的回答时间就是你的准备时间，如果你自己就抽到的话题说的时间太短，老师会提相关问题，整体不会太难。话题不会太偏，譬如Man-made beauty，Teamwork，One-parent family，Science等等。'
				},{
					value:'　　专业面试是最后进行的，专业面试结束，你的整体成绩确定，如果在本专业排名比较靠后，将会有第二轮面试，第二轮表现不佳的被淘汰。'
				},{
					value:'　　希望各位好好把握机会，祝各位顺利！'
				}
				],
				commentList: [{
					url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
					UserName: '陈朝帏',
					date: '2020-03-22 22:28',
					number: '28',
					content: '好文给赞！！！！！！'

				}, {
					url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					UserName: '陈朝帏',
					date: '2020-03-22 22:28',
					number: '28',
					content: '好文给赞！！！！！！'

				}]
			}
		}
	}
</script>

<style>
	.contain_box {
		margin: 20px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}

	.postDetailBox {
		width: 100%;
		border: 1px solid #BBBBBB;
		min-width: 600px;
	}

	.Detail_box,
	.comment_box {
		margin: 20px 0px 20px 20px;
		/* width: 100%; */
		/* min-width:320px; */
		display: flex;
		flex-direction: row;
		/* border: 1px solid #000000; */
	}

	.headImg {
		width: 120px;
		/* min-width: 120px; */
		margin-right: 20px;
	}

	.Detail_right {
		width: 100%;
		min-width: 320px;
		flex-direction: column;
		/* border: 1px solid #000000; */
		border-bottom: 1px solid #BBBBBB;
	}
	.comment_box:last-child .Detail_right{
		border: none;
	}

	.comment_title {
		width: 100%;
		display: flex;
		flex-direction: row;
		line-height: 40px;
		justify-content: space-between;
	}

	.Detail_title {
		line-height: 40px;
		border-bottom: 1px solid #BBBBBB;
		/* width: 50%; */
	}

	.Detail_title>span {
		margin-right: 10px;

	}
	.comment_mid{
		margin-left: 10px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.Detail_content {
		/* border: 1px solid #000000; */
		/* border-bottom: 1px solid #BBBBBB; */
		/* width: 100%; */
		margin: 20px;
		display: flex;
		flex-direction: column;
	}
</style>
