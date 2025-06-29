'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useState } from 'react'

export const TruncatedDescription = ({ text = '', showCount = 3 }: { text: string; showCount?: number }) => {
	const [showAll, setShowAll] = useState(false)
	const [parent] = useAutoAnimate()

	const items = text.split('-x-').filter((txt) => txt)

	return (
		<div ref={parent}>
			{items.slice(0, showAll ? undefined : showCount).map((txt) => (
				<p key={txt} className='mt-1.5 text-[15px] whitespace-pre-line c-secondary'>
					- {txt}
				</p>
			))}
			{items.length > showCount && (
				<button
					onClick={() => setShowAll((p) => !p)}
					className='cursor-pointer text-sm underline font-medium whitespace-nowrap'
				>
					{showAll ? 'Read less' : 'Read more'}
				</button>
			)}
		</div>
	)
}
