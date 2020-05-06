<template>
	<div class="page">
		<nav aria-label="Page navigation">
		  <ul class="pagination">
			<li>
			  <button>
			     <span class="total">共{{ page.pageNum }}页</span>
			  </button>
			</li>
			<li>
			  <button>
			     <span>当前在第{{ page.currentPage }}页</span>
			  </button>
			</li>
		    <li @click="first">
		      <button  aria-label="Previous">
		        <span aria-hidden="true">首页</span>
		      </button>
		    </li>
			<li @click="pre">
			  <button>
			    <span aria-hidden="true">上一页</span>
			  </button>
			</li>
			<li v-show="page.showFirstIndex != 1">
			    <button><span aria-hidden="true">..</span></button>
			</li>
			<div class="pagination myPageDiv" v-for="index in page.pageShow">
			  <li @click="goto(page.showFirstIndex-1+index)">
				<button>{{ page.showFirstIndex-1+index }}</button>
			  </li>
			</div>
			<li v-show="page.currentPage-1+page.pageShow<page.pageNum">
			  <button>
			    <span aria-hidden="true">..</span>
			  </button>
			</li>
			<li @click="next">
			  <button>
			    <span aria-hidden="true">下一页</span>
			  </button>
			</li>
		    <li @click="last">
		      <button aria-label="Next">
		        <span aria-hidden="true">尾页</span>
		      </button>
		    </li>
		  </ul>
		</nav>
	</div>
</template>

<script>
	export default{
		name:'page',
		created() {
			this.page = this.Page;
		},
		props:{
			Page:{
				type:Object
			}
		},
		data:function(){
			return {
				page:{
				}
			}
			
		},
		methods:{
			//首页
			first(){
				if(this.page.currentPage != 1)
				{
					this.page.currentPage = 1;
					this.page.currentIndex = 0;
					this.page.showFirstIndex = 1;
					this.$emit('first',this.page);
				}
			},
			//尾页
			last(){
				if(this.page.currentPage != this.page.pageNum)
				{
					this.page.currentPage = this.page.pageNum;
					this.page.currentIndex = this.page.pageSize * (this.page.pageNum - 1);
					this.page.showFirstIndex = this.page.pageNum - this.page.pageShow + 1;
					this.$emit('last',this.page);
				}
			},
			//上一页
			pre (){
				if(this.page.currentPage != 1)
				{
					this.page.currentPage -= 1;
					this.page.currentIndex -= this.page.pageSize;
					if(this.page.currentPage < this.page.pageNum - this.page.pageShow + 1)
					{
						this.page.showFirstIndex = this.page.currentPage;
					}
					this.$emit('pre',this.page);
				}
			},
			//下一页
			next(){
				if(this.page.currentPage != this.page.pageNum)
				{
					this.page.currentPage += 1;
					this.page.currentIndex += this.page.pageSize;
					if(this.page.currentPage >= this.page.pageNum - this.page.pageShow + 1)
					{
						this.page.showFirstIndex = this.page.pageNum - this.page.pageShow + 1;
					}
					else
					{
						this.page.showFirstIndex += 1;
					}
					this.$emit('next',this.page);
				}
			},
			//跳转指定页
			goto(pageIndex){
				if(this.page.currentPage != this.page.pageSize * (pageIndex - 1))
				{
					this.page.currentPage = pageIndex;
					this.page.currentIndex = this.page.pageSize * (pageIndex - 1);
					if(this.page.currentPage < this.page.pageNum - this.page.pageShow + 1)
					{
						this.page.showFirstIndex = this.page.currentPage;
					}
					else
					{
						this.page.showFirstIndex = this.page.pageNum - this.page.pageShow + 1;
					}
					this.$emit('goto',this.page);
				}
			}
		}
	}
</script>

<style>
</style>
