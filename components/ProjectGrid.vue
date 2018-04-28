<template>
	<section class="project-grid">
		<div class="project-grid__wrapper">
			<div class="project-grid__project">
				<h1>project</h1>
			</div>
			<div class="project-grid__project">
				<h1>project</h1>
			</div>
			<div class="project-grid__project">
				<h1>project</h1>
			</div>
			<div class="project-grid__project">
				<h1>project</h1>
			</div>
			<div class="project-grid__project">
				<h1>project</h1>
			</div>
			<div class="project-grid__project">
				<h1>project</h1>
			</div>

			<div class="project-grid__project">
				<h1>project</h1>
			</div><div class="project-grid__project">
				<h1>project</h1>
			</div>

		</div>
	</section>
</template>
<script>
export default {
	props: [
		'projects'
	]
}
</script>
<style lang="sass">
	.project-grid
		grid-column-start: 1
		grid-column-end: 6
		background-color: red
		height: 100%
		width: 100%
		padding-top: 25px
		&__wrapper
			display: grid
			grid-template-columns: repeat(auto-fill, minmax(150px,auto))
		&__project
			border-top:
			color: black
</style>
