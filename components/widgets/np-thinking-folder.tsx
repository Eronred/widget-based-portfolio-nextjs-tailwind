"use client"

import { motion } from "framer-motion"
import React, { useState, useRef } from "react"
import { moveInAnimationVariant } from "@/lib/utils/animation"

interface Props {
    state?: 'thinking' | 'done' | 'error'
}

const NPThinkingFolderWidget: React.FC<Props> = ({ state = 'done' }) => {
    const states = [
        { text: "Thinking", process: "thinking" },
        { text: "Done", process: "done" },
    ];
    const [agentTaskProcess, setAgentTaskProcess] = useState<string>(state || "done")
    const [isPetting, setIsPetting] = useState(false)
    const folderRef = useRef<HTMLDivElement>(null)

    // Folder animation variants
    const folderVariants = {
        ...moveInAnimationVariant,
        error: {
            x: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
            },
        },
    }

    // Eye movement variants
    const eyeVariants = {
        thinking: {
            x: [0, 2, 0, -2, 0],
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 0.3,
            },
        },
        done: {
            transition: {
                duration: 2,
                ease: "easeInOut",
                times: [0.25, 0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 1,
            },
        },
        stopped: {
            x: 0,
            y: 0,
            transition: { duration: 0.1 },
        },
    }

    // Eye blinking variants
    const blinkVariants = {
        animate: {
            scaleY: [1, 0.1, 1],
            transition: {
                duration: 0.15,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
            },
        },
        thinking: {
            scaleY: [0.4, 0.4, 0.4],
            transition: {
                duration: 0.8,
                repeat: Infinity,
            },
        },
        done: {
            scaleY: [1, 0, 1],
            transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 3,
            },
        },
        petting: {
            scaleY: [0.5, 0.5],
            transition: {
                duration: 0.2,
            },
        },
        stopped: {
            scaleY: 1,
            transition: { duration: 0.1 },
        },
    }

    const handlePetStart = () => {
        setIsPetting(true)
    }

    const handlePetEnd = () => {
        setIsPetting(false)
    }

    return (
        <motion.div
            ref={folderRef}
            variants={folderVariants}
            initial="initial"
            animate={agentTaskProcess === 'error' ? 'error' : 'animate'}
            className="aspect-square rounded-3xl overflow-hidden relative"
            onMouseDown={handlePetStart}
            onMouseUp={handlePetEnd}
            onMouseLeave={handlePetEnd}
            onTouchStart={handlePetStart}
            onTouchEnd={handlePetEnd}
        >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="0.8"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Folder Path */}
                    <path
                        d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Eyes */}
                    <motion.g
                        variants={eyeVariants}
                        animate={agentTaskProcess === 'error' ? 'stopped' : agentTaskProcess}
                    >
                        <motion.circle
                            variants={blinkVariants}
                            animate={isPetting ? 'petting' : agentTaskProcess === 'error' ? 'stopped' : agentTaskProcess}
                            cx="8.5"
                            cy="12.5"
                            r="1.5"
                            fill="black"
                        />
                        <motion.circle
                            variants={blinkVariants}
                            animate={isPetting ? 'petting' : agentTaskProcess === 'error' ? 'stopped' : agentTaskProcess}
                            cx="15.5"
                            cy="12.5"
                            r="1.5"
                            fill="black"
                        />
                    </motion.g>
                </svg>
            </div>

            <div className="flex flex-row items-center justify-center absolute bottom-10 w-full gap-2">
                {states.map(({ text, process }) => (
                    <button
                        key={process}
                        onClick={() => setAgentTaskProcess(process)}
                        className={`p-1 px-2 text-sm rounded-md ${agentTaskProcess === process
                            ? "bg-zinc-800 text-gray-100"
                            : "hover:bg-zinc-100"
                            }`}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </motion.div>
    )
}

export default NPThinkingFolderWidget