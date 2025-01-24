import { derived, writable, type Writable } from 'svelte/store';
import type { Project, ProjectDetail } from '$lib/types';

export const projectsStore = writable(new Map<number, Project>());

export const projectDetailStore = writable<ProjectDetail>();

export const projects = derived<Writable<Map<number, Project>>, Project[]>(
	projectsStore,
	($projects) => Array.from($projects.values())
);

export const projectDetail = derived<Writable<ProjectDetail>, ProjectDetail>(
	projectDetailStore,
	($projectDetail) => $projectDetail
);
