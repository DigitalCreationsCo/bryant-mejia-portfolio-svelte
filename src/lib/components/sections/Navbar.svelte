<script lang="ts">
	import { onMount } from 'svelte';
	import { hamburgerMenuExpanded } from '$lib/config';

	import Hamburger from '$lib/components/buttons/Hamburger.svelte';

	import { navLinks } from '$lib/components/navigation';

	let navbar: HTMLElement;

	let scrollY = 0;
	let scrollDelta = 0;
	let previousScrollposition = scrollY;
	let backgroundClasses = 'fade';

	onMount(() => {
		setTimeout(() => {
			showNavbar();
		}, 5000);
		window.onscroll = async () => {
			autoHideNavbar();
		};
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

<section
	bind:this={navbar}
	class="position-fixed w-100 bg-dark {backgroundClasses}"
	style="transition-duration: 500ms;"
>
	<div class="d-flex justify-content-between align-items-end">
		<!-- Logo -->
		<div class="my-auto ps-2">
			<a href="/">
				<h1 class="pb-0 mb-2">Bryant Mejia</h1>
			</a>
		</div>

		<!-- Nav links -->
		<div class="d-none d-xl-block mb-2">
			{#each navLinks as link}
				<a href="#{link.link}" class="px-2">
					<h3 class="d-inline">
						{link.text.toUpperCase()}
					</h3>
				</a>
			{/each}
		</div>

		<!-- Hamburger menu -->
		<!-- <Hamburger {isBgTransparent} /> -->
	</div>
</section>
