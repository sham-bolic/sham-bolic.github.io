import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useKillFeed } from '@/app/components/KillFeed';

export default function ContactInfo() {
	const { addKill } = useKillFeed();

	return (
		<div className="space-y-8">
			<div>
				<p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
					Want to get in touch regarding opportunities? Feel free to reach out
					through any of the channels below or send me a direct message!
				</p>
				<h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
					Maximillian Fong
				</h3>
				<div className="space-y-4">
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
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors font-medium"
							onClick={() => addKill('LinkedIn Profile', true)}
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
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors font-medium"
							onClick={() => addKill('GitHub Profile', true)}
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
							target="_blank"
							rel="noopener noreferrer"
							className="text-warm-600 dark:text-warm-400 hover:text-warm-700 dark:hover:text-warm-300 transition-colors font-medium"
							onClick={() => addKill('Devpost Profile', true)}
						>
							Devpost Profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

