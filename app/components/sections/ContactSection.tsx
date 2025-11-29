'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import useOnScreen from '@/app/hooks/useOnScreen';

export default function ContactSection() {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="contact" ref={ref} className="py-20 md:py-32">
			<div className="container mx-auto px-4 max-w-4xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					Contact Me
				</h2>
				<div
					className={`card p-12 dark:bg-neutral-800 dark:border-neutral-700 transition-all duration-1000 transform ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-center">
						Want to get in touch with me regarding any opportunities? Below are
						all the possible ways to reach out to me!
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
								Maximillian Fong
							</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<div className="p-2 rounded-lg bg-warm-100 dark:bg-warm-900/30">
										<Mail className="w-5 h-5 text-warm-600 dark:text-warm-400" />
									</div>
									<span className="text-neutral-700 dark:text-neutral-300 font-medium">
										fongcymax@gmail.com
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30">
										<Linkedin className="w-5 h-5 text-accent-600 dark:text-accent-400" />
									</div>
									<a
										href="https://www.linkedin.com/in/maximillian-fong-8b8577294/"
										className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors font-medium"
									>
										LinkedIn Profile
									</a>
								</div>
								<div className="flex items-center space-x-3">
									<div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700">
										<Github className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
									</div>
									<a
										href="https://github.com/sham-bolic"
										className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors font-medium"
									>
										GitHub Profile
									</a>
								</div>
								<div className="flex items-center space-x-3">
									<div className="p-2 rounded-lg bg-warm-100 dark:bg-warm-900/30">
										<ExternalLink className="w-5 h-5 text-warm-600 dark:text-warm-400" />
									</div>
									<a
										href="https://devpost.com/sham-bolic?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
										className="text-warm-600 dark:text-warm-400 hover:text-warm-700 dark:hover:text-warm-300 transition-colors font-medium"
									>
										Devpost Profile
									</a>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-neutral-700">
								<Image
									src="/images/headshot.jpg"
									alt="Maximillian Fong contact photo"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

