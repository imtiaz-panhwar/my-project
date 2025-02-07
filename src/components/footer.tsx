import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="w-full bg-black mt-10 pt-2 px-4 sm:px-0">
      <div className="w-full max-w-screen-xl text-[12px] text-slate-300 font-sans leading-5 mx-auto font-thin mt-4 flex flex-wrap justify-between gap-6">
        <div className="w-full sm:w-[245px] h-auto mb-4 sm:mb-0">
          <p>Find A Store</p>
          <p>Become A Member</p>
          <p>Sign Up for Email</p>
          <p>Send Us Feedback</p>
          <p>Student Discounts</p>
        </div>
        <div className="w-full sm:w-[245px] h-auto mb-4 sm:mb-0">
          <p>Get Help</p>
          <p>Order Status</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Contact Us On Nike.com Inquiries</p>
          <p>Contact Us On All Other Inquiries</p>
        </div>
        <div className="w-full sm:w-[245px] h-auto mb-4 sm:mb-0">
          <p>About Nike</p>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainability</p>
        </div>
        <div className="w-full sm:w-[237px] flex justify-center sm:justify-end gap-3">
          {['twitter', 'facebook', 'youtube', 'instagram'].map((platform) => (
            <Link key={platform} href={'#'}>
              <Image src={`/${platform}.png`} width={30} height={30} alt={platform} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full max-w-screen-xl flex flex-wrap justify-between items-center mx-auto mt-4 border-t border-gray-700 pt-4">
        <div className="flex items-center space-x-2 text-[10px] text-slate-300">
          <Image src="/india.png" width={15} height={18} alt="India Flag" />
          <p>Pakistan &copy; 2025 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-[8px] text-slate-300 mt-2 sm:mt-0">
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
