'use client'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export const AnimatedSection = ({ children, delay = 0.04, noWidthLimit = false, ...rest }: { children: ReactNode; delay?: number; className: string; noWidthLimit?: boolean }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.section {...rest} ref={ref} initial={{ y: 10, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : undefined} transition={{ duration: 0.5, delay }}>
			{noWidthLimit ? children : <div className='container-main'>{children}</div>}
			{/* <div className='horiz-line' /> */}
		</motion.section>
	)
}
