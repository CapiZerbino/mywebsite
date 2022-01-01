import React from 'react';
import PortfolioTagModal from './PortfolioTagModal';


const info = {
    title: "Doutu.be",
    img: "/src/assets/images/avatarNT.JPG",
    year: "2020",
    keyword: ["design", "code", "marketing"],
    shortDes: "Doutu.be is a short video social network. I worked with this site from idea to production. I do UX/UI design, develop Backend and Frontend. I'm working on the mobile apps.",
    href: "",
    technology: [
        {name: "Front-end", type: ["NodeJs", "Express"]},
        {name: "Back-end", type: ["NodeJs", "Express"]},
        {name: "Deploy", type: ["NodeJs", "Express"]}
    ]
}

//Args: str: string input, length: length of string output, appendix: concatenate string after cutting
function smartTrim(str, length, appendix) {
    if (str.length <= length) return str;
  
    var trimmedStr = str.substr(0, length);
  
    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
  }
  

function PortfolioTag() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        console.log("Open modal")
        setIsOpen(true);
      }
      function closeModal() {
        console.log("Close modal")
        setIsOpen(false);
        
      }

    return (
        <>
        
        <div className="w-full bg-black rounded-lg drop-shadow-3xl p-8 text-gray-400 hover:opacity-100 opacity-70 hover:-translate-y-1 hover:transition-all hover:ease-out hover:text-white cursor-pointer" >
            <div className="w-full h-56 rounded-lg bg-cover bg-[url('/src/assets/images/avatarNT.JPG')] hover:scale-105 transition-all" onClick={openModal}></div>
            <div onClick={openModal}>
                <div className=" text-[12px] font-bold uppercase my-4">
                    <span className="text-white">{info.year}</span> / {info.keyword.map((item) => {return(<span className="px-1 text-red-500">{item}</span>)})}
                </div>
                <h1 className="text-white font-bold text-2xl">{info.title}</h1>
                <p>{smartTrim(info.shortDes, 120, "...")}</p>
            </div>
            <PortfolioTagModal closeModal={closeModal} modalIsOpen={modalIsOpen} info={info}></PortfolioTagModal>
        </div>
        
        </>
    )
}

export default PortfolioTag
