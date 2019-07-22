import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import DashBoard from '@/components/bll/DashBoard.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: Home,
			//路由被激活时的样式
			linkExactActiveClass: 'active',
			children: [
				{
					//如果/下没有匹配到其他子路由时,/的<router-view>是什么都不会显示的
					//如果你想让它显示点什么.可以将path:''.设为空.此时UserDefault就是默认显示的组件.
					//如果子组件设置了默认组件，则需要删除父路由中的name属性
					path: '',
					name: 'default',
					component: DashBoard
				},
				{
					path: '/dash',
					name: 'dashBoard',
					component: () => import('./components/bll/DashBoard.vue')
				},
				{
					path: '/auth',
					name: 'authManager',
					component: () => import('./components/bll/AuthManager.vue')
				},
				{
					path: '/domain',
					name: 'domainManager',
					component: () => import('./components/bll/DomainManager.vue')
				},
				{
					path: '/publish',
					name: 'publishManager',
					component: () => import('./components/bll/PublishManager.vue')
				},
				{
					path: '/server',
					name: 'serverManager',
					component: () => import('./components/bll/ServerManager.vue')
				},
				{
					path: '/template',
					name: 'templateManager',
					component: () => import('./components/bll/TemplateManager.vue')
				}
			]
		}
	]
})
