import React from 'react'
import PortfolioTag from './PortfolioTag'


function Portfolio() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center pb-10 border-b-2 border-black">
            <div className="flex flex-col gap-4 justify-center items-center">
                <span className="text-red-600 md:text-base text-sm font-normal">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                <h1 className="text-gray-400 md:text-6xl text-4xl font-bold tracking-widest">My Portfolio</h1>
            </div>
            <div className="w-full grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
                <PortfolioTag />
                <PortfolioTag />
                <PortfolioTag />
                <PortfolioTag />
                <PortfolioTag />
                <PortfolioTag />
            </div>
        </div>
    )
}

export default Portfolio
