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
			  <input type="input" class="form-control find_input" v-model="findInvitation" id="findInput" placeholder="请输入帖子ID">
			  <button class="btn btn-success find_button" @click="findByInvitation">查找</button>
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
						  <td>{{ item.comment_id }}</td>
						  <td>{{ item.content }}</td>
						  <td>{{ item.comment_invitation }}</td>
						  <td>{{ item.comment_user }}</td>
						  <td>{{ getStatus(item.comment_status) }}</td>
						  <td>{{ item.create_time }}</td>
						  <td>{{ item.update_time }}</td>
						  <td>
						  	<a @click="edit(item.comment_id)">详情  </a>
							<a v-show="!item.comment_status" @click="changeBan(item.comment_status,item.comment_id)">隐藏   </a>
							<a v-show="item.comment_status" @click="changeBan(item.comment_status,item.comment_id)">显示   </a>
						  	<a class="delete" @click="deleteComment(item.comment_id)">删除</a>
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
		name:'commentList',
		inject:["reload"],
		data:function(){
			return{
				dataCurrent:[],
				dataTotal:[],
				temp:[],
				checkList:[],
				findId:"",
				findInvitation:"",
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
			changeBan(status,comment_id){
				status==0?status=1:status=0;
				let data = {date:status,comment_id:comment_id};
				this.$http.post("http://118.178.184.69:4396/comment/changestatus",data).then(res =>{
					this.reload();
				})
			},
			edit(id){
				this.$router.push('/community/comment/edit/'+id);
			},
			//删除评论
			deleteComment(id){
				let data = {comment_id:id};
				this.$http.post('http://118.178.184.69:4396/comment/deletecomment',data).then(res =>{
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
			//获取所有评论信息
			getAll(){
				this.$http.post('http://118.178.184.69:4396/comment/getallcomment').then(res =>{
					this.dataTotal = res.data;
					//console.log(res.data);
					
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
					let data = {comment_user:parseInt(this.findId)};
					this.$http.post('http://118.178.184.69:4396/comment/getcommentbyuser',data).then((res)=>{
							if(res.data != "")
							{
								this.dataCurrent = res.data;
								this.isFind = true;
							}
							else
							{
								this.idNoFind = "该用户不存在或者TA没有评论!";
							}
					})
				}
			},
			//按帖子查找评论
			findByInvitation(){
				if(this.findInvitation != "")
				{
					let data = {invitation_id:parseInt(this.findInvitation)};
					this.$http.post('http://118.178.184.69:4396/comment/getinvitationcomment',data).then((res)=>{
						if(res.data != "")
						{
							this.dataCurrent = res.data;
							this.isFind = true;
						}
						else
						{
							this.usernameNoFind = "该帖子不存在或者该帖子没有评论!";
						}
					})
				}
			},
			//清空搜索条件
			clear(){
				if(this.findId != "" || this.findInvitation != "")
				{
					console.log("qk")
					this.findId = "";
					this.findInvitation = "";
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
