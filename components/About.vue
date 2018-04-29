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
	p
		display: inline-block
		font-family: 'Helvetica', sans-serif
		font-size: 1.5vw
		letter-spacing: .5px
		line-height: 1.35
		a
			color: black
			text-decoration: none
			border-bottom: 2px solid black
			padding-bottom: 1px
	p:first-of-type
		margin-top: 0


</style>
