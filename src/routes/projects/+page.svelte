<script lang="ts">
	import type { PageData } from './$types';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<section class="grow" in:fade|local={{ duration: 1000 }} out:fade|local={{ duration: 50 }}>
	<Portfolio fetch={data.fetch} projectService={data.projectService} initialProjectsData={data.projects} />
</section>