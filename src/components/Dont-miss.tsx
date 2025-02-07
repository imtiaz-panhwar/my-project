import Image from 'next/image'
import React from 'react'

function Dont_Miss() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto mt-8 px-4 justify-center">
        <h1 className="text-[22px] mt-[13px] font-semibold font-sans leading-7 text-center sm:text-left">
          Don&apos;t Miss
        </h1>
        
        <Image
          src="/Imagedontmiss.png"
          width={1344}
          height={700}
          alt="Logo"
          className="w-full h-auto object-cover mt-4"
        />
        
        <h1 className="mx-auto mt-[28px] text-[52px] font-semibold text-center sm:text-left sm:text-[72px]">
          FLIGHT ESSENTIALS
        </h1>
        
        <p className="mx-auto w-[90%] sm:w-[511px] text-[15px] text-center sm:text-left mt-4">
          Your built-to-last, all wears with style only Jordan Brand can deliver
        </p>
        
        <button className="w-[80.38px] mx-auto sm:ml-[600px] h-[39.5px] rounded-full text-[14px] pt-[4px] mt-2 pr-[14px] pb-[7.5px] pl-[16px] font-sans leading-6 font-medium bg-black text-white sm:mt-4 sm:w-auto">
          Shop
        </button>
      </div>
    </>
  )
}

export default Dont_Miss
