import type { PageServerLoad } from './$types';
import { ProjectService } from '$lib/api/projects';
import { env } from '$env/dynamic/private';

export const load = (async ({ fetch }) => {
	const apiKey = env.GITHUB_API_KEY;
	const projectService: ProjectService = new ProjectService(apiKey);
	// Note: apiKey is not returned to avoid exposing it to client
	// Client-side requests will work without auth (lower rate limits)
	return { fetch: fetch, projectService: projectService };
}) satisfies PageServerLoad;
