<script lang="ts">
	import type { Project } from '$lib/api/projects';
	import { scale } from 'svelte/transition';

	export let project: Project;
</script>

<div in:scale>
	<div>
		<!-- Hero -->
		<div>
			<div>
				<h2 class="text-white text-center">Error!</h2>
			</div>
		</div>

		<!-- Messages -->
		<div class="py-2 px-4">
			<h3 class="mb-2 text-white text-center">
				{project.name === 'limit' ? 'API rate limit exceeded' : 'Failed to fetch data'}
			</h3>
			<p class="text-white text-center">
				{project.description}
			</p>
		</div>
	</div>
</div>
