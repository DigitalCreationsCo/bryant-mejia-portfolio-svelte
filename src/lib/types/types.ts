interface Project {
	id: number;
	name: string;
	slug: string;
	url: string;
	liveUrl: string;
	description?: string;
	imageUrl: string;
	imageText?: string;
	readmeUrl?: string;
	tags: string[];
	starsCount?: number;
	forksCount?: number;
	downloadsCount?: number;
}

interface ProjectDetail extends Project {
	repositoryUrl: string;
	hasLiveUrl: boolean;
	liveUrl: string;
}

interface NavLink {
	text: string;
	link: string;
}

export type { Project, ProjectDetail, NavLink };
