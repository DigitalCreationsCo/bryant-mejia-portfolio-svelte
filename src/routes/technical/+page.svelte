<script lang="ts">
	import type { PageData } from './$types';
	import Technical from '$lib/components/sections/Technical.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<section
	id="technical"
	class="grow"
	in:fade|local={{ duration: 1000 }}
	out:fade|local={{ duration: 50 }}
>
	<Technical />
</section>
