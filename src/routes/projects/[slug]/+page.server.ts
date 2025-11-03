import { error } from '@sveltejs/kit';
import { ProjectService, getInitialProjects, initialProjects } from '$lib/api/projects';
import { type Project } from '$lib/types';
import { dev } from '$app/environment';
import type { EntryGenerator, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

/** @type {PageServerLoad} */
export async function load({ params, fetch }) {
    try {
        const apiKey = env.GITHUB_API_KEY;
        // If fetch is not available (shouldn't happen in normal operation), use static projects
        const allProjects = fetch ? await getInitialProjects(fetch, apiKey) : initialProjects;
        const project: Project | undefined = allProjects.find((project) => project.slug === params.slug);
        if (dev) {
            console.log('Server-side log - params:', params);
            console.log('Server-side log - projects:', allProjects);
            console.log('project ', params.slug)
        }

        if (project === undefined) throw error(404, 'Project not found');

        const projectService: ProjectService = new ProjectService(apiKey);

        return { project: project, projectService: projectService, fetch: fetch };
    } catch (err) {
        console.error('Error in load function:', err);
        // If it's already a SvelteKit error, re-throw it
        if (err && typeof err === 'object' && 'status' in err) {
            throw err;
        }
        throw error(500, 'Failed to load project');
    }
}

export const entries: EntryGenerator = async () => {
    // Use static projects for entries generation to ensure reliable builds
    // GitHub repos will be fetched dynamically at runtime in the Portfolio component
    return initialProjects.map(({ slug }) => ({ slug }));
};

