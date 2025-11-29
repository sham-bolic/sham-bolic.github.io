'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import useOnScreen from '@/app/hooks/useOnScreen';
import { hobbies } from '@/app/data/portfolio';

export default function HobbiesSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="hobbies" ref={ref} className="py-12 md:py-20">
			<div className="container mx-auto px-4 max-w-7xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Hobbies & Interests
				</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{hobbies.map((hobby, index) => (
						<div
							key={hobby.id}
							className={`relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							{/* Background Image */}
							<div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
								<Image
									src={hobby.image}
									alt={hobby.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>

							{/* Gradient Overlay - always visible for text readability */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

							{/* Content Container */}
							<div className="absolute inset-0 p-6 flex flex-col justify-end">
								<h3 className="text-2xl font-bold text-white font-serif mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
									{hobby.name}
								</h3>
								<p className="text-neutral-200 text-sm md:text-base leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
									{hobby.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
