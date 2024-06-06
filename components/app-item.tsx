import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AppItemProps {
    url: string;
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
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


function AppItem({ url, logo: Logo }: AppItemProps) {
    return (
        <motion.div
            {...APP_ANIMATION_PROPS}
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

export default AppItem;
