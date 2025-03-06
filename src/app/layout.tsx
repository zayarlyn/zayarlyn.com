import { Analytics } from '@vercel/analytics/react'
import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const title = 'Zayar Lin | The Honored One'

export const metadata: Metadata = {
	title,
	description: 'A programmer with latent potential',
	openGraph: {
		title,
		description: 'A programmer with latent potential',
		// description: 'Through heaven and earth, I alone am the honored one',
		siteName: title,
		// images: ['/favicon.svg'],
	},
}

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const shouldInjectToolbar = process.env.NODE_ENV === 'development'

	return (
		<html lang='en' className=''>
			<body className={`${rubik.className} antialiased bg-primary`}>{children}</body>
			<Analytics />
			{shouldInjectToolbar && <VercelToolbar />}
		</html>
	)
}
