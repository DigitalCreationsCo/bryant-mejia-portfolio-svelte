import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ["*", "/bio", "/contact", "/portfolio", "/technical"],
			// handleHttpError: 'warn', // helpful for debugging build errors
		}
	}
};

export default config;
