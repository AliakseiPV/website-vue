import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/project',
		name: 'project',
		component: () => import('../pages/ProjectPage.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../pages/ArticlePage.vue')
	},
	{
		path: '/project-details',
		name: 'project-details',
		component: () => import('../pages/ProjectDetailsPage.vue')
	},
	{
		path: '/blog-details',
		name: 'blog-details',
		component: () => import('../pages/BlogDetails.vue')
	},
	{
		path: '*',
		name: 'notfound',
		component: () => import('../pages/NotFoundPage.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router