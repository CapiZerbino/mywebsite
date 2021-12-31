import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'


const SocialType = [
    {type: "facebook", href: "", code: "FaFacebookF"},
    {type: "instagram", href: "", code: "FaInstagram"},
    {type: "linkedln", href: "", code: "FaLinkedin"},
]

function SocialIcon({type}) {
    return (
        <div className="md:w-16 md:h-16 w-10 h-10 bg-black opacity-80 rounded-lg drop-shadow-lg  text-white md:text-4xl text-2xl flex flex-row justify-center items-center hover:bg-black hover:opacity-100">
            {type === "facebook" && (
                <a href="">
                <FaFacebookF></FaFacebookF>
                </a>
                
            )}
            {type === "instagram" && (
                <a href="">
                <FaInstagram></FaInstagram>
                </a>
                
            )}
            {type === "linkedln" && (
                <a href="">
                <FaLinkedin></FaLinkedin>
                </a>
                
            )}
            
        </div>
    )
}

export default SocialIcon
