<template>
	<div id="userIndex">
		<!-- 用户查找组件 -->
		<div id="newsFind" class="newsDiv">
			<h4 class="find_title">版块添加</h4>
			<div class="form-group find_group">
			  <label>版块名称：</label>
			  <input type="input" class="form-control find_input" v-model="plateName" id="findInput" placeholder="请输入版块名称">
			</div>
			<button class="btn btn-success find_button" style="position: relative;left: 30px;bottom: 20px;" @click="add">添加版块</button>
		</div>	
		<!-- 版块列表组件 -->
		<div class="newsDiv">
			<div id="divHeader">
				<span class="myspan">
					<br>&nbsp;&nbsp;&nbsp;&nbsp;
					版块列表
				</span>
				<div class="line">	
				</div>
			</div>
			<div id="divTable">
				<table class="table table-bordered table-hover table-striped">
					<thead>
						<tr>
						  <th>版块ID</th>
						  <th>版块名称</th>
						  
						  <th class="operation_th">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in dataCurrent">
						  <td>{{ item.id }}</td>
						  <td>{{ item.name }}</td>
						  <td>
						  	<a class="delete" @click="deletePlate(item.id)">删除</a>
						  </td>
						</tr>
					</tbody>
				</table>
				<div class="line">
				</div>
			</div>
			<div id="divFooter" class="divFooter">
				<page :Page="Page" v-on:first="first" v-on:last="last" v-on:pre="pre" v-on:next="next" v-on:goto="goto"></page>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import page from "../../common/Page.vue"
	import { getUserdata } from "../../../network/user.js"
	
	export default{
		name:'postList',
		inject:["reload"],
		data:function(){
			return{
				dataCurrent:[],
				dataTotal:[],
				checkList:[],
				plateName:"",
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
			//删除版块
			deletePlate(id){
				let data = {id:id};
				this.$http.post('http://118.178.184.69:4396/plate/deleteplate',data).then(res =>{
					this.reload();
				})
			},
			//获取版块信息
			getAll(){
				this.$http.post('http://118.178.184.69:4396/plate/getPlate').then(res =>{
					this.dataTotal = res.data;
					
					for(let i=0;i<this.Page.pageSize;i++)
					{
						if(this.dataTotal[i] !== undefined)
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
				let data = {name:this.plateName}
				this.$http.post('http://118.178.184.69:4396/plate/addplate',data).then((res)=>{
					this.reload();
				})
			}
		},
		components:{
			page
		}
	}
</script>

<style>
</style>

