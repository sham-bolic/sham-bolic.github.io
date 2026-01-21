import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import BotpressBot from './components/BotpressBot';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'Maximillian Fong | Computer Science Student & AI/ML Engineer',
	description:
		'Final-year Honors Computer Science student at McGill University specializing in Artificial Intelligence, Deep Learning, and NLP. Experience building poker bots, CNNs, reinforcement learning agents, and enterprise AI tools.',
	keywords: [
		'Maximillian Fong',
		'Computer Science',
		'Artificial Intelligence',
		'Machine Learning',
		'Deep Learning',
		'NLP',
		'PyTorch',
		'Reinforcement Learning',
		'McGill University',
		'Portfolio',
		'Software Engineer',
	],
	authors: [{ name: 'Maximillian Fong' }],
	openGraph: {
		title: 'Maximillian Fong | Computer Science Student & AI/ML Engineer',
		description:
			'Final-year Honors Computer Science student at McGill University specializing in Artificial Intelligence, Deep Learning, and NLP.',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Maximillian Fong | Computer Science Student & AI/ML Engineer',
		description:
			'Final-year Honors Computer Science student at McGill University specializing in AI, Deep Learning, and NLP.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="font-serif">
				{/* Botpress Scripts - async/defer for better loading performance */}
				<Script
					src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
					strategy="lazyOnload"
				/>
				<Script
					src="https://files.bpcontent.cloud/2025/09/09/03/20250909033652-E1XCLYUC.js"
					strategy="lazyOnload"
				/>

				<ClientLayout>
					{children}
					{/* Botpress Event Handler */}
					<BotpressBot />
				</ClientLayout>
			</body>
		</html>
	);
}
