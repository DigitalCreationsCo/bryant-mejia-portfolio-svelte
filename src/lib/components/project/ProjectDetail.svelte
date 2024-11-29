<script lang="ts">
	import type { ProjectDetail } from '$lib/api/projects';

	export let project: ProjectDetail;

	const tags = project.tags.map((tag) => {
		return { key: tag, name: tag };
	});
</script>

<div class="">
	<h1 class="">{project.name}</h1>
	<!-- Hero section -->
	<div
		class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"
	>
		<!-- Image preview -->
		<div class="w-full border flex items-center">
			<img class="w-full" src={project.imageUrl} alt="Preview" />
		</div>

		<!-- Project description -->
		<div class="w-full">
			<p class="">{project.description}</p>

			<!-- Stars, forks, downloads -->
			<div>
				<div class="flex gap-2 items-center">
					{project.starsCount}
					{(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
				</div>
				<div class="flex gap-2 items-center">
					{project.forksCount}
					{(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
				</div>
				<div class="flex gap-2 items-center">
					{project.downloadsCount}
					{(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
				</div>
			</div>

			<!-- Tags -->
			<div
				class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
			>
				{#each tags as tag}
					<p>
						#{tag.name}
					</p>
				{/each}
			</div>

			<!-- Buttons -->
			<div
				class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"
			>
				<a href={project.repositoryUrl} target="_blank">
					<button>Source code</button>
				</a>

				{#if project.hasLiveUrl && project.liveUrl}
					<a href={project.liveUrl} target="_blank">
						<button>Live preview</button>
					</a>
				{/if}
			</div>
		</div>
	</div>

	<!-- README.md -->
	<hr class="mt-16 border border-slate-700 dark:border-slate-300" />
	<hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300" />
</div>
