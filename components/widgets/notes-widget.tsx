import { motion, color } from 'framer-motion'
import React from 'react'
import { moveInAnimationVariant } from "@/lib/utils/animation";
import exp from 'constants';

interface Content {
    title: string;
    content?: string;
}


interface NotesWidgetProps {
    title: string;
    content: Content[];

}

const HEATMAP_ANIMATION_VARIANTS = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

const NotesWidget: React.FC<NotesWidgetProps> = ({ title = "Notes", content }) => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`${color} aspect-square rounded-3xl overflow-hidden `}>
            <div
                className='w-full h-full flex flex-col'
            >
                <div className='w-full flex items-center justify-between p-3  bg-yellow-300'>
                    <div
                        className='flex items-center justify-center gap-2'>
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" filter="url(#filter0_bd_372_409)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4V7V18V19C4 20.1046 4.89543 21 6 21H26C27.1046 21 28 20.1046 28 19V7C28 5.89543 27.1046 5 26 5H14.874C14.4299 3.27477 12.8638 2 11 2H6Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_bd_372_409" x="0" y="-2" width="32" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_372_409" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                    <feBlend mode="normal" in2="effect1_backgroundBlur_372_409" result="effect2_dropShadow_372_409" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_372_409" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <span >{title}</span>
                    </div>
                </div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition={{
                        staggerChildren: 0.1,
                        delayChildren: 0.1
                    }}
                    className=" w-full h-full flex flex-col items-center justify-start gap-2 bg-slate-50 p-4 overflow-y-auto overflow-x-hidden">
                    {
                        content.map((item, index) => (
                            <motion.div
                                variants={HEATMAP_ANIMATION_VARIANTS}
                                transition={{
                                    duration: 0.5
                                    , type: 'spring'
                                    , bounce: 0.25
                                }
                                }
                                key={index}
                                className={`w-full flex flex-col items-start pb-1 ${index < content.length - 1 ? 'border-b border-gray-300' : ''}`}>
                                <h1 className='text-md font-semibold'>{item.title}</h1>
                                <p className='w-full text-sm overflow-wrap break-word '>{item.content}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}


export default NotesWidget