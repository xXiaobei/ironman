<template>
	<div id="nav">
		<div class="wrapper ">
			<div class="sidebar" data-color="purple" data-background-color="white">
				<SiderBar />
			</div>
			<div class="main-panel">
				<div class="content">
					<div class="container-fluid">
						<div class="card">
							<div class="card-header card-header-tabs card-header-primary">
								<HeaderBar />
							</div>
							<div class="card-body">
								<router-view />
							</div>
						</div>
						<FooterBar />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
//组件的引用
import SiderBar from '@/components/SiderBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
	name: 'home',
	components: {
		HeaderBar,
		SiderBar,
		FooterBar
	}
}
</script>
