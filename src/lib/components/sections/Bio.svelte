<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import TwinklingStars from '$lib/components/stars.svelte';

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});

	function fadeAndScale(
		node: Element,
		{
			delay = 100,
			duration = 3000,
			start = 0.95 // starting scale value
		}
	) {
		return {
			delay,
			duration,
			css: (t: number) => `
				opacity: ${t};
				transform: scale(${start + (1 - start) * t});
			`
		};
	}
</script>

<TwinklingStars starCount={10000}>
	<div
		in:fadeAndScale|local={{ duration: 2000 }}
		class="relative h-full md:max-w-3xl p-10 m-auto md:content-center bg-black md:bg-inherit"
	>
		<div class="absolute top-0 left-0 h-1/2 mb-10 overflow-clip">
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover opacity-50 mix-blend-lighten scale-105"
			/>
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover top-3 left-5 rotate-8 opacity-50 mix-blend-lighten scale-110"
			/>
			<img
				src={'/stars.png'}
				alt="Starfield, James Webb Telescope"
				class="absolute h-full object-cover top-0 left-0 rotate-12 opacity-50 mix-blend-lighten scale-150"
			/>
			<div
				class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black md:from-dark md:via-transparent md:to-dark"
			></div>
			<div
				class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black md:from-dark md:via-transparent md:to-dark"
			></div>
		</div>
		<h3 class="md:whitespace-pre w-fit mx-auto">
			{`I’m Bryant Mejia. 
I'm a full-stack software engineer with 5+ years of experience designing and delivering scalable software, data infrastructure, and AI systems for startups and modern enterprises. My work sits at the intersection of data, infrastructure, and user experience—helping businesses unlock value and people make better decisions in the flow of work and life.`}
		</h3>
	</div>
</TwinklingStars>
