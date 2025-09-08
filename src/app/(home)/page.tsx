import { AnimatedSection, Mingalarbar, TruncatedDescription } from '@me/comp/core'
import { educations, experiences } from '@me/db'

const sections = [
	{ title: 'Experiences 🧏🏻‍♂️', items: experiences },
	{ title: 'Education 🎓', items: educations },
]

export default function Home() {
	return (
		<div>
			<AnimatedSection className='mb-8' delay={0.05}>
				<div className='mb-1'>
					<Mingalarbar />
					<p className='mb-1.5 inline ml-1 c-primary'>As a programmer, I’m on a voyage to develop tools with real-world impact.</p>
					<p className='mt-1 c-primary'>
						I expertise in <b>React</b>, <b>React Native (Expo)</b>, <b>NextJS</b>, <b>Fastify</b>, <b>Laravel</b> and <b>GraphQL</b> and actively expanding my scope into backend
						development and system design.
					</p>
				</div>
				{/* <p className='mb-1.5'>I like swimming, sightseeing and doing hackathons.</p> */}
			</AnimatedSection>
			{sections.map(({ title, items }) => {
				return (
					<AnimatedSection key={title} className='mb-10' delay={0.05}>
						<h2 className='font-medium mb-2 c-primary'>{title}</h2>

						<ol className='relative border-s-2 border-gray-300 dark:border-gray-600 pl-3'>
							{items.map(({ title, at, time, description }) => {
								return (
									<li key={title} className='mb-5 relative'>
										<div className='absolute -left-[1.1rem] top-[7px] border-gray-300 dark:border-gray-600  border-[5px] h-0 w-0 rounded-full' />
										<time className='text-sm c-secondary' dangerouslySetInnerHTML={{ __html: time }} />
										<h3 className='leading-4 font-medium mt-1 c-primary'>{title}</h3>
										<a href={at.url} rel={at.title} target='_blank' className='text-sm leading-3 c-blue'>
											<span className=''>@</span>
											{at.title}
										</a>
										<TruncatedDescription text={description as string} />
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
