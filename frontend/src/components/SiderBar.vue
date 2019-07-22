<template>
	<div class="sidebar" data-color="green" data-background-color="white">
		<div class="logo">
			<div class="logotext"><img src="../assets/logo.png" /> IronMain</div>
		</div>
		<div class="sidebar-wrapper">
			<ul class="nav">
				<router-link v-for="menu in menus" :key="menu.name" :to="'{{ menu.path }}'" class="nav-item" tag="li">
					<a class="nav-link">
						<i class="fas fa-tasks"></i>
						<p>{{ menu.name }}</p>
					</a>
				</router-link>
				<!-- <router-link v-for="menu in menus" :key="menu"> -->
				<!-- <router-link :to="'/test'" active-class="active" class="nav-item active" tag="li">
					<a class="nav-link" href="./dashboard.html">
						<font-awesome-icon :icon="['fas', 'tasks']" size="2x" />
						<p>test</p>
					</a>
				</router-link>　-->
				<!-- <li class="nav-item active  ">
					<a class="nav-link" href="./dashboard.html">
						<font-awesome-icon :icon="['fas', 'tasks']" size="2x" />
						<p>Dashboard</p>
					</a>
				</li> -->
				<!--<li class="nav-item ">
					<a class="nav-link" href="./user.html">
						<i class="material-icons">person</i>
						<p>User Profile</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./tables.html">
						<i class="material-icons">content_paste</i>
						<p>Table List</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./typography.html">
						<i class="material-icons">library_books</i>
						<p>Typography</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./icons.html">
						<i class="material-icons">bubble_chart</i>
						<p>Icons</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./map.html">
						<i class="material-icons">location_ons</i>
						<p>Maps</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./notifications.html">
						<i class="material-icons">notifications</i>
						<p>Notifications</p>
					</a>
				</li>
				<li class="nav-item ">
					<a class="nav-link" href="./rtl.html">
						<i class="material-icons">language</i>
						<p>RTL Support</p>
					</a>
				</li>
				<li class="nav-item active-pro ">
					<a class="nav-link" href="./upgrade.html">
						<i class="material-icons">unarchive</i>
						<p>Upgrade to PRO</p>
					</a>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {}
	},
	computed: {
		...mapState(['menus'])
	},
	mounted() {
		//console.log(this.menus)
	}
}
</script>

