'use client'
import { useEffect, useState } from 'react'
import { moveInAnimationVariant } from '@/lib/utils/animation'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Flag, User } from 'lucide-react'
import Link from 'next/link'
import { NumberTicker } from '../number-ticker'

export default function MilestoneWidget() {

    const MAX_MILESTONE = 10000;

    const [milestone, setMilestone] = useState<number>(325);
    const progress = useSpring(0, { stiffness: 100, damping: 30 })
    const width = useTransform(progress, value => `${value}%`)

    useEffect(() => {
        progress.set((milestone / MAX_MILESTONE) * 100)
    }, [milestone, progress])

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className='aspect-square flex flex-col items-center justify-start gap-2 rounded-3xl overflow-hidden relative bg-[#FF6500]'>
            <div
                className='bg-[#FF9B00] w-full h-full flex flex-col items-center justify-start gap-2 mb-4 rounded-b-[34px] overflow-hidden relative'
            >
                <div className='w-full h-full flex flex-col items-center justify-center mb-4 rounded-b-[40px] bg-[#FFCD00]'>
                    <div className='w-full flex items-center justify-between  px-4'>
                        <div className='flex items-center gap-2 justify-center'>
                            <Flag className='size-5 text-black' />
                            <span className='text-sm text-black font-mono'>Milestone</span>
                        </div>
                        <div className='flex items-center gap-2 justify-center'>
                            <div
                                className='size-6 rounded-full bg-black flex items-center justify-center overflow-hidden'
                            >
                                <User className='size-4 scale-150 text-white/80 mt-2 hover:mt-0 hover:-rotate-12 transition-all duration-300 overflow-hidden' />
                            </div>
                            <span className='text-sm text-black font-mono'>/{(MAX_MILESTONE / 1000).toString()}k</span>
                        </div>
                    </div>
                    <div className='px-1 flex flex-col items-center justify-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='text-[120px] font-serif font-bold text-black'>
                                <NumberTicker value={milestone} />
                            </div>
                            <div className='text-sm text-black font-mono mb-2'>
                                Users on
                                <Link
                                    target='_blank'
                                    href='https://niceprompt.app'
                                    className='text-black underline ml-2'
                                >
                                    Nice Prompt
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 flex items-center justify-start'>
                        <div className='w-full  flex items-center justify-start h-5 bg-black/20 rounded-full overflow-hidden'>
                            <motion.div
                                style={{ width }}
                                className='bg-black h-5 rounded-full z-40'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
