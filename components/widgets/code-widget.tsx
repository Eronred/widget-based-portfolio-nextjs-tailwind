"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import { type HighlighterCore, getHighlighter } from "shiki";
import "shiki-magic-move/dist/style.css";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import PressableIcon from "../pressable-icon";
import { Check, Copy } from "lucide-react";
import useMeasure from "react-use-measure";
import { codeFiles } from "@/lib";
import { ShikiMagicMove } from "shiki-magic-move/react";

const TIMEOUT = 2000;
const DRAG_BUFFER = 50;

const SHEET_VARIANT = {
    open: {
        x: '0vw',
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    closed: {
        x: '-50vw',
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
};

const DRAGGABLE_INDICATOR_ANIMATION_PROPS = {
    dragConstraints: {
        left: 0,
        right: 0
    },
    dragElastic: {
        left: 0.01,
        right: 0.01
    },
    whileTap: {
        scale: 0.9
    }
};

const CodeWidget = () => {
    const [code, setCode] = useState(codeFiles[1].code);
    const [highlighter, setHighlighter] = useState<HighlighterCore>();
    const { isCopied, copyToClipboard } = useCopyToClipboard({
        timeout: TIMEOUT,
    });

    const copyVariantAnimation = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: isCopied ? 1.06 : 1,
        },
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.96 },
    };

    const [scope, animate] = useAnimate();
    const [open, setIsOpen] = useState(true);
    const [sheetRef, { width: sheetWidth }] = useMeasure();

    const handleClose = async () => {
        await animate("#sheet", {
            x: ['-10vw', '0vw'],
        });
        setIsOpen(false);
    };

    const handleOpen = async () => {
        await animate("#sheet", {
            x: ['0vw', '-50vw'],
        });
        setIsOpen(true);
    };

    const handleCodeChange = (index: number) => {
        setCode(codeFiles[index].code);
    }

    useEffect(() => {
        if (!open) {
            handleClose();
        } else {
            handleOpen();
        }
    }, [open]);

    useEffect(() => {
        async function initializeHighlighter() {
            const highlighter = await getHighlighter({
                themes: ["catppuccin-mocha", "min-dark", "one-light"],
                langs: ["javascript", "typescript"],
            });
            setHighlighter(highlighter);
        }
        initializeHighlighter();
    }, []);

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className="aspect-ratio max-w-[320px]  bg-small-grid-card rounded-3xl overflow-hidden relative"
        >
            <motion.div
                className="w-full h-[405px]  sm:h-[310px] overflow-auto"
                animate={{
                    translateX: open ? 0 : 100,
                    scale: open ? 1 : 0.8,
                }}
            >
                {highlighter && (
                    <ShikiMagicMove
                        lang="ts"
                        theme="one-light"
                        className="w-full h-full ml-4 p-2 text-sm"
                        highlighter={highlighter}
                        code={code}
                        options={{
                            duration: 200,
                            stagger: 0.4,
                            lineNumbers: true,
                        }}
                    />
                )}
            </motion.div>

            <motion.div
                ref={scope}
                className="absolute w-full h-full left-0 top-0 text-black z-50 rounded-lg pointer-events-none"
            >
                <motion.div
                    drag="x"
                    animate={{ translateX: open ? 10 : sheetWidth + 20 }}
                    {...DRAGGABLE_INDICATOR_ANIMATION_PROPS}
                    onPan={(e, { offset }) => {
                        if (offset.x > DRAG_BUFFER) {
                            setIsOpen(false);
                        } else {
                            setIsOpen(true);
                        }
                    }}
                    className="w-2 h-10 absolute top-1/3 z-50 bg-gray-400 rounded-lg cursor-grab active:cursor-grabbing pointer-events-auto"
                />

                <motion.div
                    id="sheet"
                    ref={sheetRef}
                    onClick={(e) => e.stopPropagation()}
                    variants={SHEET_VARIANT}
                    animate={open ? "open" : "closed"}
                    dragListener={false}
                    className="flex bg-gray-100 w-[40%] h-full flex-col items-start justify-start gap-2 p-2 border-r-2 border-gray-200 z-50 overflow-y-auto overflow-x-hidden pointer-events-auto"
                >
                    {codeFiles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleCodeChange(index)}
                            className="hover:bg-gray-200 w-full flex items-center justify-start rounded-lg z-50 p-1 gap-1"
                        >
                            <img
                                src={`/icons/${_.type}.svg`}
                                alt="js"
                                className="w-4 h-4"
                            />
                            <span className="text-black text-sm">
                                {_.name}
                            </span>
                        </button>
                    ))}
                </motion.div>
            </motion.div>

            <PressableIcon
                onClick={() => {
                    copyToClipboard(code);
                }}
                variant={copyVariantAnimation}
                className="absolute bottom-4 right-4 bg-gray-100 text-black p-2 z-50 rounded-lg"
            >
                {isCopied ? <Check size={20} /> : <Copy size={20} />}
            </PressableIcon>
        </motion.div>
    );
};

export default CodeWidget;
