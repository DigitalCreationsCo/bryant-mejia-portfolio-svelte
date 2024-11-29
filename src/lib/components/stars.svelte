<script>
	export let starCount = 1150;
	export let minSize = 0.1;
	export let maxSize = 2;
	export let minDuration = 5000;
	export let maxDuration = 30000;

	let stars = [];
	let containerWidth;
	let containerHeight;
	let containerElement;

	// Generate a single star's properties
	function generateStar() {
		return {
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: minSize + Math.random() * (maxSize - minSize),
			duration: minDuration + Math.random() * (maxDuration - minDuration),
			delay: Math.random() * -2000,
			color: Math.random() > 0.75 ? 'white' : '#50729A',
			id: Math.random() // Unique identifier for keyed each block
		};
	}

	// Generate initial star array
	function generateStars() {
		stars = Array(starCount).fill().map(generateStar);
	}

	function handleAnimationIteration(index) {
		stars[index] = generateStar();
		stars = stars; // Trigger reactivity
	}

	// Generate initial stars when props change
	$: {
		starCount;
		minSize;
		maxSize;
		if (containerElement) generateStars();
	}
</script>

<div
	class="stars-container"
	bind:this={containerElement}
	bind:clientWidth={containerWidth}
	bind:clientHeight={containerHeight}
>
	<slot />
	<div class="stars-overlay">
		{#each stars as star, i (star.id)}
			<div
				class="star"
				style="
			left: {star.x}%;
			top: {star.y}%;
			width: {star.size}px;
			height: {star.size}px;
			animation-duration: {star.duration}ms;
			animation-delay: {star.delay}ms;
			background-color: {star.color};
		  "
				on:animationiteration={() => handleAnimationIteration(i)}
			></div>
		{/each}
	</div>
</div>

<style>
	.stars-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.stars-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 10;
	}

	.star {
		position: absolute;
		border-radius: 20%;
		background-color: white;
		animation: twinkle infinite;
		transition: all 3s ease-in-out;
	}

	@keyframes twinkle {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
