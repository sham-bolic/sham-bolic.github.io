'use client';
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { developerName } from '@/app/data/portfolio';
import { useKillFeed } from './KillFeed';
import dynamic from 'next/dynamic';
import FloatingNavbar from './FloatingNavbar';

// Import section components
import HeroSection from './sections/HeroSection';

// Dynamically import heavy below-the-fold sections
const ProjectsSection = dynamic(() => import('./sections/ProjectsSection'));
const SkillsSection = dynamic(() => import('./sections/SkillsSection'));
const TimelineSection = dynamic(() => import('./sections/TimelineSection'));
const HobbiesSection = dynamic(() => import('./sections/HobbiesSection'));
const ContactSection = dynamic(() => import('./sections/ContactSection'));
const ResumeSection = dynamic(() => import('./sections/ResumeSection'));

export default function PortfolioContent() {
	// Theme hook
	const { isDark } = useTheme();
	// State for scroll-to-top button
	const [showScrollTop, setShowScrollTop] = useState(false);
	// KillFeed hook
	const { addKill } = useKillFeed();

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

	return (
		<div className="min-h-screen font-serif text-neutral-900 dark:text-neutral-100 overflow-hidden antialiased">
			{/* Floating Navigation Bar */}
			<FloatingNavbar />

			{/* Main content area */}
			<main className="relative z-10">
				<HeroSection />
				<TimelineSection />
				<ProjectsSection />
				<SkillsSection />
				<HobbiesSection />
				<ResumeSection />
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
