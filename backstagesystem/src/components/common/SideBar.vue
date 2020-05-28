<template>
	<div id="sideBar">
	  <div class="col-sm-2">
	  	<ul class="nav nav-pills nav-stacked" v-for="(item,index) in first">
		  <li role="presentation" @click="itemClick(index)">
			<button id="siedBar_btn" class="btn btn-success btn-lg sideBar_btn">
			    <span :class="item.img" aria-hidden="true"></span>
			    <span>		{{ item.name }}</span>  	  				
			</button>
		  </li>	  	
	  	</ul>
	  </div>
	</div>
</template>

<script>
	export default{
		name:'SideBar',
		data: function(){
			return{
				first:[
					{
						name:"资讯管理",
						img:"glyphicon glyphicon-th-list",
						path:"/news/index"
					},
					{
						name:"资讯首页",
						img:"left",
						path:"/news/index"
					},
					{
						name:"院校资讯",
						img:"left",
						path: '/news/college'
					},
					{
						name:"轮播图",
						img:"left",
						path: '/news/carousel'
					},
					{
						name:"用户管理",
						img:"glyphicon glyphicon-user",
						path: '/users'
					},
					{
						name:"用户",
						img:"left",
						path: '/users'
					},
					{
						name:"管理员",
						img:"left",
						path: '/admin'
					},
					{
						name:"社区管理",
						img:"glyphicon glyphicon-comment",
						path: '/community/post'
					},
					{
						name:"帖子管理",
						img:"left",
						path: '/community/post'
					},
					{
						name:"评论管理",
						img:"left",
						path: '/community/comment'
					},
					{
						name:"系统设置",
						img:"glyphicon glyphicon-cog",
						path: '/settings'
					}
				]
			}
		},
		computed:{
			isActive(index){
				
			}
		},
		methods:{
			itemClick:function(index){
				this.$router.push(this.first[index].path);
			}
		}
	}
</script>

<style>
	.left{
		padding-left: 23px;
	}
	
</style>
