import React, { useState } from 'react'
import './first.css'

const Name = () => {
    const [exploreClicked, setExploreClicked] = useState(false);

    const handleExploreClick = () => {
        // Set the state to indicate that Explore button is clicked
        setExploreClicked(true);
        // Smooth scroll to a specific section or distance from the top
        window.scrollTo({
            top: window.innerHeight/2, // Adjust this value as per your requirement
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };
    return (
        <>
            <div className='name absolute text-9xl text-center flex items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] select-none bg-[#2322226b] p-2 rounded-lg'>
                Tarang
            </div>

            <div onClick={handleExploreClick} className='w-fit border-2 border-white text-white absolute top-[90%] rounded-xl px-5 py-3 text-xl font-serif cursor-pointer left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                Explore
            </div>
        </>
    )
}

export default Name