<template>
	<section class="work-slider">
		<div class="previous">
			<nuxt-link
				v-if="this.currentProjectIndex !== 0"
				:to="this.previousProject()">
				PREVIOUS
			</nuxt-link>
		</div>
		<div class="next">
			<nuxt-link
				v-if="this.currentProjectIndex !== (this.projectLength - 1) "
				:to="this.nextProject()">
				NEXT
			</nuxt-link>
		</div>
	</section>
</template>
<script>
import { mapState } from 'vuex'

export default {
	data () {
		return {
			projectLength: this.$store.state.projects.length
		}
	},
	computed: mapState([ 'currentProjectIndex' ]),
	methods: {
		nextProject() {
			let nextTitle = this.$store.state.allProjectUrls[this.$store.state.currentProjectIndex + 1]
			if (nextTitle) {
				return nextTitle
			}
		},
		previousProject() {
			let nextTitle = this.$store.state.allProjectUrls[this.$store.state.currentProjectIndex - 1]
			if (nextTitle) {
				return nextTitle
			}
		}
	}
}
</script>
<style lang="sass">
	.work-slider
		grid-column-start: 1
		grid-column-end: 3
		grid-row-start: 2
		border-top: 2px solid black
		margin-top: 14px
		display: flex
		flex-direction: row
		justify-content: space-between
		width: 50%
		@media screen and (max-width: 1024px)
			width: 75%
		@media screen and (max-width: 768px)
			width: 100%
			padding-bottom: 50px
		a
			display: block
			margin-top: 16px
			font-size: 1.25vw
			font-family: 'Helvetica', sans-serif
			letter-spacing: .5px
			color: black
			text-decoration: none
			&:focus
				color: black
			@media screen and (max-width: 1024px)
				font-size: 14px

</style>
