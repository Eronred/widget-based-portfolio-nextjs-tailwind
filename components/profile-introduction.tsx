import React from "react";
import AnimatedContentLink from "./animated-text";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import { motion } from "framer-motion";

const ProfileIntroduction = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="row-span-1 sm:col-span-2">
            <div
                className="text-2xl sm:text-3xl text-gray-900 text-left "
                style={{
                    lineHeight: "1.3",
                }}
            >
                <p className="mb-4">
                    Hello, I’m
                    <AnimatedContentLink label="Erencan">
                        <img
                            src="/avatar-me.jpg"
                            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full ml-2"
                        />
                    </AnimatedContentLink>
                    . I am a frontend developer with design experience.
                </p>
                <p className="mb-4">
                    I’m currently building
                    <AnimatedContentLink label="Nice Prompt" url="https://niceprompt.app">
                        <img
                            src="./nice-prompt.svg"
                            className=" w-4 h-4 sm:w-12 sm:h-12 ml-2"
                        />
                    </AnimatedContentLink>
                    with Next.js and React Native.
                </p>
                <p>I am open to new roles and opportunities.</p>
            </div>
        </motion.div>
    );
};

export default ProfileIntroduction;
