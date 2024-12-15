import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      < Navbar />
      {/* Inner Section */}
      <div className="h-[58px] bg-[#F5F5F5] shadow-inner p-[0.8px] text-[black] flex flex-col items-center">
        <p className="text-[18px] font-sans pt-1 font-medium">Hello Nike App</p>
        <p className="text-[12px]">
          Download the app to access everything Nike
        </p>
      </div>

      <div className="w-[1344px] h-[977px] mx-auto justify-center">
        <Image src="/shoe.png" width={1344} height={700} alt="Logo" />
        <p className="text-center w-[70] h-[24] font-medium font-sans leading-6 text-[#111111] pt-[58px]">
          First Look
        </p>
        <h1 className="text-center w-[574] h-[60]  mt-[28] text-[58px] font-semibold">
          {" "}
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-center w-[511] h-[48] text-[15px]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
        </p>
        <p className="text-center w-[511] h-[48] leading-4 font-normal font-Helvetica Neue text-[15px]">
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="w-[1344] h-[200px] gap-4 mt-8 flex justify-center">
          <div className="w-[110.58px] h-[39.5px] rounded-full text-center text-[15px] pt-[6.5px] pr-[22.08px] pb-[7.5px] pl-[18px] font-Helvetica Neue leading-6 font-medium bg-black text-white">
            Notify Me
          </div>
          <div className="w-[138.16px] h-[39.5px] rounded-full text-center text-[15px] pt-[6.5px] pr-[22.08px] pb-[7.5px] pl-[18px] font-Helvetica Neue leading-6 font-medium bg-black text-white">
            Shop Air Max
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[52px] mt-[90px] flex justify-between mr-[10px]">
        <h1 className="text-[22px] ml-[48px] mt-[13px] font-semibold font-sans leading-7">
          Best of Air Max
        </h1>
        <div className="mr-[40px] flex items-center">
          <h1 className="mr-[10px]">Shop</h1>
          <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[10px]">
            <Image src="/frame2.png" width={30} height={30} alt="Logo" />
          </button>
          <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[10px] mr-2">
            <Image src="/frame.png" width={30} height={30} alt="Logo" />
          </button>
        </div>
      </div>

      <div className="w-[1344px] h-[540.36px] mx-auto justify-center overflow-hidden">
        <div className="flex gap-3">
          <div className="w-[441.36px] h-[510.36px] bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/image1.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between mr-4">
                <h3 className="text-md font-semibold">Nike Air Pulse</h3>
                <p className="text-base font-bold text-black">₹13 995</p>
              </div>
        <p className="text-sm text-gray-500 mt-1 px-4">Women's Shoes</p>
            </div>
          </div>

          <div className="w-[441.36px] h-[510.36px] bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/image2.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
        <div className="flex justify-between px-4">
                <h3 className="text-lg font-semibold">Nike Air Pulse</h3>
                <p className="text-base font-bold text-black">₹13 995</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">Men's Shoes.</p>
            </div>
          </div>

          <div className="w-[441.36px] h-[510.36px] bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/image3.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between mr-4">
                <h3 className="text-lg font-semibold">
                  Nike Air Pulse max 97 SE
                </h3>
                <p className="text-base font-bold text-black">₹16 995</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">men's Shoes.</p>
            </div>
          </div>

          <div className="w-[441.36px] h-[510.36px] bg-slate-300 flex-shrink-0 flex flex-col">
            <Image
              src="/image1.png"
              width={441.36}
              height={441.36}
              alt="shoeimg"
            />
            <div className="pt-3 bg-white">
              <div className="flex justify-between mr-4">
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-base font-bold text-black">₹99.99</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Short description goes here.
              </p>
            </div>
            </div>
          </div>
        </div>

      <div className="w-[1344px] h-[977px] mt-8 mx-auto justify-center">
        <h1 className="text-[22px] mt-[13px] font-semibold font-sans leading-7">
          Feachered
        </h1>
        <Image src="/imagefeacher.png" width={1344} height={700} alt="Logo" />
        <h1 className="text-center w-[574] h-[60]  mt-[28PX] text-[58px] font-semibold">
          {" "}
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-center w-[511] h-[48] text-[15px]">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <div className="w-[147px] h-[39.5px] rounded-full mx-auto text-[14px] pt-[6.5px] mt-8 pr-[8px] pb-[7.5px] pl-[16px] font-sans leading-6 font-medium bg-black text-white">
          Find Your Source
        </div>
      </div>

      <div className="w-[1344px] h-[561px] mt-8">
        <div className="w-[140px] h-[27px]">
          <h1 className="text-[23px] ml-[48px] mt-[2px] font-semibold font-sans text-[#111111] leading-7 ">
      Gear Up
    </h1>
        </div>
        <div className="w-[1356px] h-[509px] flex gap-2 ml-8  mt-2">
          <div className="w-[666px] h-[509px]">
            <div className='class="w-[211px] h-[48px] top-[2px] left-[407px] p-[0px] pl-[7px] gap-0 opacity-0" flex justify-end items-center mr-5'>
              <h1 className="mr-[10px]">Shop Men's</h1>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[4px]">
                <Image src="/frame2.png" width={30} height={30} alt="Logo" />
              </button>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[5px] mr-2">
                <Image src="/frame.png" width={30} height={30} alt="Logo" />
              </button>
            </div>

            <div className="w-[666px] h-[477px]  grid grid-cols-2">
              <div className="w-[300px] h-[393px] ml-[48px]">
                <div className="w-[300px]h-[300px]">
                  <Image
                    src="/Imagetshirt.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />{" "}
                </div>
                <div className="flex justify-between mr-2">
                  <h3 className="text-[14px] font-semibold leading-4 mt-4">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-base font-semibold mt-2 text-black">₹ 3 895</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Men's Short-Sleeve
                </p>
                  <p className="text-sm text-gray-500">
                  Running Top
                  </p>

              </div>

              <div className="w-[300px] h-[393px] ml-[30px]">
                <div className="w-[300px]h-[300px]">
                  <Image
                    src="/Imageshort.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />{" "}
                </div>
                <div className="flex justify-between mr-2">
                  <h3 className="text-[14px] font-semibold leading-4 mt-4">Nike Dri-FIT Challenger</h3>
                  <p className="text-base font-semibold mt-2 text-black">₹ 2 495</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Men's Short-Sleeve
                </p>
                  <p className="text-sm text-gray-500">
                  Running Top
                  </p>
              </div>
            </div>
          </div>

          <div className="w-[666px] h-[509px]">
            <div className='class="w-[211px] h-[48px] top-[2px] left-[407px] p-[0px] pl-[7px] gap-0 opacity-0" flex justify-end mr-5'>
              <h1 className="mr-[10px]">Shop Women's</h1>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] mr-2 pl-[5px] pr-[8px]">
                <Image src="/frame2.png" width={30} height={30} alt="Logo" />
              </button>
              <button className="w-[40px] h-[40px] bg-gray-200 rounded-full text-black text-[20px] pl-[4px] mr-2">
                <Image src="/frame.png" width={30} height={30} alt="Logo" />
              </button>
            </div>

            <div className="w-[666px] h-[477px]  grid grid-cols-2 gap-12">
              <div className="w-[300px] h-[393px] ml-[48px]">
                <div className="w-[300px]h-[300px]">
                  {" "}
                  <Image
                    src="/Imagewomen1.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />{" "}
                </div>
                <div className="flex justify-between mr-2">
                  <h3 className="text-[14px] font-semibold leading-4 mt-4">Nike Dri-FIT ADV Run Division</h3>
                  <p className="text-base font-semibold mt-2 text-black">₹ 5 895</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                Women's Long-Sleeve 
                </p>
                  <p className="text-sm text-gray-500">
                  Running Top
                  </p>
              </div>

              <div className="w-[300px] h-[393px]">
                <div className="w-[300px]h-[300px]">
                  <Image
                    src="/Imagewomen2.png"
                    width={300}
                    height={300}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-between mr-2">
                  <h3 className="text-[14px] font-semibold leading-4 mt-4">Nike Fast</h3>
                  <p className="text-base font-semibold mt-2 text-black">₹ 3 795</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                Women's Mid-Rise 7/8 Running  
                </p>
                  <p className="text-sm text-gray-500">
                  Leggings with Pockets
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1344px] h-[977px] mt-8 mx-auto justify-center">
        <h1 className="text-[22px] mt-[13px] font-semibold font-sans leading-7">
          Don't Miss
        </h1>
        <Image src="/imagedontmiss.png" width={1344} height={700} alt="Logo" />
        <h1 className="text-center w-[574] h-[60]  mt-[28PX] text-[58px] font-semibold">
          {" "}
          FLIGHT ESSENTIALS
        </h1>
        <p className="text-center w-[511] h-[48] text-[15px]">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver
        </p>
        <div className="w-[80.38px] h-[39.5px] rounded-full mx-auto text-[14px] pt-[4px] mt-8 pr-[14px] pb-[7.5px] pl-[24px] font-sans leading-6 font-medium bg-black text-white">
          Shop
        </div>
      </div>


      <div className="w-[1344px] h-[592px] mx-auto  mt-[18px]">
         <div className='class="w-[1344px] h-[48px]  grid grid-cols-3'>
              <h1 className="text-[22px] font-semibold font-sans leading-7">Essentials</h1>
         </div>
          
      <div className="w-[1344px] h-[540px] grid grid-cols-3 gap-2  ">
          <div className="w-[440px] h-[540px]"><Image src="/essentials.png" width={440} height={540} alt="Logo" /></div>
          <div className="w-[440px] h-[540px]"><Image src="/essentials1.png" width={440} height={540} alt="Logo" /></div>
          <div className="w-[440px] h-[540px]"><Image src="/essentials2.png" width={440} height={540} alt="Logo" /></div>
      </div>
      </div>

      <div className="w-[800px] h-[192px]  mx-auto mt-[70px] grid grid-cols-4">
        
        <div className="w-[200px] h-[190px] text-[12px] text-gray-500 font-sans leading-5 "><h2 className="font-bold text-black">icons</h2><br /><p>Air Force 1</p><p>Huarache</p><p>Air Max 90</p><p>Air Max 95</p> </div>
        <div className="w-[200px] h-[190px] text-[12px] text-gray-500 font-sans leading-5 "> <h2 className="font-bold text-black">Shoes</h2><br /><p>All Shoes</p><p>Custom Shoes</p><p>Jordan Shoes</p><p>Running Shoes</p></div>
        <div className="w-[200px] h-[190px] text-[12px] text-gray-500 font-sans leading-5 "><h2 className="font-bold text-black">Clothing2</h2><br /><p>All Clothings</p><p>Modern Shoes</p><p>Hoodies & Pullovers</p><p>Shirts and Tops</p> </div>
        <div className="w-[200px] h-[190px] text-[12px] text-gray-500 font-sans leading-5 "><h2 className="font-bold text-black">Kids</h2><br /><p>Infant and todler Shoes</p><p>Kid's Shoes</p><p>Kids Jordan Shoes</p><p>Kids' Basket Ball Shoes</p> </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
