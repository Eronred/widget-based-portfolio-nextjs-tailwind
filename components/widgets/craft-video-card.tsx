"use client"
import { moveInAnimationVariant } from '@/lib/utils/animation';
import { motion } from 'framer-motion';
import React from 'react';


export interface CraftVideoCardProps {
    videoFile: string;
    color?: string
}

const CraftVideoCard: React.FC<CraftVideoCardProps> = ({
    videoFile,
    color = "bg-small-grid-card"
}) => {


    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`${color} aspect-square rounded-3xl overflow-hidden`}>
            <div className="w-full h-full relative">
                <video
                    src={videoFile}
                    className=' w-full min-h-full object-cover'
                    autoPlay
                    loop
                    muted
                    onCanPlay={(event) => event.currentTarget.play()}
                />
            </div>
        </motion.div>
    );
};

export default CraftVideoCard;
