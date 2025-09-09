import { Analytics } from '@vercel/analytics/react'
import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata } from 'next'
import { Rubik, Poppins } from 'next/font/google'
// import { loadEnvConfig } from '@next/env'
import './globals.css'

const title = 'Zayar Lin | The Honored One'
const description = 'A programmer with latent potential'

const baseUrl = 'https://zayarlyn.com'
const ogUrl = '/og.png'

export const metadata: Metadata = {
	title,
	description: 'A programmer with latent potential',

	openGraph: {
		title,
		description,
		url: baseUrl,
		images: [
			{
				url: ogUrl,
				secureUrl: ogUrl,
				width: 1200,
				height: 630,
				alt: "Open Graph image for Zayar Lin's personal website",
			},
		],
		type: 'website',
		siteName: "Zayar Lin's personal website",
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
