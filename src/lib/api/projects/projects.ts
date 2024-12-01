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
		tags: ['Gateway', 'API', 'Backend', 'Node.js']
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
		tags: ['Email', 'WYSIWYG Editor', 'UGC', 'React']
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
		tags: ['Form', 'Frontend', 'React']
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
		tags: ['SaaS', 'React']
	},
	{
		id: 3,
		slug: 'ml-concepts-explorer',
		name: 'Machine Learning Concepts Explorer',
		url: `${githubApiLink}/ml-concepts-explorer`,
		liveUrl: 'https://ml-concepts-explorer-sff2.vercel.app',
		description: '',
		imageUrl:
			'',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/ml-concepts-explorer/refs/heads/main/README.md',
		tags: ['ML', 'React']
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
		tags: ['Html', 'Css', 'Motion', 'Animation']
	},
	{
		id: 5,
		slug: 'food-delivery',
		name: 'Food Delivery Application',
		url: `${githubApiLink}/food-delivery-app-react-native`,
		liveUrl: '',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/food-delivery-app-react-native/refs/heads/master/README.md',
		tags: ['Mobile', 'React Native']
	},
	{
		id: 6,
		slug: 'portfolio-v5',
		name: 'Bryant Mejia Portfolio',
		url: `${githubApiLink}/bryant-mejia-portfolio-svelte`,
		liveUrl: 'https://bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-svelte/refs/heads/main/README.md',
		tags: ['Html', 'Svelte', 'SSR', 'Frontend']
	},
	{
		id: 7,
		slug: 'portfolio-v4',
		name: 'Portfolio V4',
		url: `${githubApiLink}/bryant-mejia-portfolio-svelte`,
		liveUrl: 'https://portfolio.v4.bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: '',
		tags: ['Html', 'Css', 'Nocode']
	},
	{
		id: 8,
		slug: 'portfolio-v3',
		name: 'Portfolio V3',
		url: `${githubApiLink}/bryant-mejia-portfolio-next`,
		liveUrl: 'https://portfolio.v3.bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-next/refs/heads/main/README.md',
		tags: ['React', 'SSR']
	},
	{
		id: 9,
		slug: 'portfolio-v2',
		name: 'Portfolio V2',
		url: `${githubApiLink}/bryant-mejia-portfolio-svelte`,
		liveUrl: 'https://portfolio.v2.bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/bryant-mejia-portfolio-svelte/refs/heads/main/README.md',
		tags: ['React', 'SPA']
	},
	{
		id: 10,
		slug: 'portfolio-v1',
		name: 'Portfolio V1',
		url: `${githubApiLink}/htmlresume`,
		liveUrl: 'https://portfolio.v1.bryantmejia.com',
		description: '',
		imageUrl: '',
		readmeUrl: 'https://raw.githubusercontent.com/DigitalCreationsCo/htmlresume/refs/heads/master/README.md?token=GHSAT0AAAAAAC24QLMWYIOLUI4UDUAR4OLAZ2KFAUA',
		tags: ['Html', 'Css']
	},
];

export { initialProjects };
