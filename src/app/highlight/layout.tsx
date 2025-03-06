import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'

export default function HighlightLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='max-w-2xl mx-auto w-11/12 p-1 pb-8 '>
			<Link href='/highlight' className='flex items-center text-blue-400 my-3'>
				<IconArrowLeft /> Go Back
			</Link>
			{children}
		</main>
	)
}
