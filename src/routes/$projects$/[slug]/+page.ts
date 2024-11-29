import { error } from '@sveltejs/kit';
import { ProjectService, initialProjects } from '$lib/api/projects';
import { type Project } from '$lib/types';

/** @type {import('./$types').PageLoad} */
export function load({ params, fetch }) {

    console.log('page !')
    if (params.slug) throw error(404, 'Project not found');
    const projectService: ProjectService = new ProjectService();

    const project: Project | undefined = initialProjects.find((project) => project.slug === params.slug);
    if (project === undefined) throw error(404, 'Project not found');

    return { project: project, projectService: projectService, fetch: fetch };
}