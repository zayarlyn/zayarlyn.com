'use client'
import { cn } from '@/lib/utils'
import { IconFlame, IconSnowflake } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const nav_links = [
	{ label: 'Lore', path: '/' },
	{ label: 'Highlights', path: '/highlight' },
	{ label: 'Projects', path: '/project' },
	{ label: 'Blogs', path: '/blog' },
]

export const Nav = () => {
	const [dark, setDark] = useState(true)
	const _path = usePathname()

	const toggleMode = () => {
		setDark((isDark) => {
			document.documentElement.classList[isDark ? 'remove' : 'add']('dark')
			// localStorage[isDark ? 'removeItem' : 'setItem']('mode', 'dark')
			return !isDark
		})
	}
	const Icon = dark ? IconFlame : IconSnowflake

	return (
		<nav className='flex gap-4 tracking-wide mb-6 py-4 justify-between items-center'>
			<div className='flex justify-between gap-4 md:justify-start'>
				{nav_links.map(({ label, path }) => (
					<Link href={path} key={path} className={_path === path ? 'border-b-2 border-blue-500' : ''}>
						{label}
					</Link>
				))}
			</div>
			<button
				onClick={toggleMode}
				className={cn(
					'hover:shadow-md border p-1 border-slate-400 dark:border-slate-500 rounded-md  active:scale-110 duration-200',
					dark ? 'hover:text-red-300' : 'hover:text-blue-300'
				)}
			>
				<Icon className='' stroke={1.5} />
			</button>
		</nav>
	)
}
