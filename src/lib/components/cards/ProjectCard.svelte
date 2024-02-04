<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { Project } from '$lib/api/projects';

	export let project: Project;

	const tags = project.tags.map((tag) => {
		return { key: 'default', name: tag };
	});
</script>

<!-- Shadow card -->
<div in:scale out:scale class="m-auto my-2 d-flex w-100" style="height: 420px">
	<a href="/projects/{project.id}" target="_blank" class="d-flex flex-column">
		<!-- Project description -->
		<div>
			<h3 class="text-white">{project.name}</h3>
			<p class="text-white">{project.description}</p>
		</div>

		<!-- Background image wrapper -->
		<div class="position-relative flex-grow-1 d-flex flex-column m-auto w-100">
			<!-- Background image -->
			<div
				class="position-absolute w-100 h-100 rounded"
				style="background-image: url('{project.imageUrl}'); background-size: cover; background-position: center;"
			/>

			<!-- Hover show view detail -->
			<div>
				<h4>View detail</h4>
			</div>
		</div>

		<!-- Project tags -->
		<div class="d-flex mt-2">
			{#each tags as tag}
				<p class="mx-2">
					#{tag.name}
				</p>
			{/each}
		</div>
	</a>
</div>
