import {
    type MotionValue,
    useMotionValue,
    motion,
    useTransform,
    useSpring,
} from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

interface AppItemProps {
    url: string;
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    mouseX: MotionValue;
}

const APP_ANIMATION_PROPS = {
    transaction: {
        type: "spring",
        stiffness: 460,
        damping: 20,
    },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.96 },
};


function MacAppItem({ url,
    logo: Logo,
    mouseX,
}: AppItemProps) {

    const ref = useRef<HTMLDivElement>(null);
    const distance = useTransform(mouseX, (val) => {
        const obj = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };

        return val - obj.x - obj.width / 2;
    });
    const widthSync = useTransform(distance, [-200, 0, 200], [48, 80, 48]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 300,
        damping: 15,
    });

    return (
        <motion.div
            {...APP_ANIMATION_PROPS}
            ref={ref}
            style={{ width }}
        >
            <Link
                href={url}
                target="_blank"
            >
                <div
                    className=" flex items-center justify-center">
                    <Logo />
                </div>
            </Link>
        </motion.div >

    );
}

export default MacAppItem;
