"use client";
import React, { ComponentProps, forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ButtonBaseProps = VariantProps<typeof buttonClasses>;

type ButtonProps = ButtonBaseProps &
    ComponentProps<"button"> & {
        className?: string;
        children?: React.ReactNode;
        icon?: React.ReactNode;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        disabled?: boolean;
        loading?: boolean;
        iconPosition?: "left" | "right";
        url?: string;
    };

const buttonClasses = cva(
    "inline-flex items-center gap-2 px-4 justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-opacity-75",
    {
        variants: {
            variant: {
                primary: "text-white bg-black hover:bg-gray-800 focus-visible:ring-brand-500",
                secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500",
                destructive: "text-white bg-red-600 hover:bg-red-700 focus-visible:ring-red-500",
                outline: "text-blue-600 border border-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500",
                ghost: "hover:bg-gray-200",
                link: "underline-offset-4 hover:underline focus-visible:ring-blue-500",
                icon: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500",
            },
            size: {
                sm: "h-9 px-4 text-xs",
                md: "h-10 px-4 text-sm",
                lg: "h-14 px-6 text-lg",
            },
            state: {
                disabled: "opacity-50 hover:cursor-not-allowed pointer-events-none",
                loading: "opacity-50 pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant,
            children,
            size,
            onClick,
            disabled,
            icon,
            iconPosition = "left",
            loading,
            url,
            ...props
        },
        ref
    ) => {
        const [isHovered, setIsHovered] = useState<boolean>(false);
        const classes = buttonClasses({
            variant,
            size,
            state: disabled ? "disabled" : loading ? "loading" : undefined,
            className: props.className,
        });

        const Icon = icon || "";

        const ghostAnimation = {
            whileHover: {
                scale: 1.01,
            },
            whileTap: { scale: 0.99 },
        };

        const defaultAnimation = {
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.96 },
        };

        const isUrl = url ? url : "#";

        return (
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative inline-block"
            >
                <motion.button
                    ref={ref}
                    className={classes}
                    onClick={onClick}
                    disabled={disabled || loading}
                    {...(variant === "ghost" ? ghostAnimation : defaultAnimation)}
                    {...props}
                >
                    {loading ? (
                        <div
                            className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        <>
                            {iconPosition === "left" && Icon}
                            {variant === "link" ? (
                                <Link target="_blank" href={isUrl}>
                                    {children}
                                </Link>
                            ) : (
                                children
                            )}
                            {iconPosition === "right" && Icon}
                        </>
                    )}
                </motion.button>
                {variant === "link" && (
                    <AnimatePresence
                    >
                        {isHovered && url && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transformOrigin: "top center",
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                        mass: 0.5,
                                    },
                                }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute right-[-200px] z-50  mt-2 bg-gray-200 rounded-md shadow-xl w-[400px] h-[400px] overflow-auto"
                            >
                                <iframe
                                    src={url}
                                    title="Link Content"
                                    className="border-0 w-full h-full"
                                ></iframe>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        );
    }
);

Button.displayName = "Button";

export default Button;
