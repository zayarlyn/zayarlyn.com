import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

const social_links = [
	{ icon: IconBrandGithub, title: 'Github', link: 'https://github.com/zayarlyn' },
	{ icon: IconBrandLinkedin, title: 'Linkedin', link: 'https://linkedin.com/in/zayarlyn' },
	{ icon: IconBrandTwitter, title: 'Twitter', link: 'https://twitter.com/zayarlyn' },
]

export const Heading = () => {
	return (
		<header className='my-4'>
			<h1 className='text-2xl mb-1 font-medium flex items-center gap-2'>Zayar Lin</h1>
			<h2 className='text-md'>Frontend Web Developer @Schooltracs</h2>
			<span className='dark:text-slate-400 text-slate-500 '>Nonthaburi, Thailand</span>
			<div className='flex gap-4 mt-2 '>
				{social_links.map(({ link, icon: Icon, title }) => (
					<a href={link} rel={title} target='_blank' key={link}>
						<Icon className='hover:text-blue-500 duration-300' stroke={1.5} size={26} />
					</a>
				))}
			</div>
		</header>
	)
}
