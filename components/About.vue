<template>
	<section class="about">
	</section>
</template>
<script>
import marked from 'marked'

export default {
	props: [
		'description'
	],
	mounted () {
		document.querySelector('.about').innerHTML = marked(this.description.descriptionBody)
		document.querySelectorAll('.about a').forEach(anchor => anchor.setAttribute('target', '_blank'))
	}
}
</script>
<style lang="sass">
.about
	grid-column-start: 1
	grid-column-end: 5
	width: 100%
	@media screen and (max-width: 1024px)
		grid-column-end: 7
	p
		display: inline-block
		font-family: 'Helvetica', sans-serif
		font-size: 1.5vw
		letter-spacing: .5px
		line-height: 1.35
		transition: all .45s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		@media screen and (max-width: 1024px)
			font-size: 14px
		a
			color: black
			text-decoration: none
			border-bottom: 2px solid black
			padding-bottom: 1px
	p:first-of-type
		margin-top: 0


</style>
