export const developerName = 'Maximillian Fong';
export const developerTitle = 'Honors Computer Science Major, Statistics Minor';
export const heroTagline =
	'I am a final-year Computer Science student at McGill University, pursuing an Honors degree with a minor in Statistics. With a strong foundation in full-stack development and machine learning, I specialize in creating scalable applications and extracting insights from data. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative teams in the fields of software development, machine learning, and data science.';

export const projects = [
	{
		id: 1,
		name: 'Modular Study of DQN Enhancements in Practice',
		description:
			'Reimplemented Rainbow DQN from scratch in Python/PyTorch, integrating six core enhancements: Double Q-Learning, Prioritized Experience Replay, Dueling Networks, Noisy Networks, n-step returns and distributional C51. Achieved 60% convergence and 153.9 avg test reward on Seaquest (full Rainbow) vs. vanilla DQN, with ablations revealing Noisy Networks & PER as most critical for fast, stable learning.',
		skills: [
			'Python',
			'PyTorch',
			'Gymnasium',
			'Numpy',
			'Matplotlib',
			'Reinforcement Learning',
		],
		link: 'https://github.com/Waterfountain10/rainbow_ablation_paper',
	},
	{
		id: 2,
		name: 'Turing Poker Bot',
		description:
			'Implemented real-time expectation calculations, factoring in the pot size, player ranges, and win probabilities to optimize decision-making. Utilized a moving average as a reinforcement learning concept, enabling the bot to adapt its strategy based on evolving opponent behaviors. Qualified for cash prizes in two rounds, demonstrating strong performance in a competitive setting.',
		skills: ['Python', 'Poker Agent', 'Game Theory', 'Machine Learning'],
		link: 'https://github.com/denis-tsariov/python-poker-bot/tree/mcgill-tournament',
	},
	{
		id: 3,
		name: 'Digit Recognition with CNN',
		description:
			'Achieved 86%+ accuracy in recognizing handwritten digits. Implemented techniques like batch normalization, data augmentation, and stochastic gradient descent to improve model performance and reduce overfitting.',
		skills: ['Python', 'Numpy', 'PyTorch', 'Pandas', 'CNN'],
		link: 'https://github.com/sham-bolic/number_classification_cnn',
	},
	{
		id: 4,
		name: 'BetterCV - AI-Powered CV Generator',
		description:
			'Developed a web app that generates job-specific CVs using AI to analyze job descriptions and rank user-provided skills and experiences. Built with React, TypeScript, Tailwind CSS, Drizzle ORM, and Postgres, the platform integrates Gemini AI for intelligent content selection.',
		skills: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'DrizzleORM',
			'PostgreSQL',
			'Gemini AI',
		],
		link: 'https://devpost.com/software/bcv-hackmcwics25',
	},
	{
		id: 5,
		name: 'Meal Mates',
		description:
			'Developed a full-stack mobile app that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Native and the backend is developed with Django-rest and SQLite3 database.',
		skills: [
			'React Native',
			'Django Rest API',
			'SQLite3',
			'Python',
			'JavaScript',
		],
		link: 'https://devpost.com/software/fooder-zx98kt',
	},
	{
		id: 6,
		name: 'AI Agent for Colosseum Game',
		description:
			'Developed an AI agent for the Colosseum game, incorporating custom heuristics to evaluate and navigate game states effectively. Implemented a Monte Carlo Search Tree combined with Multi-Armed Bandits to explore possible actions and determine the most optimal moves.',
		skills: ['Python', 'Monte Carlo', 'AI', 'Game Theory'],
		link: 'https://github.com/sham-bolic/AI_Final_Proj',
	},
];

export const skills = [
	{
		category: 'Programming Languages / Tools',
		list: [
			'Python',
			'Java',
			'JavaScript',
			'TypeScript',
			'C',
			'C++',
			'R',
			'HTML/CSS',
			'Git',
			'SQL',
			'MATLAB',
		],
	},
	{
		category: 'Full-Stack / Mobile Dev',
		list: [
			'ReactJS',
			'Next.js',
			'TailwindCSS',
			'React Native',
			'Django Rest API',
			'MUI',
		],
	},
	{
		category: 'Data Science / ML',
		list: [
			'PyTorch',
			'Numpy',
			'Pandas',
			'Scikit-learn',
			'Matplotlib',
			'PySpark',
			'HuggingFace transformers',
			'LangChain',
			'LangGraph',
			'vLLM',
			'OpenAI API',
		],
	},
];

export const experience = [
	{
		id: 1,
		title: 'Growth Engineer Intern',
		company: 'Botpress',
		date: 'Sep 2025 - Present',
		description: [
			'Enhance and expand our open-source integrations, including SharePoint, MailerLite, and Persat, with new features, improved stability, and broader capabilities.',
			'Run a pilot program and provide exceptional, hands-on support to a Team Plan customer to ensure successful adoption and valuable feedback.',
			'Improve onboarding by developing a bot-building agent that helps users create, refine, and launch their bots more easily and intuitively, leading to higher user retention.',
		],
	},
	{
		id: 2,
		title: 'Software Developer Intern',
		company: 'Retail Realm',
		date: 'May 2025 - Aug 2025',
		description: [
			'Designed and deployed an internal support automation tool using Azure Databricks and PySpark, building a scalable ETL pipeline to ingest and preprocess historical support tickets with NLP techniques.',
			'Implemented a Retrieval-Augmented Generation (RAG) system with a Vector Database, enabling semantic search and contextual answer extraction from resolved tickets.',
			'Benchmarked and deployed locally hosted LLMs using vLLM on a virtual machine, integrating OpenAI APIs to optimize performance for document-level data extraction and real-time support use cases.',
			'Developed and integrated an agentic chatbot using LangGraph and LangChain, leveraging the RAG system to autonomously retrieve, reason, and respond, improving support team efficiency and reducing average response time.',
		],
	},
];

export const education = [
	{
		id: 1,
		institution: 'McGill University',
		degree: 'BSc Honors Computer Science / Minor Statistics',
		years: '2022 - 2026',
		coursework: [
			'Artificial Intelligence',
			'Machine Learning',
			'Reinforcement Learning',
			'Time Series Analysis',
			'Software Design',
			'Applied Regression',
			'Cryptography and Data Security',
			'Databases',
		],
	},
];

export const hobbies = [
	{
		id: 1,
		name: 'Volleyball',
		description:
			'This is one of my more recent hobbies that I have been getting really into. From going to open gym many times a week to partaking in multiple intramural teams during the semester, I am always looking to play some volleyball.',
		image: '/images/hobbies/vball.jpg',
	},
	{
		id: 2,
		name: 'Cycling',
		description:
			'My favorite summertime activity is going for a ride with friends, whether it be a short ride around Circuit Gilles Villeneuve or a longer trip to Niagara Falls. Cycling gives me a sense of freedom that no other sport does.',
		image: '/images/hobbies/cycling.jpg',
	},
	{
		id: 3,
		name: 'Climbing',
		description:
			'The aspect that draws me to bouldering is the constant battle against myself. Each boulder is like a problem that I have to solve, which stimulates my mind as much as it does my body.',
		image: '/images/hobbies/climbing.jpg',
	},
	{
		id: 4,
		name: 'Snowboarding',
		description:
			'Going fast, quick maneuvers, snowboarding is my favorite winter activity. I love the feeling of adrenaline, the feeling of just reacting to the mountain and the snow. It is a great way to spend time with friends and family.',
		image: '/images/hobbies/snowboarding.jpg',
	},
	{
		id: 5,
		name: 'Travelling',
		description:
			'Seeing new landscapes, experiencing different cultures, and most of all trying new foods. Travelling has really opened my eyes to different lifestyles around the world, making me appreciate more what I have and what I can do.',
		image: '/images/hobbies/travelling.jpg',
	},
	{
		id: 6,
		name: 'Gaming',
		description:
			'This is my way of spending time with friends and my way of relaxing. Most games I play are competitive, and I love the feeling of improving and climbing the ranks.',
		image: '/images/hobbies/gaming.jpg',
	},
];
