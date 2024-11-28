<script lang="ts">
	import { onMount } from 'svelte';
	import { hamburgerMenuExpanded } from '$lib/config';
	import { fadeSequence, startFadeSequence } from '$lib/store/sequentialFade';
	import Hamburger from '$lib/components/buttons/Hamburger.svelte';
	import { navLinks } from '$lib/components/navigation';

	let navbar: HTMLElement;

	let scrollY = 0;
	let scrollDelta = 0;
	let previousScrollposition = scrollY;

	onMount(() => {
		// setTimeout(() => {
		// 	showNavbar();
		// }, 5000);
		// window.onscroll = async () => {
		// 	autoHideNavbar();
		// };

		startFadeSequence();
	});

	function showNavbar() {
		hamburgerMenuExpanded.set(false);
		backgroundClasses = '';
	}

	function autoHideNavbar() {
		let currentScrollPosition = scrollY;
		if (previousScrollposition > currentScrollPosition) {
			scrollDelta++;
			if (scrollDelta > 2) {
				navbar.style.top = '0';
				scrollDelta = 0;
			}
		} else {
			scrollDelta--;
			if (scrollDelta < -2) {
				navbar.style.top = '-68px';
				scrollDelta = 0;
			}
		}
		previousScrollposition = currentScrollPosition;
	}
</script>

<svelte:window bind:scrollY />

<section bind:this={navbar} class="fixed bottom-0 md:sticky">
	<!-- Nav links -->
	<div
		class="relative flex flex-row w-full justify-evenly md:justify-end transition-transform duration-[600ms]"
		class:translate-y-[-5rem]={!$fadeSequence.navbar}
		class:translate-y-0={$fadeSequence.navbar}
	>
		{#each navLinks as link}
			<a href={link.link} class="shrink-0 hover:md:blur-[1px] hover:md:bg-slate-500 py-5 md:p-5">
				<h3>
					{link.text.toUpperCase()}
				</h3>
			</a>
		{/each}

		<!-- Hamburger menu -->
		<!-- <Hamburger {isBgTransparent} /> -->
	</div>
</section>
