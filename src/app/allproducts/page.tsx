// pages/products.js
import React from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

function AllProducts() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      {/* Header Section */}
      < Navbar />
      <div className="w-[1440px] pl-12 pt-10 h-[51px]">
        <div className="w-[1344px] h-[36px] flex justify-between items-center">
          <div>
            <h1 className="font-semibold leading-7 text-[24px]">New(500)</h1>
          </div>
          <div className="w-[224px] h-[28px] ml-[940px] flex items-center space-x-1">
            <p>Hide Filters</p>
            {/* Proper Image Component Usage */}
            <Image src="/imagefilter.png" width={30} height={30} alt="Filter Icon" />
          </div>
          <div className="w-[224px] h-[28px] flex items-center space-x-1">
            <p>Sort By</p>
            {/* Proper Image Component Usage */}
            <Image src="/imagesortby.png" width={14} height={14} alt="Sort By Icon" />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 ml-[20px]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[260px] h-auto bg-white p-4 ">
            {/* Categories Section */}
            <div className="mb-6">
              
              <div className="w-[192px]">
                <ul className="space-y-4">
                  <li className="hover:text-blue-600 cursor-pointer">Shoes</li>
                  <li className="hover:text-blue-600 cursor-pointer">Sports Bras</li>
                  <li className="hover:text-blue-600 cursor-pointer">Tops & T-Shirts</li>
                  <li className="hover:text-blue-600 cursor-pointer">Hoodies & SweatShirts</li>
                  <li className="hover:text-blue-600 cursor-pointer">Jackets</li>
                  <li className="hover:text-blue-600 cursor-pointer">Trousers & Tights</li>
                  <li className="hover:text-blue-600 cursor-pointer">Shorts</li>
                  <li className="hover:text-blue-600 cursor-pointer">TrackSuits</li>
                  <li className="hover:text-blue-600 cursor-pointer">Jumpsuits & Rompers</li>
                  <li className="hover:text-blue-600 cursor-pointer">Skirts & Dresses</li>
                  <li className="hover:text-blue-600 cursor-pointer">Socks</li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    <p>Accessories</p>
                    <p>& Equipment</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gender Section */}
            <div className="mb-6">
              <hr className="border-t-2 border-gray-300 mb-4" />
              <h2 className="text-lg font-semibold mb-4">Gender</h2>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Men</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Women</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Unisex</span>
                </label>
              </div>
            </div>

            {/* Kids Section */}
            <div className="mb-6">
              <hr className="border-t-2 border-gray-300 mb-4" />
              <h2 className="text-lg font-semibold mb-4">Kids</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Boys</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Girls</span>
                </label>
              </div>
            </div>

            {/* Shop by Price Section */}
            <div className="mb-6">
              <hr className="border-t-2 border-gray-300 mb-4" />
              <h2 className="text-lg font-semibold mb-4">Shop by Price</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>Under ₹ 2 500.00</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span>₹2501.00 - ₹</span>
                </label>
                
              </div>
            </div>
          </aside>

          {/* Divider between Sidebar and Products */}
          <div className="w-[11px] h-[849px] bg-gray-300 mx-4 "></div>

          {/* Product Grid */}
<div className="w-[1092px] mx-auto ml-6 grid grid-cols-3 gap-6">

  
            {/* Product Card 1 */}
            <div className="bg-white p-4 w-[348px] h-[533px]">
  <img
    src="/products/product1.png"
    alt="Product 1"
    className="w-full h-[348px] object-cover mb-4"
  />
  <div>
    <p className="text-sm text-[#9E3500] mb-1">Just In</p>
    <h3 className="text-md font-medium mb-2">Nike Air Force 1 Mid '07</h3>
    <p className="text-[15px] text-gray-500 mb-2">Men's Shoes</p>
    <p>1 Color</p>
    <p className="text-xl font-semibold text-gray-800">MRP : ₹ 10 795.00</p>
  </div>
</div>


            {/* Product Card 2 */}
  <div className="bg-white p-4  w-[348px] h-[533px]">
              <img
                src="/products/product2.png"
                alt="Product 2"
      className="w-full h-[348px] object-cover  mb-4"
              />
              <div>
                <p className="text-sm text-[#9E3500] mb-1">Just In</p>
                <h3 className="text-sm font-medium mb-2">Nike Court Vision Low Next Nature</h3>
      <p className="text-[15px] text-gray-500 mb-2">
        Men's Shoes
      </p>
                <p>1 Color</p>
                <p className="text-xl font-semibold text-gray-800">MRP : ₹ 4 995.00</p>
              </div>
            </div>

            {/* Product Card 3 */}
  <div className="bg-white p-4  w-[348px] h-[533px]">
              <img
                src="/products/product3.png"
                alt="Product 3"
      className="w-full h-[348px] object-cover  mb-4"
              />
              <div>
                <p className="text-sm text-[#9E3500] mb-1">Just In</p>
                <h3 className="text-md font-medium mb-2">Nike Air Force 1 PLT.AF.ORM</h3>
      <p className="text-[15px] text-gray-500 mb-2">
        Women's Shoes
      </p>
                <p>1 Color</p>
                <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 695.00</p>
            </div>
            </div>

              {/* Product Card 4 */}
            <div className="bg-white p-4  w-[348px] h-[533px]">
             <img
              src="/products/product4.png"
      alt="Product 4"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Air Force 1 React</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 13 295.00</p>
    </div>
  </div>

{/* Product Card 5 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product5.png"
      alt="Product 5"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Promo Exclusion</p>
      <h3 className="text-md font-medium mb-2">Air Jordan 1 Elevate Low</h3>
      <p className="text-[15px] text-gray-500 mb-2">
        Women's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 11 895.00</p>
    </div>
  </div>

{/* Product Card 6 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product6.png"
      alt="Product 6"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Standard Issue</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Basketball Jersey
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 895.00</p>
    </div>
  </div>

{/* Product Card 7 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product7.png"
      alt="Product 7"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Promo Exclusion</p>
      <h3 className="text-md font-medium mb-2">Nike Dunk Low Retro SE</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 9 695.00</p>
    </div>
  </div>

{/* Product Card 8 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product8.png"
      alt="Product 8"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Sustainable Materials</p>
      <h3 className="text-md font-medium mb-2">Nike Dri-FIT UV Hyverse</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Short-Sleeve Graphic Fitness Top
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 495.00</p>
    </div>
  </div>

{/* Product Card 9 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product9.png"
      alt="Product 9"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Court Vision Low</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 5 695.00</p>
    </div>
  </div>

{/* Product Card 10 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product10.png"
      alt="Product 10"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Dri-FIT Ready</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Short-Sleeve Fitness Top
      </p>
      <p>3 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 495.00</p>
    </div>
  </div>

{/* Product Card 11 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product11.png"
      alt="Product 11"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike One Leak Protection: Period</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Mid-Rise 18cm (approx.) Biker Shorts
      </p>
      <p>2 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 3 395.00</p>
    </div>
  </div>

{/* Product Card 12 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product12.png"
      alt="Product 12"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Air Force 1 LV8 3</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Older Kids' Shoe
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 7 495.00</p>
    </div>
  </div>

{/* Product Card 13 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product13.png"
      alt="Product 13"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Blazer Low Platform</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 195.00</p>
    </div>
  </div>

{/* Product Card 14 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
     src="/products/product14.png"
      alt="Product 14"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Air Force 1 '07</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Shoe
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 195.00</p>
    </div>
  </div>

{/* Product Card 15 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product15.png"
      alt="Product 15"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Pro Dri-FIT</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Tight-Fit Sleeveless Top
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 1 495.00</p>
    </div>
  </div>

{/* Product Card 16 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product16.png"
      alt="Product 16"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Dunk Low Retro</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 695.00</p>
    </div>
  </div>

{/* Product Card 17 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product17.png"
      alt="Product 17"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Air Max SC</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 5 995.00</p>
    </div>
  </div>

{/* Product Card 18 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product18.png"
      alt="Product 18"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Dri-FIT UV Miler</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Short-Sleeve Running Top
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 1 695.00</p>
    </div>
  </div>

  {/* Product Card 19 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product19.png"
      alt="Product 19"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Air Max SYSTM</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Older Kids' Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 6 495.00</p>
    </div>
  </div>

  {/* Product Card 20 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product20.png"
      alt="Product 20"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Alate All U</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Light-Support Lightly Lined U-Neck Printed Sports Bra
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 195.00</p>
    </div>
  </div>

  {/* Product Card 21 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product21.png"
      alt="Product 21"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Court Legacy Lift</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Shoes
      </p>
      <p>2 Colours</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 7 495.00</p>
    </div>
  </div>

  {/* Product Card 22 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product22.png"
      alt="Product 22"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Swoosh</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Medium-support Padded Sports Bra Tank
      </p>
      <p>2 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 3 095.00</p>
    </div>
  </div>

  {/* Product Card 23 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product23.png"
      alt="Product 23"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike SB Zoom Janoski OG+</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Shoes
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 595.00</p>
    </div>
  </div>

  {/* Product Card 24 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product24.png"
      alt="Product 24"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Dri-FIT Run Division Rise 365</h3>
      <p className="text-[15px] text-gray-500 mb-2">
        This is a short description of Product 1.
      </p>
      <p>2 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 3 495.00</p>
    </div>
  </div>

  {/* Product Card 25 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product25.png"
      alt="Product 25"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Dri-FIT Challenger</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's 18cm (approx.) 2-in-1 Versatile Shorts
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 495.00</p>
    </div>
  </div>

  {/* Product Card 26 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product26.png"
      alt="Product 26"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Jordan Series ES</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Men's Shoes
      </p>
      <p>2 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 7 495.00</p>
    </div>
  </div>

  {/* Product Card 27 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product27.png"
      alt="Product 27"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Outdoor Play</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Older Kids' Oversized Woven Jacket
      </p>
      <p>1 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 3 895.00</p>
    </div>
  </div>

  {/* Product Card 28 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
    <img
      src="/products/product28.png"
      alt="Product 28"
      className="w-full h-[348px] object-cover  mb-4"
    />
    <div>
      <p className="text-sm text-[#9E3500] mb-1">Just In</p>
      <h3 className="text-md font-medium mb-2">Nike Sportswear Trend</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Older Kids' (Girls') High-waisted Woven Shorts
      </p>
      <p>2 Color</p>
      <p className="text-xl font-semibold text-gray-800">MRP : ₹ 2 495.00</p>
    </div>
  </div>

{/* Product Card 29 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
  <img
    src="/products/product29.png"
    alt="Product 29"
      className="w-full h-[348px] object-cover  mb-4"
  />
  <div>
    <p className="text-sm text-[#9E3500] mb-1">Just In</p>
    <h3 className="text-md font-medium mb-2">Nike Blazer Low '77 Jumbo</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Women's Shoes
      </p>
    <p>1 Color</p>
    <p className="text-xl font-semibold text-gray-800">MRP : ₹ 8 595.00</p>
  </div>
</div>

{/* Product Card 30 */}
<div className="bg-white p-4  w-[348px] h-[533px]">
  <img
    src="/products/product30.png"
    alt="Product 30"
      className="w-full h-[348px] object-cover  mb-4"
  />
  <div>
    <p className="text-sm text-[#9E3500] mb-1">Just In</p>
    <h3 className="text-md font-medium mb-2">Nike SB Force 58</h3>
      <p className="text-[15px] text-gray-500 mb-2">
      Skate Shoe
      </p>
    <p>1 Color</p>
    <p className="text-xl font-semibold text-gray-800">MRP : ₹ 5 995.00</p>
  </div>
</div>
    </div>
  </div>
</div>
      <div className='w-[1085px] h-[259px] ml-[350px] mt-24 mx-auto border-t-2 border-gray-200'>
        <h1 className='mt-[40px] font-semibold font-sans text-[21px] leading-7'>Related Categories</h1>

        <div className='w-[1092px] h-[174px]'>
          <div className=' flex justify-start gap-2'>
          <div className='w-[160.83px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>Best Selling Products</div>
          <div className='w-[104.36px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>Best Shoes</div>
          <div className='w-[165.31px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>New Basket Ball Shoes</div>
          <div className='w-[151.56px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>New Football Shoes</div>
          <div className='w-[139.83px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>New Men's Shoes</div>
          <div className='w-[153.8px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>New Running Shoes</div>
          <div className='w-[140.92px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>Best Men's Shoes</div>
        </div>

        <div className=' flex justify-start gap-2'>
          <div className='w-[145.64px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>New Jordan Shoes</div>
          <div className='w-[159.11px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>Best Women's Shoes</div>
          <div className='w-[155.47px] h-[34px] border-2 border-gray-300 rounded-full  text-center p-1 text-[12px] font-Inter font-normal mt-4'>Best Training & Gym</div>
</div>

      </div>
    </div>
      
    
      <Footer />
    </div>
      );
}

export default AllProducts;
