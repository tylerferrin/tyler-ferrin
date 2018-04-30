<template>
	<section class="work-image">
		<a target="_blank" :href="this.work.liveUrl" :id="this.work.photoExample[0].fields.title">
			<!-- image will be loaded here after component is mounted -->
		</a>
		<Loader v-if="loading"/>
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
			anchor.appendChild(img)
			img.removeEventListener('load', onSuccess)
		}

 		img.addEventListener('load', onSuccess)
		img.src = `${this.work.photoExample[0].fields.file.url}`
	}
}
</script>
<style lang="sass">
	.work-image
		grid-column-start: 1
		grid-column-end: 3
		position: relative
		a
			img
				border-radius: 5px
				width: 100%
				height: 100%
				animation-name: showUp
				animation-duration: .25s
				animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94)
				animation-iteration-count: 1
				animation-fill-mode: forwards


	@keyframes showUp
		0%
			opacity: 0
			transform: translate3d(0, 100px, 0)
		100%
			opacity: 1
			transform: translate3d(0,0, 0)


</style>
