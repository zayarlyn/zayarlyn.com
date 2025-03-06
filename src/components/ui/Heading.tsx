import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'

const social_links = [
	{ icon: IconBrandGithub, title: 'Github', link: 'https://github.com/zayarlyn', ariaLabel: "View Zayar Lin's Github" },
	{ icon: IconBrandLinkedin, title: 'Linkedin', link: 'https://linkedin.com/in/zayarlyn', ariaLabel: "View Zayar Lin's Linkedin" },
	{ icon: IconBrandX, title: 'Twitter', link: 'https://twitter.com/zayarlyn', ariaLabel: "View Zayar Lin's Twitter" },
]

export const Heading = () => {
	return (
		<header className='my-4'>
			<h1 className='text-2xl mb-1 font-medium flex items-center gap-2 c-primary'>Zayar Lin</h1>
			<h2 className='text-md c-primary'>Software Developer @Schooltracs</h2>
			<span className='c-secondary'>Bangkok, Thailand</span>
			{/* <span className='text-gray-600 dark:text-gray-300'></span> */}
			<div className='flex gap-4 mt-2'>
				{social_links.map(({ link, icon: Icon, title, ariaLabel }) => (
					<a href={link} rel={title} target='_blank' key={link} aria-label={ariaLabel} className='c-primary'>
						<Icon className='hover:text-blue-500 duration-300' stroke={1.5} size={26} />
					</a>
				))}
			</div>
		</header>
	)
}
