import type { Project } from '$lib/types';

const githubApiLink = 'https://api.github.com/repos/digitalcreationsco';
const githubUserApiLink = 'https://api.github.com/users/digitalcreationsco';
const githubUsername = 'digitalcreationsco';

interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	forks: number;
	updated_at: string;
	default_branch: string;
}

async function fetchGitHubRepos(fetch: any): Promise<GitHubRepo[]> {
	try {
		const response = await fetch(`${githubUserApiLink}/repos?sort=updated&direction=desc&per_page=100`, {
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.github.v3+json'
			}
		});

		if (!response.ok) {
			// Log status for debugging but don't throw - return empty array
			console.warn(`GitHub API returned ${response.status}: ${response.statusText}`);
			// If rate limited, log a warning
			if (response.status === 403) {
				console.warn('GitHub API rate limit may have been exceeded');
			}
			return [];
		}

		const text = await response.text();
		if (!text) {
			return [];
		}

		try {
			const repos: GitHubRepo[] = JSON.parse(text);
			return Array.isArray(repos) ? repos : [];
		} catch (parseError) {
			console.error('Failed to parse GitHub API response:', parseError);
			return [];
		}
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return [];
	}
}

function transformGitHubRepoToProject(repo: GitHubRepo): Project {
	const slug = repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
	const branch = repo.default_branch || 'main';
	// Try common image file names - these will be validated when fetched
	const possibleImagePaths = [
		`preview.png`,
		`${repo.name}-preview.png`,
		`${repo.name.toLowerCase()}-preview.png`,
		`preview.jpg`,
		`screenshot.png`,
		`image-preview.png`
	];
	// Use the first possible path as default (will be validated when ProjectService fetches it)
	const imageUrl = `https://raw.githubusercontent.com/${repo.full_name}/${branch}/${possibleImagePaths[0]}`;
	const readmeUrl = `https://raw.githubusercontent.com/${repo.full_name}/${branch}/README.md`;

	return {
		id: repo.id,
		slug: slug,
		name: repo.name,
		url: `${githubApiLink}/${repo.name}`,
		liveUrl: repo.homepage || '',
		description: repo.description || '',
		imageUrl: imageUrl,
		readmeUrl: readmeUrl,
		tags: repo.language ? [repo.language] : []
	};
}

// Static projects list for backward compatibility and fallback
const staticProjects: Project[] = [
	{
		id: 5,
		slug: 'supply-chain-optimizer',
		name: 'Supply Chain Optimizer Application',
		url: `${githubApiLink}/Supply-Chain-Optimizer-Angular`,
		liveUrl: 'https://optimize-supply-chain.netlify.app/',
		description: 'Costs and emissions analysis for supply chain built using Angular 19.',
		longDescription: 'This Angular application helps track and analyze costs and emissions for supply chain routes. It allows users to calculate total emissions based on geographic data and transportation segments.',
		imageUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/Supply-Chain-Optimizer-Angular/refs/heads/main/supply-chain-optimizer-image-preview.png',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/Supply-Chain-Optimizer-Angular/refs/heads/main/README.md',
		tags: ['Angular', 'Analytics', 'Reactive']
	},
	{
		id: 0,
		slug: 'tonestar',
		name: 'Tonestar',
		url: `${githubApiLink}/tonestar`,
		liveUrl: `https://tonestar-music.vercel.app`,
		description: ``,
		longDescription: ``,
		imageUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/tonestar/refs/heads/master/tonestar-image-preview.png',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/tonestar/refs/heads/master/README.md',
		tags: ['Artificial Intelligence', 'User-Generated Content', 'Audio Playblack']
	},
	{
		id: 1,
		slug: 'tiny-mail',
		name: 'Tiny Mail',
		url: `${githubApiLink}/TinyMail`,
		liveUrl: `https://tiny-mail.vercel.app`,
		description: 'Tiny Mail is an application designed to streamline email creation and customization using user-created templates',
		longDescription: `Tiny Mail is an application designed to streamline email creation and customization using user-created templates. With integrations for Google Sheets and OAuth2-powered authentication, Tiny Mail enables users to automate their outgoing email workflows efficiently. Whether you're managing newsletters, email series, or one-off communications, Tiny Mail provides the tools you need to produce hassle-free email content.`,
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/public/tiny-mail-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/README.md',
		tags: ['Email', 'Editor', 'UGC', 'React', 'Multi Tenant']
	},
	{
		id: 3,
		slug: 'gras-retail-saas',
		name: 'Gras Retail Business Application',
		url: `${githubApiLink}/cannabis-platform-monorepo`,
		liveUrl: 'https://app.gras.live',
		description: 'Retail marketing SaaS platform. The architecture is distributed microservices hosted in a Google Cloud container cluster. Scalable services feature Load Balancing, Ingress Controller, and feature-rich edge API Gateway for efficiently routing high traffic load.',
		longDescription: `Retail marketing SaaS platform. The architecture is distributed microservices hosted in a Google Cloud container cluster. Scalable services feature Load Balancing, Ingress Controller, and feature-rich edge API Gateway for efficiently routing high traffic load. 
The platform is designed for scalability, utilizing load balancing, an ingress controller, and a feature-rich edge API Gateway to efficiently manage high traffic volumes and ensure seamless routing between services. 
The project implements Terraform modules to automate provisioning and management of cloud resources.  
The codebase follows a monorepo structure, promoting consistency and simplifying dependency management across microservices, while reusable code modules ensure maintainability and reduce duplication.  
Typescript is used throughout the application, providing static typing to improve code quality, reduce runtime errors, and enhance developer productivity through better tooling and IDE support.`,
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/cannabis-platform-monorepo/refs/heads/production/static/assets/images/gras-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/cannabis-platform-monorepo/refs/heads/production/README.md?token=GHSAT0AAAAAAC24QLMWQKWAW7WEY66ISALSZ2JOQ4A',
		tags: ['SaaS', 'React', 'Microservices']
	},
	{
		id: 2,
		slug: 'web-form',
		name: 'Web Form Showcase',
		url: `${githubApiLink}/welcome-form`,
		liveUrl: 'https://welcomeform.netlify.app',
		description: 'A simple and effective web form solution using modern web technologies, built with React and Next.js.',
		longDescription: `This project demonstrates a simple and effective web form solution using modern web technologies, built with React and Next.js. It showcases advanced form handling techniques, including validation, dynamic rendering, and user interactions. The form state is persisted using React Context API.`,
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/welcome-form/refs/heads/main/web-form-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/welcome-form/refs/heads/main/README.md',
		tags: ['Form', 'Frontend', 'React']
	},
	{
		id: 3,
		slug: 'ml-concepts-explorer',
		name: 'Machine Learning Concepts Explorer',
		url: `${githubApiLink}/ml-concepts-explorer`,
		liveUrl: 'https://ml-concepts-explorer-sff2.vercel.app',
		description: 'Machine Learning Concepts Explorer is a React application that provides explanations of various ML/DL concepts using animations and interactive elements.',
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/ml-concepts-explorer/refs/heads/main/ml-concepts-explorer-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/ml-concepts-explorer/refs/heads/main/README.md',
		tags: ['Machine Learning', 'Artificial Intelligence', 'React']
	},
	{
		id: 4,
		slug: 'parallax-scroll',
		name: 'Parallax Scroll Demo',
		url: `${githubApiLink}/motion-scroll`,
		liveUrl: 'https://parallaxscrolldemonstration.netlify.app',
		description: 'This project is a Parallax Scrolling and Snap Scroll Animation Demo, showcasing modern web design and animation techniques.',
		longDescription: `This project is a Parallax Scrolling and Snap Scroll Animation Demo, showcasing modern web design and animation techniques. It presents a visually engaging futuristic theme centered around "Metal" concepts, portraying innovation, technology, and digital transformation. The user experience is emphasized by the parallax scrolling effects, creating an intuitive and dynamic storytelling format`,
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/motion-scroll/refs/heads/main/8.jpg',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/motion-scroll/refs/heads/main/README.md',
		tags: ['Html', 'Css', 'Motion', 'Animation']
	},
	{
		id: 6,
		slug: 'portfolio-v5',
		name: 'Bryant Mejia Portfolio',
		url: `${githubApiLink}/bryant-mejia-portfolio-svelte`,
		liveUrl: 'https://bryantmejia.com',
		description: 'Bryant Mejia developer portfolio website built using SvelteKit.',
		longDescription: 'This project is a **personal portfolio website** built using **SvelteKit**, a modern framework for building highly optimized web applications. It showcases my professional experience, projects, skills, and contact information in a responsive design. The goal of this portfolio is to effectively present my work and leave a lasting impression on visitors, including potential employers.',
		imageUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-svelte/refs/heads/main/static/bryant-mejia-portfolio-image-preview.png',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-svelte/refs/heads/main/README.md',
		tags: ['Html', 'Svelte', 'SSR', 'Frontend']
	},
];

// Get initial projects with 3 most recent repos prepended
async function getInitialProjects(fetch: any): Promise<Project[]> {
	try {
		const repos = await fetchGitHubRepos(fetch);
		
		// Only add repos if we successfully fetched them
		if (repos && repos.length > 0) {
			const recentRepos = repos.slice(0, 3).map(repo => transformGitHubRepoToProject(repo));
			// Prepend the 3 most recent repos to the static projects
			return [...recentRepos, ...staticProjects];
		}
	} catch (error) {
		console.error('Error in getInitialProjects, falling back to static projects:', error);
	}
	
	// Fallback to static projects if GitHub fetch fails
	return staticProjects;
}

// Get all GitHub repos as projects
async function getAllGitHubReposAsProjects(fetch: any): Promise<Project[]> {
	try {
		const repos = await fetchGitHubRepos(fetch);
		if (repos && repos.length > 0) {
			return repos.map(repo => transformGitHubRepoToProject(repo));
		}
	} catch (error) {
		console.error('Error in getAllGitHubReposAsProjects:', error);
	}
	
	// Return empty array if fetch fails - component will handle gracefully
	return [];
}

// For backward compatibility
const initialProjects = staticProjects;

export { initialProjects, fetchGitHubRepos, transformGitHubRepoToProject, getInitialProjects, getAllGitHubReposAsProjects };
