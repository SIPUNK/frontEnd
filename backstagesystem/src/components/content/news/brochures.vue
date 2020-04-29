<template>
	<div id="news2" class="newsDiv">
		<div id="divHeader">
			<span class="myspan">
				<br>&nbsp;&nbsp;&nbsp;&nbsp;
				招生简章
			</span>
			<button class="btn btn-success mybutton" @click="add">
				添加文章
			</button>
			<div class="line">	
			</div>
		</div>
		<div id="divTable">
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
					  <th>选择</th>
					  <th>简章名称</th>
					  <th>修改时间</th>
					  <th>操作</th>					
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in dataCurrent">
					  <td><input v-bind:checked="isCheckedAll" type="checkbox" name="checkItem" @click="checkedOne(index)"/></td>
					  <td>{{ item.name }}</td>
					  <td>{{ item.date }}</td>
					  <td>
					  	<a>编辑  </a>
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
	
	export default{
		name:'brochures',
		data:function(){
			return{
				dataCurrent:[],
				dataTotal:[
					{
						name:"简章1",
						date:"1月"
					},
					{
						name:"简章2",
						date:"1月"
					},
					{
						name:"简章3",
						date:"1月"
					},
					{
						name:"简章4",
						date:"2月"
					},
					{
						name:"简章5",
						date:"2月"
					},
					{
						name:"简章6",
						date:"2月"
					},
					{
						name:"简章7",
						date:"2月"
					},
					{
						name:"简章8",
						date:"2月"
					},
					{
						name:"简章9",
						date:"2月"
					},
					{
						name:"简章10",
						date:"2月"
					}
				],
				checkList:[],
				isCheckedAll: false,
				Page:{
					//每页显示几条数据
					pageSize:2,
					//显示几页
					pageShow:3,
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
		created() {
			document.title = "资讯首页";
			for(let i=0;i<this.Page.pageSize;i++)
			{
				this.dataCurrent.push(this.dataTotal[i]);
			}
			this.Page.pageNum = Math.floor(this.dataTotal.length / this.Page.pageSize);
			if((this.dataTotal.length % this.Page.pageSize) != 0)
			{
				this.Page.pageNum++;
			}
		},
		methods:{
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
				this.$router.push("/news/index/add");
			}
		},
		components:{
			page
		}
	}
</script>

<style>
</style>
