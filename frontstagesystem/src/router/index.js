import Vue from 'vue'
import VueRouter from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import Home from '@/views/home/home.vue'
import Community from '@/views/community/community.vue'
import News from '@/views/news/news.vue'
import User from '@/views/user/user.vue'
import newsDetail from '@/views/news/newsDetail.vue'
import PostDetail from '@/views/community/PostDetail.vue'
import Posting from '@/views/community/Posting.vue'

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
	{
		path: '/news/detail/:school',
		name: 'newsDetail',
		component: newsDetail
	},
	{
		path: '/community/PostDetail',
		name: 'PostDetail',
		component: PostDetail
	},
	{
		path: '/community/Posting',
		name: 'Posting',
		component: Posting
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	// base: '/foreground1/dist',
	routes
})

export default router
