"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

interface Tab {
    id: number;
}

const SPRING_OPTIONS = {
    duration: 0.4,
    type: "spring",
};

const INITIAL_ANIMATION = { scale: 0 };
const ANIMATE_ANIMATION = { scale: 1 };
const EXIT_ANIMATION = {
    scale: [1, 0.5, 0],
    rotate: [0, 90],
    y: ["0%", "100%"],
};
const TRANSITION_ANIMATION = {
    scale: {
        ...SPRING_OPTIONS,
    },
    rotate:
        { ...SPRING_OPTIONS, },
    y: { ...SPRING_OPTIONS, },
};

const BUTTON_ANIMATION = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transaction: { ...SPRING_OPTIONS },
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
};



const TabCard: React.FC = () => {

    const [tabs, setDocs] = useState<Tab[]>([
        { id: 1 },
        { id: 2 }
    ]);

    const addADoc = () => {
        setDocs(prevDocs => [...prevDocs, { id: Math.random() * 100 }]);
    }

    const deleteDoc = (id: number) => {
        setDocs(prevDocs => prevDocs.filter(doc => doc.id !== id));
    }

    return (
        <div className='w-full h-full mt-6 overflow-y-auto'>
            <div className='w-full flex items-center gap-2 justify-center flex-wrap '>
                <AnimatePresence>
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.id}
                            layout
                            initial={INITIAL_ANIMATION}
                            animate={ANIMATE_ANIMATION}
                            exit={EXIT_ANIMATION}
                            transition={TRANSITION_ANIMATION}
                            className='w-[120px] h-[150px] rounded-xl bg-gray-100  mb-2 overflow-hidden'
                        >
                            <div
                                className='w-full gap-1 h-8 bg-gray-200 flex items-center justify-start p-2'
                            >
                                <div
                                    onClick={() => deleteDoc(tab.id)}
                                    className='w-3 h-3 rounded-full bg-red-500 cursor-pointer' />
                                <div
                                    className='w-3 h-3 rounded-full bg-yellow-500' />
                                <div
                                    className='w-3 h-3 rounded-full bg-green-500' />

                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className='w-full flex items-center justify-center gap-4 absolute group bottom-10'>
                <motion.div
                    {...BUTTON_ANIMATION}
                    onClick={addADoc}
                    className={`inline-flex flex-row gap-2 items-center bg-white rounded-full shadow-md cursor-pointer whitespace-nowrap px-4 p-1 select-none`}
                >
                    <img src="/tab-icon.svg" alt="plus" />
                    <p className='select-none'>New Tab</p>
                </motion.div>
                {
                    tabs.length > 0 && (
                        <motion.div
                            {...BUTTON_ANIMATION}
                            onClick={() => setDocs([])}
                            className='inline-flex flex-row gap-2 items-center bg-white rounded-full shadow-md cursor-pointer p-2'
                        >
                            <Trash2 />
                        </motion.div>
                    )
                }
            </div>
        </div >
    )
}

export default TabCard