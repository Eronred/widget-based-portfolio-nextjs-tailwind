"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { moveInAnimationVariant } from "@/lib/utils/animation";

const SECONDS = [5, 15, 20, 25]

const CoolTimer: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(SECONDS[2]);
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const [selectedSeconds, setSelectedSeconds] = useState<number>(SECONDS[2]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setTime((prevTime) => (prevTime < seconds ? prevTime + 1 : 0));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds, isRunning]); 

    const padTime = (time: number): string => String(time).padStart(2, "0");
    const sec = time;
    const progress = (time / seconds) * 100;
    const totalCircles = seconds;

    // Timer radius for outer circles 
    const radius = 65; // Adjust this value to set how far circles are placed from the center
    const centerX = 64; // Half of w-32 (64px)
    const centerY = 64; // Half of h-32 (64px)

    // Calculate circle positions around the timer using trigonometry
    const circlePositions = Array.from({ length: totalCircles }, (_, index) => {
        const angle = (index / totalCircles) * 2 * Math.PI - Math.PI / 2; // Start at 12 o'clock
        const x = centerX + radius * Math.cos(angle) - 8; // Adjust x for correct positioning
        const y = centerY + radius * Math.sin(angle) - 8; // Adjust y for correct positioning
        return { x, y };
    });

    const handleSecondsChange = (newSeconds: number) => {
        setTime(0);
        setSeconds(newSeconds);
        setIsRunning(true);
        setSelectedSeconds(newSeconds);
    };

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={` bg-black aspect-square rounded-3xl overflow-hidden flex flex-col items-center justify-center `}>
            <div className="relative">
                {circlePositions.map((pos, index) => (
                    <motion.div
                        key={index}
                        className="w-4 h-4 rounded-full absolute z-10"
                        style={{
                            left: `${pos.x}px`,
                            top: `${pos.y}px`,
                        }}
                        animate={{
                            backgroundColor: index < time ? "#9b7a5c" : "#524131",
                            scale: index < time ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                        }}
                    />
                ))}
                <div className="relative w-32 h-32 flex flex-col items-center justify-center bg-black text-white rounded-full overflow-hidden shadow-lg">
                    <div className="absolute z-20 top-1 font-bold font-serif text-[#7e5f41] text-xl">
                        SEC
                    </div>
                    <div className="relative z-20 text-[70px] font-serif font-bold mb-4 text-[#9b7a5c] mix-blend-lighten">
                        {padTime(sec)}
                    </div>

                    {/* Progress bar section with darker upper half */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-[#614F36]"
                        style={{ height: `${progress}%`, opacity: 0.8 }}
                        initial={{ height: "0%" }}
                        animate={{ height: `${progress}%` }}
                        transition={{
                            duration: 1,
                            type: "spring",
                        }}
                    />
                </div>
            </div>

            {/* Options to select seconds */}
            <div className="flex flex-row items-center justify-center mt-10 space-x-2">
                {SECONDS.map((secOption) => (
                    <button
                        key={secOption}
                        className={`px-2  rounded-md ${selectedSeconds === secOption ? "bg-[#7a5f41] text-[#fcd9b7]" : "text-[#7e5f41]"
                            }`}
                        onClick={() => handleSecondsChange(secOption)}
                    >
                        {secOption}
                    </button>
                ))}
            </div>
        </motion.div>

    );
};

export default CoolTimer;