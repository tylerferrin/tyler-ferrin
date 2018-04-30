<template>
	<section class="side-nav">
		<ul class="side-nav__list">

			<li
				class="side-nav__list-item"
				v-bind:class="{ 'active': !isProjects  }"
				@click="toggleIndexComponents(false)"
			>
				<nuxt-link to="/">
					About
				</nuxt-link>
			</li>
			<li
				class="side-nav__list-item"
				@click="toggleIndexComponents(true)"
				v-bind:class="{ 'active': isProjects  }"
			>
				<nuxt-link to="/">
					Work
				</nuxt-link>
			</li>
			<li
				class="side-nav__list-item side-nav__list-item--off-site email"
			>
				<a href="mailto:tyferrin@gmail.com" target="_blank">
					Email
				</a>
			</li>
		</ul>
	</section>
</template>
<script>
import { mapState } from 'vuex'
export default {
	methods: {
		toggleIndexComponents (isProjects) {
			this.$store.commit('toggleIndexComponents', isProjects)
		}
	},
	computed: mapState([
		'isProjects'
	])
}
</script>
<style lang="sass">
	.side-nav
		position: absolute
		top: 1vw
		right: 2vw
		display: block
		width: 125px
		grid-column-start: 8
		&__list
			display: block
			margin: 0
			padding: 0
			list-style-type: none
			font-family: 'Helvetica', sans-serif
			font-size: 1.5vw
		&__list-item
			position: relative
			margin: 15px 0
			text-align: right
			text-transform: uppercase
			cursor: pointer
			line-height: 1
			letter-spacing: 1px
			transition: all .45s cubic-bezier(0.25, 0.46, 0.45, 0.94)
			a
				display: block
				color: black
				text-decoration: none
			&--off-site
				padding: 5px 0
				transition: all .25s ease-in-out
				margin-bottom: 10px
				a
					color: black
					text-decoration: none

		&__list-item.active
			letter-spacing: 5px
		&__list-item.active::after
			content: ' '
			position: absolute
			top: 1.75vw
			left: 0
			height: 2px
			background-color: black
			animation-name: extend
			animation-duration: .5s
			animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94)
			animation-iteration-count: 1
			animation-fill-mode: forwards

	@keyframes extend
		0%
			width: 0%
		100%
			width: 100%

</style>
