"use client"
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { moveInAnimationVariant } from '@/lib/utils/animation';
import { mobileApps } from '@/lib';
import IOSAppItem from './ios-app-item';
import CameraApp from './applications/camera';

const cameraApp = [
    {
        name: "Camera",
        url: "https://www.apple.com/apps/",
        LogoComponent: CameraApp,
        description: "Camera is a photo and video capture application that is used to take pictures and record videos.",
    },
]

const MobileSimulatorCard: React.FC = () => {

    const [time, setTime] = useState(new Date());
    const [streaming, setStreaming] = useState(false);
    const videoRef = useRef(null);


    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setStreaming(true);
        } catch (err) {
            console.error("Failed to start camera: ", err);
        }
    };

    useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                let tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track: { stop: () => any; }) => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // TODO: Fix Camera opening functionality 


    return (
        <motion.div
            variants={moveInAnimationVariant}
            className='bg-gray-900 row-span-2 rounded-[40px]'>
            <div className='w-full h-full p-3'>
                <div className='w-full h-full flex items-center justify-center bg-iphone-pattern bg-cover rounded-[34px] relative' >

                    <div className='w-full absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-2'>
                        <div className='text-white text-sm text-semibold'>
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className=' w-24 h-8 rounded-full bg-gray-900 flex items-center justify-center'>
                        </div>
                        <img src='/icons/ios-toolbar.svg' alt='battery' />
                    </div>
                    <div className='w-full h-full mt-28 grid grid-cols-4 items-start place-content-start gap-4 p-4'>
                        {mobileApps.map((tech, index) => (
                            <IOSAppItem
                                key={index}
                                url={tech.url}
                                logo={tech.LogoComponent}
                            />
                        ))}
                    </div>
                    <div className='w-full absolute  bottom-1 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-2'>
                        <div className=' w-full h-[80px] rounded-[30px] bg-white/45 backdrop-blur-md flex items-center justify-center '>
                            <div
                                className='grid grid-cols-4 items-center justify-center place-content-center gap-4 p-4'
                            >
                                {mobileApps.slice(0, 3).map((tech, index) => (
                                    <IOSAppItem
                                        key={index}
                                        url={tech.url}
                                        logo={tech.LogoComponent}
                                    />
                                ))}
                                <div
                                    onClick={startCamera}
                                >
                                    <IOSAppItem
                                        logo={cameraApp[0].LogoComponent}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default MobileSimulatorCard;