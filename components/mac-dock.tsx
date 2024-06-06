import React from 'react'
import { motion } from 'framer-motion'
import { moveInAnimationVariant } from '@/lib/utils/animation';
import AppItem from './app-item';
import { apps } from '@/lib';


const MacDock = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`aspect-[1] sm:aspect-[2] p-2 bg-macbook-pattern  sm:col-span-2 rounded-xl w-full h-full flex items-center justify-end overflow-hidden relative`}
        >
            <div
                style={
                    {
                        scrollbarColor: 'rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1)',
                    }
                }
                className='w-full h-fit flex flex-row gap-4 sm:flex-row items-center p-3 bg-slate-200/30 border border-gray-100/20 shadow-md backdrop-blur-md rounded-2xl overflow-x-auto'
            >
                {apps.map((tech, index) => (
                    <AppItem
                        key={index}
                        url={tech.url}
                        logo={tech.LogoComponent}
                    />
                ))}
            </div>
        </motion.div>
    )
}


export default MacDock


