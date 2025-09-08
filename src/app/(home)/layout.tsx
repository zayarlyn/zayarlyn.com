import { BackgroundBeamsWithCollision } from '@me/comp/aceternity'
import { Heading, Nav } from '@me/comp/core'
import '../globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<BackgroundBeamsWithCollision className='-z-10 fixed top-0 left-0 h-screen md:h-screen' />
			<Heading />
			<Nav />
			<main className='container-main pb-8 px-1'>{children}</main>
			<footer className='border-y-[1.4px] fixed bottom-0  w-full bg-primary'>
				<div className='container-main text-center sm:border-x-[1.5px] py-2'>
					<span>© {new Date().getFullYear()} Zayar Lin. All rights reserved.</span>
				</div>
			</footer>
			<div className='hidden sm:block container-main fixed h-full top-0 left-1/2 -translate-x-1/2 border-x-[1.5px] -z-10' />
		</>
	)
}
