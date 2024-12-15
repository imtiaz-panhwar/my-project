// pages/login.tsx
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const Login = () => {
  return (
      
      <div className=" items-center max-w-[1440px] mx-auto bg-white">
        < Navbar />
      <div
        className="bg-white  w-[450px] h-[700px] mx-auto p-8"
        style={{
          top: '96px',
          left: '530px',
        }}
      >
        {/* Nike Shoe Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/vector1.png" width={60} height={60} alt="Nike Shoe Logo" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-[32px] font-semibold  text-gray-800 mb-6 ml-8 mr-8">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

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

        {/* Remember me and Forgot Password */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-[15px] text-gray-600">Keep me signed in</span>
          </div>
          <a href="#" className="text-[14px] text-gray-400 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Terms and Conditions */}
        <div className="text-center text-[14px] text-gray-600 mb-6 ml-4 mr-4">
          By logging in, you agree to Nike's <span className='underline text-gray-500'>privacy policy </span> and <span className='underline text-gray-500'>terms of use</span>
          
        </div>

        {/* Sign In Button */}
        <div className="mb-6">
          <button className="w-full h-[50px] bg-black text-white font-normal text-[12px] rounded-sm hover:bg-gray-900">
            SIGN IN
          </button>
        </div>

        {/* Join Us Link */}
        <div className="text-center text-sm text-gray-600">
          <span>Not a member? </span>
          <a href="#" className="text-blue-600 hover:underline">
            <span className='underline text-black font-medium'>Join Us</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
