<script lang="ts">
	import { type ProjectService, initialProjects, projects } from '$lib/api/projects';

	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import ProjectCardLoading from '$lib/components/cards/ProjectCardLoading.svelte';
	import ProjectCardError from '$lib/components/cards/ProjectCardError.svelte';

	import Saos from 'saos';

	export let fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
	export let projectService: ProjectService;

	let isIntersecting = false;

	// Fetch project when this section is appeared
	function checkIntersecting(node: Element) {
		const observer: IntersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				setTimeout(async () => {
					console.log('Fetching projects');

					for (const project of initialProjects) {
						try {
							await projectService.fetchProject({ project, fetch });
						} catch (_) {
							break;
						}
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

<section use:checkIntersecting>
	<div class="w-75 mx-auto">
		<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
			<h1 class="text-white mx-auto" id="portfolio">Projects</h1>
		</Saos>

		<!-- Projects -->
		<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
			<div class="d-flex flex-wrap flex-column flex-sm-row">
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
		</Saos>
	</div>
</section>
