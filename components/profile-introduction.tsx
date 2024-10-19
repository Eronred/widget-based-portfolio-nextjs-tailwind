import React from "react";
import AnimatedContentLink from "./animated-text";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskRound } from "lucide-react";
import { SOCIAL_MEDIA_LINKS } from "./widgets/social-media-widget";
const ProfileIntroduction = () => {
    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="row-span-1 sm:col-span-2">
            <div className="flex flex-row gap-4">
                <Link href="/lab" className="text-sm text-gray-500 flex flex-row items-center gap-2 hover:text-gray-900 transition-colors duration-300 pb-1 p-1 hover:bg-gray-100 rounded-md">
                    <FlaskRound className="w-4 h-4" />
                    <span>Lab</span>
                </Link>
            </div>
            <div
                className="text-2xl sm:text-3xl text-gray-900 text-left mt-4 "
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
                    I am a Design Engineer.
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
            <div className="flex flex-row gap-4 mt-4">

                {
                    SOCIAL_MEDIA_LINKS.map((url, index) => (
                        <Link
                            target="_blank"
                            href={url.url}
                            className="text-sm text-gray-500 flex flex-row items-center gap-2 hover:text-gray-900"
                            key={index}>
                            <img
                                src={`./icons/${url.icons}`}
                                className='w-4 h-4'
                            />
                            <span>{url.name}</span>
                        </Link>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default ProfileIntroduction;
