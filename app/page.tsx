"use client"
import React from 'react';
import { motion } from 'framer-motion';

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
  SocialMediaWidget
} from '../components';
import { notes } from '@/lib';


const Page: React.FC = () => {

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.09
      }}
      className="grid gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 sm:p-8">
      <ProfileIntroduction />
      <SocialMediaWidget />
      <CalendarWidget />
      <Web3WalletWidget />
      <NotesWidget
        title="Incoming Widgets"
        content={notes}
      />
      <SwipeCarouselWidget />
      <CodeWidget />
      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2Fr1ugYyx6sO7LkZ0B-Screen%2520Recording%25202024-03-12%2520at%25201.41.25%25E2%2580%25AFPM.mov"
      />
      <QuoteWidget
        quote="The only way to do great work is to love what you do. If you haven' t found it yet, keep looking. Don't settle."
        author='Steve Jobs'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiMjHAVVQo6BRB5QEqZLhAus79xn9XCLvzw&s'
      />
      <GithubHeatmap />
      <MobileSimulatorCard />
      <MacDock />
      <LargeGridCard
        title="Framer Motion"
        url='https://x.com/imeronn/status/1796874529190379949'
      >
        <TabCard />
      </LargeGridCard>
      <LargeGridCard
        title="Shadow generator for RN & Flutter"
        url='https://shadow-generator-mobile.vercel.app'
      >
        <div className='w-full h-full mt-6 hover:translate-y-[-3px] hover:scale-95 transition-all active:scale-90 bg-orange-300 rounded-xl shadow-lg'>
          <img src="./shadow-generator.png" className="w-full h-full object-cover rounded-t-xl" />
        </div>
      </LargeGridCard>
      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FV74HqblFL4x6dRXo-nbew.mov"
      />
      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FwzrcFH8JSkoSZaKM-Untitled.mov"
      />
      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FvBsVm6jejw7G44s6-Screen%2520Recording%25202023-12-08%2520at%252003.17.58.mov"
      />

      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2F3acNdbIyAiKQ9t1F-ssstwitter.com_1684246557937.mp4"
      />
      <CraftVideoCard
        videoFile="https://storage.googleapis.com/creatorspace-public/users%2Fclefxtbvk01ljqq0y524p94vf%2FZ7vsDEtZQnkVDudL-ai.mov"
      />
    </motion.div>
  );
};

export default Page;

