<template>
	<div id="userIndex">
		<!-- 用户查找组件 -->
		<div id="newsFind" class="newsDiv">
			<h4 class="find_title">用户搜索</h4>
			<div class="form-group find_group">
			  <label>按用户ID查找：</label>
			  <input type="input" class="form-control find_input" v-model="findId" id="findInput" placeholder="请输入用户ID">
			  <button class="btn btn-success find_button" @click="findById">查找</button>
			  <button class="btn btn-success find_button" @click="clear">清空所有搜索条件</button>
			  <h4 class="nofind" v-model="idNoFind">{{ idNoFind }}</h4>
			</div>
			<div class="form-group find_group">
			  <label>按用户名查找：</label>
			  <input type="input" class="form-control find_input" v-model="findUsername" id="findInput" placeholder="请输入用户名">
			  <button class="btn btn-success find_button" @click="findByUsername">查找</button>
			  <h4 class="nofind" v-model="usernameNoFind">{{ usernameNoFind }}</h4>
			</div>
		</div>	
		<!-- 用户列表组件 -->
		<div class="newsDiv">
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
						  <th class="operation_th">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in dataCurrent">
						  <td>{{ item.user_id }}</td>
						  <td>{{ item.username }}</td>
						  <td>{{ item.nickname }}</td>
						  <td>{{ item.password }}</td>
						  <td>{{ item.phone }}</td>
						  <td>{{ getSex(item.sex) }}</td>
						  <td>{{ getBan(item.isBan) }}</td>
						  <td>{{ item.invitation_number }}</td>
						  <td>{{ item.comment_number }}</td>
						  <td>{{ item.follow }}</td>
						  <td>
						  	<a @click="edit(item.user_id)">编辑  </a>
							<a v-show="!item.isBan" @click="changeBan(item.isBan,item.user_id)">封禁   </a>
							<a v-show="item.isBan" @click="changeBan(item.isBan,item.user_id)">解封   </a>
						  	<a class="delete">删除</a>
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
		name:'userList',
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
			//编辑用户
			edit(id){
				this.$router.push('/users/edit/'+id);
			},
			//获取封禁状态
			getBan(isBan){
				if(isBan == 0)
				{
					return "正常"
				}
				else if(isBan == 1)
				{
					return "封禁";
				}
				else
				{
					return "";
				}
			},
			//获取用户性别
			getSex(sex){
				if(sex == 0)
				{
					return "女"
				}
				else if(sex == 1)
				{
					return "男";
				}
				else
				{
					return "";
				}
			},
			//获取用户信息
			getAll(){
				this.$http.post('http://118.178.184.69:4396/User/findall').then(res =>{
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
			//按用户ID查找用户
			findById(){
				if(this.findId != "")
				{
					this.idNoFind = "";
					this.usernameNoFind = "";
					let data = {"user_id":parseInt(this.findId)} 
					this.$http.post('http://118.178.184.69:4396/User/findbyid',data).then((res)=>{
							if(res.data != "")
							{
								this.dataCurrent = [];
								this.dataCurrent[0] = res.data;
								this.isFind = true;
							}
							else
							{
								this.idNoFind = "该ID不存在!";
							}
					})
				}
			},
			//按用户名查找用户
			findByUsername(){
				if(this.findUsername != "")
				{
					this.idNoFind = "";
					this.usernameNoFind = "";
					let data1 = {"username":this.findUsername} 
					this.$http.post('http://118.178.184.69:4396/User/findbyname',data1).then(res =>{
						if(res.data != "")
						{
							this.dataCurrent = [];
							this.dataCurrent[0] = res.data;
							this.isFind = true;
						}
						else
						{
							this.usernameNoFind = "该用户名不存在!";
						}
					})
				}
			},
			//清空搜索条件
			clear(){
				if(this.findId != "" || this.findUsername != "")
				{
					this.findId = "";
					this.findUsername = "";
					this.idNoFind = "";
					this.usernameNoFind = "";
					this.isFind = false;
					this.dataCurrent = [];
					let index = this.Page.currentIndex;
					for(let i=0;i<this.Page.pageSize;i++)
					{
						if(index < this.dataTotal.length)
						{
							this.dataCurrent.push(this.dataTotal[index++]);
						}
					}	
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
