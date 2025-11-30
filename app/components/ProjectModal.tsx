import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useKillFeed } from '@/app/components/KillFeed';

interface ProjectModalProps {
	project: {
		id: number;
		name: string;
		description: string;
		detailedDescription?: string;
		skills: string[];
		link: string;
	};
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectModal({
	project,
	isOpen,
	onClose,
}: ProjectModalProps) {
	const { addKill } = useKillFeed();

	// Lock body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
				onClick={onClose}
			/>

			{/* Modal Content */}
			<div className="relative w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
				{/* Header */}
				<div className="flex justify-between items-center p-6 border-b border-neutral-100 dark:border-neutral-700">
					<h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
						{project.name}
					</h3>
					<button
						onClick={onClose}
						className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 transition-colors"
					>
						<X size={20} />
					</button>
				</div>

				{/* Body */}
				<div className="p-6 overflow-y-auto">
					<div className="flex flex-wrap gap-2 mb-6">
						{project.skills.map((skill, i) => (
							<span
								key={i}
								className="px-3 py-1 rounded-full text-sm font-medium text-accent-700 dark:text-accent-300 bg-accent-50 dark:bg-accent-900/30 border border-accent-100 dark:border-accent-800"
							>
								{skill}
							</span>
						))}
					</div>
					<p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-wrap">
						{project.detailedDescription || project.description}
					</p>
				</div>

				{/* Footer */}
				<div className="p-6 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-700 flex justify-end">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl font-medium hover:opacity-90 transition-opacity"
						onClick={() => addKill(`Visited ${project.name}`, true)}
					>
						View Project <ExternalLink size={18} />
					</a>
				</div>
			</div>
		</div>
	);
}
