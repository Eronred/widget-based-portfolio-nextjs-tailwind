import useGithubHeatmap from "@/hooks/use-github-heatmap";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";





const HEATMAP_ANIMATION_VARIANTS = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

const STREAK_TEXT_ANIMATION_VARIANTS = {
    initial: { scale: 0 },
    animate: { scale: 1 },
};

const GithubHeatmap: React.FC = () => {
    const { data, loading } = useGithubHeatmap();

    if (loading) {
        return <div></div>;
    }

    const getColor = (count: number) => {
        if (count === 0) return 'bg-github-heatmap';
        if (count === 1) return 'bg-green-200';
        if (count === 2) return 'bg-green-300';
        if (count === 3) return 'bg-green-400';
        if (count === 4) return 'bg-green-500';
        if (count === 5) return 'bg-green-600';
        if (count === 6) return 'bg-green-700';
        if (count === 7) return 'bg-green-800';
        return 'bg-green-900';
    };

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={`bg-calendar-card  aspect-square rounded-3xl overflow-hidden p-6 flex flex-col justify-between gap-4`}
        >
            <div className='w-full h-8 flex flex-row items-center justify-between'>
                <Link
                    href="https://github.com/Eronred"
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-2" >
                    <img
                        src="https://avatars.githubusercontent.com/u/43992376?v=4"
                        className='w-10 h-10 rounded-full' />
                    <h2
                        className='text-2xl text-gray-100'
                    >
                        Erencan Arica
                    </h2>
                </Link>
                <img
                    src="./icons/github.svg"
                    className='w-10 h-10'
                />

            </div>

            {/* TODO: Implement STREAK logic */}

            {/* <motion.div
                {...STREAK_TEXT_ANIMATION_VARIANTS}
                style={{
                    transformOrigin: 'center left'
                }}
                className="text-2xl text-gray-100"
            >
                4-DAY STREAK
            </motion.div> */}
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.09
                }}
                className='grid grid-cols-7 gap-2'
            >

                {data.map((value, index) => (
                    <motion.div
                        variants={HEATMAP_ANIMATION_VARIANTS}
                        key={index}
                        className={`rounded-lg aspect-square cursor-pointer ${getColor(value.count)}`}
                        title={`${value.date}: ${value.count} events`}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default GithubHeatmap;
