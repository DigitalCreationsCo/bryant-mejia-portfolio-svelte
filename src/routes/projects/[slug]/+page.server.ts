import { error } from '@sveltejs/kit';
import { ProjectService, getInitialProjects, initialProjects } from '$lib/api/projects';
import { type Project, type ProjectDetail } from '$lib/types';
import { dev } from '$app/environment';
import type { EntryGenerator, PageServerLoad } from './$types';
/** @type {PageServerLoad} */
export async function load({ params, fetch }) {
    try {
        const apiKey = process.env.GITHUB_API_KEY;
        // Always fallback to static projects during prerender to avoid 404s
        let allProjects = initialProjects;
        
        // Try to get initial projects (with GitHub repos) if fetch is available
        if (fetch) {
            try {
                allProjects = await getInitialProjects(fetch, apiKey);
            } catch (fetchError) {
                console.warn('Failed to fetch GitHub repos, using static projects:', fetchError);
                // Use static projects as fallback
                allProjects = initialProjects;
            }
        }
        
        const project: Project | undefined = allProjects.find((project) => project.slug === params.slug);
        if (dev) {
            console.log('Server-side log - params:', params);
            console.log('Server-side log - projects count:', allProjects.length);
            console.log('project slug:', params.slug);
        }

        if (project === undefined) throw error(404, 'Project not found');

        const projectService: ProjectService = new ProjectService(apiKey);
        const projectDetail: ProjectDetail = await projectService.fetchProjectDetail({ project, fetch });
        const readmeContent: string | null = project.readmeUrl ? await projectService.getProjectReadme({ project, fetch }) : null;

        return { projectDetail: projectDetail, readmeContent: readmeContent };
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