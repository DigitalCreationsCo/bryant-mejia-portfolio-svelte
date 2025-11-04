import type { PageServerLoad } from './$types';
import { getRecentGitHubReposAsProjects } from '$lib/api/projects/projects';
import { GITHUB_API_KEY } from '$env/dynamic/private'; // Import dynamic API key for runtime access

export const load: PageServerLoad = async ({ fetch }) => {
	let apiKey: string | undefined = undefined;
	
	// Use static API key for prerendering
	apiKey = GITHUB_API_KEY;
	
	const projects = await getRecentGitHubReposAsProjects(fetch, apiKey, 6); // Fetch 6 most recent projects

	return {
		projects: projects
	};
};