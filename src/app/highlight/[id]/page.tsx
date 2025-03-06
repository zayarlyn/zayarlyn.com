import { highlights } from '@/highlights.db'
import { AnimatedSection } from '@components/ui'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
	const { id } = await params

	const highlight = highlights.find((h) => h.id === id)

	if (!highlight) return <div>not found</div>

	return (
		<AnimatedSection className='mt-4'>
			<section className='mb-4'>
				{highlight.media.map((media) => (
					<div key={media.uri} className='rounded-md overflow-hidden'>
						<Image src={media.uri} alt={media.alt} draggable={false} width={5712} height={4284} />
					</div>
				))}
			</section>
			<h1 className='text-xl font-medium c-primary'>{highlight.title}</h1>
			<p className='mt-1 c-secondary'>{highlight.content}</p>
		</AnimatedSection>
	)
}

export default page
