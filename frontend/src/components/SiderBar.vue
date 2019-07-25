<template>
	<div class="sidebar" data-color="green" data-background-color="white">
		<div class="logo">
			<div class="logotext"><img src="../assets/logo.png" /> IronMain</div>
		</div>
		<div class="sidebar-wrapper">
			<ul class="nav">
				<router-link
					v-for="(menu, index) in menus"
					:key="index"
					:to="menu.path"
					class="nav-item"
					:class="currentMenu.path === menu.path ? 'active' : ''"
					tag="li"
				>
					<a class="nav-link">
						<i class="fas" :class="menu.icons"></i>
						<p>{{ menu.name }}</p>
					</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
	data() {
		return {}
	},
	methods: {
		//映射mapMutations到局部的methods中
		//此处映射可以理解为 映射 this.addTab(payload) 到 this.$store.commit('addTab',payload)
		...mapMutations(['setCurrentMenu', 'setFrozenMenu'])
	},
	computed: {
		...mapState(['menus', 'currentMenu'])
	},
	mounted() {
		//菜单挂载后，设置第一个菜单为顶部导航栏的固定菜单
		this.setFrozenMenu(this.menus[0])
		//设置当前选中菜单
		this.setCurrentMenu(this.$route.path)
	},
	watch: {
		//监控路由状态变化
		$route() {
			this.setCurrentMenu(this.$route.path)
		}
	}
}
</script>

