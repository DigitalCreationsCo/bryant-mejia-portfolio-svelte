import { error } from '@sveltejs/kit';
import { ProjectService, initialProjects } from '$lib/api/projects';
import { type Project } from '$lib/types';
import { dev } from '$app/environment';
import type { EntryGenerator } from './$types';

/** @type {import('./$types').PageLoad} */
export function load({ params, fetch }) {
    if (dev) {
        console.log('Server-side log - params:', params);
        console.log('Server-side log - projects:', initialProjects);
    }

    const project: Project | undefined = initialProjects.find((project) => project.slug === params.slug);
    if (project === undefined) throw error(404, 'Project not found');

    const projectService: ProjectService = new ProjectService();

    return { project: project, projectService: projectService, fetch: fetch };
}

export const entries: EntryGenerator = () => {
    return [
        { slug: 'api-gateway' },
        { slug: 'tiny-mail' },
        // { slug: 'another-blog-post' },
        // { slug: 'another-blog-post' },
        // { slug: 'another-blog-post' },
        // { slug: 'another-blog-post' },
        // { slug: 'another-blog-post' }
    ];
};