import { AnimationControls, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function useAnimationCycle(controls: AnimationControls, interval: number = 2000) {
    const [isAnimating, setIsAnimating] = useState<boolean>(true);

    const startAnimation = async () => {
        setIsAnimating(true);
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, interval));
        await controls.start("exit");
        setIsAnimating(false);
    };

    useEffect(() => {
        if (!isAnimating) {
            startAnimation();
        }
    }, [isAnimating]);

    useEffect(() => {
        startAnimation();
    }, []);

    return { startAnimation };
}
