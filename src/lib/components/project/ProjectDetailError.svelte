<script lang="ts">
	import type { ProjectDetail } from '$lib/types';
	import { scale } from 'svelte/transition';

	export let project: ProjectDetail;
	const disabledButton = { key: 'disabled' };
</script>

<div in:scale class="w-full px-10 py-2 md:py-10 lg:pr-0 border-t-[11px] border-red-600">
	<!-- px-10 py-2 md:p-10 mx-auto border-t-[33px] border-blue -->
	<h1 class="mb-6 md:mb-8 lg:mb-12 xl:mb-16">Error!</h1>
	<!-- Hero section -->
	<div
		class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"
	>
		<!-- Image -->
		<div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2">
			<div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center">
				<h2>
					{project.description}
				</h2>
			</div>
		</div>

		<!-- description -->
		<div class="w-full">
			<p class="text-center sm:text-left">{project.description}</p>

			<!-- Stars, forks, downloads -->
			<!-- <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white">
				<div class="flex gap-2 items-center">
					{project.starsCount ?? 'Unknown'}
					{(project.starsCount ?? 0) <= 1 ? 'Star' : 'Stars'}
				</div>
				<div class="flex gap-2 items-center">
					{project.forksCount ?? 'Unknown'}
					{(project.forksCount ?? 0) <= 1 ? 'Fork' : 'Forks'}
				</div>
				<div class="flex gap-2 items-center">
					{project.downloadsCount ?? 'Unknown'}
					{(project.downloadsCount ?? 0) <= 1 ? 'Download' : 'Downloads'}
				</div>
			</div> -->

			<!-- Tags -->
			<div
				class="flex flex-wrap w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden"
			>
				<p
					class="dark:bg-slate-800 border-slate-800 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2"
				>
					#error
				</p>
			</div>

			<!-- Buttons -->
			<div class="my-4 md:my-6 lg:my-8 flex w-full gap-4 md:gap-6 lg:gap-8">
				<a href="/projects" class="flex">{`< Return`}</a>
			</div>
		</div>
	</div>
</div>
