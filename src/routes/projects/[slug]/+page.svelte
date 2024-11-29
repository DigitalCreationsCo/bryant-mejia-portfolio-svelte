<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { projectDetail } from '$lib/store/projects';
	import ProjectDetail from '$lib/components/project/ProjectDetail.svelte';
	import ProjectDetailError from '$lib/components/project/ProjectDetailError.svelte';
	import ProjectDetailLoading from '$lib/components/project/ProjectDetailLoading.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	// console.log('Client-side log - received data:', data);

	onMount(() => {
		data.projectService.fetchProjectDetail({ project: data.project, fetch: data.fetch });
	});
</script>

<svelte:head>
	<title>{data.project.name}</title>
</svelte:head>

<section class="grow" in:fade|local={{ duration: 1000 }} out:fade|local={{ duration: 50 }}>
	{#if !$projectDetail}
		<ProjectDetailLoading />
	{:else if $projectDetail.name !== 'error' && $projectDetail.name !== 'limit'}
		<ProjectDetail project={$projectDetail} />
	{:else}
		<ProjectDetailError project={$projectDetail} />
	{/if}
</section>
