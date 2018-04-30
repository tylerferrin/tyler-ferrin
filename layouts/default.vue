<template>
  <section class="layout">
		<Header />
    <nuxt/>
		<SideNav />
		<WorkSlider  v-if="this.workSliderIsShowing"/>
  </section>
</template>
<script>
import Header from '~/components/Header'
import SideNav from '~/components/SideNav'
import WorkSlider from '~/components/WorkSlider'
import { mapState } from 'vuex'

export default {
	components: {
		Header,
		SideNav,
		WorkSlider
	},
	computed: mapState([ 'workSliderIsShowing' ]),
	watch: {
		'$route' (to, from) {
			if (to.name === 'index' && from.name === 'work-work') {
				this.$store.commit('toggleWorkSlider', false)
			}
		}
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
