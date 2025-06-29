import { AnimatedTooltip, SparklesText } from '@components/aceternity'
import { BrushStroke } from '@components/ui'

import Image from 'next/image'
import BaganImg from '../../../public/bagan.png'

export const Mingalarbar = () => {
	return (
		<AnimatedTooltip
			tooltip={
				<div className='text-white dark:text-black w-full p-2.5 '>
					<div className='relative'>
						<Image src={BaganImg} alt='Bagan, Myanmar' className='rounded-md h-28 object-cover' />
						<a
							href='https://en.wikipedia.org/wiki/Bagan'
							target='_blank'
							rel='noreferrer'
							className='text-sm text-black bg-white  underline  px-1 absolute bottom-0 right-0'
						>
							Pic of Bagan, Myanmar
						</a>
					</div>
					<p className='text-[16px] leading-5 font-normal w-full whitespace-normal mt-1.5 '>
						The phrase <b>"{'Mingalarpar'}"</b> is a common <b>Myanmar</b> greeting term, typically followed by the
						gesture "🙏". <br />
						<p className='mt-1'>
							Say <b>"Mingalarpar"</b> today and claim a smile from a Burmese. 😉
						</p>
					</p>
				</div>
			}
		>
			<BrushStroke>
				<SparklesText text='Mingalarpar' />
			</BrushStroke>
		</AnimatedTooltip>
	)
}
