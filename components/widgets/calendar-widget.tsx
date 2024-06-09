import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { moveInAnimationVariant } from '@/lib/utils/animation';

const CalendarWidget: React.FC = () => {

    const formatDay = () => {
        return new Date().getDate()
    }

    const formatWeekday = () => {
        return new Date().toLocaleString('default', { weekday: 'long' }).toUpperCase()
    }

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className='aspect-square bg-calendar-card rounded-3xl overflow-hidden relative text-white'>
            <div className=' w-full h-full flex flex-col items-start justify-between p-6'>
                <div className='flex flex-col'>
                    <div className='text-2xl'>{formatWeekday()}</div>
                    <div className='text-7xl'>{formatDay()}</div>
                </div>
                <div className='flex flex-col text-lg text-white/45 whitespace-nowrap'>
                    <p>Networking</p>
                    <p>Freelancing</p>
                    <p>Design Engineering</p>
                </div>
                <div className='flex flex-row text-3xl whitespace-nowrap'>
                    Book a
                    <Link
                        target='_blank'
                        className='underline ml-3'
                        href='https://cal.com/erencanarica'>
                        Cal.com
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default CalendarWidget