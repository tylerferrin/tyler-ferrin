<template>
  <section class="index">
		<ProjectGrid />
  </section>
</template>

<script>
import ProjectGrid from '../components/ProjectGrid'
export default {
	components: {
		ProjectGrid
	},
	data () {
		return {
			projects: this.$store.state.projects
		}
	}
}
</script>

<style lang="sass">
	.index
		margin-top: 20px
		display: grid
		grid-template-columns: repeat(8, auto)
		width: 100%
		height: 500px
</style>
