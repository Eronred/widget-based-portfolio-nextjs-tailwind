import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { moveInAnimationVariant } from "@/lib/utils/animation";
import MacAppItem from "./mac-app-item";
import { macApps } from "@/lib";

const MacDock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      variants={moveInAnimationVariant}
      className={`aspect-[1] sm:aspect-[2] p-2 bg-macbook-pattern  sm:col-span-2 rounded-3xl w-full h-full flex items-center justify-end overflow-hidden relative`}
    >
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="w-full h-fit flex flex-row gap-4 sm:flex-row items-center p-3 bg-slate-200/30 border border-gray-100/20 shadow-md backdrop-blur-md rounded-2xl overflow-x-hidden"
      >
        {macApps.map((tech, index) => (
          <MacAppItem
            key={index}
            mouseX={mouseX}
            url={tech.url}
            logo={tech.LogoComponent}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MacDock;
