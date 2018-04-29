<template>
  <section class="index">
		<transition
		appear
		name="index-fade"
		mode="out-in">
			<ProjectGrid
				v-if="isProjects"
				:projects="projects"	/>
			<About
				v-if="!isProjects"
				:description="description"	/>
		</transition>
		<SideNav />
  </section>
</template>

<script>
import ProjectGrid from '../components/ProjectGrid'
import SideNav from '../components/SideNav'
import About from '../components/About'
import { mapState } from 'vuex'

export default {
	components: {
		SideNav,
		ProjectGrid,
		About
	},
	data () {
		return {
			projects: this.$store.state.projects,
			description: this.$store.state.description
		}
	},
	computed: mapState([
		'isProjects'
	])
}
</script>

<style lang="sass">
	.index
		position: relative
		top: 20%
		display: grid
		grid-template-columns: repeat(8, minmax(auto, calc(100vw/8)))
		width: 100%


	// index component transition classes
	.index-fade-enter-active,
	.index-fade-leave-active
		transition: opacity .2s cubic-bezier(0.55, 0.055, 0.675, 0.19)

	.index-fade-leave
		opacity: 1

	.index-fade-enter
		opacity: 0


</style>
