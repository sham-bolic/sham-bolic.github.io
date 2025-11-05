'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
	Mail,
	Github,
	Linkedin,
	ExternalLink,
	ChevronUp,
	Menu,
	X,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import DarkModeToggle from './DarkModeToggle';

// Custom hook to check if an element is on screen
const useOnScreen = (
	ref: React.RefObject<HTMLElement | null>,
	threshold = 0.1
) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{ threshold: threshold }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, threshold]);

	return isIntersecting;
};

export default function PortfolioContent() {
	// Theme hook
	const { isDark, toggleTheme } = useTheme();
	// State for scroll-to-top button
	const [showScrollTop, setShowScrollTop] = useState(false);
	// State for mobile menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Monitor scroll position for scroll-to-top button
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// Populated content from the user's CV
	const developerName = 'Maximillian Fong';
	const developerTitle = 'U3 Honors Computer Science Major, Statistics Minor';
	const heroTagline =
		'I am a third-year Computer Science student at McGill University, pursuing an Honors degree with a minor in Statistics. With a strong foundation in full-stack development and machine learning, I specialize in creating scalable applications and extracting insights from data. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative teams in the fields of software development, machine learning, and data science.';

	const projects = [
		{
			id: 1,
			name: 'Rainbow DQN Agent',
			description:
				'Implemented a Rainbow Deep Q-Network combining multiple DQN improvements including Double DQN, Dueling DQN, Prioritized Experience Replay, and Noisy Networks. The agent was trained on Atari games to demonstrate state-of-the-art reinforcement learning techniques and achieve superior performance compared to vanilla DQN.',
			skills: [
				'Python',
				'PyTorch',
				'Reinforcement Learning',
				'Deep Q-Learning',
				'Atari',
			],
			link: 'https://github.com/Waterfountain10/rainbow_ablation_paper',
		},
		{
			id: 2,
			name: 'Poker Bot AI',
			description:
				'Developed an intelligent poker bot using advanced game theory concepts and machine learning techniques. The bot analyzes opponent betting patterns, calculates pot odds, and makes strategic decisions based on hand strength and position.',
			skills: [
				'Python',
				'Game Theory',
				'Machine Learning',
				'Monte Carlo',
				'AI',
			],
			link: 'https://github.com/denis-tsariov/python-poker-bot/tree/mcgill-tournament',
		},
		{
			id: 3,
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
			id: 4,
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
			id: 5,
			name: 'AI Agent for Colosseum Game',
			description:
				'Developed an AI agent for the Colosseum game, incorporating custom heuristics to evaluate and navigate game states effectively. Implemented a Monte Carlo Search Tree combined with Multi-Armed Bandits to explore possible actions and determine the most optimal moves.',
			skills: ['Python', 'Monte Carlo', 'AI', 'Game Theory'],
			link: 'https://github.com/sham-bolic/AI_Final_Proj',
		},
		{
			id: 6,
			name: 'Digit Recognition CNN',
			description:
				'Developed a convolutional neural network achieving over 86.57% test accuracy by leveraging advanced techniques such as batch normalization, data augmentation, and stochastic gradient descent. These methods were implemented to prevent overfitting and improve generalization.',
			skills: ['Python', 'PyTorch', 'CNN', 'Machine Learning'],
			link: 'https://github.com/sham-bolic/number_classification_cnn',
		},
	];

	const skills = [
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
				'Unix',
				'Git',
				'MySQL',
				'Bash',
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
				'DrizzleORM',
				'Streamlit',
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
				'Machine Learning',
				'AI',
				'ChromaDB',
				'LangChain',
				'LangGraph',
				'OpenAI API',
				'Ollama',
				'vLLM',
			],
		},
		{
			category: 'Cloud / Infrastructure',
			list: ['Azure', 'Azure Databricks', 'PySpark'],
		},
	];

	const experience = [
		{
			id: 1,
			title: 'Software Engineer Intern - Growth',
			company: 'Botpress',
			date: 'Sep 2025 - Present',
			description: 'Develop integrations for external platforms.',
		},
		{
			id: 2,
			title: 'Software Developer Intern',
			company: 'Retail Realm',
			date: 'May 2025 - Aug 2025',
			description:
				'Designed and deployed an internal support automation tool using Azure Databricks and PySpark. Implemented a Retrieval-Augmented Generation (RAG) system and an agentic chatbot to improve support team efficiency and reduce response time.',
		},
		{
			id: 3,
			title: 'Waiter',
			company: 'Brit & Chips',
			date: 'Mar 2022 - Oct 2023',
			description:
				'Provided excellent customer service in a fast-paced restaurant environment. Managed multiple tables simultaneously while maintaining high standards of service quality and customer satisfaction.',
		},
	];

	const education = [
		{
			id: 1,
			institution: 'McGill University',
			degree: 'BSc Honours Computer Science / Minor Statistics',
			years: 'August 2022 - June 2026 (Expected)',
			coursework: [
				'Cryptography and Data Analysis',
				'Fundamentals of Machine Learning',
				'Artificial Intelligence',
				'Applied Regression',
				'Software Design',
				'Statistics',
				'Operating Systems',
				'Honours Algorithm and Data Structures',
			],
		},
	];

	const hobbies = [
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

	// Portfolio sections as functional components
	const HomeSection = () => {
		const ref = useRef(null);
		const [currentImageIndex, setCurrentImageIndex] = useState(0);
		const [nextImageIndex, setNextImageIndex] = useState(1);
		const [mounted, setMounted] = useState(false);

		const headshots = [
			'/images/headshots/P1000837.jpg',
			'/images/headshots/P1000838.jpg',
			'/images/headshots/P1000839.jpg',
			'/images/headshots/P1000844.jpg',
			'/images/headshots/P1000852.jpg',
			'/images/headshots/P1000857.jpg',
			'/images/headshots/P1000863.jpg',
			'/images/headshots/P1000866.jpg',
			'/images/headshots/P1000868.jpg',
		];

		// Trigger animation on mount
		useEffect(() => {
			setMounted(true);
		}, []);

		// Image cycling effect
		useEffect(() => {
			const interval = setInterval(() => {
				// Pick a random index different from current
				let randomIndex;
				do {
					randomIndex = Math.floor(Math.random() * headshots.length);
				} while (randomIndex === currentImageIndex);

				setNextImageIndex(randomIndex);
				// After a short delay, make it the current image
				setTimeout(() => {
					setCurrentImageIndex(randomIndex);
				}, 400); // Transition duration
			}, 1500); // Change image every 1.5 seconds

			return () => clearInterval(interval);
		}, [currentImageIndex, headshots.length]);

		return (
			<section
				id="home"
				ref={ref}
				className="min-h-screen flex items-center justify-center py-20 md:py-32 px-4"
			>
				<div className="relative z-10 text-center max-w-4xl mx-auto">
					{/* Photo - Animated */}
					<div
						className={`mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'}`}
						style={{ transitionDelay: '0ms' }}
					>
						<div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
							{/* Current image */}
							<img
								src={headshots[currentImageIndex]}
								alt="Maximillian Fong's profile photo"
								className="absolute inset-0 rounded-3xl shadow-2xl border-4 border-white dark:border-neutral-700 w-full h-full object-cover object-center transition-opacity duration-500"
								style={{ opacity: 1 }}
							/>
							{/* Next image (fading in) */}
							<img
								src={headshots[nextImageIndex]}
								alt="Maximillian Fong's profile photo"
								className="absolute inset-0 rounded-3xl shadow-2xl border-4 border-white dark:border-neutral-700 w-full h-full object-cover object-center transition-opacity duration-500"
								style={{ opacity: nextImageIndex === currentImageIndex ? 0 : 1 }}
							/>
						</div>
					</div>
					{/* Name - Animated with slight delay */}
					<h1
						className={`text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						style={{ transitionDelay: '200ms' }}
					>
						{developerName}
					</h1>
					{/* Title - Animated with more delay */}
					<p
						className={`text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6 font-medium transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						style={{ transitionDelay: '300ms' }}
					>
						{developerTitle}
					</p>
					{/* Bio - Animated with even more delay */}
					<p
						className={`text-lg text-neutral-700 dark:text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						style={{ transitionDelay: '500ms' }}
					>
						{heroTagline}
					</p>
					{/* Buttons - Animated last */}
					<div
						className={`flex justify-center flex-wrap gap-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						style={{ transitionDelay: '700ms' }}
					>
						<a
							href="#projects"
							className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-warm-500 to-warm-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						>
							View My Work
						</a>
						<a
							href="#contact"
							className="px-8 py-3 rounded-full font-semibold text-neutral-700 dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
						>
							Get In Touch
						</a>
					</div>
				</div>
			</section>
		);
	};

	const ProjectsSection = () => {
		const ref = useRef<HTMLElement>(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section id="projects" ref={ref} className="py-20 md:py-32">
				<div className="container mx-auto px-4 max-w-7xl">
					<h2 className="section-title dark:text-neutral-100">Featured Projects</h2>
					<div
						className={`grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${animationClasses}`}
					>
						{projects.map((project) => (
							<div
								key={project.id}
								className="card p-8 h-full flex flex-col group dark:bg-neutral-800 dark:border-neutral-700"
							>
								<div className="flex justify-between items-start mb-6 gap-4">
									<h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif leading-tight flex-1">
										{project.name}
									</h3>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-warm-600 dark:hover:text-warm-400 transition-colors shrink-0 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700"
										aria-label={`View project ${project.name}`}
									>
										<ExternalLink size={20} />
									</a>
								</div>
								<p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									{project.skills.map((skill, index) => (
										<span
											key={index}
											className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-600"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const SkillsSection = () => {
		const ref = useRef<HTMLElement>(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section id="skills" ref={ref} className="py-20 md:py-32">
				<div className="container mx-auto px-4 max-w-7xl">
					<h2 className="section-title dark:text-neutral-100">Technical Skills</h2>
					<div
						className={`grid gap-8 grid-cols-1 lg:grid-cols-3 ${animationClasses}`}
					>
						{skills.map((skillGroup, index) => (
							<div key={index} className="card p-6 h-full dark:bg-neutral-700 dark:border-neutral-600">
								<div className="mb-5">
									<h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-serif mb-1">
										{skillGroup.category}
									</h3>
									<div className="w-12 h-1 bg-warm-500 rounded-full"></div>
								</div>
								<div className="flex flex-wrap gap-2">
									{skillGroup.list.map((skill, skillIndex) => (
										<span
											key={skillIndex}
											className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 transition-all duration-200 hover:bg-warm-50 dark:hover:bg-warm-900/20 hover:border-warm-300 hover:text-warm-700 dark:hover:text-warm-400"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const ExperienceSection = () => {
		const ref = useRef<HTMLElement>(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section id="experience" ref={ref} className="py-20 md:py-32">
				<div className="container mx-auto px-4 max-w-7xl">
					<h2 className="section-title dark:text-neutral-100">Work Experience</h2>
					<div
						className={`timeline relative md:border-l-2 border-neutral-200 dark:border-neutral-600 md:pl-8 ${animationClasses}`}
					>
						{experience.map((job) => (
							<div
								key={job.id}
								className="timeline-item relative pb-12 last:pb-0"
							>
								<span className="timeline-dot bg-warm-500 hidden md:flex">
									<span className="w-2 h-2 bg-white rounded-full"></span>
								</span>
								<div className="card p-8 hover:shadow-xl transition-all duration-300 dark:bg-neutral-700 dark:border-neutral-600">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
										<div className="flex-1">
											<div className="text-sm text-warm-600 dark:text-warm-400 mb-2 font-semibold uppercase tracking-wider">
												{job.date}
											</div>
											<h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif mb-1">
												{job.title}
											</h3>
											<p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 italic">
												{job.company}
											</p>
										</div>
										<div className="md:hidden flex items-center text-warm-500">
											<span className="text-2xl">💼</span>
										</div>
									</div>
									<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
										{job.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const EducationSection = () => {
		const ref = useRef<HTMLElement>(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section
				id="education"
				ref={ref}
				className="py-20 md:py-32"
			>
				<div className="container mx-auto px-4 max-w-7xl">
					<h2 className="section-title dark:text-neutral-100">Education</h2>
					<div
						className={`timeline relative md:border-l-2 border-neutral-200 dark:border-neutral-600 md:pl-8 ${animationClasses}`}
					>
						{education.map((edu) => (
							<div
								key={edu.id}
								className="timeline-item relative pb-12 last:pb-0"
							>
								<span className="timeline-dot bg-accent-500 hidden md:flex">
									<span className="w-2 h-2 bg-white rounded-full"></span>
								</span>
								<div className="card p-8 hover:shadow-xl transition-all duration-300 dark:bg-neutral-800 dark:border-neutral-700">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
										<div className="flex-1">
											<div className="text-sm text-accent-600 dark:text-accent-400 mb-2 font-semibold uppercase tracking-wider">
												{edu.years}
											</div>
											<h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif mb-1">
												{edu.institution}
											</h3>
											<p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 italic">
												{edu.degree}
											</p>
										</div>
										<div className="md:hidden flex items-center text-accent-500">
											<span className="text-2xl">🎓</span>
										</div>
									</div>
									<div className="mt-6">
										<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-semibold">
											Relevant Coursework:
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
											{edu.coursework.map((course, i) => (
												<div
													key={i}
													className="flex items-center text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 px-3 py-2 rounded-lg"
												>
													<span className="text-accent-500 dark:text-accent-400 mr-2">•</span>
													{course}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const HobbiesSection = () => {
		const ref = useRef<HTMLElement>(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section id="hobbies" ref={ref} className="py-20 md:py-32">
				<div className="container mx-auto px-4 max-w-7xl">
					<h2 className="section-title dark:text-neutral-100">Hobbies & Interests</h2>
					<div
						className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${animationClasses}`}
					>
						{hobbies.map((hobby) => (
							<div
								key={hobby.id}
								className="card p-6 h-full flex flex-col group dark:bg-neutral-700 dark:border-neutral-600"
							>
								<div className="mb-6 overflow-hidden rounded-lg">
									<img
										src={hobby.image}
										alt={hobby.name}
										className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif mb-4">
									{hobby.name}
								</h3>
								<p className="text-neutral-600 dark:text-neutral-300 leading-relaxed flex-grow">
									{hobby.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const ContactSection = () => {
		const ref = useRef(null);
		const isVisible = useOnScreen(ref, 0.2);
		const animationClasses = `transition-opacity duration-1000 transform ${
			isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
		}`;

		return (
			<section id="contact" ref={ref} className="py-20 md:py-32">
				<div className="container mx-auto px-4 max-w-4xl">
					<h2 className="section-title dark:text-neutral-100">Contact Me</h2>
					<div className={`card p-12 ${animationClasses} dark:bg-neutral-800 dark:border-neutral-700`}>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-center">
							Want to get in touch with me regarding any opportunities? Below
							are all the possible ways to reach out to me!
						</p>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
									Maximillian Fong
								</h3>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="p-2 rounded-lg bg-warm-100 dark:bg-warm-900/30">
											<Mail className="w-5 h-5 text-warm-600 dark:text-warm-400" />
										</div>
										<span className="text-neutral-700 dark:text-neutral-300 font-medium">
											fongcymax@gmail.com
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30">
											<Linkedin className="w-5 h-5 text-accent-600 dark:text-accent-400" />
										</div>
										<a
											href="https://www.linkedin.com/in/maximillian-fong-8b8577294/"
											className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors font-medium"
										>
											LinkedIn Profile
										</a>
									</div>
									<div className="flex items-center space-x-3">
										<div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700">
											<Github className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
										</div>
										<a
											href="https://github.com/sham-bolic"
											className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors font-medium"
										>
											GitHub Profile
										</a>
									</div>
									<div className="flex items-center space-x-3">
										<div className="p-2 rounded-lg bg-warm-100 dark:bg-warm-900/30">
											<ExternalLink className="w-5 h-5 text-warm-600 dark:text-warm-400" />
										</div>
										<a
											href="https://devpost.com/sham-bolic?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
											className="text-warm-600 dark:text-warm-400 hover:text-warm-700 dark:hover:text-warm-300 transition-colors font-medium"
										>
											Devpost Profile
										</a>
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-neutral-700">
									<img
										src="/images/headshot.jpg"
										alt="Maximillian Fong contact photo"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	return (
		<div className="min-h-screen font-serif text-neutral-900 dark:text-neutral-100 overflow-hidden antialiased">
			{/* Navigation Bar */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-sm">
				<div className="container mx-auto flex justify-between items-center px-6 py-3">
					<h1 className="text-xl font-bold font-serif text-neutral-900 dark:text-neutral-100 tracking-tight">
						<a href="#home" className="hover:text-warm-600 dark:hover:text-warm-400 transition-all duration-300 flex items-center gap-2">
							<span className="w-2 h-2 bg-warm-500 rounded-full animate-pulse"></span>
							{developerName}
						</a>
					</h1>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-2">
						<ul className="flex items-center gap-1">
							<li>
								<a href="#home" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Home
								</a>
							</li>
							<li>
								<a href="#projects" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Projects
								</a>
							</li>
							<li>
								<a href="#skills" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Skills
								</a>
							</li>
							<li>
								<a href="#experience" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Experience
								</a>
							</li>
							<li>
								<a href="#education" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Education
								</a>
							</li>
							<li>
								<a href="#hobbies" className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200">
									Hobbies
								</a>
							</li>
							<li>
								<a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
									Contact
								</a>
							</li>
						</ul>
						<div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
							<DarkModeToggle isDark={isDark} toggle={toggleTheme} />
						</div>
					</div>

					{/* Mobile Menu Button and Dark Mode Toggle */}
					<div className="md:hidden flex items-center gap-2">
						<DarkModeToggle isDark={isDark} toggle={toggleTheme} />
						<button
							className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle mobile menu"
						>
							{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Dropdown */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-700/50">
						<ul className="flex flex-col p-4 gap-1">
							<li>
								<a
									href="#home"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="#skills"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Skills
								</a>
							</li>
							<li>
								<a
									href="#experience"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Experience
								</a>
							</li>
							<li>
								<a
									href="#education"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Education
								</a>
							</li>
							<li>
								<a
									href="#hobbies"
									className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-lg transition-all duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Hobbies
								</a>
							</li>
							<li className="mt-2">
								<a
									href="#contact"
									className="block px-4 py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-lg transition-all duration-200 shadow-sm"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</nav>

			{/* Main content area */}
			<main className="relative z-10">
				<HomeSection />
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
				<EducationSection />
				<HobbiesSection />
				<ContactSection />
			</main>

			{/* Footer */}
			<footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-8 text-center border-t border-neutral-800 dark:border-neutral-900">
				<div className="container mx-auto px-4">
					<p className="text-neutral-300 dark:text-neutral-400">
						&copy; {new Date().getFullYear()} {developerName}. All rights
						reserved.
					</p>
				</div>
			</footer>

			{/* Scroll to Top Button */}
			{showScrollTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-warm-500 text-white shadow-lg hover:bg-warm-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-warm-500/50"
					aria-label="Scroll to top"
				>
					<ChevronUp size={24} />
				</button>
			)}
		</div>
	);
}
