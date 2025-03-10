import { config } from '@/config'
import { AnimatedSection } from '@components/ui'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
	const { id: postId } = await params

	const raw = await fetch(`${config().wewrite['api-url']}/api/posts/${postId}`, { next: { revalidate: 60 * 1000 } })
	const data = await raw.json()

	// const highlight = highlights.find((h) => h.id === id)

	if (!data) return <div>not found</div>

	//  @ts-ignore
	const { title, content, resources } = data
	return (
		<AnimatedSection className='mt-4'>
			<section className='mb-4'>
				{/* @ts-ignore */}
				{resources.map((resource) => (
					<div key={resource._id} className='rounded-md overflow-hidden'>
						<Image src={resource.url} alt={title} draggable={false} width={5712} height={4284} />
					</div>
				))}
			</section>
			<h1 className='text-xl font-medium c-primary'>{title}</h1>
			<p className='mt-1 c-secondary'>{content}</p>
		</AnimatedSection>
	)
}

export default page
