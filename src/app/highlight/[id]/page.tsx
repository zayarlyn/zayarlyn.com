import { highlights } from '@/highlights.db'
import React from 'react'

const page = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
	const { id } = await params

	const highlight = highlights.find((h) => h.id === id)

	if (!highlight) return <div>not found</div>

	return (
		<div>
			<h1 className='text-xl font-medium'>{highlight.title}</h1>
			<p className='mt-1'>{highlight.content}</p>
		</div>
	)
}

export default page
