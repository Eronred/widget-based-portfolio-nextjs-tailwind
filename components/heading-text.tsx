import React from 'react'
import Link from 'next/link'
import AnimatedContentLink from './animated-text'


export default function HeadingText() {
    return (
        <div className="row-span-1 sm:col-span-2">
            <div className="text-2xl sm:text-4xl text-gray-80 text-left "
                style={{
                    lineHeight: '1.3',
                }}
            >
                Hello, I’m
                <AnimatedContentLink
                    label='Erencan'
                >
                    <img
                        src="https://pbs.twimg.com/profile_images/1779911367056662530/oNPBfo_A_400x400.jpg"
                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full ml-2" />
                </AnimatedContentLink>

                . I am  a frontend developer with design experience.
                <br />
                <br />
                I’m currently building
                <AnimatedContentLink
                    label='Nice Prompt'
                    url='https://niceprompt.app'
                >
                    <img src="./nice-prompt.svg" className=" w-6 h-6 sm:w-12 sm:h-12  ml-2" />
                </AnimatedContentLink>
                with Next.js and React Native.
                <br />
                <br />
                I am open to new roles and opportunities.
            </div>
        </div>
    )
}




