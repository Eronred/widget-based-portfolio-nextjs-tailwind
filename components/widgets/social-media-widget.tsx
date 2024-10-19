import React from 'react'
import { motion } from 'framer-motion';
import { moveInAnimationVariant } from '@/lib/utils/animation';
import Link from 'next/link';

export const SOCIAL_MEDIA_LINKS = [
    {
        name: 'Github',
        url: "https://github.com/eronred",
        icons: 'github.svg',
        bgColor: 'bg-github-brand'
    },
    {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/eronred/",
        icons: 'linkedin.svg',
        bgColor: 'bg-linkedin-brand'
    },
    {
        name: 'Twitter',
        url: "https://twitter.com/imeronn",
        icons: 'x.svg',
        bgColor: 'bg-twitter-brand'
    },
    // {
    //     name: 'Layers',
    //     url: "https://layers.to/erencan",
    //     icons: 'layers.svg',
    //     bgColor: 'bg-layers-brand'
    // }
]

const SocialMediaWidget = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square rounded-3xl overflow-hidden relative"
        >
            <div
                className='grid grid-cols-2'
            >

                {
                    SOCIAL_MEDIA_LINKS.map((url, index) => (
                        <motion.div
                            key={index}
                            className={`flex aspect-square items-center justify-center ${url.bgColor}`}>
                            <Link
                                href={url.url}
                                className='w-full h-full flex items-center justify-center'
                                target="_blank">
                                <img
                                    src={`./icons/${url.icons}`}
                                    className='w-10 h-10 text-white'
                                />
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}


export default SocialMediaWidget