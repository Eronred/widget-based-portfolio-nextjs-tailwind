import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AppItemProps {
    url?: string;
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

const APP_ANIMATION_PROPS = {
    transaction: {
        type: "spring",
        stiffness: 460,
        damping: 20,
    },
};


function IOSAppItem({ url, logo: Logo }: AppItemProps) {
    return (
        <motion.div
            {...APP_ANIMATION_PROPS}
        >
            {
                url ? (
                    <Link
                        href={url}
                        target="_blank"
                    >
                        <div
                            className=" flex items-center justify-center">
                            <Logo />
                        </div>
                    </Link>
                ) : (
                    <div
                        className=" flex items-center justify-center">
                        <Logo />
                    </div>
                )

            }
        </motion.div >

    );
}

export default IOSAppItem;
