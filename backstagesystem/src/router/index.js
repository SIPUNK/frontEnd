import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/login'

import NewsIndex from '../views/news/Index/index'
import Newsadd from '../views/news/Index/newsAdd.vue'
import NewsCarousel from '../views/news/Carousel/carousel'
import NewsCarouselAdd from '../views/news/Carousel/carouselAdd.vue'
import NewsCarouselEdit from '../views/news/Carousel/carouselEdit.vue'

import Users from '../views/users/user'
import UserAdd from '../views/users/userAdd.vue'
import UserEdit from '../views/users/userEdit.vue'
import Admin from '../views/users/admin'
import AdminAdd from '../views/users/adminAdd.vue'

import Post from '../views/community/post.vue'
import PostAdd from '../views/community/postAdd.vue'
import PostEdit from '../views/community/postEdit.vue'
import Comment from '../views/community/comment.vue'
import CommentEdit from '../views/community/commentEdit.vue'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

 

const routes = [
	{
		path: '',
		redirect: '/login'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/news/index',
		component: NewsIndex
	},
	{
		path: '/news/index/add',
		component: Newsadd
	},
	{
		path: '/news/carousel',
		component: NewsCarousel
	},
	{
		path: '/news/carousel/add',
		component: NewsCarouselAdd
	},
	{
		path: '/news/carousel/edit/:id',
		component: NewsCarouselEdit
	},
	{
		path: '/users',
		component: Users
	},
	{
		path: '/users/add',
		component: UserAdd
	},
	{
		path: '/users/edit/:id',
		component: UserEdit
	},
	{
		path: '/admin',
		component: Admin
	},
	{
		path: '/admin/add',
		component: AdminAdd
	},
	{
		path: '/community/post',
		component: Post
	},
	{
		path: '/community/post/add',
		component: PostAdd
	},
	{
		path: '/community/post/edit/:id',
		component: PostEdit
	},
	{
		path: '/community/comment',
		component: Comment
	},
	{
		path: '/community/comment/edit/:id',
		component: CommentEdit
	},
]

const router = new VueRouter({
	routes
})


//3.导出router
export default router