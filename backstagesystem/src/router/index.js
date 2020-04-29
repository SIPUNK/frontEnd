import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/login'

import HomeIndex from '../views/home/index'

import NewsIndex from '../views/news/Index/index'
import Newsadd from '../views/news/Index/newsAdd.vue'
import NewsCollege from '../views/news/College/collegeNews'
import NewsCarousel from '../views/news/Carousel/carousel'

import Users from '../views/users/user'
import Admin from '../views/users/admin'

import CommunityIndex from '../views/community/index'
import CommunityDetail from '../views/community/detail'

import Settings from '../views/settings/settings'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: HomeIndex
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
		path: '/news/college',
		component: NewsCollege
	},
	{
		path: '/news/carousel',
		component: NewsCarousel
	},
	{
		path: '/users',
		component: Users
	},
	{
		path: '/admin',
		component: Admin
	},
	{
		path: '/community/index',
		component: CommunityIndex
	},
	{
		path: '/community/detail',
		component: CommunityDetail
	},
	{
		path: '/settings',
		component: Settings
	}
]

const router = new VueRouter({
	routes
})

//3.导出router
export default router