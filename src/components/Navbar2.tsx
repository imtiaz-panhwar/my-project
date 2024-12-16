"use client";

import Image from "next/image";
import React from "react";

function Navbar2() {
  return (
    <header className="bg-[#FFFFFF]">
      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto h-[58px] bg-[#FFFFFF] flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo or Brand */}
        <div className="flex-shrink-0">
          <Image src="/Vector1.png" width={58.85} height={22.54} alt="Logo" className="w-[40px] sm:w-[50px] lg:w-[58.85px]" />
        </div>

        {/* Right Section: Contact Info and Icons */}
        <div className="flex items-center space-x-4">
          {/* Phone Number */}
          <p className="hidden sm:block font-Inter leading-6 font-normal text-[12px] sm:text-[14px] lg:text-[16px] mr-4 sm:mr-8">
            000 800 100 9538
          </p>

          {/* Message Icon */}
          <div className="w-6 h-6">
            <Image src="/mesg.png" width={24} height={24} alt="Message" className="w-full h-full" />
          </div>

          {/* Shopping Icon */}
          <div className="w-6 h-6">
            <Image src="/shopping.png" width={24} height={24} alt="Shopping Cart" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar2;
