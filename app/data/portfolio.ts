export const developerName = 'Maximillian Fong';
export const developerTitle = 'Honors Computer Science Major, Statistics Minor';
export const heroTagline =
	'I am a final-year Computer Science student at McGill University, pursuing an Honors degree with a minor in Statistics. With a strong foundation in full-stack development and machine learning, I specialize in creating scalable applications and extracting insights from data. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative teams in the fields of software development, machine learning, and data science.';

export const projects = [
	{
		id: 1,
		name: 'Modular Study of DQN Enhancements in Practice',
		description:
			'Reimplemented Rainbow DQN from scratch in Python/PyTorch, achieving 60% faster convergence and superior rewards on Seaquest compared to vanilla DQN.',
		detailedDescription:
			"This project is a comprehensive reproduction and analysis of the Rainbow DQN architecture, a state-of-the-art reinforcement learning algorithm. I implemented the system from scratch using Python and PyTorch, methodically integrating six key enhancements to the standard DQN algorithm:\n\n• Double Q-Learning to reduce overestimation bias.\n• Prioritized Experience Replay (PER) to learn more frequently from important transitions.\n• Dueling Network Architectures to separately estimate state value and advantage.\n• Noisy Networks for better exploration.\n• Multi-step (n-step) returns for faster propagation of rewards.\n• Distributional RL (C51) to model the distribution of returns.\n\nThe agent was tested on the Atari 'Seaquest' environment. The full Rainbow implementation achieved 60% faster convergence and a significantly higher average test reward (153.9) compared to a vanilla DQN baseline. Furthermore, I conducted ablation studies which highlighted that Noisy Networks and PER were the most impactful components for achieving fast and stable learning in this domain.",
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
			'Built a poker bot with real-time EV calculation and adaptive opponent modeling that qualified for cash prizes in a competitive tournament.',
		detailedDescription:
			"Developed for the McGill Physics Hackathon/Tournament, this poker bot is designed to play Texas Hold'em autonomously. The core logic involves real-time calculation of Expected Value (EV) by analyzing pot odds, estimating opponent hand ranges, and simulating win probabilities.\n\nTo handle dynamic opponents, I implemented an adaptive strategy using moving averages of opponent actions to model their aggression and looseness. This allows the bot to shift between conservative and aggressive playstyles based on the table dynamics. The bot successfully competed against other student-made agents, qualifying for cash prizes in two separate rounds, proving its robustness in a competitive environment.",
		skills: ['Python', 'Poker Agent', 'Game Theory', 'Machine Learning'],
		link: 'https://github.com/denis-tsariov/python-poker-bot/tree/mcgill-tournament',
	},
	{
		id: 3,
		name: 'Digit Recognition with CNN',
		description:
			'Designed and trained a CNN for handwritten digit recognition, achieving 86%+ accuracy using PyTorch and optimization techniques.',
		detailedDescription:
			"A deep learning project focused on computer vision, specifically the classification of handwritten digits. I designed and trained a Convolutional Neural Network (CNN) using PyTorch.\n\nKey features of the implementation include:\n• Custom CNN architecture with multiple convolutional and pooling layers.\n• Batch Normalization to stabilize learning and allow higher learning rates.\n• Data Augmentation techniques (rotation, shifting) to increase dataset diversity and robustness.\n• Optimization via Stochastic Gradient Descent (SGD) with momentum.\n\nThe final model achieved over 86% accuracy on the test set, demonstrating effective handling of overfitting and generalization.",
		skills: ['Python', 'Numpy', 'PyTorch', 'Pandas', 'CNN'],
		link: 'https://github.com/sham-bolic/number_classification_cnn',
	},
	{
		id: 4,
		name: 'BetterCV - AI-Powered CV Generator',
		description:
			'Created an AI-powered web app that generates tailored CVs by analyzing job descriptions and user profiles with Google Gemini AI.',
		detailedDescription:
			"BetterCV is an AI-powered tool built to solve the tedious process of tailoring resumes for every job application. Created during a hackathon (McWiCS 2025), this web application takes a user's master profile (skills, experience, projects) and a specific job description as input.\n\nUsing Google's Gemini AI, the system analyzes the job requirements and intelligently selects and ranks the user's most relevant experiences. It then generates a formatted, job-specific CV.\n\nThe technical stack includes:\n• Frontend: React with TypeScript and Tailwind CSS for a responsive UI.\n• Backend: Node.js with Drizzle ORM and PostgreSQL for data management.\n• AI Integration: Gemini AI API for natural language processing and content generation.\n\nThe project demonstrates a practical application of LLMs in automating career-related tasks.",
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
			"Developed 'Meal Mates', a React Native mobile app for social dining that matches friends with nearby restaurants using a swipe interface.",
		detailedDescription:
			"Meal Mates is a 'Tinder for Food' style mobile application designed to make deciding where to eat fun and social. Users can browse food photos from nearby restaurants and swipe right to 'like' or left to 'pass'.\n\nThe app's social feature allows friends to link accounts; when two friends like the same restaurant, it creates a 'match', suggesting a place for them to dine together.\n\nTechnical details:\n• Frontend: Built with React Native for cross-platform mobile compatibility.\n• Backend: A robust REST API developed with Django and Django REST Framework.\n• Database: SQLite3 for data storage (restaurant data, user preferences, matches).\n• Geolocation: Integration with location services to find nearby dining options.",
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
			'Engineered an AI agent for the Colosseum game using Monte Carlo Tree Search and custom heuristics, outperforming random and student agents.',
		detailedDescription:
			"This project involved creating an autonomous agent to play 'Colosseum', a strategy board game. The goal was to develop an AI capable of beating both random agents and other student-developed AIs.\n\nThe core of the agent is built on Monte Carlo Tree Search (MCTS), which allows it to simulate thousands of future game states to determine the best move. To balance exploration (trying new moves) and exploitation (using known good moves), I integrated the Upper Confidence Bound applied to Trees (UCT) algorithm, a form of Multi-Armed Bandit problem solving.\n\nI also designed custom heuristics to evaluate non-terminal board states, helping the agent make better decisions even when it couldn't simulate to the very end of the game. This combination of MCTS and domain-specific heuristics resulted in a highly competitive agent.",
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
		id: 3,
		title: 'Growth Engineer Intern',
		company: 'Botpress',
		logo: '/images/icons/bp_icon.jpg',
		date: 'Upcoming: Jun 2026 - Aug 2026',
		description: [
			'Upcoming internship focusing on growth engineering and user acquisition strategies.',
		],
	},
	{
		id: 1,
		title: 'Growth Engineer Intern',
		company: 'Botpress',
		logo: '/images/icons/bp_icon.jpg',
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
		logo: '/images/icons/rr_icon.jpg',
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
		degree: 'BSc Honors Computer Science',
		minor: 'Minor Statistics',
		years: '2022 - 2026',
		logo: '/images/icons/mcgill_logo.svg',
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
