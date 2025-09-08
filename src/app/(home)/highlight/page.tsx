import { AnimatedSection } from '@me/comp/core'
import { db } from '@me/db'
import { IconCalendarEvent, IconMapPin } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

const page = async () => {
	// const raw = await fetch(`${config().wewrite['api-url']}/api/posts?tags=highlight`, { next: { revalidate: 60 * 1000 } })
	// const data = await raw.json()
	// console.log(data)

	return (
		<div>
			{db.highlights.map(({ id, title, media, content, location, timestamp }) => {
				return (
					<AnimatedSection className='mb-12' delay={0.05} key={id}>
						{/* <Link href={'/highlight/' + id} rel={title} key={id} className='group relative flex gap-3'> */}
						<div key={id} className='group relative flex gap-3'>
							<div className='shrink-0'>
								<Image src={media[0].uri} alt={title} width={5712} height={4284} className='aspect-square w-24 object-cover rounded-md border' />
							</div>
							<div className='flex flex-col'>
								<h2 className='font-medium leading-4 mb-1.5 c-primary'>{title}</h2>
								<p className='text-smd line-clamp-4 mb-1 c-secondary'>{content}</p>
								<div className='flex gap-2'>
									<div className='flex  gap-1 c-secondary'>
										<IconCalendarEvent size={16} className='mt-[1px]' />
										<span className='text-sm font-medium'>{new Date(timestamp).toDateString()}</span>
									</div>
									{location && (
										<div className='flex gap-1 c-secondary'>
											<IconMapPin size={16} className='mt-[1px]' />
											<span className='text-sm  font-medium'>{location}</span>
										</div>
									)}
								</div>
							</div>
						</div>
					</AnimatedSection>
				)
			})}
		</div>
	)
	// return <div>Coming Soon....</div>
}

export default page
