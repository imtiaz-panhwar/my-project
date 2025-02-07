import Image from 'next/image';
import React from 'react';

function Gearup() {
  return (
    <>
      <div className="w-full max-w-[1344px] h-auto mt-8 mx-auto">
        <div className="w-full h-[27px]">
          <h1 className="text-[23px] ml-[48px] mt-[2px] font-semibold font-sans text-[#111111] leading-7 ">
            Gear Up
          </h1>
        </div>
        <div className="w-full h-auto flex flex-col sm:flex-row gap-2 ml-8 mt-2">
          <div className="w-full sm:w-[666px] h-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="mr-[10px]">Shop Men&apos;s</h1>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[4px]">
                <Image src="/Frame2.png" width={30} height={30} alt="Logo" />
              </button>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[5px] mr-2">
                <Image src="/Frame.png" width={30} height={30} alt="Logo" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="w-full sm:w-[300px] h-auto">
                <div className="w-full sm:w-[300px] h-[300px]">
                  <Image
                    src="/Imagetshirt.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-between mr-2 mt-4">
                  <h3 className="text-[14px] font-semibold leading-4">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-base font-semibold text-black">₹ 3 895</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Men&apos;s Short-Sleeve</p>
                <p className="text-sm text-gray-500">Running Top</p>
              </div>

              <div className="w-full sm:w-[300px] h-auto">
                <div className="w-full sm:w-[300px] h-[300px]">
                  <Image
                    src="/Imageshort.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-between mr-2 mt-4">
                  <h3 className="text-[14px] font-semibold leading-4">Nike Dri-FIT Challenger</h3>
                  <p className="text-base font-semibold text-black">₹ 2 495</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Men&apos;s Short-Sleeve</p>
                <p className="text-sm text-gray-500">Running Top</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[666px] h-auto mt-4 sm:mt-0">
            <div className="flex justify-between items-center mb-4">
              <h1 className="mr-[10px]">Shop Women&apos;s</h1>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[5px] pr-[8px]">
                <Image src="/Frame2.png" width={30} height={30} alt="Logo" />
              </button>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[4px] mr-2">
                <Image src="/Frame.png" width={30} height={30} alt="roundLogo" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="w-full sm:w-[300px] h-auto">
                <div className="w-full sm:w-[300px] h-[300px]">
                  <Image
                    src="/Imagewomen1.png"
                    width={300}
                    height={300}
                    alt="womenImage"
                  />
                </div>
                <div className="flex justify-between mr-2 mt-4">
                  <h3 className="text-[14px] font-semibold leading-4">Nike Dri-FIT ADV Run Division</h3>
                  <p className="text-base font-semibold text-black">₹ 5 895</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Women&apos;s Long-Sleeve</p>
                <p className="text-sm text-gray-500">Running Top</p>
              </div>

              <div className="w-full sm:w-[300px] h-auto">
                <div className="w-full sm:w-[300px] h-[300px]">
                  <Image
                    src="/Imagewomen2.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-between mr-2 mt-4">
                  <h3 className="text-[14px] font-semibold leading-4">Nike Fast</h3>
                  <p className="text-base font-semibold text-black">₹ 3 795</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Women&apos;s Mid-Rise 7/8 Running</p>
                <p className="text-sm text-gray-500">Leggings with Pockets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gearup;
