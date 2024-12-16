"use client";

import Image from "next/image";
import React from "react";

function Navbar3() {
  return (
    <header className="bg-[#FFFFFF]">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto h-[38px] bg-[#F5F5F5] flex items-center justify-between px-8">
        <div className="w-[24px] h-[24px]">
          <Image src="/vector.png" width={24} height={24} alt="Logo" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1440px] mx-auto h-[58px] bg-[#FFFFFF] flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left Section: Logo or Brand */}
        <div className="ml-[9.81px]">
          <Image src="/Vector1.png" width={58.85} height={22.54} alt="Logo" />
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex space-x-6 font-sans font-semibold">
          <div className="text-gray-700 hover:text-gray-900">New & Featured</div>
          <div className="text-gray-700 hover:text-gray-900">Men</div>
          <div className="text-gray-700 hover:text-gray-900">Women</div>
          <div className="text-gray-700 hover:text-gray-900">Kids</div>
          <div className="text-gray-700 hover:text-gray-900">Sale</div>
          <div className="text-gray-700 hover:text-gray-900">SNKRS</div>
        </div>

        {/* Right Section: Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-[250px] h-8">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-8 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-100 bg-slate-100"
            />
          </div>

          {/* Heart Icon */}
          <div className="w-6 h-6">
            <Image src="/heart.png" width={24} height={24} alt="Wishlist" />
          </div>

          {/* Lock Icon */}
          <div className="w-6 h-6">
            <Image src="/shopping.png" width={24} height={24} alt="Lock" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar3;
