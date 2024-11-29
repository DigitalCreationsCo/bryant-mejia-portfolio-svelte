<script lang="ts">
	import { scale, crossfade, blur, draw, fly, slide } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
</script>

<div in:scale>
	<div class="animate-pulse">
		<!-- Hero -->
		<div>
			<div>
				<div>
					<h2>Loading...</h2>
				</div>
			</div>
		</div>
		<!-- Messages -->
		<div>
			<Typewriter mode={'cascade'} delay={2000} interval={10} showCursorOnDelay={false}>
				<h2>Please wait...</h2>
			</Typewriter>
		</div>
	</div>
</div>
