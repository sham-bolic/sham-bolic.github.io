import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import BotpressBot from './components/BotpressBot';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'Website Portfolio',
	description: "Max's website portfolio",
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
