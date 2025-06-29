import { AnimatedSection } from '@components/ui'

import { Mingalarbar } from '@components/ui/Mingalarbar'
import { TruncatedDescription } from '@components/ui/TruncatedDescription'

// Experiences November 2022-Current Frontend Web Developer @Schooltracs Co. Ltd - Worked on redesigning and refactoring initiatives for various React web applications, enhancing user experience - Collaborated closely with designers to implement UI/UX improvements, ensuring alignment with project goals - Successfully migrated an existing student 286b-49-237-47-180.ngrok-free.app

const sections = [
	{
		title: 'Experiences 🧏🏻‍♂️',
		items: [
			{
				title: 'Analyst Programmer',
				at: { title: 'Schooltracs Co. Ltd', url: 'https://www.schooltracs.com' },
				time: '2024 Nov - 2025 Jun',
				description: `-x- Designed and built backend features using Laravel and different tools, such as configurable lesson schedules, leave rules, package fee logic, and journal exports for schools.
        -x- Provided bi-weekly on-call support to troubleshoot and resolve live production issues.
        -x- Maintained automated tests (Playwright) and ensured data consistency across modules.
        -x- Resolved frontend and backend issues across web platforms and mobile apps.
        -x- Delivered UX improvements and feature enhancements based on stakeholder feedback.
        -x- Collaborated with other developers to ship improvements in scheduling, notifications, and reporting.`,
			},
			{
				title: 'Frontend Web Developer',
				at: { title: 'Schooltracs Co. Ltd', url: 'https://www.schooltracs.com' },
				time: '2022 Nov - 2024 Nov',
				description: `-x- Worked on redesigning and refactoring several React web applications, improving the user experience.
-x- Collaborated with designers to implement UI/UX updates, ensuring consistency with project goals.
-x- Migrated a student mobile app to an Expo-managed codebase, contributing to the launch of a new mobile app for teachers.
-x- Implemented an online checkout system with Stripe and Xero, improving overall payment experience.
-x- Developed features for the frontend while implementing backend functionality using Laravel and GraphQL.
-x- Rebuilt the company website using Hugo and TailwindCSS, resulting better usability and design.`,
			},
		],
	},
	{
		title: 'Education 🎓',
		items: [
			{
				title: 'Computer Science (B.Sc.)',
				at: { title: "King Mongkut's University of Technology Thonburi", url: 'https://www.kmutt.ac.th/en' },
				time: <span>2025 Aug - 2029 July</span>,
				// description:
				// 'Learned the history of computing, fundamental of programming, algorithms and problem solving tactics using C programming language',
			},
			{
				title: 'Electronic and Communication Engineering, B.E. (Hons.)',
				at: { title: 'Myanmar Institute of Information Technology', url: 'https://miit.edu.mm/' },
				time: <span>2019 Dec - 2020 May</span>,
				description:
					'Learned the history of computing, fundamental of programming, algorithms and problem solving tactics using C programming language',
			},
		],
	},
]

export default function Home() {
	return (
		<div>
			<AnimatedSection className='mb-8' delay={0.05}>
				<div className='mb-1'>
					<Mingalarbar />
					<p className='mb-1.5 inline ml-1 c-primary'>
						{/* I am a programmer on a voyage of building practical tools targeting real-world use cases. */}
						As a programmer, I’m on a voyage to develop tools with real-world impact.
					</p>
					<p className='mt-1 c-primary'>
						I expertise in <b>React</b>, <b>React Native (Expo)</b>, <b>NextJS</b>, <b>Fastify</b>, <b>Laravel</b> and{' '}
						<b>GraphQL</b> and actively expanding my scope into backend development and system design.
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
										<time className='text-sm c-secondary'>{time}</time>
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
