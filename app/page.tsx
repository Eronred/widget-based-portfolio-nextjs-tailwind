"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  LargeGridCard,
  GithubHeatmap,
  CraftVideoCard,
  SwipeCarouselWidget,
  TabCard,
  MobileSimulatorCard,
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

const Page: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.09,
      }}
      className="grid gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 sm:p-8"
    >
      <ProfileIntroduction />
      <SocialMediaWidget />
      <CalendarWidget />
      <Web3WalletWidget />
      <NotesWidget title="Incoming Widgets" content={notes} />
      <CDPlayer />
      <SwipeCarouselWidget />
      <CodeWidget />
      <LargeGridCard
        title="Framer Motion"
        url="https://x.com/imeronn/status/1796874529190379949"
      >
        <TabCard />
      </LargeGridCard>
      <QuoteWidget
        quote="The only way to do great work is to love what you do. If you haven' t found it yet, keep looking. Don't settle."
        author="Steve Jobs"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiMjHAVVQo6BRB5QEqZLhAus79xn9XCLvzw&s"
      />
      <LargeGridCard title="Handy Arrows" url="https://handyarrows.com">
        <div className="w-full h-full mt-6 hover:translate-y-[-3px] hover:scale-95 transition-all active:scale-90 bg-orange-300 rounded-xl shadow-lg">
          <img
            src="https://private-user-images.githubusercontent.com/43992376/348393336-e55eaf98-0911-4111-96db-76718f6d9970.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE4NTg5NzgsIm5iZiI6MTcyMTg1ODY3OCwicGF0aCI6Ii80Mzk5MjM3Ni8zNDgzOTMzMzYtZTU1ZWFmOTgtMDkxMS00MTExLTk2ZGItNzY3MThmNmQ5OTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzI0VDIyMDQzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyZjEwMjdjZDhlYmYzNDA1ZGJkMGMyYzUxYzEzNjQ3NWI2YzljZTAzZTBkY2M2ZjI0ZDI2NzYzNzg0MTMzNDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fcMuQg7zzbircVSJfCnZAnT47GQB2zo7P1iqLuzb8Hw"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
      </LargeGridCard>
      <GithubHeatmap />
      <MobileSimulatorCard />
      <MacDock />

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
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2Fr1ugYyx6sO7LkZ0B-Screen%2520Recording%25202024-03-12%2520at%25201.41.25%25E2%2580%25AFPM.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FV74HqblFL4x6dRXo-nbew.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FwzrcFH8JSkoSZaKM-Untitled.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FvBsVm6jejw7G44s6-Screen%2520Recording%25202023-12-08%2520at%252003.17.58.mov" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2F3acNdbIyAiKQ9t1F-ssstwitter.com_1684246557937.mp4" />
      <CraftVideoCard videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FZ7vsDEtZQnkVDudL-ai.mov" />
    </motion.div>
  );
};

export default Page;
