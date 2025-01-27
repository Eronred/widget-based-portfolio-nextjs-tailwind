"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import React from "react";

interface Quote {
    id: number;
    quote: string;
    author?: string;
    image?: string;
}

const QuoteWidget: React.FC = () => {
    const [quotes] = useState<Quote[]>([
        {
            id: 1,
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiMjHAVVQo6BRB5QEqZLhAus79xn9XCLvzw&s",
        },
        {
            id: 2,
            quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
            author: "Randy Pausch",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/RandyPausch_Wiki_2.jpg",
        },
        {
            id: 3,
            quote: "Imagination is more important than knowledge.",
            author: "Albert Einstein",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrMwLg8Y4uOwTmo8VbLXYynHTa-wlmrPB2whXpRcyWyXlCVH-oaCuhme9uXaXPW3S6wO3ftIGGwS-G9re7CM6BMA",
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Advance to the next quote or loop back to the first one
    const nextQuote = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, [quotes.length]);

    useEffect(() => {
        if (isPaused) return;
        let timer = 5000;
        if (currentIndex === quotes.length - 1) {
            timer = 1000;
        }
        const interval = setInterval(nextQuote, timer);
        return () => clearInterval(interval);
    }, [isPaused, nextQuote]);

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square bg-gradient-to-t from-gray-50 to-gray-100 rounded-3xl overflow-hidden relative"
        >
            {/* Progress Bars */}
            <div className="flex flex-row items-center justify-center gap-1 mt-4">
                {quotes.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index); // Switch to the clicked story.
                            setIsPaused(true); // Pause autoplay when manually clicked.
                            setTimeout(() => setIsPaused(false), 500); // Resume autoplay after a short delay.
                        }}
                        className="h-2 flex-1 bg-gray-200 overflow-hidden rounded-full cursor-pointer"
                    >
                        <motion.div
                            key={`${index}-${currentIndex}`} // Add a unique key to reset animation
                            className="h-full bg-gray-800"
                            initial={{ width: "0%" }}
                            animate={{
                                width:
                                    index < currentIndex
                                        ? "100%" // Fully filled for past stories
                                        : index === currentIndex
                                            ? "100%" // Animate the current story
                                            : "0%", // Empty for future stories
                            }}
                            transition={{
                                duration: index === currentIndex ? 5 : 0, // Animate only the current story
                                ease: "linear",
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Quote Content */}
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 sm:p-6"
            >

                <div className="flex-2 flex-col items-start justify-start">
                    <p className="text-2xl text-center">{quotes[currentIndex].quote}</p>
                </div>
                <div className="flex max-h-10 flex-row items-center justify-center gap-2 mb-4">
                    <img
                        key={quotes[currentIndex].image}
                        src={quotes[currentIndex].image}
                        className="size-8 rounded-full overflow-hidden shadow-md object-cover"
                    />
                    <h5 className="text-lg font-medium">{quotes[currentIndex].author}</h5>
                </div>
            </motion.div>
        </motion.div >
    );

};

export default QuoteWidget;