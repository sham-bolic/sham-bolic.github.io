import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
				{/* Botpress Scripts - moved from page.tsx */}
				<script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"></script>
				<script
					src="https://files.bpcontent.cloud/2025/09/09/03/20250909033652-E1XCLYUC.js"
					defer
				></script>

				<ClientLayout>
					{children}
					{/* Botpress Event Handler */}
					<BotpressBot />
				</ClientLayout>
			</body>
		</html>
	);
}
