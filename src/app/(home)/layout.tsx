import { BackgroundBeamsWithCollision } from '@components/aceternity'
import { Heading, Nav } from '@components/ui'
import '../globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<BackgroundBeamsWithCollision className='-z-10 fixed top-0 left-0 h-screen md:h-screen' />
			<section className='max-w-2xl mx-auto w-11/12 px-1 pt-8' tabIndex={-1}>
				<Heading />
			</section>
			<Nav />
			<main className='max-w-2xl mx-auto w-11/12 pb-8 px-1'>{children}</main>
		</>
	)
}
