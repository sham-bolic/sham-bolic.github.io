'use client';
import React, { useRef, useState } from 'react';
import { ExternalLink, MoreHorizontal } from 'lucide-react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { projects } from '@/app/data/portfolio';
import ProjectModal from '../ProjectModal';
import { useKillFeed } from '@/app/components/KillFeed';

export default function ProjectsSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);
	const [selectedProject, setSelectedProject] = useState<
		(typeof projects)[0] | null
	>(null);
	const { addKill } = useKillFeed();

	const handleProjectClick = (project: (typeof projects)[0]) => {
		setSelectedProject(project);
		addKill(`Checked out ${project.name}`, true);
	};

	return (
		<section id="projects" ref={ref} className="py-12 md:py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Featured Projects
				</h2>
				<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<div
							key={project.id}
							onClick={() => handleProjectClick(project)}
							className={`card p-6 h-full flex flex-col cursor-pointer group dark:bg-neutral-800 dark:border-neutral-700 transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className="flex justify-between items-start mb-3 gap-4">
								<h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-serif leading-tight line-clamp-2">
									{project.name}
								</h3>
								<div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
									<MoreHorizontal size={18} />
								</div>
							</div>

							<p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4 flex-grow">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-1.5 mt-auto">
								{project.skills.slice(0, 3).map((skill, i) => (
									<span
										key={i}
										className="px-2.5 py-1 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-700"
									>
										{skill}
									</span>
								))}
								{project.skills.length > 3 && (
									<span className="px-2.5 py-1 rounded-md text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
										+{project.skills.length - 3}
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					isOpen={!!selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
}
