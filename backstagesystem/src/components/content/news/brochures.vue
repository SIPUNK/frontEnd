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
					<tr v-for="(item,index) in data1">
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
			<nav aria-label="Page navigation">
			  <ul class="pagination">
				<li>
				  <a>
				     <span class="total">共{{ Page.pageNum }}页</span>
				  </a>
				</li>
			    <li>
			      <a href="#" aria-label="Previous">
			        <span aria-hidden="true">首页</span>
			      </a>
			    </li>
				<li>
				  <a>
				    <span aria-hidden="true">上一页</span>
				  </a>
				</li>
				<div class="pagination myPageDiv" v-for="(item,index) in Page.pageNum">
				  <li class=""><a>{{ index+1 }}</a></li>
				</div>
				<li>
				  <a>
				    <span aria-hidden="true">下一页</span>
				  </a>
				</li>
			    <li>
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
			
		},
		methods:{
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
			checkedAll () {
			    this.isCheckedAll = !this.isCheckedAll
			    if (this.isCheckedAll) {
			      // 全选时
			      this.checkList = []
			      for(let i=0;i<this.data1.length;i++){
					  this.checkList.push(i)
				  }
			    } 
				else {
			      this.checkList = []
			    }  
			}
		},
		data:function(){
			return{
				data1:[
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
					}
				],
				checkList:[],
				isCheckedAll: false,
				Page:{
					//每页显示几条数据
					pageSize:5,
					//共几页
					pageNum:2,
					//当前显示数据(默认第一页)
					currentPage:0
				}
			}
		}
	}
</script>

<style>
</style>
