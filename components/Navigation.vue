<template>
	<section class="navigation">
		<div class="navigation__name">
			<h1>Tyler <span>Ferrin</span></h1>
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
		border-bottom: 3px solid black
		&__name
			h1
				margin: 0
				font-family: 'Archivo Narrow', sans-serif
				font-size: 72px
				line-height: 1
				font-weight: 700
				letter-spacing: 0px
				span::before
					content: '\A'
					white-space: pre


</style>
