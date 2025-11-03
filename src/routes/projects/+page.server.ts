import type { PageServerLoad } from './$types';
import { ProjectService } from '$lib/api/projects';

export const load: PageServerLoad = async ({ fetch }) => {
	let apiKey: string | undefined = undefined;
	
	// Safely get API key - it may not be set during build/prerender
	try {
		const { env } = await import('$env/dynamic/private');
		apiKey = env?.GITHUB_API_KEY;
	} catch {
		// If env import fails (e.g., during prerender), continue without API key
		apiKey = undefined;
	}
	
	try {
		const projectService: ProjectService = new ProjectService(apiKey);
		// Note: apiKey is not returned to avoid exposing it to client
		// Client-side requests will work without auth (lower rate limits)
		return { fetch: fetch, projectService: projectService };
	} catch (error) {
		// Fallback: create service without API key if there's any error
		console.warn('Error creating ProjectService, using default:', error);
		const projectService: ProjectService = new ProjectService();
		return { fetch: fetch, projectService: projectService };
	}
};

