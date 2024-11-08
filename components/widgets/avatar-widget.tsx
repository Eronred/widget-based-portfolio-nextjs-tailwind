"use client"
import { motion } from 'framer-motion'
import { moveInAnimationVariant } from '@/lib/utils/animation'

export default function AvatarWidget() {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className='aspect-square flex flex-col items-center justify-start rounded-3xl overflow-hidden relative bg-[#FFB800]'
        >
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3110_447)">
                    <rect width="400" height="400" fill="#FFB800" />
                    <g clipPath="url(#clip1_3110_447)">
                        <circle cx="200" cy="164" r="80" fill="#DF7D56" />
                        <motion.path
                            d="M154 204C159.334 206.667 171.6 210 178 202"
                            stroke="black"
                            strokeWidth="12"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [1, 0.3, 1, 0.3, 1],
                                opacity: [1, 1, 1, 1, 1],
                                scaleX: [0.8, 1, 1.1, 1, 0.9, 1.1],
                                x: [-3, 3, 7, 0, -5, 0],
                                y: [0, 2, -2, 2, 3, 2]
                            }}
                            transition={{
                                duration: 5,
                                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                        />
                    </g>
                    <path d="M146.736 264H-2V400H402V264H255.274L200 284L146.736 264Z"
                        fill="#13161A" />
                    <mask id="path-4-inside-1_3110_447" fill="white">
                        <path d="M0 264H148V400H0V264Z" />
                    </mask>
                    <path d="M0 264H148V400H0V264Z" fill="#656B72" />
                    <path d="M0 264H148V400H0V264Z" fill="#656B72" />
                    <path d="M132 264V400H164V264H132Z"
                        fill="white" mask="url(#path-4-inside-1_3110_447)" />
                    <mask id="path-6-inside-2_3110_447"
                        fill="white">
                        <path d="M404 264H256V400H404V264Z" />
                    </mask>
                    <path d="M404 264H256V400H404V264Z" fill="#656B72" />
                    <path d="M404 264H256V400H404V264Z" fill="#656B72" />
                    <path d="M272 264V400H240V264H272Z"
                        fill="white" mask="url(#path-6-inside-2_3110_447)"
                    />
                    <motion.path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M262.557 101.891C277.409 118.496 285.057 140.321 283.817 162.565L199.947 157.892L148.028 154.999L116.077 153.219L48.1826 149.436L48.8502 137.454L117.605 141.285C121.168 123.614 130.352 107.442 143.947 95.2823C160.552 80.43 182.377 72.7824 204.621 74.0218C226.864 75.2612 247.704 85.2861 262.557 101.891Z"
                        fill="black"
                        initial={{
                            rotate: 20,
                            y: 30
                        }}
                        animate={{
                            rotate: [1, 0, -50, 0],
                            y: [3, 2, -40, 2],
                            scale: [0.99, 1, 1.01, 1],
                            transformOrigin: "center"
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            type: "spring",
                        }}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_3110_447">
                        <rect width="400" height="400" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_3110_447">
                        <rect width="160" height="160" fill="white" transform="translate(120 84)" />
                    </clipPath>
                </defs>
            </svg>
        </motion.div>
    )
}
