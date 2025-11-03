import type { PageServerLoad } from './$types';
import { ProjectService } from '$lib/api/projects';

export const load = (async ({ fetch }) => {
	let apiKey: string | undefined;
	
	// Safely get API key - handle case where env might not be available during prerender
	try {
		const { env } = await import('$env/dynamic/private');
		apiKey = env?.GITHUB_API_KEY;
	} catch (error) {
		// During prerender/build, env might not be accessible
		// This is fine - we'll work without API key
		apiKey = undefined;
	}
	
	const projectService: ProjectService = new ProjectService(apiKey);
	// Note: apiKey is not returned to avoid exposing it to client
	// Client-side requests will work without auth (lower rate limits)
	return { fetch: fetch, projectService: projectService };
}) satisfies PageServerLoad;
