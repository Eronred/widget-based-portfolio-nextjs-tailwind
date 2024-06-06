"use client"
import React, { useEffect, useState } from "react";
import {
    useMotionValue,
    useAnimate,
    motion,
} from "framer-motion";
import classNames from 'classnames';
import useMeasure from "react-use-measure";
import { moveInAnimationVariant } from '@/lib/utils/animation';
import { IMAGES } from "@/lib/images";
import { AUTO_DELAY, DRAG_BUFFER, SPRING_OPTIONS } from "@/lib/animation";


const DRAGGABLE_INDICATOR_ANIMATION_PROPS = {
    dragConstraints: {
        top: 0,
        bottom: 0
    },
    dragElastic: {
        top: 0.01,
        bottom: 0.01
    },
    whileTap: {
        scale: 0.9
    }
};

const SHEET_VARIANT = {
    open: {
        y: 20,
        scale: 1,
        transition: { ...SPRING_OPTIONS },
    },
    closed: {
        y: 2,
        scale: 0.4
    },
};


const SwipeCarouselWidget = () => {
    const [imgIndex, setImgIndex] = useState<number>(0);
    const [scope, animate] = useAnimate();
    const [sheetRef, { height }] = useMeasure();
    const [open, setIsOpen] = useState<boolean>(true);
    const y = useMotionValue(0);

    console.log()

    const handleClose = async () => {
        const yStart = typeof y.get() === "number" ? y.get() : 0;
        await animate("#sheet", {
            y: [yStart, 200],
        });
        setIsOpen(false);
    };

    const handleOpen = async () => {
        await animate("#sheet", {
            y: [100, 0],
        });
        setIsOpen(true);
    };

    useEffect(() => {
        if (!open) {
            handleClose();
        } else {
            handleOpen();
        }
    }, [open]);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % IMAGES.length);
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);


    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-square rounded-3xl overflow-hidden relative">
            <div className="relative w-full h-full overflow-hidden">
                <motion.div
                    animate={{ translateX: `-${imgIndex * 100}%` }}
                    transition={SPRING_OPTIONS}
                    className="flex w-full h-full"
                >
                    {IMAGES.map((image, index) => (
                        <div
                            key={image.id}
                            className="w-full h-full flex-shrink-0 pointer-events-none select-none relative">
                            <img
                                src={image.imageSrc}
                                alt={`carousel ${index}`}
                                className="w-full h-full object-cover pointer-events-none select-none "
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            <motion.div
                ref={scope}
                className="flex flex-col items-center justify-center gap-2 absolute bottom-0 w-full p-2"
            >
                <motion.div
                    drag="y"
                    animate={{ translateY: open ? 0 : height + 20 }}
                    {...DRAGGABLE_INDICATOR_ANIMATION_PROPS}
                    onPan={(e, { offset }) => {
                        if (offset.y > DRAG_BUFFER) {
                            setIsOpen(false);
                        } else {
                            setIsOpen(true);
                        }
                    }
                    }
                    className="w-12 h-2 bg-gray-100 rounded-lg mb-2 cursor-grab active:cursor-grabbing"
                />
                <motion.div
                    id="sheet"
                    ref={sheetRef}
                    onClick={(e) => e.stopPropagation()}
                    variants={SHEET_VARIANT}
                    animate={open ? "open" : "closed"}
                    dragListener={false}
                    className={"flex flex-row items-center justify-center gap-2 mb-2  "}
                >
                    {IMAGES.map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => {
                                setImgIndex(index)
                            }
                            }
                            className={classNames("w-[40px] h-[40px] flex-shrink-0 rounded-lg hover:scale-105 overflow-hidden transition-all cursor-pointer", {
                                "border-2 border-gray-100": index === imgIndex,
                                "border-2 border-transparent": index !== imgIndex
                            })}
                        >
                            <img
                                src={image.imageSrc}
                                onClick={(e) => e.stopPropagation()}
                                alt={`thumbnail ${index}`}
                                className="w-full h-full object-cover select-none pointer-events-none"
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div >
    );
};

export default SwipeCarouselWidget;
