//引入第三方库lodash
import _ from 'lodash'

export default {
	setFrozenMenu(state, payload) {
		//设置顶部导航栏的固定菜单
		//规定所有菜单中第一个为固定菜单，后台数据对菜单顺序进行监控
		state.frozenMenu = payload
	},
	setCurrentMenu(state, payload) {
		if (payload === '/') payload = '/dash'
		const cm = _.find(state.menus, m => {
			return m.path == payload
		})
		//设置当前的菜单
		state.currentMenu = cm
		//固定菜单不添加到全局打开菜单中
		if (cm.path !== state.frozenMenu.path && _.findIndex(state.globalTabs, cm) === -1) {
			//将当前菜单添加到全局已打开菜单数组
			state.globalTabs.push(cm)
		}
	}
}
