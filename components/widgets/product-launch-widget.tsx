"use client"
import { moveInAnimationVariant } from '@/lib/utils/animation'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const features = [
    {
        id: 1, text: "Enhance User Authentication", token: 400,
    },
    { id: 2, text: "Optimize Database Queries", token: 323, },
    { id: 3, text: "Implement Caching Mechanism", token: 232, },
    { id: 4, text: "Add Automated Testing", token: 123, },
    { id: 5, text: "Implement Real-Time Data...", token: 565, },
    { id: 6, text: "Enhance User Authentication", token: 4100, },
];


export default function ProductLaunchWidget() {

    const [isHovered, setIsHovered] = useState(features[0].id);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % features.length;
            setIsHovered(features[currentIndex].id);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square bg-gradient-to-br from-gray-900 to-gray-900 rounded-3xl overflow-hidden relative p-4 flex flex-col justify-between"
        >
            <div
                className=" bg-black/70 p-3 absolute top-14 right-0 left-0  flex flex-col items-start justify-start gap-2 h-full scale-90 rounded-2xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        className=" flex flex-row items-center justify-center gap-2"
                        initial={{
                            scale: 1,
                        }}
                        animate={{
                            scale: isHovered === feature.id ? 1.2 : 1,
                            opacity: isHovered === feature.id ? 1 : 0.5,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <motion.svg
                            initial={{
                                rotate: 0,
                            }}
                            animate={{
                                rotate: isHovered === feature.id ? 360 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.6187 7.31093C13.7828 6.85943 13.8241 6.40793 13.7828 5.95709C13.7421 5.50625 13.5781 5.05475 13.3726 4.64459C13.0038 4.02968 12.4703 3.5375 11.8554 3.25006C11.1991 2.96328 10.5016 2.88125 9.80462 3.04531C9.47649 2.71718 9.10702 2.42975 8.69687 2.225C8.28671 2.01959 7.79452 1.93756 7.34368 1.93756C6.63945 1.93345 5.95139 2.14858 5.37493 2.55312C4.80071 2.96262 4.39056 3.5375 4.18515 4.19375C3.69296 4.31646 3.28281 4.52187 2.87265 4.76796C2.50384 5.05475 2.2164 5.42421 1.97031 5.79303C1.60149 6.40859 1.47812 7.10553 1.56015 7.80312C1.64257 8.49869 1.92786 9.15462 2.38046 9.68918C2.22533 10.1225 2.16927 10.5852 2.2164 11.043C2.25774 11.4945 2.42181 11.9454 2.62656 12.3555C2.99602 12.9711 3.5289 13.4633 4.14446 13.7501C4.80071 14.0375 5.49765 14.1195 6.19524 13.9555C6.52337 14.2836 6.89218 14.5704 7.30234 14.7758C7.71249 14.9805 8.20468 15.0626 8.65618 15.0626C9.36034 15.0669 10.0484 14.852 10.6249 14.4477C11.1991 14.0375 11.6093 13.4633 11.8141 12.807C12.2774 12.7189 12.7133 12.5221 13.0859 12.2328C13.4547 11.9454 13.7828 11.6172 13.9882 11.2071C14.357 10.5922 14.4804 9.89459 14.3984 9.19765C14.3163 8.50006 14.0702 7.84446 13.6187 7.31093ZM8.69687 14.2009C8.04062 14.2009 7.54843 13.9955 7.09759 13.6267C7.09759 13.6267 7.13827 13.5853 7.17962 13.5853L9.80462 12.0681C9.87789 12.0358 9.93642 11.9773 9.96868 11.904C10.0016 11.8408 10.0157 11.7696 10.0094 11.6986V8.00787L11.1171 8.66412V11.6993C11.1284 12.024 11.0741 12.3477 10.9575 12.651C10.841 12.9543 10.6644 13.231 10.4385 13.4645C10.2126 13.6981 9.94198 13.8837 9.64274 14.0104C9.34349 14.137 9.0218 14.2014 8.69687 14.2009ZM3.40618 11.9454C3.11874 11.4532 2.99602 10.879 3.11874 10.3047C3.11874 10.3047 3.16009 10.3461 3.20077 10.3461L5.82577 11.8633C5.88882 11.8967 5.96016 11.911 6.03118 11.9047C6.11321 11.9047 6.19524 11.9047 6.23593 11.8633L9.43515 10.018V11.2891L6.76946 12.8477C6.21105 13.1711 5.54707 13.2597 4.92343 13.0938C4.26718 12.9297 3.73431 12.5196 3.40618 11.9454ZM2.70859 6.24453C2.9985 5.75427 3.44722 5.37778 3.9804 5.17746V8.29531C3.9804 8.37668 3.9804 8.45937 4.02109 8.50006C4.05334 8.57333 4.11188 8.63186 4.18515 8.66412L7.38437 10.5102L6.27727 11.1664L3.65227 9.64849C3.37266 9.49062 3.12717 9.27881 2.93003 9.02535C2.73289 8.77188 2.58803 8.4818 2.50384 8.17193C2.33977 7.55703 2.38046 6.81874 2.70859 6.24453ZM11.7734 8.33599L8.57415 6.49062L9.68124 5.83437L12.3062 7.35162C12.7164 7.59771 13.0445 7.92584 13.2499 8.33599C13.4547 8.74615 13.5781 9.19765 13.5367 9.68984C13.4967 10.1517 13.326 10.5926 13.0445 10.961C12.7577 11.3305 12.3883 11.6172 11.9374 11.7813V8.66412C11.9374 8.58209 11.9374 8.50006 11.8961 8.45937C11.8961 8.45937 11.8554 8.37668 11.7734 8.33599ZM12.8805 6.69537C12.8805 6.69537 12.8398 6.65468 12.7984 6.65468L10.1734 5.13678C10.0914 5.09609 10.0507 5.09609 9.96868 5.09609C9.88665 5.09609 9.80462 5.09609 9.76327 5.13678L6.56406 6.98281V5.711L9.2304 4.1524C9.64056 3.90631 10.0914 3.82428 10.5836 3.82428C11.0351 3.82428 11.4859 3.98834 11.8961 4.27578C12.2656 4.56256 12.5937 4.93203 12.7577 5.34218C12.9218 5.75234 12.9625 6.24453 12.8805 6.69537ZM5.98984 8.99224L4.88274 8.33599V5.26015C4.88274 4.80865 5.00546 4.31646 5.25156 3.94765C5.49765 3.5375 5.86712 3.25006 6.27727 3.04531C6.6952 2.83526 7.16903 2.76333 7.63046 2.8399C8.08196 2.88125 8.53281 3.086 8.90227 3.37343C8.90227 3.37343 8.86093 3.41412 8.82024 3.41412L6.19524 4.93203C6.12197 4.96428 6.06344 5.02282 6.03118 5.09609C5.98984 5.17812 5.98984 5.21881 5.98984 5.30084V8.99224ZM6.56406 7.67974L7.99993 6.85943L9.43515 7.67974V9.32037L7.99993 10.1407L6.56406 9.32037V7.67974Z"
                                fill="#fff"
                            />
                        </motion.svg>
                        <span
                            className="text-xs text-gray-100 whitespace-nowrap line-clamp-2">
                            {feature.text} <span className="text-gray-400">{feature.token} tokens</span>
                        </span>
                    </motion.div>
                ))}
            </div>

            <Link
                target="_blank"
                href="https://niceprompt.app"
                className="z-10 inline-flex flex-row items-center justify-start gap-2">
                <div className="bg-black/70 p-2 rounded-xl">
                    <Image
                        src="/np-logo.svg"
                        alt="App Store"
                        width={24}
                        height={24}
                        className=''
                    />
                </div>
                <div className="flex flex-col items-start justify-start">
                    <div className="text-white text-sm">Nice Prompt</div>
                    <div className="text-gray-400 text-xs">Save, organize, and share</div>
                </div>
            </Link>

            <motion.div
                initial={{
                    translateY: 300,
                }}
                animate={{
                    translateY: 0,
                }}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                    delay: 1,
                }}
                className="relative z-10 bg-gray-400/30  rounded-xl p-2 flex items-center shadow-2xl backdrop-blur-sm">
                <div
                    className='p-2 bg-white rounded-xl'
                >
                    <Image
                        src="/vsc-logo.svg"
                        alt="App Store"
                        width={32}
                        height={32}
                    />
                </div>
                <div className="ml-2 flex-grow">
                    <div className="text-white text-sm">Now available</div>
                    <div className="text-gray-400 text-xs">in the marketplace</div>
                </div>
                <Link
                    href="https://marketplace.visualstudio.com/items?itemName=Niceprompt.nice-prompt"
                    target="_blank"
                    className="bg-[#107c10] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Get
                </Link>
            </motion.div>
        </motion.div >
    )
}