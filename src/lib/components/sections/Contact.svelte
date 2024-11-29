<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { socials } from '$lib/api/socials';

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});
</script>

<div class="h-full p-10 relative flex flex-col">
	{#each socials as social}
		<a
			href={social.link}
			target="_blank"
			class="relative inline-block shrink-0 md:blur-[1px] hover:md:blur-0 transition-all hover:md:bg-slate-600 py-5 md:p-10 border"
		>
			<h3 class="z-10 absolute">
				> {social.social}
			</h3>
			<h3 class="z-10">
				> {social.social}
			</h3>
			<h3 class="z-10 pl-5">
				{social.name}
			</h3>
		</a>
	{/each}
</div>
