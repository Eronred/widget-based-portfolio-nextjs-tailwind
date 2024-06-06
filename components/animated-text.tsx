import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { SPRING_OPTIONS } from '@/lib/animation';

interface AnimatedContentLinkProps {
    children?: React.ReactNode
    label?: string
    url?: string
}

const ANIMATED_TEXT_VARIANT = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transaction: {
        ...SPRING_OPTIONS
    },
    whileHover: { scale: 1.14 },
    whileTap: { scale: 0.96 },
}

const AnimatedContentLink: React.FC<AnimatedContentLinkProps> = (
    {
        label,
        url,
        children
    }
) => {

    const isUrl = url ? url : "#"
    return (
        <span
            className='inline-flex items-center ml-2 mr-2'>
            {
                label &&
                <Link
                    href={isUrl}
                    target='_blank'
                    className={url ? 'underline sm:ml-2' : ''}>
                    {label}
                </Link>
            }
            <motion.div
                {...ANIMATED_TEXT_VARIANT}
                className='flex flex-row items-center justify-center ml-1'
            >
                {children}
            </motion.div>
        </span>
    )
}

export default AnimatedContentLink