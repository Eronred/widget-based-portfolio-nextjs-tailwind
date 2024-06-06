"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import { ShikiMagicMove } from "shiki-magic-move/react";
import { type HighlighterCore, getHighlighter } from "shiki";
import "shiki-magic-move/dist/style.css";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import PressableIcon from "../pressable-icon";
import { Check, Copy } from "lucide-react";

const TIMEOUT: number = 2000;

const CodeWidget = () => {

    const exampleCode = `const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};`;


    const [code] = useState(exampleCode);
    const [highlighter, setHighlighter] = useState<HighlighterCore>();
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: TIMEOUT });

    const COPIED_VARIANT = {
        initial: {
            scale: 1
        },
        animate: {
            scale: isCopied ? 1.06 : 1,
        },
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.96 },
    }
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


    //TODO: Implement a drawer for more code options

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`aspect-square bg-small-grid-card rounded-3xl overflow-hidden relative`}
        >

            {highlighter && (
                <>
                    <ShikiMagicMove
                        lang="ts"
                        theme="one-light"
                        highlighter={highlighter}
                        code={code}
                        className="w-full h-full p-4 mt-4 overflow-y-auto"
                        options={{
                            duration: 200,
                            stagger: 0.3,
                            lineNumbers: true
                        }}
                    />
                </>
            )}

            <PressableIcon
                onClick={() => {
                    copyToClipboard(code);
                }

                }

                variant={COPIED_VARIANT}
                className="absolute bottom-4 right-4 bg-gray-100 text-black p-2 z-50 rounded-lg"
            >
                {
                    isCopied ? <Check size={20} /> : <Copy size={20} />
                }
            </PressableIcon>
        </motion.div>
    );
}


export default CodeWidget;