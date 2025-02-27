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
		location: 'Bangkok',
		link: 'https://www.linkedin.com/posts/kaungthant1083_awsugmm-awscommunity-awsusergroupmeetup-activity-7202878134067630080-ztQt',
	},
]

const page = () => {
	return (
		<div>
			<ul>
				{highlights.map(({ id, link, title, media, content, date, location }) => {
					return (
						<li key={id} className=''>
							<div className='flex gap-3'>
								<div className='shrink-0'>
									<Image src={media[0]} alt='hi' width={5712} height={4284} objectFit='cover' className='aspect-square w-24 object-cover rounded-md' />
								</div>
								<div className='flex flex-col'>
									<a href={link} target='_blank' rel={title} key={id} className='block group'>
										<h2 className='font-medium leading-4 mb-1 group-hover:underline decoration-blue-500 underline-offset-2'>{title}</h2>
									</a>
									<p className='text-gray-600 text-sm dark:text-gray-300 line-clamp-3 mb-1'>{content}</p>
									<div className='flex gap-2'>
										<div className='flex  gap-1'>
											<IconCalendarEvent size={16} className='mt-[1px]' />
											<span className='text-sm font-medium text-gray-600  dark:text-gray-300'>{date}</span>
										</div>
										<div className='flex gap-1'>
											<IconMapPin size={16} className='mt-[1px]' />
											<span className='text-sm  font-medium text-gray-600  dark:text-gray-300'>{location}</span>
										</div>
									</div>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
	// return <div>Coming Soon....</div>
}

export default page
