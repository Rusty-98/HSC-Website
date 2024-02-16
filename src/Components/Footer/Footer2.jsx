import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer2 = () => {
    return (
        <div className='w-full h-[10vh] flex items-center px-5 bg-[#246A73] border-t-4 border-[#ddbea8]'>
            <h1 className='text-2xl md:text-3xl font-bold text-[#ddbea8]'>Connect With Us- </h1>
            <div className='ml-auto flex gap-5'>
                <IoCall className='text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer' />
                <FaInstagram className='text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer' />
                <FaLinkedin className='text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer' />
                <IoMail className='text-2xl md:text-3xl text-[#ddbea8] hover:scale-110 transition-all cursor-pointer' />
            </div>
        </div>
    )
}

export default Footer2