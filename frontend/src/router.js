import Vue from 'vue'
import Router from 'vue-router'
import SiderBar from './views/SiderBar'
import MainContent from './views/MainContent'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: []
})
