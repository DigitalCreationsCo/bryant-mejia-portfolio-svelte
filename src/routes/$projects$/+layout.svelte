<script lang="ts">
	import Navbar from '$lib/components/sections/Navbar.svelte';
</script>

<main class="h-screen flex flex-col">
	<nav>
		<Navbar />
	</nav>
	<slot />
</main>
