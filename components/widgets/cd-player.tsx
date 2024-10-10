import { moveInAnimationVariant } from "@/lib/utils/animation";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";

const FLIP_THRESHOLD = -90;
const ROTATION_SPEED = 160;

export default function MusicPlayer() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const rotationRef = useRef(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const controls = useAnimation();

  const audioRef = useRef(null);
  const startTimeRef = useRef(0);
  const pausedAtRef = useRef(0);

  const xDrag = useMotionValue(0);
  const xDragSpring = useSpring(xDrag, { stiffness: 500, damping: 60 });
  const rotate = useTransform(xDragSpring, [-100, 0], [-180, 0]);

  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = performance.now();
      animationRef.current = requestAnimationFrame(updateRotation);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const updateRotation = useCallback(() => {
    if (isPlaying) {
      const now = performance.now();
      const deltaTime = (now - lastTimeRef.current) / 1000; 
      rotationRef.current =
        (rotationRef.current + ROTATION_SPEED * deltaTime) % 360;
      lastTimeRef.current = now;
      controls.set({ rotate: rotationRef.current });
      animationRef.current = requestAnimationFrame(updateRotation);
    }
  }, [isPlaying, controls]);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause();
      pausedAtRef.current = audioRef.current.currentTime;
    } else {
      audioRef.current.currentTime = pausedAtRef.current;
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const dragHandlers = {
    drag: "x",
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0,
    onDrag: (_, info) => xDrag.set(info.offset.x),
    dragTransition: {
      modifyTarget: (target) => {
        if (target > FLIP_THRESHOLD) {
          setIsFlipped(true);
          return FLIP_THRESHOLD;
        } else {
          setIsFlipped(false);
          return target;
        }
      },
      timeConstant: 45,
    },
  };

  return (
    <motion.div
      variants={moveInAnimationVariant}
      className={`aspect-square bg-gradient-to-tr from-gray-100 to-green-300 rounded-[32px] p-2 `}
    >
      <div className="size-full relative perspective-1000">
        <audio
          ref={audioRef}
          src="./songs/the-shire.mp3"
          preload="auto"
        ></audio>
        <div className="w-full h-full grid aspect-video rounded-[24px] bg-white/10 relative">
          <CaseContainer rotate={rotate} dragHandlers={dragHandlers}>
            <CaseSpine />
            <BackContent />
          </CaseContainer>
        </div>
        <CDContainer>
          <CD
            isPlaying={isPlaying}
            controls={controls}
            onClick={handlePlayPause}
          />
        </CDContainer>
      </div>
    </motion.div>
  );
}

const CaseContainer = ({ rotate, dragHandlers, children }) => (
  <motion.div
    style={{
      rotateY: rotate,
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
    }}
    {...dragHandlers}
    whileTap={{ cursor: "grabbing" }}
    className="w-full h-full z-50 bg-white/40 rounded-[24px] border-[6px] cursor-grab border-white/60 backdrop-blur-lg overflow-hidden flex shadow-lg"
  >
    {children}
  </motion.div>
);

const CaseSpine = () => (
  <>
    <div className="size-full flex flex-col gap-2 items-start justify-around ml-2">
      <div className="w-1 h-16 bg-white/40 shadow-xl shadow-white"></div>
      <div className="w-1 h-16 bg-white/40"></div>
    </div>
    <div className="w-1 h-full absolute left-0 flex flex-col bg-white/40"></div>
  </>
);

const BackContent = () => (
  <motion.div
    style={{
      rotateY: 180,
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
    }}
    className="bg-[#F0EAE0] flex items-center justify-center"
  />
);

const CDContainer = ({ children }) => (
  <div className="absolute inset-0 w-full h-full flex items-center  justify-center">
    <div className="absolute inset-0 w-full h-full rounded-[24px] border-2 border-white/60 backdrop-blur-sm"></div>
    <div className="absolute top-1 -mt-[8px] z-0 flex items-center justify-around w-full h-6 space-x-8">
      <div className="flex items-center justify-center gap-2 mr-8">
        {/* <div className="w-1 h-3 rounded-b-full border-b-2 border-white/30 bg-white/20 backdrop-blur-sm"></div> */}
        <div className="w-6 h-3 rounded-b-full border-b-2 border-white/30 bg-white/20 backdrop-blur-sm"></div>
      </div>
      <div className="flex items-center justify-center gap-2 mr-8">
        <div className="w-6 h-3 rounded-b-full border-b-2 border-white/30 bg-white/20 backdrop-blur-sm"></div>
        {/* <div className="w-1 h-3 rounded-b-full border-b-2 border-white/30 bg-white/20 backdrop-blur-sm"></div> */}
      </div>
    </div>
    <div className="absolute inset-0 w-full h-full rounded-full border-4 border-white/60 backdrop-blur-sm overflow-hidden flex items-center justify-center p-2">
      {children}
    </div>
    <div className="absolute bottom-0 -mb-1 z-0 flex items-center justify-around w-full h-6 space-x-8">
      <div className="w-6 h-3 rounded-t-full border-t-2 border-white/30 bg-white/20 backdrop-blur-sm"></div>
      <div className="w-6 h-3 rounded-t-full border-t-2 border-white/30 bg-white/20 backdrop-blur-sm"></div>
    </div>
  </div>
);

const CD = ({ isPlaying, controls, onClick, image }) => (
  <motion.div
    onClick={onClick}
    animate={controls}
    className="relative w-[100%] h-[100%] rounded-full flex items-center justify-center shadow-inner"
  >
    <div
      className="absolute rounded-full w-full h-full opacity-50"
      style={{
        background: `conic-gradient(#F0EAE0, #F0EAE0, #F0EAE0, #C0B6A1, #C0B6A1, #A599AE, #00BFFF,  #FF6C29, #FF0000, #C0B6A1, #C0B6A1, #F0EAE0, #F0EAE0, #F0EAE0, #C0B6A1, #C0B6A1, #A599AE, #00BFFF,#F0EAE0, #C0B6A1, #C0B6A1, #98FB98, #F0EAE0, #F0EAE0, #F0EAE0, #FFFF00, #FFA500, #C0B6A1, #C0B6A1, #F0EAE0)`,
      }}
    />
    <div
      className="absolute rounded-full w-full h-full bg-cover bg-center opacity-50"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
    <div
      className="absolute w-1/3 h-1/3 bg-gray-800 border-dashed border-10 border-gray-200 rounded-full "
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
    <div
      className="absolute w-[18%] h-[18%] bg-[#72617E] rounded-full border-dashed border-2 border-[#A599AE]"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  </motion.div>
);
