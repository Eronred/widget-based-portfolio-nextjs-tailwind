'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, AnimationControls, useAnimation } from 'framer-motion'
import { moveInAnimationVariant } from '@/lib/utils/animation'
import Image from 'next/image'
import useAnimationCycle from '@/hooks/use-animation-circle'

const animationVariant = {
    hidden: (index: number) => ({
        scale: 0.4,
        opacity: 0,
        y: 130
    }),
    visible: (index: number) => ({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            duration: 0.7,
            type: 'spring',
        }
    }),
    exit: (index: number) => ({
        scale: 0.4,
        opacity: 0,
        y: 130,
        transition: {
            delay: (4 - index) * 0.1,
            duration: 0.3,
            type: 'spring',
        }
    })
}


export default function AvatarsWidget() {
    const controls = useAnimation();
    const { startAnimation } = useAnimationCycle(controls);

    const profiles = [
        {
            name: 'Circle',
            image: '/images/avatars/3.png'
        },
        {
            name: 'Rectangle',
            image: '/images/avatars/1.png'
        },

        {
            name: 'Polygon',
            image: '/images/avatars/2.png'
        }
    ]

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className='aspect-square bg-calendar-card flex flex-col items-center justify-start gap-2 rounded-3xl overflow-hidden relative bg-gradient-to-t from-gray-800 via-gray-900 to-zinc-900'>
            <div className='w-full flex items-center justify-center text-xl  text-white mt-4'>Who's Watching?</div>
            <AnimatePresence>
                <motion.div
                    className='w-full h-full flex items-center justify-center flex-wrap gap-4 p-2 mb-2 '>
                    {
                        profiles.map((profile, index) => (
                            <motion.div
                                custom={index}
                                variants={animationVariant}
                                initial="hidden"
                                animate={controls}
                                key={index}
                                className='flex flex-col flex-wrap items-center justify-center gap-2'>
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    width={72}
                                    height={72}
                                    className='rounded-md'
                                />
                                <p className='text-sm text-center text-white'>{profile.name}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
