import React from 'react';
import Image from 'next/image'; // Ensure you import Image from next/image
import Link from 'next/link';

function Footer2() {
  return (
    <div className="w-[1440px] h-[51px] flex justify-between mx-auto   bg-black">
      <div className="w-[1411px] h-[51px] text-[12px] text-slate-300 font-sans leading-5 mx-auto font-thin  flex justify-start items-center ">
        <div className="w-[672px] h-[32px] flex justify-start pt-2 ">
          <Image src="/india.png" width={15} height={18} alt="India Flag" /><p className='text-slate-300 text-[10px] ml-[2px] font-sans font-normal'>India <span className='ml-[10px]'>© 2023 Nike, Inc. All Rights Reserved</span></p>
            </div>

            <div className='flex justify-start gap-8 pt-2 ml-[-400px]'>
                <div >Terms of Use</div>
                <div >Terms of Sale</div>
                <div > Privacy Policy</div>
            </div>    
               <div className='w-[601px] h-[30px] flex justify-between mt-2 ml-[220px]'>   
                <div className='w-[45px] h-[27px]'><Image src="/visa.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/visae.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/master.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/bred.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/amn.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/dinners.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/discover.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/us.png" width={45} height={27} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/paytm.png" width={54} height={18} alt="India Flag" /></div>   
                <div className='w-[45px] h-[27px]'><Image src="/up.png" width={54} height={15} alt="India Flag" /></div>   
          </div> 
        </div>
    </div>
);
}

export default Footer2;
