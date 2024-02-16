import React from 'react'

const Footer = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center md:items-start md:flex-row w-[80%] ml-auto mr-auto'>
        <div className='w-[70%] md:w-[48%] h-52 md:h-[70%] md:mt-auto md:mb-auto mt-4 rounded-[40px] md:rounded-[70px] overflow-hidden bg-red-600'>
            <img src="https://plus.unsplash.com/premium_photo-1684923604860-64e661f2ff72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='md:ml-20 text-center md:text-left w-full md:w-[40%]'>
            <div className='mt-10 md:mt-20'>
                <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>SAVE</h1>
                <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>YOUR</h1>
                <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>SPOT</h1>
            </div>
            <p className='text-xl text-center md:text-left text-[#ddbea8] w-full md:w-[65%] mt-5 md:mt-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quo eum non laboriosam earum iste aliquid. Veniam porro architecto officiis?
            </p>
            <button className='border-4 border-[#F3DFC1] text-[#ddbea8] rounded-[50px] mt-10 px-6 py-4 text-xl font-bold font-serif'>
                BOOK NOW
            </button>
        </div>
    </div>
  )
}

export default Footer