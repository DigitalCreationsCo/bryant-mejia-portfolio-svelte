<script lang="ts">
	import { scale } from 'svelte/transition';
</script>

<div in:scale>
	<div>
		<!-- Hero -->
		<div>
			<div>
				<div>
					<h2 class="text-white text-center">Loading...</h2>
				</div>
			</div>
		</div>
		<!-- Messages -->
		<div class="py-2 px-4">
			<h3 class="mb-2 text-white text-center">Loading...</h3>
			<p class="text-white text-center">Please wait...</p>
		</div>
	</div>
</div>
