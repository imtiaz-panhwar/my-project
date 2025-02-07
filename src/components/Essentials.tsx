import Image from 'next/image'
import React from 'react'

function Essentials() {
  return (
    <>
      <div className="w-full max-w-screen-xl h-auto mx-auto mt-[18px] px-4">
        <div className="w-full h-[48px] grid grid-cols-3">
          <h1 className="text-[22px] font-semibold font-sans leading-7 col-span-3 text-center sm:text-left">
            Essentials
          </h1>
        </div>

        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/essentials.png" width={440} height={540} alt="Logo" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/essentials1.png" width={440} height={540} alt="Logo" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/essentials2.png" width={440} height={540} alt="Logo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Essentials
