'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronUp, Menu, X } from 'lucide-react';

// Custom hook to check if an element is on screen
const useOnScreen = (ref: React.RefObject<HTMLElement | null>, threshold = 0.1) => {
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

// Main App component
export default function App() {
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
      behavior: 'smooth'
    });
  };

  // Populated content from the user's CV
  const developerName = "Maximillian Fong";
  const developerTitle = "U3 Honors Computer Science Major, Statistics Minor";
  const heroTagline = "I am a third-year Computer Science student at McGill University, pursuing an Honors degree with a minor in Statistics. With a strong foundation in full-stack development and machine learning, I specialize in creating scalable applications and extracting insights from data. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative teams in the fields of software development, machine learning, and data science.";

  const projects = [
    {
      id: 1,
      name: "Rainbow DQN Agent",
      description: "Implemented a Rainbow Deep Q-Network combining multiple DQN improvements including Double DQN, Dueling DQN, Prioritized Experience Replay, and Noisy Networks. The agent was trained on Atari games to demonstrate state-of-the-art reinforcement learning techniques and achieve superior performance compared to vanilla DQN.",
      skills: ["Python", "PyTorch", "Reinforcement Learning", "Deep Q-Learning", "Atari"],
      link: "https://github.com/Waterfountain10/rainbow_ablation_paper",
    },
    {
      id: 2,
      name: "Poker Bot AI",
      description: "Developed an intelligent poker bot using advanced game theory concepts and machine learning techniques. The bot analyzes opponent betting patterns, calculates pot odds, and makes strategic decisions based on hand strength and position.",
      skills: ["Python", "Game Theory", "Machine Learning", "Monte Carlo", "AI"],
      link: "https://github.com/denis-tsariov/python-poker-bot/tree/mcgill-tournament",
    },
    {
      id: 3,
      name: "BetterCV - AI-Powered CV Generator",
      description: "Developed a web app that generates job-specific CVs using AI to analyze job descriptions and rank user-provided skills and experiences. Built with React, TypeScript, Tailwind CSS, Drizzle ORM, and Postgres, the platform integrates Gemini AI for intelligent content selection.",
      skills: ["React", "TypeScript", "TailwindCSS", "DrizzleORM", "PostgreSQL", "Gemini AI"],
      link: "https://devpost.com/software/bcv-hackmcwics25",
    },
    {
      id: 4,
      name: "Meal Mates",
      description: "Developed a full-stack mobile app that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Native and the backend is developed with Django-rest and SQLite3 database.",
      skills: ["React Native", "Django Rest API", "SQLite3", "Python", "JavaScript"],
      link: "https://devpost.com/software/fooder-zx98kt",
    },
    {
      id: 5,
      name: "AI Agent for Colosseum Game",
      description: "Developed an AI agent for the Colosseum game, incorporating custom heuristics to evaluate and navigate game states effectively. Implemented a Monte Carlo Search Tree combined with Multi-Armed Bandits to explore possible actions and determine the most optimal moves.",
      skills: ["Python", "Monte Carlo", "AI", "Game Theory"],
      link: "https://github.com/sham-bolic/AI_Final_Proj",
    },
    {
      id: 6,
      name: "Digit Recognition CNN",
      description: "Developed a convolutional neural network achieving over 86.57% test accuracy by leveraging advanced techniques such as batch normalization, data augmentation, and stochastic gradient descent. These methods were implemented to prevent overfitting and improve generalization.",
      skills: ["Python", "PyTorch", "CNN", "Machine Learning"],
      link: "https://github.com/sham-bolic/number_classification_cnn",
    },
  ];

  const skills = [
    { 
      category: "Programming Languages / Tools", 
      list: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "R", "HTML/CSS", "Unix", "Git", "MySQL", "Bash"] 
    },
    { 
      category: "Full-Stack / Mobile Dev", 
      list: ["ReactJS", "Next.js", "TailwindCSS", "React Native", "Django Rest API", "MUI", "DrizzleORM", "Streamlit"] 
    },
    { 
      category: "Data Science / ML", 
      list: ["PyTorch", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning", "AI", "ChromaDB", "LangChain", "LangGraph", "OpenAI API", "Ollama", "vLLM"] 
    },
    { 
      category: "Cloud / Infrastructure", 
      list: ["Azure", "Azure Databricks", "PySpark"] 
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Retail Realm",
      date: "05/2025 - Present",
      description: "Designed and deployed an internal support automation tool using Azure Databricks and PySpark. Implemented a Retrieval-Augmented Generation (RAG) system and an agentic chatbot to improve support team efficiency and reduce response time.",
    },
    {
      id: 2,
      title: "Waiter",
      company: "Brit & Chips",
      date: "Mar 2022 - Oct 2023",
      description: "Provided excellent customer service in a fast-paced restaurant environment. Managed multiple tables simultaneously while maintaining high standards of service quality and customer satisfaction.",
    },
    {
      id: 3,
      title: "Cashier / Bagger",
      company: "Metro Inc.",
      date: "Mar 2019 - Mar 2022",
      description: "Handled customer transactions efficiently and accurately. Developed strong communication skills and attention to detail while working in a high-volume retail environment.",
    },
  ];
  
  const education = [
    {
      id: 1,
      institution: "McGill University",
      degree: "BSc Honours Computer Science / Minor Statistics",
      years: "August 2022 - June 2026 (Expected)",
      coursework: [
        "Cryptography and Data Analysis",
        "Fundamentals of Machine Learning", 
        "Artificial Intelligence",
        "Applied Regression",
        "Software Design",
        "Statistics",
        "Operating Systems",
        "Honours Algorithm and Data Structures"
      ],
    },
  ];

  const hobbies = [
    {
      id: 1,
      name: "Volleyball",
      description: "This is one of my more recent hobbies that I have been getting really into. From going to open gym many times a week to partaking in multiple intramural teams during the semester, I am always looking to play some volleyball.",
      image: "/images/hobbies/vball.jpg",
    },
    {
      id: 2,
      name: "Cycling",
      description: "My favorite summertime activity is going for a ride with friends, whether it be a short ride around Circuit Gilles Villeneuve or a longer trip to Niagara Falls. Cycling gives me a sense of freedom that no other sport does.",
      image: "/images/hobbies/cycling.jpg",
    },
    {
      id: 3,
      name: "Climbing",
      description: "The aspect that draws me to bouldering is the constant battle against myself. Each boulder is like a problem that I have to solve, which stimulates my mind as much as it does my body.",
      image: "/images/hobbies/climbing.jpg",
    },
    {
      id: 4,
      name: "Snowboarding",
      description: "Going fast, quick maneuvers, snowboarding is my favorite winter activity. I love the feeling of adrenaline, the feeling of just reacting to the mountain and the snow. It is a great way to spend time with friends and family.",
      image: "/images/hobbies/snowboarding.jpg",
    },
    {
      id: 5,
      name: "Travelling",
      description: "Seeing new landscapes, experiencing different cultures, and most of all trying new foods. Travelling has really opened my eyes to different lifestyles around the world, making me appreciate more what I have and what I can do.",
      image: "/images/hobbies/travelling.jpg",
    },
    {
      id: 6,
      name: "Gaming",
      description: "This is my way of spending time with friends and my way of relaxing. Most games I play are competitive, and I love the feeling of improving and climbing the ranks.",
      image: "/images/hobbies/gaming.jpg",
    },
  ];

  // Portfolio sections as functional components
  const HomeSection = () => {
    const ref = useRef(null);
    return (
      <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-warm-50 pointer-events-none z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Photo */}
          <div className="mb-16">
            <img 
              src="/images/headshot.jpg" 
              alt="Maximillian Fong's profile photo" 
              className="rounded-2xl shadow-xl mx-auto border-4 border-white w-40 h-40 object-cover object-[center_0%] scale-150"
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 text-neutral-900 tracking-tight">
            {developerName}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-6 font-medium">
            {developerTitle}
          </p>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            {heroTagline}
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-warm-500 to-warm-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full font-semibold text-neutral-700 border-2 border-neutral-300 bg-white transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-400">
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="projects" ref={ref} className="py-20 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-title">Featured Projects</h2>
          <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${animationClasses}`}>
            {projects.map((project) => (
              <div key={project.id} className="card p-8 h-full flex flex-col group">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 font-serif leading-tight flex-1">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-500 hover:text-warm-600 transition-colors shrink-0 rounded-lg hover:bg-neutral-50"
                    aria-label={`View project ${project.name}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 transition-colors hover:bg-neutral-200"
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="skills" ref={ref} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-title">Technical Skills</h2>
          <div className={`grid gap-8 grid-cols-1 lg:grid-cols-3 ${animationClasses}`}>
            {skills.map((skillGroup, index) => (
              <div key={index} className="card p-6 h-full">
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-neutral-900 font-serif mb-1">
                    {skillGroup.category}
                  </h3>
                  <div className="w-12 h-1 bg-warm-500 rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.list.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-700 bg-white border border-neutral-200 transition-all duration-200 hover:bg-warm-50 hover:border-warm-300 hover:text-warm-700"
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="experience" ref={ref} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-title">Work Experience</h2>
          <div className={`timeline relative md:border-l-2 border-neutral-200 md:pl-8 ${animationClasses}`}>
            {experience.map((job, index) => (
              <div key={job.id} className="timeline-item relative pb-12 last:pb-0">
                <span className="timeline-dot bg-warm-500 hidden md:flex">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <div className="card p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="text-sm text-warm-600 mb-2 font-semibold uppercase tracking-wider">{job.date}</div>
                      <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 font-serif mb-1">{job.title}</h3>
                      <p className="text-lg font-medium text-neutral-600 italic">{job.company}</p>
                    </div>
                    <div className="md:hidden flex items-center text-warm-500">
                      <span className="text-2xl">💼</span>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{job.description}</p>
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="education" ref={ref} className="py-20 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-title">Education</h2>
          <div className={`timeline relative md:border-l-2 border-neutral-200 md:pl-8 ${animationClasses}`}>
            {education.map((edu, index) => (
              <div key={edu.id} className="timeline-item relative pb-12 last:pb-0">
                <span className="timeline-dot bg-accent-500 hidden md:flex">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <div className="card p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="text-sm text-accent-600 mb-2 font-semibold uppercase tracking-wider">{edu.years}</div>
                      <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 font-serif mb-1">{edu.institution}</h3>
                      <p className="text-lg font-medium text-neutral-600 italic">{edu.degree}</p>
                    </div>
                    <div className="md:hidden flex items-center text-accent-500">
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">
                      Relevant Coursework:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, i) => (
                        <div key={i} className="flex items-center text-neutral-600 bg-neutral-100 px-3 py-2 rounded-lg">
                          <span className="text-accent-500 mr-2">•</span>
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="hobbies" ref={ref} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${animationClasses}`}>
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="card p-6 h-full flex flex-col group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={hobby.image} 
                    alt={hobby.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 font-serif mb-4">
                  {hobby.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed flex-grow">
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
    const animationClasses = `transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

    return (
      <section id="contact" ref={ref} className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Contact Me</h2>
          <div className={`card p-12 ${animationClasses}`}>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed text-center">
              Want to get in touch with me regarding any opportunities? Below are all the possible ways to reach out to me!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Maximillian Fong</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-warm-100">
                      <Mail className="w-5 h-5 text-warm-600" />
                    </div>
                    <span className="text-neutral-700 font-medium">fongcymax@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent-100">
                      <Linkedin className="w-5 h-5 text-accent-600" />
                    </div>
                    <a href="https://www.linkedin.com/in/maximillian-fong-8b8577294/" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-neutral-100">
                      <Github className="w-5 h-5 text-neutral-600" />
                    </div>
                    <a href="https://github.com/sham-bolic" className="text-neutral-600 hover:text-neutral-800 transition-colors font-medium">
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-warm-100">
                      <ExternalLink className="w-5 h-5 text-warm-600" />
                    </div>
                    <a href="https://devpost.com/sham-bolic?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" className="text-warm-600 hover:text-warm-700 transition-colors font-medium">
                      Devpost Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/images/contactphoto.jpg" 
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
    // Main container with modern design
    <div className="min-h-screen font-serif text-neutral-900 bg-neutral-50 relative overflow-hidden antialiased">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold font-serif text-neutral-900">
            <a href="#home" className="hover:text-warm-600 transition-colors">
              {developerName}
            </a>
          </h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-1">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#hobbies" className="nav-link">Hobbies</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200">
            <ul className="flex flex-col space-y-0">
              <li>
                <a 
                  href="#home" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#hobbies" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hobbies
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
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
      <footer className="bg-neutral-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-neutral-300">&copy; {new Date().getFullYear()} {developerName}. All rights reserved.</p>
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
