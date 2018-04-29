<template>
	<section class="project-grid">
		<div class="project-grid__wrapper">
			<div
				v-for="(project, index) in projects"
				:key="index"
				class="project-grid__project"
			>
				<p class="project-grid__counter">0{{ index + 1 }}</p>
				<p class="project-grid__title">
					<nuxt-link :to="returnUrl(project.title)" >
						{{ project.title }}
					</nuxt-link>
				</p>
			</div>

		</div>
	</section>
</template>
<script>
export default {
	props: [
		'projects'
	],
	methods: {
		returnUrl(title) {
			return 'work/' + title.split(' ').join('-').toLowerCase()
		}
	}
}
</script>
<style lang="sass">
	.project-grid
		grid-column-start: 1
		grid-column-end: 6
		height: 100%
		width: 100%
		&__wrapper
			display: grid
			grid-template-columns: repeat(auto-fill, minmax(125px, 200px))
			grid-column-gap: 1.5vw
			grid-row-gap: 5.5vh
		&__project
			border-bottom: 2px solid black
			color: black
			height: 100px
		&__counter
			font-family: 'Times New Roman', serif
			font-weight: 400
			font-size: 14px
			letter-spacing: .5px
			margin-top: 0
		&__title
			font-size: 1.5vw
			font-family: 'Helvetica', sans-serif
			a
				color: black
				text-decoration: none
				transition: all .25s ease-in-out
				&:hover
					letter-spacing: .5px

</style>
