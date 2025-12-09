'use client';
import React, { useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import useOnScreen from '@/app/hooks/useOnScreen';
import { useKillFeed } from '@/app/components/KillFeed';

export default function ResumeSection() {
	const ref = useRef<HTMLElement>(null);
	const isVisible = useOnScreen(ref, 0.1);
	const { addKill } = useKillFeed();
	const [shouldLoadPdf, setShouldLoadPdf] = useState(false);

	const resumeUrl = '/files/CV_Maximillian_Fong.pdf';
	const handleLoadClick = () => {
		if (!shouldLoadPdf) {
			setShouldLoadPdf(true);
			addKill('Loaded Resume Preview', true);
		}
	};

	return (
		<section
			id="resume"
			ref={ref}
			className="py-20 bg-white dark:bg-neutral-950"
		>
			<div className="container mx-auto px-4 max-w-5xl">
				<h2
					className={`section-title mb-12 text-center dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Resume
				</h2>

				<div
					className={`flex flex-col items-center gap-8 transition-all duration-700 transform delay-200 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					{/* Actions Bar */}
					<div className="flex gap-4 mb-4">
						<a
							href={resumeUrl}
							download="Maximillian_Fong_Resume.pdf"
							className="flex items-center gap-2 px-6 py-3 bg-warm-500 hover:bg-warm-600 text-white rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
							onClick={() => addKill('Downloaded Resume', true)}
						>
							<Download size={20} />
							Download PDF
						</a>
						<a
							href={resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-full font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
							onClick={() => addKill('Opened Resume in New Tab')}
						>
							<ExternalLink size={20} />
							View in New Tab
						</a>
					</div>

					{/* PDF Preview Container - click to load */}
					<div className="w-full aspect-[8.5/11] max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 relative">
						{shouldLoadPdf ? (
							<iframe
								src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
								className="w-full h-full"
								title="Resume Preview"
								loading="lazy"
							/>
						) : (
							<button
								type="button"
								className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-100"
								onClick={handleLoadClick}
							>
								<span className="px-4 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-semibold shadow-sm hover:shadow transition">
									Load Resume Preview
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
