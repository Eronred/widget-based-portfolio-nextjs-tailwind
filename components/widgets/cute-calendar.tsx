import React from 'react'
import { motion } from 'framer-motion'
import { moveInAnimationVariant } from '@/lib/utils/animation'

const CuteCalendar: React.FC = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square w-full bg-black flex items-center justify-center relative"
        >
            <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Calendar base */}
                <rect x="10" y="20" width="100" height="90" rx="16" fill="#FF3B30" />
                <rect x="10" y="20" width="100" height="45" rx="16" fill="#FF453A" />

                {/* Calendar page */}
                <rect x="16" y="26" width="88" height="78" rx="12" fill="white" />

                {/* Calendar rings */}
                <circle cx="40" cy="20" r="6" fill="#E5E5EA" />
                <circle cx="80" cy="20" r="6" fill="#E5E5EA" />

                {/* Day of week */}
                <text
                    x="60"
                    y="56"
                    fontFamily="Arial, sans-serif"
                    fontSize="18"
                    fontWeight="bold"
                    fill="#1C1C1E"
                    textAnchor="middle"
                >
                    THU
                </text>

                {/* Date */}
                <text
                    x="60"
                    y="92"
                    fontFamily="Arial, sans-serif"
                    fontSize="48"
                    fontWeight="bold"
                    fill="#1C1C1E"
                    textAnchor="middle"
                >
                    28
                </text>
            </svg>
        </motion.div>
    )
}

export default CuteCalendar
