<template>
	<div class="nav-tabs-navigation">
		<div class="nav-tabs-wrapper">
			<ul class="nav nav-tabs" data-tabs="tabs">
				<li class="nav-item">
					<router-link
						:to="frozenMenu.path"
						class="nav-link"
						:class="currentMenu.path == frozenMenu.path ? 'active' : ''"
						data-toggle="tab"
						v-if="frozenMenu.path"
					>
						<i class="fas" :class="frozenMenu.icons"></i>{{ frozenMenu.name }}
						<div class="ripple-container"></div>
					</router-link>
				</li>
				<li class="nav-item" v-for="(menu, index) of globalTabs" :key="index">
					<router-link
						:to="menu.path"
						class="nav-link"
						:class="currentMenu.path == menu.path ? 'active' : ''"
						data-toggle="tab"
						v-if="menu"
					>
						<i class="fas" :class="menu.icons"></i>{{ menu.name }}
						<span aria-hidden="true" class="top_header_c">&times;</span>
						<div class="ripple-container"></div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['frozenMenu', 'globalTabs', 'currentMenu'])
	},
	mounted() {
		//console.log(this.frozenMenu.name)
		//console.log(this.currentMenu)
	}
}
</script>

