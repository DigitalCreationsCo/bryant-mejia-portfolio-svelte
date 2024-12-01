<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import type { Project } from '$lib/types';

	export let project: Project;

	const tags = project.tags.map((tag) => {
		return { key: 'default', name: tag };
	});
</script>

<div in:slide out:scale class="md:hover:bg-blue mb-5 px-1">
	<a href="/projects/{project.slug}">
		<!-- Project description -->
		<h2 class="text-lg mb-2">{project.name}</h2>

		<div class="md:max-w-xl mb-2">
			<p class="text-sm">{project.description}</p>
		</div>

		<!-- Project tags -->
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<!-- <p class="text-xs"> -->
				<p
					class="text-sm dark:bg-slate-800 border-slate-800 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2"
				>
					{tag.name}
				</p>
			{/each}
		</div>
		<!-- Background image wrapper -->
		<div>
			<!-- Background image -->
			<!-- <img src={project.imageUrl} alt={project.name} /> -->

			<!-- Hover show view detail -->
			<div>
				<h4 class="my-2 text-sm">> View detail</h4>
			</div>
		</div>
	</a>
</div>
