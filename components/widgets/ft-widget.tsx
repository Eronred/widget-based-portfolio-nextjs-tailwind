"use client";
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { moveInAnimationVariant } from "@/lib/utils/animation";

type FTItem = {
    id: number;
    value: number;
};

const fts: FTItem[] = [
    { id: 1, value: 954 },
    { id: 2, value: 454 },
    { id: 3, value: 254 },
    { id: 4, value: 154 },
];

const FTWidget: React.FC = () => {
    const [selected, setSelected] = useState<number>(fts[0].id);
    const [isArrowUp, setIsArrowUp] = useState<boolean>(false);
    const [isUserInteracted, setIsUserInteracted] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isUserInteracted) {
                setSelected((prevSelected) => {
                    const nextIndex = fts.findIndex((ft) => ft.id === prevSelected) + 1;
                    return nextIndex >= fts.length ? fts[0].id : fts[nextIndex].id;
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isUserInteracted]);

    const handleArrowUp = (selectedId: number) => {
        setIsUserInteracted(true); 
        setIsArrowUp(selected > selectedId);
        setSelected(selectedId);
    };

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={` bg-black aspect-square rounded-3xl overflow-hidden flex flex-col items-center justify-center `}>
            <div className="w-32 h-32 bg-gradient-to-b from-[#f23d0111] to-red-600/15 rounded-full flex flex-col items-center justify-center gap-2 border-2 border-[#f23d010a]">
                {/* Arrow and Title */}
                <div className="flex items-center justify-center -mb-1">
                    <motion.div
                        animate={{ rotate: isArrowUp ? 0 : 180 }}
                        className="text-[#9A9A9A] text-2xl font-semibold"
                    >
                        <ArrowUp size={24} className="text-[#F23E01]" />
                    </motion.div>
                    <span className="text-[#9A9A9A] text-2xl font-semibold">FT</span>
                </div>

                {/* FT Items */}
                <div className="flex flex-col items-center gap-1">
                    {fts.map((item) => (
                        <FTItemComponent
                            key={item.id}
                            item={item}
                            selected={selected === item.id}
                            totalItems={fts.length}
                            index={fts.findIndex((ft) => ft.id === item.id)}
                            onClick={() => handleArrowUp(item.id)}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

type FTItemComponentProps = {
    item: FTItem;
    selected: boolean;
    totalItems: number;
    index: number;
    onClick: () => void;
};

const FTItemComponent: React.FC<FTItemComponentProps> = ({
    item,
    selected,
    totalItems,
    index,
    onClick,
}) => {
    const width = selected ? "60px" : `${(totalItems - index) * 20}px`;
    const height = selected ? "30px" : "7px";
    const scale = selected ? 1.1 : 0.9;
    const opacity = selected ? 1 : `${(totalItems - index) / 6}`;

    return (
        <motion.div
            onClick={onClick}
            className="rounded-lg bg-[#F23E01] text-white cursor-pointer flex items-center justify-center"
            animate={{ width, height, scale }}
            style={{ opacity }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.8 }}
        >
            {selected && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-2xl text-gray-200 font-semibold"
                >
                    {item.value}
                </motion.div>
            )}
        </motion.div>
    );
};

export default FTWidget;