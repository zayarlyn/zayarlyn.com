import { db } from '@/db/db'
import { projectTable } from '@/db/schema'
import { AnimatedSection } from '@components/ui'
import { IconLink } from '@tabler/icons-react'
import { desc } from 'drizzle-orm'
import Image from 'next/image'

const Page = async () => {
	// return <div>Coming Soon....</div>
	const projects = await db.select().from(projectTable).orderBy(desc(projectTable.id))

	return (
		<div>
			<div>
				{projects.map(({ id, link, title, thumbnail, content, tech_stack }) => {
					return (
						<AnimatedSection key={id} className='mb-12' delay={0.05}>
							<div className='flex gap-3'>
								{thumbnail && (
									<div className='shrink-0 border rounded-md self-start'>
										<Image
											src={thumbnail}
											alt='hi'
											width={5712}
											height={4284}
											className='aspect-square w-24 object-cover rounded-md'
										/>
									</div>
								)}
								<div className='flex flex-col'>
									<a href={link} target='_blank' rel={title} key={id} className='group flex text-md gap-1 c-primary'>
										<h2 className='font-medium leading-4 mb-1 group-hover:underline decoration-blue-500 underline-offset-2'>
											{title}
										</h2>
										<IconLink size={18} />
									</a>
									<p className='whitespace-pre-line text-gray-600 text-sm dark:text-gray-300 line-clamp-4 mb-1'>
										{content}
									</p>
									<div className='flex gap-2 text-sm font-medium text-gray-600  dark:text-gray-300 mt-auto'>
										{tech_stack}
										{/* <div className='flex  gap-1'>
											<IconCalendarEvent size={16} className='mt-[1px]' />
											<span className='text-sm font-medium text-gray-600  dark:text-gray-300'>{date}</span>
										</div>
										<div className='flex gap-1'>
											<IconMapPin size={16} className='mt-[1px]' />
											<span className='text-sm  font-medium text-gray-600  dark:text-gray-300'>{location}</span>
										</div> */}
									</div>
								</div>
							</div>
						</AnimatedSection>
					)
				})}
			</div>
		</div>
	)
	// return <div>Coming Soon....</div>
}

export default Page
