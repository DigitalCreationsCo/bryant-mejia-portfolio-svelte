<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/sections/Navbar.svelte';
</script>

<main class="h-screen flex flex-col">
	<nav>
		<Navbar />
	</nav>
	<slot />
</main>

<style global lang="postcss">
	@-webkit-keyframes -global-scale-up-center {
		0% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			animation-duration: 50ms;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			animation-duration: 50ms;
		}
	}

	@keyframes -global-scale-up-center {
		0% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			animation-duration: 50ms;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			animation-duration: 50ms;
		}
	}
</style>
