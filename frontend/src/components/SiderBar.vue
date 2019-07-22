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
					:class="showDefaultClass(index)"
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
		return {
			//菜单是否默认激活
			showDefalt: false
		}
	},
	methods: {
		//映射mapMutations到局部的methods中
		//此处映射可以理解为 映射 this.addTab(payload) 到 this.$store.commit('addTab',payload)
		...mapMutations(['addTab']),
		showDefaultClass: function(index) {
			//因为要使用this关键字，故采用常规函数写法
			if (this.showDefalt && index === 0) return true
			else return false
		}
	},
	computed: {
		...mapState(['menus'])
	},
	mounted() {
		this.showDefalt = true
		const tabItemClose = false
		this.addTab({ ...this.menus[0], tabItemClose })
		//console.log(this.menus)
	},
	watch: {
		//监控路由状态变化
		$route() {
			this.showDefalt = false
		}
	}
}
</script>

