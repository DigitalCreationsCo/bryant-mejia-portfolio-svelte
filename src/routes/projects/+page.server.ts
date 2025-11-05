import type { PageServerLoad } from './$types';
import { getRecentGitHubReposAsProjects } from '$lib/api/projects/projects';
export const load: PageServerLoad = async ({ fetch }) => {
	const apiKey: string | undefined = process.env.GITHUB_API_KEY;
	
	const projects = await getRecentGitHubReposAsProjects(fetch, apiKey, 6); // Fetch 6 most recent projects

	return {
		projects: projects
	};
};