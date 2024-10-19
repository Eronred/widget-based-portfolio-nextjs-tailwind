import React from 'react'

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-24 md:gap-32">
            <h1 className="text-2xl font-bold">Lab</h1>
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="relative flex w-full flex-col items-start gap-12 font-sans md:flex-row md:gap-x-40">
                        <div className="flex flex-col gap-4 md:gap-9 w-full md:w-[256px]">
                            <h2 className="text-lg font-semibold">Project {index + 1}</h2>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="flex h-[400px] w-full items-center justify-center rounded-lg border border-light-border dark:border-dark-border md:h-[640px] md:flex-1">
                            <h2 className="text-lg font-semibold">Project {index + 1}</h2>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
