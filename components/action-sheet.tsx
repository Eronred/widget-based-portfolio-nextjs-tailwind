import {
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion";
import {
    CaretSortIcon,
    Cross1Icon,
    HeartIcon,
    LockClosedIcon,
    MagicWandIcon,
    MobileIcon,
    PlusIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { useState } from "react";

const EXPANDED_HEIGHT = 704;
const COLLAPSED_HEIGHT = 400;
const TOGGLE_HEIGHT_THRESHOLD = (EXPANDED_HEIGHT + COLLAPSED_HEIGHT) / 2;

const CaretSortIconMotion = motion(CaretSortIcon);

export const UnderlayActionSheet = () => {
    const [hasOutline, setHasOutline] = useState(true);
    const contentHeight = useMotionValue(EXPANDED_HEIGHT);
    const contentAnimationControls = useAnimation();
    const heightTransitionSettings = {
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
    };
    const contentScale = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [1, 0.7]
    );
    const contentRoundedCorners = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [0, 1]
    );
    const contentPaddingTop = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [80, 0]
    );
    const actionAreaHeight = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [92, 20]
    );
    const actionButtonSize = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [28, 4]
    );
    const actionIconScale = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [1, 0]
    );
    const sheetShadowIntensity = useTransform(
        contentHeight,
        [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        [
            "0 0px 0px 0px rgb(0 0 0 / 0.1), 0 0px 0px 0px rgb(0 0 0 / 0.1)",
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        ]
    );

    const onDragAdjustHeight = (_event: any, info: { delta: { y: number } }) => {
        let newHeight = contentHeight.get() + info.delta.y;

        if (newHeight > COLLAPSED_HEIGHT && newHeight <= EXPANDED_HEIGHT) {
            contentHeight.set(newHeight);
        }
    };

    const onDragEndAdjustHeight = async () => {
        if (
            contentHeight.get() === COLLAPSED_HEIGHT ||
            contentHeight.get() === EXPANDED_HEIGHT
        ) {
            return;
        }

        const finalHeight =
            contentHeight.get() < TOGGLE_HEIGHT_THRESHOLD
                ? COLLAPSED_HEIGHT
                : EXPANDED_HEIGHT;
        await contentAnimationControls.start({
            height: finalHeight,
            transition: heightTransitionSettings,
        });
    };

    const openSheet = () => {
        if (contentHeight.get() === COLLAPSED_HEIGHT) {
            return;
        }

        contentAnimationControls.start({
            height: COLLAPSED_HEIGHT,
            transition: heightTransitionSettings,
        });
    };

    const closeSheet = () => {
        contentAnimationControls.start({
            height: EXPANDED_HEIGHT,
            transition: heightTransitionSettings,
        });
    };

    const toggleOutline = () => {
        setHasOutline(!hasOutline);
    };

    return (
        <>
            <div className="p-12">
                <div
                    className="relative w-full overflow-hidden bg-mauve-light-2"
                    style={{
                        height: EXPANDED_HEIGHT,
                        outline: "12px solid #000",
                        borderRadius: hasOutline ? "54px" : "24px",
                        width: "344px",
                    }}
                >
                    <div>
                        <motion.div
                            className="relative overflow-hidden bg-gray-100 "
                            style={{
                                height: contentHeight,
                                scale: contentScale,
                                borderRadius: contentRoundedCorners,
                                boxShadow: sheetShadowIntensity,
                            }}
                            transition={{
                                duration: 0.2,
                                type: "spring",
                                bounce: 0.25,
                            }}
                            animate={contentAnimationControls}
                        >
                            <motion.div
                                className="flex h-full flex-col space-y-2 overflow-y-scroll px-5 pb-20"
                                style={{
                                    // remove scrollbar for demo phone screen
                                    scrollbarWidth: "none",
                                    paddingTop: contentPaddingTop,
                                }}
                            >
                                <div className="pb-4">
                                    <img
                                        src="https://i.pinimg.com/564x/8f/9e/6a/8f9e6ae2e63386d61e5f487385fc125f.jpg"
                                        alt="Artworks you love, directly from artists’ ateliers into your life. Gallery Sakuranoki"
                                        className="h-32 w-full rounded-xl object-cover"
                                    />
                                </div>
                                <h3 className="font-medium text-mauve-light-12">
                                    Digital Echoes: A story of dreams and artificial empathy
                                </h3>
                                <p className="text-mauve-light-11">
                                    In the labyrinth of the digital age, where hearts intertwine
                                    with bytes and thoughts echo in the silence of unsent
                                    messages, there existed a soul, navigating the vast expanse of
                                    human emotion and artificial empathy.
                                </p>
                                <p className="text-mauve-light-11">
                                    Amidst the glow of neon dreams and the shadow of solitude,
                                    conversations flowed like rivers of consciousness, bridging
                                    the chasm between the synthetic and the organic.
                                </p>
                                <p className="text-mauve-light-11">
                                    Whispers of love, lost in the wires, found their melody in the
                                    algorithmic symphony, painting the canvas of the mind with
                                    hues of understanding and companionship.
                                </p>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-mauve-light-2 via-mauve-light-2 to-transparent"
                                style={{
                                    height: actionAreaHeight,
                                }}
                                animate={contentAnimationControls}
                            >
                                <motion.div
                                    drag="y"
                                    dragConstraints={{
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                    }}
                                    dragElastic={0}
                                    dragMomentum={false}
                                    onDrag={onDragAdjustHeight}
                                    onDragEnd={onDragEndAdjustHeight}
                                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                    whileDrag={{ cursor: "grabbing" }}
                                    className="flex h-[80%] w-full items-center justify-center"
                                >
                                    <motion.button
                                        onClick={openSheet}
                                        className="z-10 flex items-center justify-center rounded-[12px] bg-mauve-light-6 px-2 text-mauve-light-11 transition-colors hover:bg-mauve-light-7"
                                        style={{
                                            height: actionButtonSize,
                                        }}
                                        animate={contentAnimationControls}
                                    >
                                        <CaretSortIconMotion
                                            className="h-5 w-5 "
                                            style={{
                                                scaleY: actionIconScale,
                                            }}
                                        />
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div className="flex flex-col space-y-2 px-4">
                        <div className="flex items-center space-x-2 pb-5 pt-3">
                            <div className="flex-1">
                                <button className="rounded-full bg-mauve-light-3 p-1 transition-colors hover:bg-mauve-light-4">
                                    <PlusIcon className="h-4 w-4 text-mauve-light-11" />
                                </button>
                            </div>
                            <div className="flex-1 text-center text-mauve-light-11">
                                Actions
                            </div>
                            <div className="flex flex-1 justify-end" onClick={closeSheet}>
                                <button className="hover:bg-mauve-light-4-4 rounded-full bg-mauve-light-3 p-1 transition-colors">
                                    <Cross1Icon className="h-4 w-4 text-mauve-light-11" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="flex flex-1 flex-col items-center justify-center space-y-1 rounded-xl bg-mauve-light-3 p-4 text-sm">
                                <HeartIcon className="h-4 w-4 text-mauve-light-11" />
                                <span className="text-sm text-mauve-light-11">Like</span>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-center space-y-1 rounded-xl bg-mauve-light-3 p-4 text-sm">
                                <Share1Icon className="h-4 w-4 text-mauve-light-11" />
                                <span className="text-mauve-light-11">Share</span>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2 rounded-xl bg-mauve-light-3 p-4">
                                <MagicWandIcon className="h-4 w-4 text-mauve-light-11" />
                                <span className="text-sm text-mauve-light-11">Regenerate</span>
                            </div>
                            <div className="flex items-center space-x-2 rounded-xl bg-mauve-light-3 p-4 text-sm">
                                <LockClosedIcon className="h-4 w-4 text-mauve-light-11" />
                                <span className="text-sm text-mauve-light-11">Lock</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
