import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'


const SocialType = [
    {type: "facebook", href: "", code: "FaFacebookF"},
    {type: "instagram", href: "", code: "FaInstagram"},
    {type: "linkedln", href: "", code: "FaLinkedin"},
]

function SocialIcon({type}) {
    return (
        <div className="w-16 h-16 bg-black opacity-80 rounded-lg drop-shadow-lg  text-white text-4xl flex flex-row justify-center items-center hover:bg-black hover:opacity-100">
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
