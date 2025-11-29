'use client';
import React, { useRef } from 'react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { experience } from '@/app/data/portfolio';

export default function ExperienceSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="experience" ref={ref} className="py-20 md:py-32">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					Work Experience
				</h2>
				<div className="timeline relative md:border-l-2 border-neutral-200 dark:border-neutral-600 md:pl-8">
					{experience.map((job, index) => (
						<div
							key={job.id}
							className={`timeline-item relative pb-12 last:pb-0 transition-all duration-700 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
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
								<ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
									{job.description.map((point, i) => (
										<li key={i}>{point}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

