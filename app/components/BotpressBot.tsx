'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BotpressBot() {
	const router = useRouter();

	useEffect(() => {
		console.log('Setting up Botpress events in root component...');

		const setupBotpressEvents = () => {
			const win = window as typeof window & { botpress?: any };

			if (win.botpress) {
				console.log('🎯 Botpress found in root!');

				win.botpress.on('customEvent', (event: any) => {
					console.log('🎯 Root Botpress event received:', event);

					if (event.action === 'redirect') {
						const url = event.url;
						if (url && url.includes('#')) {
							const hash = url.split('#')[1];
							if (hash) {
								console.log('🔄 Root navigating to:', `#${hash}`);
								router.push(`#${hash}`);

								setTimeout(() => {
									const element = document.getElementById(hash);
									if (element) {
										element.scrollIntoView({
											behavior: 'smooth',
											block: 'start',
										});
									}
								}, 100);
							}
						}
					}
				});

				console.log('✅ Root Botpress events set up');
			} else {
				console.log('⏳ Root Botpress not ready, retrying...');
				setTimeout(setupBotpressEvents, 100);
			}
		};

		setupBotpressEvents();
	}, [router]);

	return null; // This component doesn't render anything
}
