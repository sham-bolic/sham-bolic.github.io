'use client';
import React from 'react';
import ThemeProvider from './ThemeProvider';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<AnimatedBackground />
			<CustomCursor />
			{children}
		</ThemeProvider>
	);
}
