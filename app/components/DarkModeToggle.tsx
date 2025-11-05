'use client';
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
	isDark: boolean;
	toggle: () => void;
}

export default function DarkModeToggle({ isDark, toggle }: DarkModeToggleProps) {
	return (
		<button
			onClick={toggle}
			className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
			aria-label="Toggle dark mode"
		>
			<div className="relative w-6 h-6">
				{/* Sun Icon */}
				<Sun
					className={`absolute inset-0 transition-all duration-500 ${
						isDark
							? 'opacity-0 rotate-90 scale-0'
							: 'opacity-100 rotate-0 scale-100'
					} text-warm-600`}
					size={24}
				/>
				{/* Moon Icon */}
				<Moon
					className={`absolute inset-0 transition-all duration-500 ${
						isDark
							? 'opacity-100 rotate-0 scale-100'
							: 'opacity-0 -rotate-90 scale-0'
					} text-accent-400`}
					size={24}
				/>
			</div>
		</button>
	);
}
