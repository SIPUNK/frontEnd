<template>
	<div id="carousel">
		<!-- 轮播图列表组件 -->
		<div class="newsDiv">
			<div id="divHeader">
				<span class="myspan">
					<br>&nbsp;&nbsp;&nbsp;&nbsp;
					轮播图列表
				</span>
				<button class="btn btn-success mybutton" @click="add">
					添加轮播图
				</button>
				<div class="line">	
				</div>
			</div>
			<div id="divTable">
				<table class="table table-bordered table-hover table-striped">
					<thead>
						<tr>
						  <th>名称</th>
						  <th>缩略图</th>
						  <th>说明</th>
						  <th>添加时间</th>
						  <th class="operation_th">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in dataCurrent">
							<td>{{ item.title }}</td>
							<td><img :src=item.url style="width: 100%;height: 100%;"></td>
							<td>{{ item.content }}</td>
							<td>{{ item.create_time }}</td>
							<td>
								<a @click="edit(item.carousel_id)">编辑  </a>
								<a class="delete" @click="deleteCarousel(item.carousel_id)">删除</a>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="line">
				</div>
			</div>
			<div id="divFooter" class="divFooter">
				<page v-show="!isFind" :Page="Page" v-on:first="first" v-on:last="last" v-on:pre="pre" v-on:next="next" v-on:goto="goto"></page>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import page from "../../common/Page.vue"
	import { getUserdata } from "../../../network/user.js"
	
	export default{
		name:'carouselList',
		inject:["reload"],
		data:function(){
			return{
				dataCurrent:[],
				dataTotal:[],
				checkList:[],
				findId:"",
				findUsername:"",
				isCheckedAll: false,
				isFind: false,
				usernameNoFind:"",
				idNoFind:"",
				Page:{
					//每页显示几条数据
					pageSize:5,
					//显示几页
					pageShow:5,
					//显示的第一页的下标
					showFirstIndex:1,
					//共几页
					pageNum:0,
					//当前显示第几页(默认第一页)
					currentPage:1,
					//当前第一个数据的下标(默认为0)
					currentIndex:0
				}
			}
		},
		created(){
			
		},
		mounted() {
			this.getAll();
		},
		methods:{
			//改变封禁状态
			changeBan(isBan,user_id){
				isBan==0?isBan=1:isBan=0;
				let data = {date:isBan,user_id:user_id};
				this.$http.post("http://118.178.184.69:4396/User/isban",data).then(res =>{
					this.reload();
				})
			},
			//编辑轮播图
			edit(id){
				this.$router.push('/news/carousel/edit/'+id);
			},
			//删除轮播图
			deleteCarousel(id){
				let data = {carousel_id:id};
				this.$http.post('http://118.178.184.69:4396/carousel/deleteCarousel',data).then(res =>{
					this.reload();
				})
			},
			//获取轮播图信息
			getAll(){
				this.$http.post('http://118.178.184.69:4396/carousel/getAllCarousels').then(res =>{
					this.dataTotal = res.data;
					for(let i=0;i<this.Page.pageSize;i++)
					{
						if(this.dataTotal[i] != undefined)
							this.dataCurrent.push(this.dataTotal[i]);
					}
					this.Page.pageNum = Math.floor(this.dataTotal.length / this.Page.pageSize);
					if((this.dataTotal.length % this.Page.pageSize) != 0)
					{
						this.Page.pageNum++;
					}
					if(this.Page.pageShow >= this.Page.pageNum)
					{
						this.Page.pageShow = this.Page.pageNum;
					}
				});
			},
			//首页
			first(page){
				this.Page = page;
				this.dataCurrent = [];
				for(let i=this.Page.currentIndex;i<this.Page.pageSize;i++)
				{
					this.dataCurrent.push(this.dataTotal[i]);
				}	
			},
			//尾页
			last(page){
				this.Page = page;
				this.dataCurrent = [];
				let index = this.Page.currentIndex;
				for(let i=0;i<this.Page.pageSize;i++)
				{
					if(index < this.dataTotal.length)
					{
						this.dataCurrent.push(this.dataTotal[index++]);
					}
				}	
			},
			//上一页
			pre(page){
				this.Page = page;
				this.dataCurrent = [];
				let index = this.Page.currentIndex;
				for(let i=0;i<this.Page.pageSize;i++)
				{
					this.dataCurrent.push(this.dataTotal[index++]);
				}	
			},
			//下一页
			next(page){
				this.Page = page;
				this.dataCurrent = [];
				let index = this.Page.currentIndex;
				for(let i=0;i<this.Page.pageSize;i++)
				{
					if(index < this.dataTotal.length)
					{
						this.dataCurrent.push(this.dataTotal[index++]);
					}
				}	
			},
			//跳转指定页
			goto(page){
				this.Page = page;
				this.dataCurrent = [];
				let index = this.Page.currentIndex;
				for(let i=0;i<this.Page.pageSize;i++)
				{
					if(index < this.dataTotal.length)
					{
						this.dataCurrent.push(this.dataTotal[index++]);
					}
				}	
			},
			add(){
				this.$router.push("/news/carousel/add");
			}
		},
		components:{
			page
		}
	}
</script>

<style>
</style>

