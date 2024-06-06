import { motion } from 'framer-motion';
import { moveInAnimationVariant } from '@/lib/utils/animation';
import React from 'react'

interface Props {
    quote: string
    author?: string
    image?: string
}

const QuoteWidget: React.FC<Props> = (
    {
        quote,
        author,
        image
    }) => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`aspect-square bg-gradient-to-t from-gray-50 to-gray-100 rounded-3xl overflow-hidden`}
        >
            <div className='w-full h-full flex flex-col items-center justify-center p-4 sm:p-8'>
                <div className=" w-full h-full flex items-center justify-center">
                    <p className='text-2xl text-center'>
                        {quote}
                    </p>
                </div>
                <div className='flex flex-row items-center gap-2 justify-center' >
                    <img
                        src={image}
                        className="w-8 h-8 rounded-full ml-2 overflow-hidden shadow-md object-cover"
                    />
                    <h5 className='text-xl font-medium text-center'>
                        {author}
                    </h5>
                </div>
            </div>
        </motion.div>
    );
};

export default QuoteWidget;