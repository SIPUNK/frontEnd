import Vue from 'vue'
import VueRouter from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import Community from '@/views/community/community.vue'
import News from '@/views/news/news.vue'
import User from '@/views/user/user.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/community',
		name: 'Community',
		component: Community
	},
	{
		path: '/news',
		name: 'News',
		component: News
	},
	{
		path: '/user',
		name: 'User',
		component: User
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
