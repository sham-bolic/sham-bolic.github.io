'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import DarkModeToggle from './DarkModeToggle';
import { developerName } from '@/app/data/portfolio';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { useKillFeed } from './KillFeed';

// Import section components
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';
import HobbiesSection from './sections/HobbiesSection';
import ContactSection from './sections/ContactSection';

export default function PortfolioContent() {
	// Theme hook
	const { isDark, toggleTheme } = useTheme();
	// State for scroll-to-top button
	const [showScrollTop, setShowScrollTop] = useState(false);
	// State for mobile menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// KillFeed hook
	const { addKill } = useKillFeed();

	// Active section tracking
	const sections = [
		'home',
		'timeline',
		'projects',
		'skills',
		'hobbies',
		'contact',
	];
	const activeSection = useActiveSection(sections);

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

	// Navigation Items
	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'timeline', label: 'Timeline' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'hobbies', label: 'Hobbies' },
		{ id: 'contact', label: 'Contact' },
	];

	return (
		<div className="min-h-screen font-serif text-neutral-900 dark:text-neutral-100 overflow-hidden antialiased">
			{/* Navigation Bar */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-sm">
				<div className="container mx-auto flex justify-between items-center px-6 py-3">
					<h1 className="text-xl font-bold font-serif text-neutral-900 dark:text-neutral-100 tracking-tight">
						<a
							href="#home"
							className="hover:text-warm-600 dark:hover:text-warm-400 transition-all duration-300 flex items-center gap-2"
						>
							<span className="w-2 h-2 bg-warm-500 rounded-full animate-pulse"></span>
							{developerName}
						</a>
					</h1>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-2">
						<ul className="flex items-center gap-1">
							{navItems.map((item) => {
								const isActive = activeSection === item.id;
								const isContact = item.id === 'contact';

								if (isContact) {
									return (
										<li key={item.id}>
											<a
												href={`#${item.id}`}
												className="px-4 py-2 text-sm font-medium font-sans text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ml-2"
												onClick={() => addKill(item.label, Math.random() > 0.8)}
											>
												{item.label}
											</a>
										</li>
									);
								}

								return (
									<li key={item.id}>
										<a
											href={`#${item.id}`}
											className={`px-4 py-2 text-sm font-medium font-sans rounded-lg transition-all duration-200 ${
												isActive
													? 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800'
													: 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50'
											}`}
											onClick={() => addKill(item.label)}
										>
											{item.label}
										</a>
									</li>
								);
							})}
						</ul>
						<div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
							<DarkModeToggle
								isDark={isDark}
								toggle={() => {
									toggleTheme();
									addKill(isDark ? 'Light Mode' : 'Dark Mode', true);
								}}
							/>
						</div>
					</div>

					{/* Mobile Menu Button and Dark Mode Toggle */}
					<div className="md:hidden flex items-center gap-2">
						<DarkModeToggle
							isDark={isDark}
							toggle={() => {
								toggleTheme();
								addKill(isDark ? 'Light Mode' : 'Dark Mode', true);
							}}
						/>
						<button
							className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
							onClick={() => {
								setIsMobileMenuOpen(!isMobileMenuOpen);
								addKill('Mobile Menu');
							}}
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
							{navItems.map((item) => {
								const isActive = activeSection === item.id;
								const isContact = item.id === 'contact';

								if (isContact) {
									return (
										<li key={item.id} className="mt-2">
											<a
												href={`#${item.id}`}
												className="block px-4 py-3 text-sm font-medium font-sans text-center text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-lg transition-all duration-200 shadow-sm"
												onClick={() => {
													setIsMobileMenuOpen(false);
													addKill(item.label, true);
												}}
											>
												{item.label}
											</a>
										</li>
									);
								}

								return (
									<li key={item.id}>
										<a
											href={`#${item.id}`}
											className={`block px-4 py-3 text-sm font-medium font-sans rounded-lg transition-all duration-200 ${
												isActive
													? 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800'
													: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:text-neutral-900 dark:hover:text-neutral-100'
											}`}
											onClick={() => {
												setIsMobileMenuOpen(false);
												addKill(item.label);
											}}
										>
											{item.label}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>

			{/* Main content area */}
			<main className="relative z-10">
				<HeroSection />
				<TimelineSection />
				<ProjectsSection />
				<SkillsSection />
				<HobbiesSection />
				<ContactSection />
			</main>

			{/* Footer */}
			<footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-8 text-center border-t border-neutral-800 dark:border-neutral-900">
				<div className="container mx-auto px-4">
					<p className="text-neutral-300 dark:text-neutral-400 font-sans">
						&copy; {new Date().getFullYear()} {developerName}. All rights
						reserved.
					</p>
				</div>
			</footer>

			{/* Scroll to Top Button */}
			{showScrollTop && (
				<button
					onClick={() => {
						scrollToTop();
						addKill('Top of Page', true);
					}}
					className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-warm-500 text-white shadow-lg hover:bg-warm-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-warm-500/50"
					aria-label="Scroll to top"
				>
					<ChevronUp size={24} />
				</button>
			)}
		</div>
	);
}
