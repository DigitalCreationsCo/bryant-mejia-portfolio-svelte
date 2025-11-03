<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { projectDetail } from '$lib/store/projects';
	import ProjectDetail from '$lib/components/project/ProjectDetail.svelte';
	import ProjectDetailError from '$lib/components/project/ProjectDetailError.svelte';
	import ProjectDetailLoading from '$lib/components/project/ProjectDetailLoading.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
	
	let readmeContent: string | null = null;
	let isLoadingReadme = true;

	onMount(async () => {
		await data.projectService.fetchProjectDetail({ project: data.project, fetch: data.fetch });
		
		// Fetch README content
		if (data.project.readmeUrl) {
			try {
				const readme = await data.projectService.getProjectReadme({ 
					project: data.project, 
					fetch: data.fetch 
				});
				readmeContent = readme;
			} catch (error) {
				console.error('Error fetching README:', error);
				readmeContent = null;
			} finally {
				isLoadingReadme = false;
			}
		} else {
			isLoadingReadme = false;
		}
	});
</script>

<svelte:head>
	<title>{data.project.name}</title>
</svelte:head>

<section class="grow" in:fade|local={{ duration: 1000 }} out:fade|local={{ duration: 50 }}>
	{#if !$projectDetail}
		<ProjectDetailLoading />
	{:else if $projectDetail.name !== 'error' && $projectDetail.name !== 'limit'}
		<ProjectDetail project={$projectDetail} {readmeContent} {isLoadingReadme} />
	{:else}
		<ProjectDetailError project={$projectDetail} />
	{/if}
</section>
