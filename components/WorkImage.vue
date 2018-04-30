<template>
	<section class="work-image">
		<div class="work-image__wrapper">
			<a target="_blank" :href="this.work.liveUrl" :id="this.work.photoExample[0].fields.title">
				<!-- image will be loaded here after component is mounted -->
			</a>
			<transition
				name="loader-fade"
			>
				<Loader v-if="loading"/>
			</transition>
		</div>
	</section>
</template>

<script>
import Loader from './Loader'

export default {
	components: {
		Loader
	},

	props: [
		'work'
	],

	data () {
		return {
			loading: true
		}
	},

	mounted () {
		const anchor = document.getElementById(`${this.work.photoExample[0].fields.title}`)
		let img = new Image()

		const onSuccess = () => {
			this.loading = false

			// use a set timeout to match give the Loader the 250ms to fadeout
			setTimeout(() => {
				anchor.appendChild(img)
				this.$store.commit('toggleWorkSlider', true)
			}, 250)
		}

 		img.onload = onSuccess
		img.src = `${this.work.photoExample[0].fields.file.url}`
	}
}
</script>
<style lang="sass">
	.work-image
		grid-column-start: 1
		grid-column-end: 3
		position: relative
		&__wrapper
			padding-bottom: 61.25%
		a
			position: absolute
			display: block
			width: 100%
			height: 100%
			img
				border-radius: 5px
				width: 100%
				height: 100%
				animation-name: showUp
				animation-duration: .5s
				animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94)
				animation-iteration-count: 1
				animation-fill-mode: forwards


	@keyframes showUp
		0%
			opacity: 0
			transform: translate3d(-50px, 0, 0)
		100%
			opacity: 1
			transform: translate3d(0,0, 0)

	.loader-fade-enter
		opacity: 0

	.loader-fade-leave
		opacity: 1

	.loader-fade-enter-active,
	.loader-fade-leave-active
		transition: opacity .25s cubic-bezier(0.55, 0.055, 0.675, 0.19)


</style>
