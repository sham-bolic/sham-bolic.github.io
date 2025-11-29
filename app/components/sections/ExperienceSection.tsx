'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import useOnScreen from '@/app/hooks/useOnScreen';
import { experience } from '@/app/data/portfolio';

export default function ExperienceSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="experience" ref={ref} className="py-12 md:py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
							{/* Added 'group' class for hover effect */}
							<div className="card p-6 group hover:shadow-xl transition-all duration-300 dark:bg-neutral-700 dark:border-neutral-600">
								<div className="flex items-center gap-4 mb-2">
									{/* Logo Display */}
									{job.logo && (
										<div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-white border border-neutral-200 dark:border-neutral-600">
											<Image
												src={job.logo}
												alt={`${job.company} logo`}
												fill
												className="object-contain"
											/>
										</div>
									)}
									<div className="flex-1">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
											<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-serif leading-tight">
												{job.title}
											</h3>
											<span className="text-sm text-warm-600 dark:text-warm-400 font-semibold uppercase tracking-wider">
												{job.date}
											</span>
										</div>
										<p className="text-base font-medium text-neutral-600 dark:text-neutral-400 italic">
											{job.company}
										</p>
									</div>
								</div>

								{/* Hover Reveal Container */}
								<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
									<div className="overflow-hidden">
										<ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 leading-relaxed pt-4 border-t border-neutral-200 dark:border-neutral-600 mt-2">
											{job.description.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
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
