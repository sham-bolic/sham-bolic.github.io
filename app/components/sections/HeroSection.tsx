'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
	developerName,
	developerTitle,
	heroTagline,
} from '@/app/data/portfolio';
import { useKillFeed } from '@/app/components/KillFeed';

export default function HeroSection() {
	const ref = useRef(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [nextImageIndex, setNextImageIndex] = useState(1);
	const [mounted, setMounted] = useState(false);
	const [displayedName, setDisplayedName] = useState('');
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const [isDead, setIsDead] = useState(false);
	const { addKill } = useKillFeed();

	const handleKill = () => {
		if (!isDead) {
			setIsDead(true);
			addKill('Maximillian Fong', true);
		}
	};

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

	// Typing effect for name
	useEffect(() => {
		if (!mounted) return;

		const fullName = developerName;
		let currentIndex = 0;

		const typingInterval = setInterval(() => {
			if (currentIndex <= fullName.length) {
				setDisplayedName(fullName.slice(0, currentIndex));
				currentIndex++;
			} else {
				setIsTypingComplete(true);
				clearInterval(typingInterval);
			}
		}, 100); // Type one character every 100ms

		return () => clearInterval(typingInterval);
	}, [mounted]);

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
			className="min-h-screen flex items-center justify-center pt-32 pb-12 md:py-20 px-4"
		>
			<div className="relative z-10 text-center max-w-4xl mx-auto">
				{/* Photo - Animated */}
				<div
					className={`mb-12 transition-all duration-1000 ${
						mounted
							? 'opacity-100 translate-y-0 scale-100'
							: 'opacity-0 -translate-y-10 scale-95'
					}`}
					style={{ transitionDelay: '0ms' }}
				>
					<div
						className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto cursor-pointer group perspective-1000"
						onClick={handleKill}
					>
						<div
							className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
								isDead ? 'rotate-y-180' : ''
							}`}
						>
							{/* Front Face (Photos) */}
							<div className="absolute inset-0 backface-hidden">
								<div className="relative w-full h-full">
									{/* Current image */}
									<div
										className="absolute inset-0 rounded-3xl shadow-2xl border-4 border-white dark:border-neutral-700 overflow-hidden transition-opacity duration-500"
										style={{ opacity: 1 }}
									>
										<Image
											src={headshots[currentImageIndex]}
											alt="Maximillian Fong's profile photo"
											fill
											className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
											priority
										/>
									</div>
									{/* Next image (fading in) */}
									<div
										className="absolute inset-0 rounded-3xl shadow-2xl border-4 border-white dark:border-neutral-700 overflow-hidden transition-opacity duration-500"
										style={{
											opacity: nextImageIndex === currentImageIndex ? 0 : 1,
										}}
									>
										<Image
											src={headshots[nextImageIndex]}
											alt="Maximillian Fong's profile photo"
											fill
											className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
								</div>
							</div>

							{/* Back Face (Dead State) */}
							<div className="absolute inset-0 backface-hidden rotate-y-180">
								<div className="w-full h-full rounded-3xl shadow-2xl border-4 flex items-center justify-center overflow-hidden">
									<span className="text-[150px] md:text-[180px] select-none animate-pulse leading-none">
										😵
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Name - Animated with typing effect */}
				<h1
					className={`text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight transition-all duration-1000 ${
						mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
					style={{ transitionDelay: '200ms' }}
				>
					{displayedName}
					{!isTypingComplete && (
						<span className="inline-block w-1 h-[0.9em] ml-1 bg-warm-500 animate-blink align-middle" />
					)}
				</h1>
				{/* Title - Animated with more delay */}
				<p
					className={`text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6 font-medium transition-all duration-1000 ${
						mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
					style={{ transitionDelay: '300ms' }}
				>
					{developerTitle}
				</p>
				{/* Bio - Animated with even more delay */}
				<p
					className={`text-lg text-neutral-700 dark:text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ${
						mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
					style={{ transitionDelay: '500ms' }}
				>
					{heroTagline}
				</p>
				{/* Buttons - Animated last */}
				<div
					className={`flex justify-center flex-wrap gap-4 transition-all duration-1000 ${
						mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
					style={{ transitionDelay: '700ms' }}
				>
					<a
						href="#projects"
						className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-warm-500 to-warm-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						onClick={() => addKill('View My Work')}
					>
						View My Work
					</a>
					<a
						href="#contact"
						className="px-8 py-3 rounded-full font-semibold text-neutral-700 dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
						onClick={() => addKill('Get In Touch')}
					>
						Get In Touch
					</a>
				</div>
			</div>
		</section>
	);
}
