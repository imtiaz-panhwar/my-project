// pages/login.tsx
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';


const JoinUs = () => {
  return (
      
      <div className="  max-w-[1440px] mx-auto h-[screen] bg-white">
        < Navbar />
      <div
        className="bg-white  w-[390px] mx-auto h-[screen] mt-6 p-4"
        style={{
          top: '96px',
          left: '515.5px',
        }}
      >
        {/* Nike Shoe Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/Vector1.png" width={60} height={60} alt="Nike Shoe Logo" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-[18px] font-bold leading-6 font-Inter  text-gray-900 mb-4 ml-6 mr-6">
          BECOME A NIKE MEMBER
        </h2>
        <p className='text-[14px] ml-6 mr-6 mb-6'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        {/* First Name Input */}
        <div className="mb-4">
          <input
            type="name"
            placeholder="First Name"
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

{/* Last NAme Input */}
        <div className="mb-4">
          <input
            type="name"
            placeholder="Last Name"
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date of Birth Input */}
        <div className="mb-4">
          <input
            type="name"
            placeholder="Date of birth"
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* getting  reward */}
        <div className="text-center text-[11px] text-gray-600 mb-6 ml-4 mr-4 font-inter">
          Get a Nike Member Reward every year on your Birthday.
          
        </div>

        {/* Country Dropdown */}
        <div className="mb-4">
          <select
            className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="India"
          >
            <option value="" disabled>Select your country</option>
    <option value="in"><span className='text-gray-200'>India</span></option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="us">United States</option>
            <option value="pk">Pakistan</option>
            <option value="au">Australia</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="cn">China</option>
            <option value="jp">Japan</option>
          </select>
        </div>

        {/* Gender Inputs Side by Side */}
<div className="mb-4 flex justify-between items-center space-x-4">
          {/* Input Male */}
          <input
            type="name"
            placeholder="Male"
    className="w-1/2 h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Input Female */}
          <input
            type="name"
            placeholder="Female"
    className="w-1/2 h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-[14px] text-gray-600 font-sans leading-3 font-normal">Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
          </div>
        </div>

        {/* Terms and Conditions */}
<div className="text-center text-[12px] text-gray-600 mb-6 ml-4 mr-4">
          By creating an account, you agree to Nike&apos;s <span className='underline text-gray-500'>privacy policy </span> and <span className='underline text-gray-500'>terms of use</span>
          
        </div>



        {/* Sign In Button */}
        <div className="mb-6">
          <button className="w-full h-[50px] bg-black text-white font-normal text-[12px] rounded-sm hover:bg-gray-900">
            JOIN US
          </button>
        </div>

        {/* Join Us Link */}
        <div className="text-center text-sm text-gray-600">
          <span>Already a member? </span>
          <a href="#" className="text-blue-600 hover:underline">
            <span className='underline text-black font-medium'>Sign In</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;


