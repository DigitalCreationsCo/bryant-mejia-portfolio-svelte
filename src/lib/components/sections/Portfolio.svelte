<script lang="ts">
	import { type ProjectService, getAllGitHubReposAsProjects } from '$lib/api/projects';
	import { projects } from '$lib/store/projects';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import ProjectCardLoading from '$lib/components/cards/ProjectCardLoading.svelte';
	import ProjectCardError from '$lib/components/cards/ProjectCardError.svelte';
	import Saos from 'saos';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
	export let projectService: ProjectService;

	onMount(() => {
		const currentUrl = $page.url.pathname;
		sessionStorage.setItem('lastUrl', currentUrl);
	});

	let isIntersecting = false;

	// Fetch projects when this section is appeared
	function checkIntersecting(node: Element) {
		const observer: IntersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				setTimeout(async () => {
					console.log('Fetching GitHub repositories');

					try {
						// Fetch all GitHub repos dynamically
						// Note: apiKey is not passed to avoid exposing secrets to client
						// Client-side requests will work without auth (lower rate limits)
						const githubProjects = await getAllGitHubReposAsProjects(fetch);
						
						if (githubProjects && githubProjects.length > 0) {
							// Fetch details for each project
							for (const project of githubProjects) {
								try {
									await projectService.fetchProject({ project, fetch });
								} catch (_) {
									// Continue with next project if one fails
									continue;
								}
							}
						} else {
							console.warn('No GitHub repositories found or API request failed');
						}
					} catch (error) {
						console.error('Error fetching GitHub repos:', error);
					}

					isIntersecting = true;
					observer.disconnect();
				}, 500);
			});
		});

		if (!isIntersecting) {
			observer.observe(node);
		}
	}
</script>

<div use:checkIntersecting class="px-10 py-2 md:p-10 mx-auto border-t-[11px] border-blue">
	<div class="flex flex-col max-w-4xl mx-auto">
		{#if $projects.length == 0}
			<ProjectCardLoading />
		{:else if $projects.length == 1 && ($projects[0].name === 'error' || $projects[0].name === 'limit')}
			<ProjectCardError project={$projects[0]} />
		{:else}
			{#each $projects as project}
				<ProjectCard {project} />
			{/each}
		{/if}
	</div>
</div>
