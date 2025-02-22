<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let starCount = 10000;
	export let minSize = 0.1;
	export let maxSize = 2;
	export let minDuration = 2000;
	export let maxDuration = 10000;

	let canvas;
	let ctx;
	let animationFrameId;
	let stars = [];

	class Star {
		constructor() {
			this.reset();
		}

		reset() {
			if (browser) {
				this.x = Math.random() * window.innerWidth;
				this.y = Math.random() * window.innerHeight;
				this.size = minSize + Math.random() * (maxSize - minSize);
				this.duration = minDuration + Math.random() * (maxDuration - minDuration);
				this.color = Math.random() > 0.75 ? 'white' : '#50729A';
				this.startTime = Date.now() + Math.random() * -2000;
			}
		}

		update() {
			const elapsed = (Date.now() - this.startTime) % this.duration;
			const progress = elapsed / this.duration;

			// Calculate opacity using a smooth sine wave
			this.opacity = Math.sin(progress * Math.PI);

			// Reset star if cycle completed
			if (progress >= 1) {
				this.reset();
			}
		}

		draw(ctx) {
			ctx.fillStyle = this.color;
			ctx.globalAlpha = this.opacity;
			ctx.fillRect(this.x, this.y, this.size, this.size);
		}
	}

	function initStars() {
		stars = Array(starCount)
			.fill()
			.map(() => new Star());
	}

	function resizeCanvas() {
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			// Reinitialize stars with new dimensions
			initStars();
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update and draw all stars
		for (let star of stars) {
			star.update();
			star.draw(ctx);
		}

		animationFrameId = requestAnimationFrame(animate);
	}

	onMount(() => {
		ctx = canvas.getContext('2d');

		// Handle window resize
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();

		// Initialize stars
		initStars();

		// Start animation loop
		animate();
	});

	onDestroy(() => {
		window.removeEventListener('resize', resizeCanvas);

		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}
	});
</script>

<div class="stars-container">
	{#if browser}
		<canvas bind:this={canvas} class="stars-canvas" />
		<slot />
	{/if}
</div>

<style>
	.stars-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.stars-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 10;
	}
</style>
