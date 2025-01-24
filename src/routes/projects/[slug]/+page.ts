import { error } from '@sveltejs/kit';
import { ProjectService, initialProjects } from '$lib/api/projects';
import { type Project } from '$lib/types';
import { dev } from '$app/environment';
import type { EntryGenerator } from './$types';

/** @type {import('./$types').PageLoad} */
export function load({ params, fetch }) {
    const project: Project | undefined = initialProjects.find((project) => project.slug === params.slug);
    if (dev) {
        console.log('Server-side log - params:', params);
        console.log('Server-side log - projects:', initialProjects);
        console.log('project ', params.slug)
    }

    if (project === undefined) throw error(404, 'Project not found');

    const projectService: ProjectService = new ProjectService();

    return { project: project, projectService: projectService, fetch: fetch };
}

export const entries: EntryGenerator = () => {
    return initialProjects.map(({ slug }) => ({ slug }))
};