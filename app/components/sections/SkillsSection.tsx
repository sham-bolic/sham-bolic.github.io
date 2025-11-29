'use client';
import React, { useRef } from 'react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { skills } from '@/app/data/portfolio';
import { Code2, Layout, Brain, Terminal } from 'lucide-react';

export default function SkillsSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	const getIcon = (category: string) => {
		if (category.includes('Programming'))
			return <Code2 size={26} className="text-warm-500" />;
		if (category.includes('Full-Stack'))
			return <Layout size={26} className="text-warm-500" />;
		if (category.includes('Data Science'))
			return <Brain size={26} className="text-warm-500" />;
		return <Terminal size={26} className="text-warm-500" />;
	};

	return (
		<section
			id="skills"
			ref={ref}
			className="py-20 bg-neutral-50 dark:bg-neutral-900/50"
		>
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title mb-12 text-center dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Technical Skills
				</h2>
				<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((skillGroup, index) => (
						<div
							key={index}
							className={`group relative p-8 h-full bg-white dark:bg-neutral-800/40 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 hover:border-warm-200 dark:hover:border-warm-800/50 shadow-sm hover:shadow-xl hover:shadow-warm-500/5 transition-all duration-500 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							{/* Card Header */}
							<div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-700/50">
								<div className="p-3 rounded-xl bg-warm-50 dark:bg-warm-500/10 group-hover:bg-warm-100 dark:group-hover:bg-warm-500/20 transition-colors duration-300">
									{getIcon(skillGroup.category)}
								</div>
								<h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 font-serif">
									{skillGroup.category}
								</h3>
							</div>

							{/* Skills List */}
							<div className="flex flex-wrap gap-2.5">
								{skillGroup.list.map((skill, skillIndex) => (
									<span
										key={skillIndex}
										className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-700/60 transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800 hover:border-warm-300 dark:hover:border-warm-700 hover:text-warm-600 dark:hover:text-warm-400 hover:shadow-sm hover:-translate-y-0.5"
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
