import { AnimatedSection } from '@components/ui'
import { IconCalendarEvent, IconMapPin } from '@tabler/icons-react'
import Image from 'next/image'

const highlights = [
	{
		id: 0,
		title: 'AWS Community Day Myanmar 2024',
		content:
			'The event brought together some of the most brilliant minds in Myanmar’s tech community, and the sessions were packed with valuable insights on AWS, cloud best practices, and real-world success stories. From networking with fellow tech enthusiasts to learning from industry leaders, it was truly a day of growth and innovation.',
		media: ['/img/IMG_7204.webp'],
		date: '2024 Nov 23',
		location: '',
		link: 'https://www.linkedin.com/posts/kaungthant1083_awsugmm-awscommunity-awsusergroupmeetup-activity-7202878134067630080-ztQt',
	},
]

const page = () => {
	return (
		<div>
			<div>
				{highlights.map(({ id, link, title, media, content, date, location }) => {
					return (
						<AnimatedSection className='mb-12' delay={0.05} key={id}>
							<div className='flex gap-3'>
								<div className='shrink-0'>
									<Image src={media[0]} alt={title} width={5712} height={4284} className='aspect-square w-24 object-cover rounded-md border' />
								</div>
								<div className='flex flex-col'>
									<a href={link} target='_blank' rel={title} key={id} className='block group relative'>
										<h2 className='font-medium leading-4 mb-1.5 group-hover:underline decoration-blue-500 underline-offset-2'>{title}</h2>
									</a>
									<p className='text-gray-600 text-smd dark:text-gray-300 line-clamp-4 mb-1'>{content}</p>
									<div className='flex gap-2'>
										<div className='flex  gap-1'>
											<IconCalendarEvent size={16} className='mt-[1px]' />
											<span className='text-sm font-medium text-gray-600  dark:text-gray-300'>{date}</span>
										</div>
										{location && (
											<div className='flex gap-1'>
												<IconMapPin size={16} className='mt-[1px]' />
												<span className='text-sm  font-medium text-gray-600  dark:text-gray-300'>{location}</span>
											</div>
										)}
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

export default page
