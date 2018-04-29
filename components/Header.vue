<template>
	<section class="navigation">
		<div class="navigation__name">
			<nuxt-link
				to="/"
			>
				<h1>
					Tyler Ferrin
				</h1>
			</nuxt-link>
		</div>
	</section>
</template>
<script>
import {mapState} from 'vuex'
export default {
	computed: mapState({
		page: 'page'
	})
}

</script>
<style lang="sass">
	.navigation
		&__name
			a
				position: relative
				color: black
				width: 150px
				h1
					display: block
					margin: 0
					font-family: 'Helvetica', sans-serif
					font-size: 2.5vw
					line-height: 1
					font-weight: 400
					letter-spacing: 0px
					transition: all .25s ease-in-out

</style>
