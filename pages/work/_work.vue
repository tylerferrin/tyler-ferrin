<template>
	<section class="work">
		<div class="work__grid">
			<WorkImage :work="this.work" />
			<WorkInfo :work="this.work" />
			<!-- <WorkSlider /> -->
		</div>
	</section>
</template>
<script>
import WorkImage from '../../components/WorkImage'
import WorkInfo from '../../components/WorkInfo'
import WorkSlider from '../../components/WorkSlider'

export default {
	components: {
		WorkImage,
		WorkInfo,
		WorkSlider
	},

	beforeCreate() {
		// get the title of the project from params
		let currentWork = this.$route.params.work

		// set the current index in the store
		this.$store.commit('setCurrentProjectIndex', this.$store.state.allProjectUrls.indexOf(currentWork))

		// get the project object using the currentIndex and attach it to the instance
		this.work = this.$store.state.projects[this.$store.state.currentProjectIndex]
	}
}
</script>
<style lang="sass">
	.work
		margin-top: 150px
		@media screen and (max-width: 1024px)
			margin-top: 100px
		&__title
			font-family: 'Helvetica', sans-serif
			font-size: 16px
			font-weight: 400
		&__grid
			display: grid
			grid-template-columns: 1fr 1fr 1fr 1fr
</style>
