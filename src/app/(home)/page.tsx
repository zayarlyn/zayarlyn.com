import { AnimatedSection, Mingalarbar, TruncatedDescription } from '@me/comp/core'
import { db } from '@me/db'

const sections = [
	{ title: 'Experiences 🧏🏻‍♂️', items: db.experiences },
	{ title: 'Education 🎓', items: db.educations },
]

export default function Home() {
	return (
		<div>
			<AnimatedSection className='mb-8' delay={0.05}>
				<Mingalarbar />
				<p className='mb-1.5 inline ml-1 c-primary' dangerouslySetInnerHTML={{ __html: db.bio }} />
				{/* <p className='mb-1.5'>I like swimming, sightseeing and doing hackathons.</p> */}
			</AnimatedSection>
			{sections.map(({ title, items }) => {
				return (
					<AnimatedSection key={title} className='mb-8' delay={0.05}>
						<h2 className='font-medium mb-2 c-primary'>{title}</h2>

						<ol className='relative border-gray-300 dark:border-gray-600'>
							{/* @ts-ignore */}
							{items.map(({ title, at, time, description, summary }) => {
								return (
									<li key={title} className='mb-4 relative'>
										{/* <div className='absolute -left-[17px] top-[7px] border-gray-300 dark:border-gray-600  border-[4px] h-0 w-0 rounded-full' /> */}
										<time className='text-sm c-secondary' dangerouslySetInnerHTML={{ __html: time }} />
										<h3 className='leading-4 font-medium mt-1 c-primary'>{title}</h3>
										<div className='mb-0.5'>
											<a href={at.url} rel={at.title} target='_blank' className='text-sm leading-3 c-blue mb-0.5'>
												<span className=''>@</span>
												{at.title}
											</a>
										</div>
										<TruncatedDescription text={description as string} showCount={2} />
										{/* <p className='c-secondary text-[15px] mt-1'>{summary || description}</p> */}
									</li>
								)
							})}
						</ol>
					</AnimatedSection>
				)
			})}
		</div>
	)
}
