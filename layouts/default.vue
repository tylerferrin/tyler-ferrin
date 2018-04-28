<template>
  <section class="layout">
		<Navigation />
    <nuxt/>
  </section>
</template>
<script>
import Navigation from '~/components/Navigation'

export default {
	components: {
		Navigation
	}
}
</script>
<style lang="sass">
	body
		margin: 0
		width: 100vw
	.layout
		padding: 2vw
		background-color: lighten(#afc1e0, 15%)
		max-width: 100vw
		min-height: 100vh
		max-height: 100vh

</style>
