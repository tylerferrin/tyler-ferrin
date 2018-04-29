<template>
	<section class="work">
		<h1 class="work__title">{{this.work.title}}</h1>
		<div class="work__grid">
			<div class="work__photo"></div>
		</div>
	</section>
</template>
<script>
export default {
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
		&__title
			font-family: 'Helvetica', sans-serif
			font-size: 16px
			font-weight: 400
			margin-top: 100px
		&__grid
			display: grid
			grid-template-columns: 1fr 1fr 1fr 1fr
</style>
