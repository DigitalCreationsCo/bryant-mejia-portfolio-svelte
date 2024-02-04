<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { Container, Button, Image } from '@sveltestrap/sveltestrap';

	import orbit from '$lib/components/graphics/orbit.gif';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('hero')?.classList.remove('fade');
	});
</script>

<section id="hero" class="fade in" style="transition-duration: 8s">
	<Container fluid style="height: 900px;" class="d-flex flex-column justify-content-center">
		<div class="mx-auto border position-relative">
			<h2 class="position-absolute bottom-0 text-white ms-2 mb-4">
				<Typewriter interval={36} mode={'loopOnce'} delay={3000} keepCursorOnFinish={false}
					>Bryant Mejia</Typewriter
				>
			</h2>
			<h2 class="position-absolute bottom-0 text-white m-2">
				<Typewriter mode={'loop'} interval={40} delay={5000} showCursorOnDelay={false}>
					<span>Full Stack Software Engineer</span>
					<span>User Interface</span>
					<span>Test Driven Development</span>
					<span>User Analytics</span>
				</Typewriter>
			</h2>
			<Image class="w-100" src={orbit} alt="Bryant Mejia" />
		</div>
	</Container>
</section>
