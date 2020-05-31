<template>
	<div id="commentIndex">
		<!-- 评论查找组件 -->
		<div id="postFind" class="newsDiv">
			<h4 class="find_title">评论搜索</h4>
			<div class="form-group find_group">
			  <label>查找某个用户的评论：</label>
			  <input type="input" class="form-control find_input" v-model="findId" id="findInput" placeholder="请输入用户ID">
			  <button class="btn btn-success find_button" @click="findById">查找</button>
			  <button class="btn btn-success find_button" @click="clear">清空所有搜索条件</button>
			  <h4 class="nofind" v-model="idNoFind">{{ idNoFind }}</h4>
			</div>
			<div class="form-group find_group">
			  <label>查找某个帖子的评论：</label>
			  <input type="input" class="form-control find_input" v-model="findUsername" id="findInput" placeholder="请输入帖子ID">
			  <button class="btn btn-success find_button" @click="findByUsername">查找</button>
			  <h4 class="nofind" v-model="usernameNoFind">{{ usernameNoFind }}</h4>
			</div>
		</div>	
		<!-- 评论列表组件 -->
		<div class="newsDiv">
			<div id="divHeader">
				<span class="myspan">
					<br>&nbsp;&nbsp;&nbsp;&nbsp;
					评论列表
				</span>
				<div class="line">	
				</div>
			</div>
			<div id="divTable">
				<table class="table table-bordered table-hover table-striped">
					<thead>
						<tr>
						  <th>评论ID</th>
						  <th>评论内容</th>
						  <th>评论所属帖子</th>
						  <th>评论人ID</th>
						  <th>评论状态</th>
						  <th>评论时间</th>
						  <th>评论更新时间</th>
						  <th class="operation_th">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in dataCurrent">
						  <td>{{ item.invitation_id }}</td>
						  <td>{{ item.invitation_title }}</td>
						  <td>{{ item.content }}</td>
						  <td>{{ item.scan_number }}</td>
						  <td>{{ getStatus(item.invitation_status) }}</td>
						  <td>{{ item.create_time }}</td>
						  <td>{{ item.update_time }}</td>
						  <td>
						  	<a @click="edit(item.invitation_id)">详情  </a>
							<a v-show="!item.invitation_status" @click="changeBan(item.invitation_status,item.invitation_id)">隐藏   </a>
							<a v-show="item.invitation_status" @click="changeBan(item.invitation_status,item.invitation_id)">显示   </a>
						  	<a>删除</a>
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
		name:'postList',
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
			changeBan(status,invitation_id){
				status==0?status=1:status=0;
				let data = {date:status,invitation_id:invitation_id};
				this.$http.post("http://118.178.184.69:4396/invitation/changestatus",data).then(res =>{
					this.reload();
				})
			},
			//获取封禁状态
			getStatus(status){
				if(status == 0)
				{
					return "正常"
				}
				else if(status == 1)
				{
					return "隐藏";
				}
				else
				{
					return "";
				}
			},
			//获取帖子信息
			getAll(){
				this.$http.post('http://118.178.184.69:4396/invitation/getinvitation').then(res =>{
					this.dataTotal = res.data;
					console.log(res.data);
					
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
			//按用户ID查找用户
			findById(){
				if(this.findId != "")
				{
					this.$http.post('http://118.178.184.69:4396/User/findbyid',this.findId).then((res)=>{
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
					this.$http.post('http://118.178.184.69:4396/User/findbyname',this.findUsername).then((res)=>{
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
					console.log("qk")
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
				this.$router.push("/community/post/add");
			}
		},
		components:{
			page
		}
	}
</script>

<style>
</style>
