import { motion } from 'framer-motion';
import React from 'react'
import { moveInAnimationVariant } from '@/lib/utils/animation';


const MobileSimulatorCard: React.FC = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={` bg-slate-800 row-span-2 rounded-[40px] overflow-hidden`}>
            <div className='w-full h-full p-2'>
                <div className='w-full h-full flex items-center justify-center bg-slate-600 rounded-[34px]' />
            </div>
        </motion.div>
    );
};

export default MobileSimulatorCard;