"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  LargeGridCard,
  GithubHeatmap,
  CraftVideoCard,
  SwipeCarouselWidget,
  TabCard,
  QuoteWidget,
  Web3WalletWidget,
  MacDock,
  CalendarWidget,
  CodeWidget,
  ProfileIntroduction,
  NotesWidget,
  SocialMediaWidget,
} from "../components";
import { notes } from "@/lib";
import CDPlayer from "@/components/widgets/cd-player";
import CoolTimer from "@/components/widgets/cool-timer";
import FTWidget from "@/components/widgets/ft-widget";
import ProductLaunchWidget from "@/components/widgets/product-launch-widget";
import AirbnbImageAnimation from "@/components/airbnb-animation";
import AvatarWidget from "@/components/widgets/avatar-widget";
import NetflixWidget from "@/components/widgets/netflix-widget";
import MilestoneWidget from "@/components/widgets/milestone-widget";
import NPThinkingFolderWidget from "@/components/widgets/np-thinking-folder";
const Page: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.09,
      }}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 sm:p-8"
    >
      <ProfileIntroduction />
      <SocialMediaWidget />
      <CalendarWidget />
      <Web3WalletWidget />
      <CDPlayer />
      <CoolTimer />
      <AvatarWidget />
      <NetflixWidget />
      <NPThinkingFolderWidget />
      <FTWidget />
      <AirbnbImageAnimation />
      <MilestoneWidget />
      <ProductLaunchWidget />
      <NotesWidget title="Incoming Widgets" content={notes} />
      <SwipeCarouselWidget />
      <CodeWidget />
      <GithubHeatmap />
      <QuoteWidget />
      <LargeGridCard
        title="Framer Motion"
        url="https://x.com/imeronn/status/1796874529190379949"
      >
        <TabCard />
      </LargeGridCard>
      <LargeGridCard title="Handy Arrows" url="https://handyarrows.com">
        <div className="w-full h-full mt-6 hover:translate-y-[-3px] hover:scale-95 transition-all active:scale-90 bg-orange-300 rounded-xl shadow-lg">
          <img
            src="/handy-arrows-cover.png"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

      </LargeGridCard>
      <LargeGridCard
        title="Shadow generator for RN & Flutter"
        url="https://shadow-generator-mobile.vercel.app"
      >
        <div className="w-full h-full mt-6 hover:translate-y-[-3px] hover:scale-95 transition-all active:scale-90 bg-orange-300 rounded-xl shadow-lg">
          <img
            src="./shadow-generator.png"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
      </LargeGridCard>
      <MacDock />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FV74HqblFL4x6dRXo-nbew.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FwzrcFH8JSkoSZaKM-Untitled.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FvBsVm6jejw7G44s6-Screen%2520Recording%25202023-12-08%2520at%252003.17.58.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FZ7vsDEtZQnkVDudL-ai.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2Fr1ugYyx6sO7LkZ0B-Screen%2520Recording%25202024-03-12%2520at%25201.41.25%25E2%2580%25AFPM.mov" />
    </motion.div>
  );
};

export default Page;
