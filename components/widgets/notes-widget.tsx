"use client"
import { motion, color } from 'framer-motion'
import React from 'react'
import { moveInAnimationVariant } from "@/lib/utils/animation";

interface Content {
    title: string;
    content?: string;
}

interface NotesWidgetProps {
    title: string;
    content: Content[];
    isDone?: boolean;
}

const HEATMAP_ANIMATION_VARIANTS = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
    },
};

const SPRING_OPTIONS = {
    type: "spring",
    mass: 2,
    stiffness: 300,
    damping: 20,
};

const NotesWidget: React.FC<NotesWidgetProps> = ({ title = "Notes", content, isDone = false }) => {
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
                        <img src="/icons/note.svg" alt="notes" className='w-6 h-6' />
                        <span >{title}</span>
                    </div>
                </div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition={{
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                        delay: 2
                    }}
                    className=" w-full h-full flex flex-col items-center justify-start gap-2 bg-slate-50 p-4 overflow-y-auto overflow-x-hidden">
                    {
                        content.map((item, index) => (
                            <motion.div
                                variants={HEATMAP_ANIMATION_VARIANTS}
                                transition={
                                    SPRING_OPTIONS
                                }
                                key={index}
                                className={`w-full flex flex-col items-start pb-1 ${index < content.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                <h1 className={`text-md  ${item.isDone ? 'line-through text-gray-500' : ''}`}>{item.title}</h1>
                                <p className={`w-full text-sm overflow-wrap break-word ${item.isDone ? 'line-through text-gray-500' : ''}`}>{item.content}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div >
        </motion.div >
    )
}


export default NotesWidget