import { projectsStore, projectDetailStore } from '$lib/store/projects';
import type { Project, ProjectDetail } from '$lib/types';
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

class ProjectService {
	async fetchProject({
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

			let newProject: Project;

			if (response.status === 200) {
				newProject = {
					id: project.id,
					slug: project.slug,
					name: project.name,
					url: project.url,
					liveUrl: project.liveUrl,
					description: project.description || json.description,
					imageUrl: project.imageUrl,
					readmeUrl: project.readmeUrl,
					tags: [...project.tags, json?.language?.toLowerCase()].filter(Boolean),
					starsCount: json.stargazers_count,
					forksCount: json.forks,
					downloadsCount: await this.getDownloadsCount(project.url)
				};

				return projectsStore.update((projects) => {
					const updatedProjects = [...projects, newProject];

					if (browser) {
						try {
							localStorage.setItem('projects', JSON.stringify(updatedProjects));
						} finally {
							[];
						}
					}

					return updatedProjects;
				});
			} else {
				console.log(json);

				let fallbackData: Project[] = [];

				if (browser && localStorage.getItem('projects')) {
					fallbackData = (JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]).map(
						(project) => ({ ...project, imageText: 'Server error / API rate limit exceeded' })
					);
				} else if (response.status === 403) {
					fallbackData = [
						{
							id: project.id,
							slug: project.slug,
							name: 'limit',
							liveUrl: project.liveUrl,
							url: project.url,
							description: json.message,
							imageUrl: project.imageUrl,
							readmeUrl: project.readmeUrl,
							tags: []
						}
					];
				} else {
					throw response;
				}

				projectsStore.update(() => fallbackData);

				return error(response.status ?? 500, 'Failed to fetch data');
			}
		} catch (err) {
			console.log(err);

			let fallbackData: Project[] = [];

			if (browser && localStorage.getItem('projects')) {
				fallbackData = (JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]).map(
					(project) => ({ ...project, imageText: 'A connection could not be established.' })
				);
			} else {
				fallbackData = [
					{
						id: project.id,
						slug: project.slug,
						name: 'error',
						liveUrl: project.liveUrl,
						url: project.url,
						description: 'A connection could not be established.',
						imageUrl: project.imageUrl,
						readmeUrl: project.readmeUrl,
						tags: []
					}
				];
			}

			projectsStore.update(() => fallbackData);

			return error(500, 'Failed to fetch data');
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
					tags: [...project.tags, json?.language?.toLowerCase()].filter(Boolean),
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
				console.log(json);

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

				return error(response.status ?? 500, 'Failed to fetch data');
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
