'use client';
import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { projects } from '@/app/data/portfolio';

export default function ProjectsSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="projects" ref={ref} className="py-20 md:py-32">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					Featured Projects
				</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className={`card p-8 h-full flex flex-col group dark:bg-neutral-800 dark:border-neutral-700 transition-all duration-700 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
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
								{project.skills.map((skill, i) => (
									<span
										key={i}
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
}

