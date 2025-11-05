'use client';
import React from 'react';

export default function TestSubdomainPage() {
	return (
		<main className="min-h-screen flex items-center justify-center p-8">
			<div className="max-w-2xl text-center">
				<h1 className="text-4xl font-bold mb-4">Test Subdomain Environment</h1>
				<p className="text-neutral-700 mb-6">
					You are viewing the site via the{' '}
					<span className="font-semibold">test.localhost</span> subdomain.
				</p>
				<p className="text-neutral-600">
					This page exists under <code>/app/test/page.tsx</code> and is reached
					using a host-based rewrite in
					<code> next.config.ts</code>.
				</p>
			</div>
		</main>
	);
}

