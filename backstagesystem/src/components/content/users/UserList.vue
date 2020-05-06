<template>
	<div id="admin" class="newsDiv">
		<div id="divHeader">
			<span class="myspan">
				<br>&nbsp;&nbsp;&nbsp;&nbsp;
				用户列表
			</span>
			<button class="btn btn-success mybutton" @click="add">
				添加用户
			</button>
			<div class="line">	
			</div>
		</div>
		<div id="divTable">
			<table class="table table-bordered table-hover table-striped">
				<thead>
					<tr>
					  <th>选择</th>
					  <th>用户ID</th>
					  <th>用户名</th>
					  <th>昵称</th>
					  <th>密码</th>
					  <th>电话号码</th>
					  <th>性别</th>
					  <th>账号状态</th>
					  <th>发帖数</th>
					  <th>评论数</th>
					  <th>关注</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in dataCurrent">
					  <td><input v-bind:checked="isCheckedAll" type="checkbox" name="checkItem" @click="checkedOne(index)"/></td>
					  <td>{{ item.user_id }}</td>
					  <td>{{ item.username }}</td>
					  <td>{{ item.nickname }}</td>
					  <td>{{ item.password }}</td>
					  <td>{{ item.phone }}</td>
					  <td>{{ getSex(item.sex) }}</td>
					  <td>{{ item.isBan }}</td>
					  <td>{{ item.invitation_number }}</td>
					  <td>{{ item.comment_number }}</td>
					  <td>{{ item.follow }}</td>
					  <td>
					  	<a @click="edit(item.user_id)">编辑  </a>
					  	<a>删除</a>
					  </td>
					</tr>
				</tbody>
			</table>
			<div class="line">
			</div>
		</div>
		<div id="divFooter" class="divFooter">
			<input type="checkbox" id="checkAll" class="checkAll" @click="checkedAll()">  全选
			<a>    批量删除</a>
			<page :Page="Page" v-on:first="first" v-on:last="last" v-on:pre="pre" v-on:next="next" v-on:goto="goto"></page>
		</div>
		
	</div>
</template>

<script>
	import page from "../../common/Page.vue"
	import { getUserdata } from "../../../network/user.js"
	
	export default{
		name:'userList',
		data:function(){
			return{
				dataCurrent:[],
				dataTotal:[],
				checkList:[],
				isCheckedAll: false,
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
			//编辑用户
			edit(id){
				this.$router.push('/users/edit/'+id);
			},
			//获取用户性别
			getSex(sex){
				return sex==0?"女":"男";
			},
			//获取用户信息
			getAll(){
				getUserdata().then(res =>{
					this.dataTotal = res;
					
					for(let i=0;i<this.Page.pageSize;i++)
					{
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
			//单选事件
			checkedOne (index) {
				let idIndex = this.checkList.indexOf(index)
				if (idIndex >= 0) {
				  // 如果已经包含了该项,则删去
				  this.checkList.splice(idIndex, 1)
				} else {
				  // 选中该checkbox
				  this.checkList.push(index)
				}	
			},
			//全选事件
			checkedAll () {
			    this.isCheckedAll = !this.isCheckedAll
			    if (this.isCheckedAll) {
			      // 全选时
			      this.checkList = []
			      for(let i=0;i<this.dataCurrent.length;i++){
					  this.checkList.push(i)
				  }
			    } 
				else {
			      this.checkList = []
			    }  
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
				this.$router.push("/users/add");
			}
		},
		components:{
			page
		}
	}
</script>

<style>
</style>
