import { db } from '@me/db'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'

const iconMap = {
	github: IconBrandGithub,
	linkedin: IconBrandLinkedin,
	email: IconMail,
}

export const Heading = () => {
	return (
		<section className='container-main px-1 py-3' tabIndex={-1}>
			<header className='my-4'>
				<h1 className='text-2xl mb-1 font-medium flex items-center gap-2 c-primary'>{db.name}</h1>
				<h2 className='text-md c-primary'>{db.role}</h2>
				<span className='c-secondary'>{db.location}</span>
				<div className='flex gap-4 mt-2'>
					{db.socials.map(({ link, type, title, ariaLabel }) => {
						const Icon = iconMap[type as keyof typeof iconMap]

						return (
							<a href={link} rel={title} target='_blank' key={link} aria-label={ariaLabel} className='c-primary'>
								<Icon className='hover:text-blue-500 duration-300' stroke={1.5} size={26} />
							</a>
						)
					})}
				</div>
			</header>
		</section>
	)
}
