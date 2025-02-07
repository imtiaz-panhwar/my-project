import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <>
      <div className="w-full max-w-screen-xl h-auto mt-8 mx-auto justify-center px-4">
        <h1 className="text-[22px] mt-[13px] font-semibold font-sans leading-7 text-center sm:text-left">
          Featured
        </h1>
        
        <div className="w-full h-auto">
          <Image src="/Imagefeacher.png" width={1344} height={700} alt="Logo" className="w-full h-auto" />
        </div>

        <h1 className="mx-auto w-full sm:w-[574px] mt-[28px] text-[36px] font-semibold text-center sm:text-left">
          STEP INTO WHAT FEELS GOOD
        </h1>
        
        <p className="mx-auto w-full sm:w-[511px] h-[48px] text-[15px] text-center sm:text-left">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>

        <button className="w-[147px] h-[39.5px] mx-auto sm:ml-[580px] mt-2 rounded-full text-[14px] pt-[6.5px] pr-[8px] pb-[7.5px] pl-[16px] font-sans leading-6 font-medium bg-black text-white">
          Find Your Source
        </button>
      </div>
    </>
  )
}

export default Featured
