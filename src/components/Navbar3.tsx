"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar3() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e:any) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header className="bg-[#FFFFFF] sticky top-0 z-50 shadow-md">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto h-[38px] bg-[#F5F5F5] flex items-center justify-between px-6 lg:px-12">
        <div className="w-[24px] h-[24px] cursor-pointer">
          <Image
            src="/vector.png"
            width={24}
            height={24}
            alt="Logo"
            onClick={() => router.push("/")}
          />
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1440px] mx-auto h-[58px] bg-[#FFFFFF] flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left Section: Logo */}
        <div className="ml-[9.81px] cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/Vector1.png" width={58.85} height={22.54} alt="Logo" />
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="hidden sm:flex space-x-6 font-sans font-semibold text-gray-700">
          <Link href="/new-and-featured" className="hover:text-gray-900">
            New & Featured
          </Link>
          <Link href="/men" className="hover:text-gray-900">
            Men
          </Link>
          <Link href="/women" className="hover:text-gray-900">
            Women
          </Link>
          <Link href="/kids" className="hover:text-gray-900">
            Kids
          </Link>
          <Link href="/sale" className="hover:text-gray-900">
            Sale
          </Link>
          <Link href="/snkr" className="hover:text-gray-900">
            SNKRS
          </Link>
        </nav>

        {/* Right Section: Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <form className="relative w-[200px] md:w-[250px]" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full h-8 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-100 bg-slate-100"
            />
            <button
              type="submit"
              className="absolute inset-y-0 left-2 flex items-center text-gray-500"
            >
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
            </button>
          </form>

          {/* Heart Icon */}
          <Link href="/wishlist" className="w-6 h-6">
            <Image src="/heart.png" width={24} height={24} alt="Wishlist" />
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="w-6 h-6">
            <Image src="/shopping.png" width={24} height={24} alt="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar3;
