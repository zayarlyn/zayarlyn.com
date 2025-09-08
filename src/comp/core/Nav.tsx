'use client'
import { cn } from '@me/lib/utils'
import { IconFlame, IconSnowflake } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const nav_links = [
	{ label: 'Lore', path: '/' },
	{ label: 'Highlights', path: '/highlight' },
	{ label: 'Projects', path: '/project' },
	{ label: 'Blogs', path: '/blog' },
]

export const Nav = () => {
	const [darkMode, setDarkMode] = useState(false)
	const _path = usePathname()

	useEffect(() => {
		if (typeof window !== undefined && localStorage.getItem('mode') === 'dark') {
			document.documentElement.classList.add('dark')
			setDarkMode(true)
		}
	}, [])

	const toggleMode = () => {
		setDarkMode((isDark) => {
			document.documentElement.classList[isDark ? 'remove' : 'add']('dark')
			localStorage[isDark ? 'removeItem' : 'setItem']('mode', 'dark')
			return !isDark
		})
	}
	const Icon = darkMode ? IconFlame : IconSnowflake

	return (
		<div className='bg-primary sticky top-0 z-10 border-y mb-6'>
			<nav className='container-main flex gap-4 tracking-wide justify-between items-center border-x-[1.5px]'>
				<div className='flex justify-between gap-4 md:justify-start c-primary'>
					{nav_links.map(({ label, path }) => (
						<Link href={path} key={path} className={cn('leading-10', _path === path ? 'border-b-2 border-blue-500' : '')}>
							{label}
						</Link>
					))}
				</div>
				{/* <button
					onClick={toggleMode}
					className={cn(
						'hover:shadow-md border p-1 border-slate-400 dark:border-slate-500 rounded-md active:scale-110 duration-200 c-primary cursor-pointer',
						darkMode ? 'hover:text-red-300' : 'hover:text-blue-300'
					)}
					title='Toggle dark mode'
				>
					<Icon className='' size={20} stroke={1.5} />
				</button> */}
			</nav>
		</div>
	)
}
