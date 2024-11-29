<script lang="ts">
	import type { PageData } from './$types';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<section
	id="contact"
	class="grow"
	in:fade|local={{ duration: 1000 }}
	out:fade|local={{ duration: 50 }}
>
	<Contact />
</section>
