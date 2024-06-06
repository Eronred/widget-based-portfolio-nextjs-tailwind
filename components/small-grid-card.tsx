import { moveInAnimationVariant } from '@/lib/utils/animation';
import { motion } from 'framer-motion';
import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
    color?: string
}

const SmallGridCard: React.FC<Props> = ({ children, title = "Name me", color = "bg-small-grid-card" }) => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`${color} aspect-square rounded-3xl overflow-hidden`}>
            <div className='w-full h-full p-4 sm:p-8'>
                <h2 className="text-lg text-gray-700">{title}</h2>
                <div className=" w-full h-full flex items-center justify-center">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default SmallGridCard;