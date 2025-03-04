import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<h2 className='font-medium'>Not Found</h2>
			<p>This page doesn't exist</p>
			<Link href='/' className='text-blue-400 underline mt-2'>
				Return Home
			</Link>
		</div>
	)
}
