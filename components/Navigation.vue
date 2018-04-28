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
				font-family: 'Times New Roman', serif
				font-size: 65px
				font-weight: 400
				letter-spacing: 2px
				span::before
					content: '\A'
					white-space: pre


</style>
