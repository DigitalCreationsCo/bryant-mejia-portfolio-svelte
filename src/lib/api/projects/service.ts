import { projectsStore, projectDetailStore } from '$lib/store/projects';
import type { Project, ProjectDetail } from '$lib/types';
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

const fetchingProjects = new Set<number>();

class ProjectService {
	async fetchProject({ project, fetch }: {
		project: Project;
		fetch: any
	}) {
		if (fetchingProjects.has(project.id)) {
			console.warn(`Skipping duplicate fetch for project: ${project.name}`);
			return;
		}

		fetchingProjects.add(project.id);

		try {
			const response = await fetch(project.url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			});

			const json = JSON.parse(await response.text());

			let newProject: Project;

			newProject = {
				id: project.id,
				slug: project.slug,
				name: project.name,
				url: project.url,
				liveUrl: project.liveUrl,
				description: project.description || json.description,
				imageUrl: project.imageUrl,
				readmeUrl: project.readmeUrl,
				tags: [...project.tags, json?.language].filter(Boolean),
				starsCount: json.stargazers_count,
				forksCount: json.forks,
				downloadsCount: await this.getDownloadsCount(project.url)
			};


			return projectsStore.update((projectsMap) => {
				if (!projectsMap.has(newProject.id)) {
					projectsMap.set(newProject.id, newProject);
				}
				return projectsMap;
			});

		} catch (error) {
			console.error('Error fetching project:', error);
		} finally {
			fetchingProjects.delete(project.id); // Remove from the tracking set
		}
	}

	async fetchProjectDetail({
		project,
		fetch
	}: {
		project: Project;
		fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
	}) {
		try {
			const response = await fetch(project.url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const json = JSON.parse(await response.text());

			let newProject: ProjectDetail;

			if (response.status === 200) {
				newProject = {
					id: project.id,
					slug: project.slug,
					name: project.name,
					url: project.url,
					description: project.description || json.description,
					longDescription: project.longDescription || project.description || json.description,
					imageUrl: project.imageUrl,
					tags: [...project.tags, json?.language].filter(Boolean),
					repositoryUrl: json['svn_url'],
					hasLiveUrl: Boolean(project.liveUrl || json.homepage || false),
					liveUrl: project.liveUrl || json.homepage,
					readmeUrl: project.readmeUrl,
					starsCount: json.stargazers_count,
					forksCount: json.forks,
					downloadsCount: await this.getDownloadsCount(project.url)
				};

				return projectDetailStore.update(() => newProject);
			} else {
				let fallbackData: ProjectDetail;

				if (browser && localStorage.getItem('projectDetail')) {
					fallbackData = {
						...(JSON.parse(localStorage.getItem('projectDetail') ?? '{}') as ProjectDetail),
						imageText: 'Server error: API rate limit exceeded'
					};
				} else if (response.status === 403) {
					fallbackData = {
						id: project.id,
						slug: project.slug,
						name: 'limit',
						url: project.url,
						liveUrl: project.liveUrl,
						description: json.message,
						imageUrl: project.imageUrl,
						tags: [],
						hasLiveUrl: false,
						readmeUrl: project.readmeUrl,
						repositoryUrl: ''
					};
				} else {
					throw response;
				}

				projectDetailStore.update(() => fallbackData);

				return error((response.status as any) ?? 500, 'Failed to fetch data');
			}
		} catch (err) {
			console.log(err);

			let fallbackData: ProjectDetail;

			if (browser && localStorage.getItem('projectDetail')) {
				fallbackData = {
					...(JSON.parse(localStorage.getItem('projectDetail') ?? '{}') as ProjectDetail),
					imageText: 'No internet connection'
				};
			} else {
				fallbackData = {
					id: project.id,
					slug: project.slug,
					name: 'error',
					url: project.url,
					description: 'No internet connection',
					imageUrl: project.imageUrl,
					tags: [],
					liveUrl: project.liveUrl,
					hasLiveUrl: false,
					readmeUrl: project.readmeUrl,
					repositoryUrl: ''
				};
			}

			projectDetailStore.update(() => fallbackData);

			return error(500, 'Failed to fetch data');
		}
	}

	async getProjectReadme({
		project,
		fetch
	}: {
		project: Project;
		fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>;
	}) {
		try {
			const response = await fetch(project.readmeUrl ?? '', {
				method: 'GET'
			});
			const text = await response.text();
			return text;
		} catch (error) {
			return null;
		}
	}

	async getDownloadsCount(url: string) {
		const response = await fetch(`${url}/releases`, {
			method: 'GET'
		});

		try {
			const json = await response.text();
			const releases = JSON.parse(json);

			let count = 0;

			for (let i = 0; i < releases.length; ++i) {
				for (let j = 0; j < releases[i].assets.length; ++j) {
					count += releases[i].assets[j].download_count;
				}
			}

			return count;
		} catch (error) {
			return 0;
		}
	}
}

export { ProjectService };
