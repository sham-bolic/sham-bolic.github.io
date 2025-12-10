'use client';
import React, { useRef, useMemo } from 'react';
import Image from 'next/image';
import useOnScreen from '@/app/hooks/useOnScreen';
import { experience, education } from '@/app/data/portfolio';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

type TimelineItem = {
	id: string | number;
	type: 'work' | 'education';
	date: string;
	startDate: Date;
	title: string; // title or institution
	subtitle: string; // company or degree
	description?: string[]; // for work
	coursework?: string[]; // for education
	logo?: string;
	minor?: string; // for education
	isGraduation?: boolean;
	isStart?: boolean;
};

export default function TimelineSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	const sortedItems = useMemo(() => {
		const workItems: TimelineItem[] = experience.map((job) => ({
			id: `work-${job.id}`,
			type: 'work',
			date: job.date,
			startDate: job.date.startsWith('Upcoming')
				? new Date(8640000000000000) // Max valid date to ensure it stays at top
				: new Date(job.date.split(' - ')[0]),
			title: job.title,
			subtitle: job.company,
			description: job.description,
			logo: job.logo,
		}));

		const eduItems: TimelineItem[] = education.flatMap((edu) => {
			const years = edu.years.split(' - ');
			const startYear = years[0];
			const endYear = years[1] || 'Present';

			return [
				{
					id: `edu-${edu.id}-end`,
					type: 'education',
					date: endYear === 'Present' ? 'Present' : `Upcoming: June ${endYear}`,
					startDate: new Date(
						endYear === 'Present' ? new Date() : `${endYear}-06-01`
					),
					title: edu.degree,
					subtitle: edu.institution,
					minor: edu.minor, // Pass minor
					coursework: edu.coursework, // Show coursework on graduation
					logo: edu.logo, // Pass logo from data
					isGraduation: true,
				},
				{
					id: `edu-${edu.id}-start`,
					type: 'education',
					date: `September ${startYear}`,
					startDate: new Date(`${startYear}-09-01`),
					title: 'Started Degree',
					subtitle: edu.institution,
					logo: edu.logo, // Pass logo from data
					isStart: true,
				},
			] as TimelineItem[];
		});

		return [...workItems, ...eduItems].sort(
			(a, b) => b.startDate.getTime() - a.startDate.getTime()
		);
	}, []);

	return (
		<section
			id="timeline"
			ref={ref}
			className="py-12 md:py-20"
		>
			<div className="container mx-auto px-4 max-w-6xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform text-center mb-16 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Experience & Education
				</h2>

				<div className="relative">
					{/* Central Line */}
					<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 transform md:-translate-x-1/2"></div>

					<div className="space-y-12">
						{sortedItems.map((item, index) => (
							<div
								key={item.id}
								className={`relative flex flex-col md:flex-row items-center justify-between transition-all duration-700 transform ${
									isVisible
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-10'
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								{/* Left Side (Work Experience) or Spacer (Education) */}
								<div
									className={`w-full md:w-5/12 mb-8 md:mb-0 pl-20 md:pl-0 ${
										item.type === 'work' ? 'md:order-1' : 'md:order-3'
									}`}
								>
									{item.type === 'work' ? (
										<div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-700 relative group md:text-right">
											{/* Connector Line for Mobile */}
											<div className="absolute md:hidden -left-[33px] top-8 w-8 h-px bg-neutral-200 dark:bg-neutral-700"></div>

											{/* Content */}
											<div className="flex flex-col gap-2 md:items-end">
												<div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider mb-1 md:flex-row-reverse">
													<Calendar size={14} />
													{item.date}
												</div>

												<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
													{item.title}
												</h3>

												<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-medium italic md:flex-row-reverse">
													{item.logo && (
														<div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-600">
															<Image
																src={item.logo}
																alt={item.subtitle}
																fill
																className="object-contain"
															/>
														</div>
													)}
													{item.subtitle}
												</div>

												{/* Expandable Details */}
												<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full">
													<div className="overflow-hidden">
														<div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-700">
															{item.description && (
																<ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed list-disc list-outside ml-4 opacity-90 text-left">
																	{item.description.map((point, i) => (
																		<li key={i}>{point}</li>
																	))}
																</ul>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									) : (
										/* Spacer for Education on the left side */
										<div className="hidden md:block"></div>
									)}
								</div>

								{/* Center Icon */}
								<div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-4 border-neutral-100 dark:border-neutral-800 z-10 shadow-sm md:order-2">
									{item.type === 'work' ? (
										<div className="w-8 h-8 bg-warm-100 dark:bg-warm-900/30 rounded-full flex items-center justify-center text-warm-600 dark:text-warm-400">
											<Briefcase size={16} />
										</div>
									) : (
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center ${
												item.isStart
													? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
													: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
											}`}
										>
											<GraduationCap size={16} />
										</div>
									)}
								</div>

								{/* Right Side (Education) or Spacer (Work Experience) */}
								<div
									className={`w-full md:w-5/12 pl-20 md:pl-0 ${
										item.type === 'education' ? 'md:order-3' : 'md:order-1'
									}`}
								>
									{item.type === 'education' ? (
										<div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-700 relative group md:text-left">
											{/* Connector Line for Mobile */}
											<div className="absolute md:hidden -left-[33px] top-8 w-8 h-px bg-neutral-200 dark:bg-neutral-700"></div>

											{/* Content */}
											<div className="flex flex-col gap-2 md:items-start">
												<div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider mb-1">
													<Calendar size={14} />
													{item.date}
												</div>

												<h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
													{item.title}
												</h3>

												{item.minor && (
													<p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
														{item.minor}
													</p>
												)}

												<div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-medium italic">
													{item.logo && (
														<div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-600">
															<Image
																src={item.logo}
																alt={item.subtitle}
																fill
																className="object-contain bg-white"
															/>
														</div>
													)}
													{item.subtitle}
												</div>

												{/* Expandable Details - Only show coursework for graduation/end event */}
												{(item.isGraduation || item.isStart) && (
													<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full">
														<div className="overflow-hidden">
															<div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-700">
																<p className="text-sm text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
																	Knowledge:
																</p>
																{item.isStart ? (
																	<p className="text-sm text-neutral-600 dark:text-neutral-300 italic">
																		Absolutely nothing
																	</p>
																) : (
																	item.coursework && (
																		<div className="flex flex-wrap gap-2">
																			{item.coursework
																				.slice(0, 6)
																				.map((course, i) => (
																					<span
																						key={i}
																						className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-xs text-neutral-600 dark:text-neutral-300"
																					>
																						{course}
																					</span>
																				))}
																			{item.coursework.length > 6 && (
																				<span className="px-2 py-1 bg-neutral-50 dark:bg-neutral-800 rounded text-xs text-neutral-500 dark:text-neutral-400">
																					+{item.coursework.length - 6} more
																				</span>
																			)}
																		</div>
																	)
																)}
															</div>
														</div>
													</div>
												)}
											</div>
										</div>
									) : (
										/* Spacer for Work on the right side */
										<div className="hidden md:block"></div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
