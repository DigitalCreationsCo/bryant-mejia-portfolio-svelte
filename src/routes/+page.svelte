<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/sections/Hero.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let isFirstLoad = true;
	onMount(() => {
		isFirstLoad = false;
	});
</script>

<section
	id="hero"
	class="grow"
	class:no-transition={isFirstLoad}
	in:fade|local={{ duration: 1000 }}
	out:fade|local={{ duration: 50 }}
>
	<Hero />
</section>

<style>
	.no-transition {
		animation: none !important;
	}
</style>
