"use client"
import { motion, useAnimation, AnimationControls } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { moveInAnimationVariant } from "@/lib/utils/animation";

const images = [
    {
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-2810308/original/a653d85a-1a97-45d7-a213-78ef2286122a.jpeg?im_w=720',
        alt: 'Tree'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/2cc58022-2004-4034-a281-22fb622e7461.jpg?im_w=720',
        alt: 'Tree'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-37988614/original/03d8ff60-c345-45ad-8aab-5c8f3cb5b1cd.jpeg?im_w=720',
        alt: 'Tree'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/26726bc5-6c5d-48f1-8767-f98021ed4abb.jpg?im_w=720',
        alt: 'Tree'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/0893e628-5d4b-4bd6-880d-870961618445.jpg?im_w=720',
        alt: 'Tree'
    }
]

const ROTATION_DEGREES = [10, -20, -5, 5, -2];

const IMAGE_ANIMATION_VARIANTS = {
    hidden: { scale: 0, rotate: 0 },
    visible: (i: number) => ({
        scale: 1,
        rotate: ROTATION_DEGREES[i],
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            type: 'spring',
            stiffness: 360,
            damping: 20
        }
    }),
    exit: (i: number) => ({
        scale: 0,
        rotate: 0,
        transition: {
            delay: (4 - i) * 0.1,
            duration: 0.3,
            type: 'spring',
        }
    })
};

function useAnimationCycle(controls: AnimationControls, interval: number = 2000) {
    const [isAnimating, setIsAnimating] = useState<boolean>(true);

    const startAnimation = async () => {
        setIsAnimating(true);
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, interval));
        await controls.start("exit");
        setIsAnimating(false);
    };

    useEffect(() => {
        if (!isAnimating) {
            startAnimation();
        }
    }, [isAnimating]);

    useEffect(() => {
        startAnimation();
    }, []);

    return { startAnimation };
}

const AirbnbImageAnimation = () => {
    const controls = useAnimation();
    const { startAnimation } = useAnimationCycle(controls);

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square rounded-3xl border-2 border-gray-100 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-t from-white/10 to-white/10"
        >
            <motion.div className="flex flex-row items-center justify-center w-full h-full rounded-xl overflow-hidden p-4 relative">
                {images.map((image, index) => (
                    <motion.img
                        src={image.src}
                        alt={image.alt}
                        key={index}
                        custom={index}
                        variants={IMAGE_ANIMATION_VARIANTS}
                        initial="hidden"
                        animate={controls}
                        className="w-16 h-16 border-2 border-gray-100 rounded-2xl -m-3 shadow-lg"
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AirbnbImageAnimation