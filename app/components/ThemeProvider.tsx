'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
}

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// Check localStorage and system preference
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		if (stored === 'dark' || (!stored && prefersDark)) {
			setIsDark(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		setIsDark((prev) => {
			const newValue = !prev;
			if (newValue) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
			return newValue;
		});
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
		</ThemeContext.Provider>
	);
}
