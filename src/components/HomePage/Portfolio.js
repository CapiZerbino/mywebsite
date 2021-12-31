import React from 'react'
import PortfolioTag from './PortfolioTag'

const info = {
    title: "Doutu.be",
    year: "2020",
    keyword: ["design", "code", "marketing"],
    shortDes: "Doutu.be is a short video social network. I worked with this site from idea to production. I do UX/UI design, develop Backend and Frontend. I'm working on the mobile apps.",
    href: "",
    technology: [
        {name: "Front-end", type: ["NodeJs", "Express"]},
        {name: "Front-end", type: ["NodeJs", "Express"]},
        {name: "Front-end", type: ["NodeJs", "Express"]}
    ]
}

function Portfolio() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center pb-10 border-b-2 border-black">
            <div className="flex flex-col gap-4 justify-center items-center">
                <span className="text-red-600 text-base font-normal">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
                <h1 className="text-gray-400 text-6xl font-bold tracking-widest">My Portfolio</h1>
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
