<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import type { Project } from '$lib/types';

	export let project: Project;

	const tags = project.tags.map((tag) => {
		return { key: 'default', name: tag };
	});
</script>

<div in:slide out:scale class="md:hover:bg-blue mb-5 px-1">
	<a href="/projects/{project.slug}" target="_blank">
		<!-- Project description -->
		<div>
			<h2 class="text-lg mb-2">{project.name}</h2>

			<p class="text-xs">{project.description}</p>
		</div>

		<!-- Project tags -->
		<div class="flex gap-x-2">
			{#each tags as tag}
				<p class="text-xs">
					#{tag.name}
				</p>
			{/each}
		</div>
		<!-- Background image wrapper -->
		<div>
			<!-- Background image -->
			<!-- <img src={project.imageUrl} alt={project.name} /> -->

			<!-- Hover show view detail -->
			<div>
				<h4 class="mt-2 text-sm">> View detail</h4>
			</div>
		</div>
	</a>
</div>
