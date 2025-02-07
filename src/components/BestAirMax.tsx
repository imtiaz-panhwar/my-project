import React from 'react'
import Image from 'next/image'

function BestAirMax() {
  return (
    <>
      <div className="max-w-full-xl mx-auto mt-[90px] px-4 flex justify-between">
        <h1 className="text-[22px] ml-[48px] mt-[13px] font-semibold font-sans leading-7">
          Best of Air Max
        </h1>
        <div className="mr-[40px] flex items-center">
          <h1 className="mr-[10px] hidden md:block">Shop</h1>
          <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[10px]">
            <Image src="/Frame2.png" width={30} height={30} alt=" roundbuttonLogo" />
          </button>
          <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[10px] mr-2">
            <Image src="/Frame.png" width={30} height={30} alt="Logo" />
          </button>
        </div>
      </div>
    
      <div className="w-full h-auto mx-auto justify-center overflow-hidden">
        <div className="flex gap-4 overflow-x-scroll md:overflow-hidden">
          <div className="w-[90%] sm:w-[441.36px] h-auto bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/Image1.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between px-4">
                <h3 className="text-md font-semibold">Nike Air Pulse</h3>
                <p className="text-base font-bold text-black">₹13 995</p>
              </div>
              <p className="text-sm text-gray-500 mt-1 px-4">Women&apos;s Shoes</p>
            </div>
          </div>
  
          <div className="w-[90%] sm:w-[441.36px] h-auto bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/Image2.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between px-4">
                <h3 className="text-md font-semibold">Nike Air Pulse</h3>
                <p className="text-base font-bold text-black">₹13 995</p>
              </div>
              <p className="text-sm text-gray-500 mt-1 px-4">Men&apos;s Shoes.</p>
            </div>
          </div>
  
          <div className="w-[90%] sm:w-[441.36px] h-auto bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/Image3.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between px-4">
                <h3 className="text-md font-semibold">Nike Air Pulse max 97 SE</h3>
                <p className="text-base font-bold text-black">₹16 995</p>
              </div>
              <p className="text-sm text-gray-500 mt-1 px-4">Men&apos;s Shoes.</p>
            </div>
          </div>
  
          <div className="w-[90%] sm:w-[441.36px] h-auto bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/Image1.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between px-4">
                <h3 className="text-md font-semibold">Product Name</h3>
                <p className="text-base font-bold text-black">₹99.99</p>
              </div>
              <p className="text-sm text-gray-500 mt-1 px-4">Short description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestAirMax
