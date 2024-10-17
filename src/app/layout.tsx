import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Heading, Nav } from '@components/ui'
import { BackgroundBeamsWithCollision } from '@components/aceternity'

export const metadata: Metadata = {
	title: 'Zayar Lin',
	description: 'A programmer with latent potential',
}

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<body className={`${rubik.className} antialiased dark:text-white text-black`}>
				<BackgroundBeamsWithCollision className='-z-10 fixed top-0 left-0 h-screen md:h-screen' />
				<section className='max-w-2xl mx-auto w-11/12 pt-8'>
					<Heading />
				</section>
				<Nav />
				<main className='max-w-2xl mx-auto w-11/12 pb-8'>{children}</main>
			</body>
		</html>
	)
}
