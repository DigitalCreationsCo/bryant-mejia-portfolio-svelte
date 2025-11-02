import { error } from '@sveltejs/kit';
import { ProjectService, getInitialProjects, initialProjects } from '$lib/api/projects';
import { type Project } from '$lib/types';
import { dev } from '$app/environment';
import type { EntryGenerator } from './$types';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    try {
        const allProjects = await getInitialProjects(fetch);
        const project: Project | undefined = allProjects.find((project) => project.slug === params.slug);
        if (dev) {
            console.log('Server-side log - params:', params);
            console.log('Server-side log - projects:', allProjects);
            console.log('project ', params.slug)
        }

        if (project === undefined) throw error(404, 'Project not found');

        const projectService: ProjectService = new ProjectService();

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

export const entries: EntryGenerator = async ({ fetch }) => {
    try {
        const allProjects = await getInitialProjects(fetch);
        if (allProjects && allProjects.length > 0) {
            return allProjects.map(({ slug }) => ({ slug }));
        }
    } catch (err) {
        console.error('Error in entries generator, using static projects:', err);
    }
    // Fallback to static projects for entries generation
    return initialProjects.map(({ slug }) => ({ slug }));
};