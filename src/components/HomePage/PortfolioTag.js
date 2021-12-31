import React from 'react'


const info = {
    title: "Doutu.be",
    img: "/src/assets/images/avatarNT.JPG",
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

function PortfolioTag() {
    return (
        <div className="w-full h-96 bg-black rounded-lg drop-shadow-3xl p-8 text-gray-400 hover:opacity-100 opacity-70 hover:-translate-y-1 hover:transition-all hover:ease-out hover:text-white cursor-pointer">
            <div className="w-full h-56 rounded-lg bg-cover bg-[url('/src/assets/images/avatarNT.JPG')] hover:scale-105 transition-all"></div>
            <div>
                <div className="text-red-500 text-[12px] font-bold uppercase my-4">{info.keyword.map((item) => {return(<span className="px-1">{item}</span>)})}</div>
                <h1 className="text-white font-bold text-2xl">{info.title}</h1>
            </div>
        </div>
    )
}

export default PortfolioTag
