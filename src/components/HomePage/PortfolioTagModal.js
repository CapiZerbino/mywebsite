import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

//Args: str: string input, length: length of string output, appendix: concatenate string after cutting
function smartTrim(str, length, appendix) {
    if (str.length <= length) return str;
  
    var trimmedStr = str.substr(0, length);
  
    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
  }

function PortfolioTagModal({ closeModal, modalIsOpen, info }) {
  return (
    <div>
      <Modal
        overlayClassName="Overlay"
        className="Modal md:w-[1000px] w-full md:h-[500px] h-full flex flex-col justify-start items-end"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          onClick={closeModal}
          className="text-3xl text-gray-300 cursor-pointer"
        >
          <AiOutlineCloseCircle></AiOutlineCloseCircle>
        </div>

        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full rounded-lg bg-cover bg-[url('/src/assets/images/avatarNT.JPG')] md:hover:scale-105 transition-all md:mt-0 mt-5"></div>
          <div className="flex flex-col justify-start items-start text-white gap-4">
                <div className=" text-[12px] font-bold uppercase my-4">
                    <span className="text-white">{info.year}</span> / {info.keyword.map((item) => {return(<span className="px-1 text-red-500">{item}</span>)})}
                </div>
                <h1 className="text-white font-bold text-2xl">{info.title}</h1>
                <p>{smartTrim(info.shortDes, 120, "...")}</p>
                <h1 className="text-white font-bold text-2xl">Technology</h1>
                <div className="flex flex-col gap-1 justify-start items-start"> 
                {info.technology.map((item, key) => {
                    return(
                        <p><strong>{item.name}</strong>: <span>{item.type.map((i) => i + "  ")}</span> </p>
                    )
                })}
                </div> 
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PortfolioTagModal;
