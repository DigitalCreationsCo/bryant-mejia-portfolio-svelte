import type { Project } from '$lib/types';

const githubApiLink = 'https://api.github.com/repos/digitalcreationsco';
const initialProjects: Project[] = [
	{
		id: 0,
		slug: 'api-gateway',
		name: 'Express api-gateway',
		url: `${githubApiLink}/nodeJsApiGateway`,
		liveUrl: `${githubApiLink}/nodeJsApiGateway`,
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/nodeJsApiGateway/refs/heads/master/README.md',
		tags: ['gateway', 'api', 'backend', 'node.js']
	},
	{
		id: 1,
		slug: 'tiny-mail',
		name: 'Tiny Mail',
		url: `${githubApiLink}/TinyMail`,
		liveUrl: `https://tiny-mail.vercel.app`,
		description: '',
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/public/tiny-mail-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/README.md',
		tags: ['email', 'react']
	},
	{
		id: 2,
		slug: 'web-form',
		name: 'Web Form Showcase',
		url: `${githubApiLink}/welcome-form`,
		liveUrl: 'https://welcomeform.netlify.app',
		description: '',
		imageUrl:
			'',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/welcome-form/refs/heads/main/README.md',
		tags: ['form', 'frontend', 'react']
	},
	{
		id: 3,
		slug: 'gras-retail-saas',
		name: 'Gras Retail Business Application',
		url: `${githubApiLink}/cannabis-platform-monorepo`,
		liveUrl: 'https://app.gras.live',
		description: '',
		imageUrl:
			'',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/cannabis-platform-monorepo/refs/heads/production/README.md?token=GHSAT0AAAAAAC24QLMWQKWAW7WEY66ISALSZ2JOQ4A',
		tags: ['SaaS', 'react']
	},
	{
		id: 4,
		slug: 'parallax-scroll',
		name: 'Parallax Scroll Demo',
		url: `${githubApiLink}/motion-scroll`,
		liveUrl: 'https://parallaxscrolldemonstration.netlify.app',
		description: '',
		imageUrl:
			'',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/motion-scroll/refs/heads/main/README.md',
		tags: ['html', 'css', 'motion', 'animation']
	},
	{
		id: 5,
		slug: 'portfolio',
		name: 'Portfolio website',
		url: `${githubApiLink}/bryant-mejia-portfolio-svelte`,
		liveUrl: 'https://bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-svelte/refs/heads/main/README.md',
		tags: ['html', 'svelte', 'frontend']
	},
	{
		id: 6,
		slug: 'food-delivery',
		name: 'Food Delivery Application',
		url: `${githubApiLink}/food-delivery-app-react-native`,
		liveUrl: '',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/food-delivery-app-react-native/refs/heads/master/README.md',
		tags: ['mobile', 'react native']
	}
];

export { initialProjects };
