<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});
</script>

<div class="h-full p-10">Technical</div>
