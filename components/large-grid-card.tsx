import { motion } from 'framer-motion'
import React from 'react'
import { moveInAnimationVariant } from '@/lib/utils/animation';
import { ArrowUpRight, Link2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
    children: React.ReactNode
    title: string
    color?: string
    url?: string
}

const LINK_ANIMATION_VARIANT = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
}

const LargeGridCard: React.FC<Props> = ({ children, title, color = 'bg-large-grid-card', url }) => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`aspect-[1] sm:aspect-[2] sm:col-span-2 rounded-3xl overflow-hidden relative ${color}`}
        >
            <div className='w-full h-full p-4'>
                <div className='w-full h-8 flex flex-row items-center justify-between'>
                    <h2 className="text-lg text-gray-700">{title}</h2>
                    {
                        url && (
                            <motion.div
                                {...LINK_ANIMATION_VARIANT}
                            >
                                <Link
                                    target='_blank'
                                    className='flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-200'
                                    href={url}>

                                    <ArrowUpRight
                                        size={16}
                                        color='black'
                                    />
                                </Link>
                            </motion.div>

                        )
                    }
                </div>
                <div className=" w-full h-full flex items-center justify-center">
                    {children}
                </div>
            </div>
        </motion.div >
    )
}

export default LargeGridCard
