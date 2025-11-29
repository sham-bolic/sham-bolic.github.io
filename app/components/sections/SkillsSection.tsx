'use client';
import React, { useRef } from 'react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { skills } from '@/app/data/portfolio';

export default function SkillsSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="skills" ref={ref} className="py-12 md:py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Technical Skills
				</h2>
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
					{skills.map((skillGroup, index) => (
						<div
							key={index}
							className={`card p-6 h-full dark:bg-neutral-700 dark:border-neutral-600 transition-all duration-700 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
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
}
