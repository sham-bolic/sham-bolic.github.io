'use client';
import React, { useRef } from 'react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { education } from '@/app/data/portfolio';

export default function EducationSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="education" ref={ref} className="py-20 md:py-32">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					Education
				</h2>
				<div className="timeline relative md:border-l-2 border-neutral-200 dark:border-neutral-600 md:pl-8">
					{education.map((edu, index) => (
						<div
							key={edu.id}
							className={`timeline-item relative pb-12 last:pb-0 transition-all duration-700 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							<span className="timeline-dot bg-accent-500 hidden md:flex">
								<span className="w-2 h-2 bg-white rounded-full"></span>
							</span>
							<div className="card p-8 hover:shadow-xl transition-all duration-300 dark:bg-neutral-800 dark:border-neutral-700">
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
									<div className="flex-1">
										<div className="text-sm text-accent-600 dark:text-accent-400 mb-2 font-semibold uppercase tracking-wider">
											{edu.years}
										</div>
										<h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif mb-1">
											{edu.institution}
										</h3>
										<p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 italic">
											{edu.degree}
										</p>
									</div>
									<div className="md:hidden flex items-center text-accent-500">
										<span className="text-2xl">🎓</span>
									</div>
								</div>
								<div className="mt-6">
									<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-semibold">
										Relevant Coursework:
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
										{edu.coursework.map((course, i) => (
											<div
												key={i}
												className="flex items-center text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 px-3 py-2 rounded-lg"
											>
												<span className="text-accent-500 dark:text-accent-400 mr-2">
													•
												</span>
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
}

