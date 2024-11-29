<script lang="ts">
	import { type ProjectService, initialProjects } from '$lib/api/projects';
	import { projects } from '$lib/store/projects';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});
</script>

<div class="px-10">
	<div class="flex flex-col">Details</div>
</div>
