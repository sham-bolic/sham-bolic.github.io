'use client';
import React from 'react';
import ThemeProvider from './ThemeProvider';
import CustomCursor from './CustomCursor';
import { KillFeedProvider } from './KillFeed';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<KillFeedProvider>
				<CustomCursor />
				{children}
			</KillFeedProvider>
		</ThemeProvider>
	);
}
