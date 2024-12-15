import React from 'react';
import Image from 'next/image'; // Ensure you import Image from next/image
import Link from 'next/link';

function Footer() {
  return (
    <div className="w-[1440px] h-[331px] mx-auto mt-10 pt-[10px] bg-black">
      <div className="w-[1372px] h-[213px] text-[12px] text-slate-300 font-sans leading-5 mx-auto font-thin mt-[40px] flex ">
        <div className="w-[1029px] h-[213px] text-[12px] text-slate-300 font-sans leading-5 font-thin flex justify-between ">
          <div className="w-[245.25px] h-[169.63px] text-[12px] text-slate-300 font-sans leading-5 font-thin ">
            <p>Find A Store</p>
            <br />
            <p>Become A Member</p>
            <p>Sign Up for Email</p>
            <p>Send Us Feedback</p>
            <p>Student Discounts</p>
          </div>
          <div className="w-[245.25px] h-[213px] text-slate-300 font-sans leading-5 font-thin ">
            <p>Get Help</p>
            <br />
            <p>Order Status</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact Us On Nike.com Inquiries</p>
            <p>Contact Us On All Other Inquiries</p>
          </div>
          <div className="w-[245.25px] h-[151px] text-slate-300 font-sans leading-5 font-thin ">
            <p>About Nike</p>
            <br />
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>
        <div className="w-[237px] h-[37px] ml-[100px] flex justify-end gap-3 bg-black">
          <div className="w-7 h-7 rounded-full text-center pt-0.5 "><Link href={'#'}><Image src="/twitter.png" width={30} height={30} alt="India Flag" /></Link></div>
          <div className="w-7 h-7 rounded-full text-center pt-0.5 "><Link href={'#'}><Image src="/facebook.png" width={30} height={30} alt="India Flag" /></Link></div>
          <div className="w-7 h-7 rounded-full text-center pt-0.5 "><Link href={'#'}><Image src="/youtube.png" width={30} height={30} alt="India Flag" /></Link></div>
          <div className="w-7 h-7 rounded-full text-center pt-0.5 "><Link href={'#'}><Image src="/instagram.png" width={30} height={30} alt="India Flag" /></Link></div>
        </div>
      </div>
      <div className="w-[1372px] h-[70px] flex justify-between items-end mx-auto">
        <div className="w-[672px] h-[32px] flex items-center ">
          <Image src="/india.png" width={15} height={18} alt="India Flag" /><p className='text-slate-300 text-[10px] ml-[2px] font-sans font-normal'>India <span className='ml-[10px]'>© 2023 Nike, Inc. All Rights Reserved</span></p>
        </div>
        <div className="w-[672px] h-[32px] flex justify-between items-center ">

          <div className='w-[38.23px] text-[8px]  text-slate-300 h-[14px] '>Guides</div>
          <div className='w-[73.56px] text-[8px]  h-[14px] text-slate-300 '>Terms of Sale</div>
          <div className='w-[70.89px]  text-[8px] h-[14px] text-slate-300 '>Terms of Use</div>
          <div className='w-[102.23px] text-[8px]  h-[14px] text-slate-300 '>Nike Privacy Policy</div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
