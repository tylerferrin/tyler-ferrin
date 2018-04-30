<template>
	<section class="work-info">
		<h1>{{ this.work.title }}</h1>
		<a :href="this.work.liveUrl" target="_blank">View live site</a>
		<a
			v-if="this.work.sourceCode"
			:href="this.work.sourceCode"
			target="_blank">
				View source code
		</a>
		<p class="description">{{ this.work.description }}</p>
	</section>
</template>
<script>
export default {
	props: [
		'work'
	]
}
</script>
<style lang="sass">
	.work-info
		position: relative
		grid-column-start: 4
		text-align: right
		font-family: 'Helvetica', sans-serif
		h1
			font-size: 2vw
			font-weight: 400
			margin: 0
			letter-spacing: .5px
			line-height: 1
		a
			display: block
			margin-top: 15px
			color: black
			text-decoration: none
		p.description
			position: absolute
			bottom: 0
			font-size: 1.25vw
			text-align: justify
			margin: 0

</style>
