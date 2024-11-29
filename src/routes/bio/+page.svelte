<script lang="ts">
	import type { PageData } from './$types';
	import Bio from '$lib/components/sections/Bio.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<section
	id="bio"
	class="grow flex"
	in:fade|local={{ duration: 1000 }}
	out:fade|local={{ duration: 50 }}
>
	<Bio />
</section>
