import classNames from 'classnames'
import { motion, Variants } from 'framer-motion'
import React from 'react'

interface PressableIconProps {
    children: React.ReactNode
    variant?: Variants
    onClick: () => void
    className?: string
}

const BUTTON_ANIMATION = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
};

const PressableIcon: React.FC<PressableIconProps> = (
    {
        children,
        onClick,
        className,
        variant = { ...BUTTON_ANIMATION },
        ...props
    }
) => {
    return (
        <motion.button
            {...variant}
            className={classNames('flex items-center justify-center', className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default PressableIcon;