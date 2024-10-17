'use client'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

export const AnimatedTooltip = ({
	// items,
	tooltip,
	children,
}: {
	// items: {
	// 	id: number
	// 	name: string
	// 	designation: string
	// 	image: string
	// }[]
	children: ReactNode
	tooltip: ReactNode
}) => {
	const [hovering, setHovering] = useState(false)
	// const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const springConfig = { stiffness: 100, damping: 5 }
	const x = useMotionValue(0) // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
	// translate the tooltip
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)
	// @ts-ignore
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2
		x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
	}

	useEffect(() => {
		const listener = () => {
			setHovering(false)
		}
		document.body.addEventListener('click', listener)
		return () => document.body.removeEventListener('click', listener)
	}, [])

	return (
		<>
			{/* {items.map((item) => ( */}
			<div
				className='relative group inline-block'
				// key={item.name}
				onClick={() => setHovering((p) => !p)}
				// onMouseEnter={() => !hovering && setHovering(true)}
			>
				<AnimatePresence mode='popLayout'>
					{hovering && (
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: 'spring',
									stiffness: 260,
									damping: 10,
								},
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								translateX: translateX,
								rotate: rotate,
								whiteSpace: 'nowrap',
							}}
							// onClick={(e) => e.stopPropagation()}
							className='absolute bottom-7 flex text-xs  flex-col items-center justify-center rounded-md bg-primary-reverse z-50 shadow-xl w-[80vw] max-w-[22rem]'
						>
							{tooltip}
						</motion.div>
					)}
				</AnimatePresence>
				<div onMouseMove={handleMouseMove} className='cursor-pointer'>
					{children}
				</div>
				{/* <Image
						onMouseMove={handleMouseMove}
						height={100}
						width={100}
						src={item.image}
						alt={item.name}
						className='object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500'
					/> */}
			</div>
			{/* ))} */}
		</>
	)
}
