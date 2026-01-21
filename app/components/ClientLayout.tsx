'use client';
import React from 'react';
import ThemeProvider from './ThemeProvider';
import { KillFeedProvider } from './KillFeed';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<KillFeedProvider>
				{children}
			</KillFeedProvider>
		</ThemeProvider>
	);
}
