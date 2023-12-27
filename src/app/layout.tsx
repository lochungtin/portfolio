import type { Metadata } from 'next';
import background from './background.png';
import './globals.css';

export const metadata: Metadata = {
	title: 'Timothy Lo',
	description: 'Personal Website / Portfolio',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
			</head>
			<body style={{ backgroundImage: `url(${background.src})` }}>{children}</body>
		</html>
	)
}
