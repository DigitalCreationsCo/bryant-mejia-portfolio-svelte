<script lang="ts">
	import Saos from 'saos';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import TwinklingStars from '$lib/components/stars.svelte';

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});
</script>

<TwinklingStars>
	<div class="relative h-full md:max-w-3xl p-10 m-auto md:content-center bg-black md:bg-inherit">
		<div class="relative top-0 left-0 h-1/2 mb-10 overflow-clip">
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover opacity-50 mix-blend-lighten"
			/>
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover top-3 left-5 rotate-8 opacity-50 mix-blend-lighten"
			/>
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover top-0 left-0 rotate-12 opacity-50 mix-blend-lighten"
			/>
			<div
				class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black md:from-dark md:via-transparent md:to-dark"
			></div>
			<div
				class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black md:from-dark md:via-transparent md:to-dark"
			></div>
		</div>
		<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'}>
			<h3 class="md:whitespace-pre w-fit mx-auto">
				{`Bryant Mejia is a software developer from New York 🏙️
with a passion for problem-solving and customer service.`}
			</h3>
		</Saos>
	</div>
</TwinklingStars>
