<template>
  <section class="layout">
		<Header />
    <nuxt/>
  </section>
</template>
<script>
import Header from '~/components/Header'

export default {
	components: {
		Header
	}
}
</script>
<style lang="sass">
	html
		background-color: lighten(#afc1e0, 10.5%)
	body
		margin: 0
		width: 100vw
	.layout
		position: relative
		padding: 2vw
		background-color: lighten(#afc1e0, 10.5%)
		max-width: 100vw
		height: calc(100vh - 4vw)

	.page-enter-active
		transition: opacity .25s ease-out

	.page-leave-active
		transition: opacity .25s ease-in

	.page-enter,
	.page-leave-active
		opacity: 0
</style>
