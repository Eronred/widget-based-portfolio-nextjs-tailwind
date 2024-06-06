import React from 'react'
import { Github } from "lucide-react";
import Link from 'next/link';

interface GithubRepoCardProps {
    title: string
    url: string
}

const GithubRepoWidget: React.FC<GithubRepoCardProps> = (
    { title, url }
) => {
    return (
        <Link
            href={url}
            target='_blank'
            className='flex hover:bg-gray-100 flex-row transition-transform duration-200 ease-in-out items-center gap-3 bg-white w-full p-4 shadow-sm rounded-lg transform hover:-translate-y-1'>
            <div className='flex items-center justify-center w-8 h-8 bg-black rounded-lg'>
                <Github color="white" size={24} />
            </div>
            <h4 className="text-md text-black line-clamp-1">
                {title}
            </h4>
        </Link>
    )
}


export default GithubRepoWidget