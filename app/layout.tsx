import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Eli Wood',
	description: 'Designer & Developer'
};

import { Header } from '@/components';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
