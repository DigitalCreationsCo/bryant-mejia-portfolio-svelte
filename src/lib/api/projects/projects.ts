import type { Project } from '$lib/types';

const githubApiLink = 'https://api.github.com/repos/digitalcreationsco';
const initialProjects: Project[] = [
	{
		id: 0,
		slug: 'api-gateway',
		name: 'Express API Gateway',
		url: `${githubApiLink}/nodeJsApiGateway`,
		liveUrl: `${githubApiLink}/nodeJsApiGateway`,
		description: `A fully-featured API Gateway built for the Node.js javascript runtime using Express.js framework. `,
		longDescription: `A fully-featured API Gateway built for the Node.js javascript runtime using Express.js framework. The application leverages the Axios library for handling requests and includes a service registry for dynamically managing registered APIs.`,
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
		description: 'Tiny Mail is an application designed to streamline email creation and customization using user-created templates',
		longDescription: `Tiny Mail is an application designed to streamline email creation and customization using user-created templates. With integrations for Google Sheets and OAuth2-powered authentication, Tiny Mail enables users to automate their outgoing email workflows efficiently. Whether you're managing newsletters, email series, or one-off communications, Tiny Mail provides the tools you need to produce hassle-free email content.`,
		imageUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/public/tiny-mail-image-preview.png',
		readmeUrl:
			'https://raw.githubusercontent.com/DigitalCreationsCo/TinyMail/refs/heads/main/README.md',
		tags: ['Email', 'Editor', 'UGC', 'React']
	},
	{
		id: 2,
		slug: 'web-form',
		name: 'Web Form Showcase',
		url: `${githubApiLink}/welcome-form`,
		liveUrl: 'https://welcomeform.netlify.app',
		description: 'A simple and effective web form solution using modern web technologies, built with React and Next.js.',
		longDescription: `This project demonstrates a simple and effective web form solution using modern web technologies, built with React and Next.js. It showcases advanced form handling techniques, including validation, dynamic rendering, and user interactions.`,
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
		description: 'Retail marketing SaaS platform. The architecture is distributed microservices hosted in a Google Cloud container cluster. Scalable services feature Load Balancing, Ingress Controller, and feature-rich edge API Gateway for efficiently routing high traffic load.',
		longDescription: `The platform is designed for scalability, utilizing load balancing, an ingress controller, and a feature-rich edge API Gateway to efficiently manage high traffic volumes and ensure seamless routing between services. 
The project implements Terraform modules to automate provisioning and management of cloud resources.  
The codebase follows a monorepo structure, promoting consistency and simplifying dependency management across microservices, while reusable code modules ensure maintainability and reduce duplication.  
Typescript is used throughout the application, providing static typing to improve code quality, reduce runtime errors, and enhance developer productivity through better tooling and IDE support.`,
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
		description: 'Machine Learning Concepts Explorer is a React application that provides explanations of various ML/DL concepts using animations and interactive elements.',
		longDescription: 'Machine Learning Concepts Explorer is a React application that provides explanations of various ML/DL concepts using animations and interactive elements. The visualizations and animations help to make these complex topics more approachable.',
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
		description: 'This project is a Parallax Scrolling and Snap Scroll Animation Demo, showcasing modern web design and animation techniques.',
		longDescription: `This project is a Parallax Scrolling and Snap Scroll Animation Demo, showcasing modern web design and animation techniques. It presents a visually engaging futuristic theme centered around "Metal" concepts, portraying innovation, technology, and digital transformation. The user experience is emphasized by the parallax scrolling effects, creating an intuitive and dynamic storytelling format`,
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
		description: 'A food delivery mobile application frontend built with React Native and Expo.',
		longDescription: 'A food delivery mobile application frontend built with React Native and Expo. The project follows a clean architecture approach to ensure organized, scalable and maintainable application code. The application leverages React Navigation to structure and navigate the user interface, providing a seamless and intuitive user experience.',
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
