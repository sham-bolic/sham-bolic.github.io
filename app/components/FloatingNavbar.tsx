'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import DarkModeToggle from './DarkModeToggle';
import { developerName } from '@/app/data/portfolio';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { useKillFeed } from './KillFeed';
import { motion } from 'framer-motion';

export default function FloatingNavbar() {
	// Theme hook
	const { isDark, toggleTheme } = useTheme();
	// State for mobile menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// KillFeed hook
	const { addKill } = useKillFeed();
	// Hover state for sliding effect
	const [hoveredTab, setHoveredTab] = useState<string | null>(null);

	// Active section tracking
	const sections = [
		'home',
		'timeline',
		'projects',
		'skills',
		'hobbies',
		'resume',
		'contact',
	];
	const activeSection = useActiveSection(sections);

	// Navigation Items
	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'timeline', label: 'Timeline' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'hobbies', label: 'Hobbies' },
		{ id: 'resume', label: 'Resume' },
		{ id: 'contact', label: 'Contact' },
	];

	return (
		<nav
			className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
				isMobileMenuOpen
					? 'w-[90%] max-w-md rounded-2xl'
					: 'w-auto rounded-full'
			} bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg`}
		>
			<div className="px-4 py-2 flex justify-between items-center min-h-[3.5rem]">
				<h1 className="text-lg font-bold font-serif text-neutral-900 dark:text-neutral-100 tracking-tight mr-4 md:mr-8">
					<a
						href="#home"
						className="hover:text-warm-600 dark:hover:text-warm-400 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
					>
						<span className="w-2 h-2 bg-warm-500 rounded-full animate-pulse"></span>
						{developerName}
					</a>
				</h1>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-1">
					<ul
						className="flex items-center gap-1 relative"
						onMouseLeave={() => setHoveredTab(null)}
					>
						{navItems.map((item) => {
							const isActive = activeSection === item.id;
							const isContact = item.id === 'contact';
							const isHovered = hoveredTab === item.id;

							if (isContact) {
								return (
									<li key={item.id} className="relative z-10">
										<a
											href={`#${item.id}`}
											className="relative px-4 py-1.5 text-sm font-medium font-sans text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-full transition-all duration-200 shadow-sm hover:shadow-md ml-2 whitespace-nowrap block"
											onClick={() => addKill(item.label, Math.random() > 0.8)}
											onMouseEnter={() => setHoveredTab(item.id)}
										>
											{item.label}
										</a>
									</li>
								);
							}

							return (
								<li key={item.id} className="relative z-10">
									<a
										href={`#${item.id}`}
										className={`relative px-4 py-1.5 text-sm font-medium font-sans rounded-full transition-colors duration-200 whitespace-nowrap block ${
											isActive
												? 'text-neutral-900 dark:text-neutral-100'
												: 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
										}`}
										onClick={() => addKill(item.label)}
										onMouseEnter={() => setHoveredTab(item.id)}
									>
										{(isActive || isHovered) && !isContact && (
											<motion.div
												layoutId="active-pill"
												className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-full -z-10"
												transition={{
													type: 'spring',
													stiffness: 380,
													damping: 30,
												}}
											/>
										)}
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
				<div className="md:hidden flex items-center gap-2 ml-auto">
					<DarkModeToggle
						isDark={isDark}
						toggle={() => {
							toggleTheme();
							addKill(isDark ? 'Light Mode' : 'Dark Mode', true);
						}}
					/>
					<button
						className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
						onClick={() => {
							setIsMobileMenuOpen(!isMobileMenuOpen);
							addKill('Mobile Menu');
						}}
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Dropdown */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<ul className="flex flex-col p-4 pt-0 gap-1 border-t border-neutral-200/50 dark:border-neutral-700/50 mt-2">
					{navItems.map((item) => {
						const isActive = activeSection === item.id;
						const isContact = item.id === 'contact';

						if (isContact) {
							return (
								<li key={item.id} className="mt-2">
									<a
										href={`#${item.id}`}
										className="block px-4 py-3 text-sm font-medium font-sans text-center text-white bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 rounded-xl transition-all duration-200 shadow-sm"
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
									className={`block px-4 py-3 text-sm font-medium font-sans rounded-xl transition-all duration-200 ${
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
		</nav>
	);
}
