<template>
	<div id="news2" class="newsDiv">
		<div id="divHeader">
			<span class="myspan">
				<br>&nbsp;&nbsp;&nbsp;&nbsp;
				招生简章
			</span>
			<button class="btn btn-success mybutton">
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
			{{ Page.currentPage }}
			{{ Page.pageNum }}
			{{ Page.currentIndex }}
			<nav aria-label="Page navigation">
			  <ul class="pagination">
				<li>
				  <a>
				     <span class="total">共{{ Page.pageNum }}页</span>
				  </a>
				</li>
				<li>
				  <a>
				     <span>当前在第{{ Page.currentPage }}页</span>
				  </a>
				</li>
			    <li @click="first">
			      <a  aria-label="Previous">
			        <span aria-hidden="true">首页</span>
			      </a>
			    </li>
				<li @click="pre">
				  <a>
				    <span aria-hidden="true">上一页</span>
				  </a>
				</li>
				<li v-show="Page.showFirstIndex != 1">
				  <a>
				    <span aria-hidden="true">..</span>
				  </a>
				</li>
				<div class="pagination myPageDiv" v-for="index in Page.pageShow">
				  <li @click="goto(Page.showFirstIndex-1+index)"><a>{{ Page.showFirstIndex-1+index }}</a></li>
				</div>
				<li v-show="Page.currentPage-1+Page.pageShow<Page.pageNum">
				  <a>
				    <span aria-hidden="true">..</span>
				  </a>
				</li>
				<li @click="next">
				  <a>
				    <span aria-hidden="true">下一页</span>
				  </a>
				</li>
			    <li @click="last">
			      <a aria-label="Next">
			        <span aria-hidden="true">尾页</span>
			      </a>
			    </li>
			  </ul>
			</nav>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'brochures',
		
		created() {
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
				//console.log(index)
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
			first(){
				if(this.Page.currentPage != 1)
				{
					this.dataCurrent = [];
					this.Page.currentPage = 1;
					this.Page.currentIndex = 0;
					this.Page.showFirstIndex = 1;
					for(let i=this.Page.currentIndex;i<this.Page.pageSize;i++)
					{
						this.dataCurrent.push(this.dataTotal[i]);
					}
				}
			},
			//尾页
			last(){
				if(this.Page.currentPage != this.Page.pageNum)
				{
					this.dataCurrent = [];
					this.Page.currentPage = this.Page.pageNum;
					this.Page.currentIndex = this.Page.pageSize * (this.Page.pageNum - 1);
					this.Page.showFirstIndex = this.Page.pageNum - this.Page.pageShow + 1;
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
			//上一页
			pre (){
				if(this.Page.currentPage != 1)
				{
					this.dataCurrent = [];
					this.Page.currentPage -= 1;
					this.Page.currentIndex -= this.Page.pageSize;
					if(this.Page.currentPage < this.Page.pageNum - this.Page.pageShow + 1)
					{
						this.Page.showFirstIndex = this.Page.currentPage;
					}
					let index = this.Page.currentIndex;
					for(let i=0;i<this.Page.pageSize;i++)
					{
						this.dataCurrent.push(this.dataTotal[index++]);
					}
				}
			},
			//下一页
			next(){
				if(this.Page.currentPage != this.Page.pageNum)
				{
					this.dataCurrent = [];
					this.Page.currentPage += 1;
					this.Page.currentIndex += this.Page.pageSize;
					if(this.Page.currentPage >= this.Page.pageNum - this.Page.pageShow + 1)
					{
						this.Page.showFirstIndex = this.Page.pageNum - this.Page.pageShow + 1;
					}
					else
					{
						this.Page.showFirstIndex += 1;
					}
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
			//跳转指定页
			goto(page){
				if(this.Page.currentPage != this.Page.pageSize * (page - 1))
				{
					this.dataCurrent = [];
					this.Page.currentPage = page;
					this.Page.currentIndex = this.Page.pageSize * (page - 1);
					if(this.Page.currentPage < this.Page.pageNum - this.Page.pageShow + 1)
					{
						this.Page.showFirstIndex = this.Page.currentPage;
					}
					else
					{
						this.Page.showFirstIndex = this.Page.pageNum - this.Page.pageShow + 1;
					}
					let index = this.Page.currentIndex;
					for(let i=0;i<this.Page.pageSize;i++)
					{
						if(index < this.dataTotal.length)
						{
							this.dataCurrent.push(this.dataTotal[index++]);
						}
					}
				}
			}
		},
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
		}
	}
</script>

<style>
</style>
