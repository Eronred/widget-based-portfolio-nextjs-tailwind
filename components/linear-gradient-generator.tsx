"use client"
import React, { useState } from 'react';
import { Twitter, RefreshCcw, Copy, BookText } from "lucide-react";

const LinearGradientGenerator: React.FC = () => {
    const [gradient, setGradient] = useState('linear-gradient(268deg, #884297, #fca50c)');

    const generateGradient = () => {
        const color1 = Math.floor(Math.random() * 16777215).toString(16);
        const color2 = Math.floor(Math.random() * 16777215).toString(16);
        const angle = Math.floor(Math.random() * 360);
        const gradient = `linear-gradient(${angle}deg, #${color1}, #${color2})`;
        setGradient(gradient);
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center rounded-3xl">

            {gradient && (
                <div className='flex flex-row sm:flex-col items-center justify-center ' >
                    <div className='p-4 bg-white inline-block shadow-lg rounded-lg'>
                        <div className="h-16 w-16 sm:h-32 sm:w-32 rounded-lg" style={{ background: gradient }}></div>
                    </div>
                    <div className='sm:mt-4 ml-4 sm:ml-0 bg-white p-3 rounded-lg shadow-lg relative ' >
                        <code>{gradient}</code>
                    </div>
                </div>
            )}
            <div
                className='absolute top-4 z-50  right-4 '
            >
               
            </div>
        </div>
    );
};

export default LinearGradientGenerator;