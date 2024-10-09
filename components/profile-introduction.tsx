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
                    <AnimatedContentLink
                        label="Erencan"
                        url="https://x.com/imeronn"
                    >
                        <img
                            src="/avatar-me.jpg"
                            className="size-8 sm:size-10  rounded-full ml-2"
                        />
                    </AnimatedContentLink>
                    . I am a Design Engineer.
                </p>
                <p className="mb-4">
                    I’m currently building
                    <AnimatedContentLink label="Nice Prompt" url="https://niceprompt.app">
                        <img
                            src="./np-logo-dark.svg"

                            className=" size-4 sm:size-10 ml-2 fill-black"
                        />
                    </AnimatedContentLink>
                    where you can save, organize and share your prompts. Available on
                    <AnimatedContentLink label="VSCode & Cursor" url="https://niceprompt.app">
                        <img
                            src="./vsc-logo.svg"
                            className=" size-4 sm:size-10  ml-2 fill-black"
                        />
                    </AnimatedContentLink>
                </p>
                <p>I am open to new roles and opportunities.</p>
            </div>
        </motion.div>
    );
};

export default ProfileIntroduction;
