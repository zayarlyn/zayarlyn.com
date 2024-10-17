import { AnimatedTooltip, SparklesText } from '@components/aceternity'
import { AnimatedSection, BrushStroke } from '@components/ui'

import Image from 'next/image'
import BaganImg from '../../public/bagan.png'

// Experiences November 2022-Current Frontend Web Developer @Schooltracs Co. Ltd - Worked on redesigning and refactoring initiatives for various React web applications, enhancing user experience - Collaborated closely with designers to implement UI/UX improvements, ensuring alignment with project goals - Successfully migrated an existing student 286b-49-237-47-180.ngrok-free.app

const sections = [
	{
		title: 'Experiences 🧏🏻‍♂️',
		items: [
			{
				title: 'Frontend Web Developer',
				at: { title: 'Schooltracs Co. Ltd', url: 'https://www.schooltracs.com' },
				time: '2022 November - current',
				description: `- Worked on redesigning and refactoring several React web applications, improving the user experience
- Collaborated with designers to implement UI/UX updates, ensuring consistency with project goals
- Migrated a student mobile app to an Expo-managed codebase, contributing to the launch of a new mobile app for teachers
- Implemented an online checkout system with Stripe and Xero, improving overall payment experience
- Developed features for the frontend while implementing backend functionality using Laravel and GraphQL
- Rebuilt the company website using Hugo and TailwindCSS, resulting better usability and design`,
			},
		],
	},
	{
		title: 'Education 🎓',
		items: [
			{
				title: 'Electronic and Communication Engineering',
				at: { title: 'Myanmar Institute of Information Technology', url: 'https://miit.edu.mm/' },
				time: '2019 December - 2020 May',
				description: 'Learned the fundamental of programming, algorithms and problem solving through hands-on experience with C programming language',
			},
		],
	},
]

export default function Home() {
	return (
		<div>
			<AnimatedSection className='mb-12' delay={0.05}>
				<div className='mb-1.5'>
					<AnimatedTooltip
						tooltip={
							<div className='text-white dark:text-black w-full p-2'>
								<Image src={BaganImg} alt='Bagan, Myanmar' className='rounded-md h-28 object-cover' />
								<p className='text-[16px] leading-5 font-normal w-full whitespace-normal mt-1.5'>
									The phrase <strong className='font-medium'>{'Mingalarpar'}</strong> is the formal Burmese greeting, typically accompanied with a gesture wherein the palms are
									folded together. 🙏
								</p>
							</div>
						}
					>
						<BrushStroke>
							<SparklesText text='Mingalarpar' />
						</BrushStroke>
					</AnimatedTooltip>
					<p className='inline ml-1'>I am a tech enthusiast passionate about building practical tools that solve real-world problems.</p>
				</div>
				<p className='mb-1.5'>
					I expertise in <b>React</b>, <b>NextJS</b>, <b>Postgres</b>, <b>MYSQL</b>, <b>NestJS</b> and <b>React Native</b>. Currently, I am deepening my knowledge in backend
					development and system design.
				</p>
				<p className='mb-1.5'>I am lately into swimming, working out and actively developing several startup initiatives.</p>
			</AnimatedSection>
			{sections.map(({ title, items }) => {
				return (
					<AnimatedSection key={title} className='mb-12' delay={0.05}>
						<h2 className='font-medium mb-2'>{title}</h2>

						<ol className='relative border-s-2 border-gray-300 dark:border-gray-600 pl-3'>
							{items.map(({ title, at, time, description }) => {
								return (
									<li key={title}>
										<div className='absolute -left-1.5 top-[7px] border-gray-300 dark:border-gray-600  border-[5px] h-0 w-0 rounded-full' />
										<time className='text-gray-600 dark:text-gray-300 text-sm'>{time}</time>
										<h3 className='leading-4 font-medium mt-1'>{title}</h3>
										<a href={at.url} rel={at.title} target='_blank' className='text-blue-500 text-sm leading-3'>
											<span className=''>@</span>
											{at.title}
										</a>
										<p className='text-gray-600 dark:text-gray-200 mt-2 text-md whitespace-pre-line'>{description}</p>
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
