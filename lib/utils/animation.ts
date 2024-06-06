export const moveInAnimationVariant = {
    initial: {
        scale: 0.8,
        y: 50,
        opacity: 0,
    },
    animate: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 30,
        }
    },
}