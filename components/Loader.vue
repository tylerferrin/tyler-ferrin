<template>
	<section class="loader">
		<div class="animation-wrapper">
			<div class="dots dots__one"></div>
			<div class="dots dots__two"></div>
			<div class="dots dots__three"></div>
		</div>
	</section>
</template>
<script>
</script>
<style lang="sass">
	.loader
		position: absolute
		top: 0
		left: 0
		background-color: lighten(#afc1e0, 10.5%)
		height: 100%
		width: 100%
		z-index: 1
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		background-color: transparent
		padding-top: 56%
		.animation-wrapper
			position: absolute
			top: 0
			width: 50%
			height: 100%
			display: flex
			flex-direction: row
			justify-content: center
			align-items: center
			background-color: transparent
			.dots
				height: 10px
				width: 10px
				background-color: black
				margin: 0 2.5px
				border-radius: 25px
				&__one
					animation-name: bouncing
					animation-duration: .9s
					animation-timing-function: ease-in-out
					animation-iteration-count: infinite
				&__two
					animation-name: bouncing
					animation-duration: .9s
					animation-timing-function: ease-in-out
					animation-iteration-count: infinite
					animation-delay: .3s
				&__three
					animation-name: bouncing
					animation-duration: .9s
					animation-timing-function: ease-in-out
					animation-iteration-count: infinite
					animation-delay: .6s


	@keyframes bouncing
		0%
			transform: translate3d(0,0,0)
		50%
			transform: translate3d(0,-15px,0)
		100%
			transform: translate3d(0,0,0)
</style>
