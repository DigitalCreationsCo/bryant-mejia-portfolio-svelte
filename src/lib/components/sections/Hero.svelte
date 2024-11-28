<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import orbit from '$lib/components/graphics/orbit.gif';
	import { onMount } from 'svelte';
	import { fadeSequence, startFadeSequence } from '$lib/store/sequentialFade';
	onMount(() => {
		startFadeSequence();
	});
</script>

<section id="hero" style="transition-duration: 8s">
	<div class="h-screen md:p-12 md:pb-40">
		<div
			class="relative h-full w-fit m-auto md:border border-[#50729A] transition-opacity duration-[4900ms]"
			class:opacity-0={!$fadeSequence.hero}
			class:opacity-100={$fadeSequence.hero}
		>
			<h1
				class="absolute leading-relaxed text-3xl bottom-1/4 left-1/2 md:left-0 md:bottom-4 m-auto items-center font-medium md:m-10 transition-opacity duration-500"
				class:opacity-0={!$fadeSequence.text}
				class:opacity-100={$fadeSequence.text}
			>
				<span class="pb-20">Bryant Mejia</span>
				<Typewriter mode={'loop'} interval={80} delay={12000} showCursorOnDelay={false}>
					<span>Software Developer </span>
					<span>Full Stack </span>
					<span>Graphic Interface </span>
					<span>T D D </span>
					<span>On a mission... </span>
					<span>To Transform Data. </span>
					<span>Let's Build the Future. </span>
				</Typewriter>
			</h1>
			<img class="h-full object-cover" src={orbit} alt="Bryant Mejia" />
		</div>
	</div>
</section>
