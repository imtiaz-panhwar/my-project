// pages/login.tsx
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const ContactUs = () => {
  return (
      
      <div className=" items-center max-w-[1440px] mx-auto h-[screen] mt-8 bg-white">
        < Navbar />

      <div className='w-[1440px] h-[132px]'>

        {/* header div */}
        <div className='w-[157.89px] h-[36px] text-[31px] font-Helvetica Neue font-medium leading-8 mx-auto '><h1>GET HELP</h1></div>

        {/* search div */}

      <div className="w-[457.33px] h-[56px] mt-[22px]  mx-auto flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4">
          <input
            type="search"
            placeholder="What can we help you with?"
            className="flex-grow bg-transparent outline-none text-gray-700 text-sm px-2"
          />
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.2 10.6a5.6 5.6 0 11-11.2 0 5.6 5.6 0 0111.2 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    <br />
    <div className='w-[1253px] h-[1042px] flex mx-auto'>
        {/* left side */}
        <div className='w-[939.75px] h-[1042px]mt-3 mx-auto border-r-2 border-gray-300'>

            <div className='w-[766.17px] h-[31px] text-[28px] mb-4  leading-8 font-Helvetica Neue font-medium '><h1>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1></div>

<p className=' text-[15px] font-Helvetica Neue leading-7 font-medium'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
<p className=' text-[16px] ml-[16px] font-Helvetica Neue leading-7 font-normal'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
<p className=' text-[15px] ml-[16px] font-Helvetica Neue leading-7 font-normal'>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
<p className=' text-[15px] ml-[16px] font-Helvetica Neue leading-7 font-normal'>Apply Pay</p>
<p className=' text-[16px]  font-Helvetica Neue leading-7 font-medium'><span className='underline text-black'>Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,  <span className='underline text-black'>joinus</span> today.</p>

<div className=' w-[260px] mt-[7.5px]  h-[70px] flex justify-between'>
  
    <div className='w-[106.13px] h-[39px] text-[16px] leading-6 font-medium pt-[4px] pl-[18px] rounded-full bg-black text-white'>JOIN US</div>
    <div className='w-[129.84px] h-[39px] text-[16px] leading-6 font-medium pt-[4px] pl-[18px] rounded-full bg-black text-white'>SHOP NIKE</div>
            </div>
<h1 className='font-bold font-Helvetica Neue leading-5'>FAQs</h1>
<p className='font-Helvetica Neue font text-[16px] font-semibold pt-2 leading-7'>Does my card need international purchases enabled?</p>
<p className='font-Helvetica Neue font text-[16px] font-normal leading-7'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
<p className='font-Helvetica Neue font text-[16px] font-normal mt-2 leading-7'>Please note, some banks may charge a small transaction fee for international orders.</p>
<p className='font-Helvetica Neue font text-[16px] font-semibold mt-2 leading-7'> Can I pay for my order with multiple methods?</p>
<p className='font-Helvetica Neue font text-[16px] font-normal leading-7'>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
<p className='font-Helvetica Neue font text-[16px] font-semibold pt-2 leading-7'>What payment method is accepted for SNKRS orders?</p>
<p className='font-Helvetica Neue font text-[16px] font-normal leading-7'>You can use any accepted credit card to pay for your SNKRS order.</p>
<p className='font-Helvetica Neue font text-[18px] font-semibold pt-2 leading-7'>Why don&apos;t I see Apple Pay as an option?</p>
<p className='font-Helvetica Neue font text-[15.4px] font-normal leading-7'>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
<p className='font-Helvetica Neue font text-[16px] font-normal pt-3 leading-7'>Was this answer helpful?</p>


<div className='w-[70px] h-[40px] flex justify-between text-black'>
<Image
              src="/products/ok1.png"
              width={40}
              height={20}
                           alt="OKimg"
            />
<Image
              src="/products/ok2.png"
              width={40}
              height={20}
              alt="OKimg"
            />
          </div>

<p className='font-Helvetica Neue font text-[20px] font-semibold text-gray-400 leading-8'>RELATED</p>
<p className='font-Helvetica Neue font text-[16px] underline text-black font-bold pt-1 ml-[36px] leading-7'>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
<p className='font-Helvetica Neue font text-[16px] underline text-black font-bold pt-1 ml-[36px] leading-7'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
        </div>


        {/* right side */}

        <div className='w-[313.25px] h-[1042px]  mx-auto'>
              <div className='leading-8 font-Helvetica Neue  text-center text-[28px] font-medium'>
            <h1>CONTACT US</h1>
          </div>

              <div className='w-[265.25px] h-[836px]  mx-auto'>

                  <div className='w-[265.25px] h-[242px] pt-4  '>
                    <div className='ml-[100.63px]'><Image
                       src="/mobile.png"
                       width={64}
                       height={64}
                       alt="mobileimg"
                      />
              </div>
                    <p className='text-center mt-3 text-[16px]  leading-6 font-medium font-Helvetica Neue'>000 800 919 0566</p>
                    <p className='text-center text-[15px] leading-5 font-medium font-Helvetica Neue'>Products & Orders: 24 hours a day,<br/> 7 days a week<br/>
                    Company Info & Enquiries: 07:30 -<br/> 16:30, Monday - Friday</p>
            </div>

                  <div className='w-[265.25] mt-6 h-[158px] pt-4 '>
                    <div className='ml-[100.63px]'><Image
                      src="/message.png"
                      width={64}
                      height={64}
                      alt="OKimg"
                      />
              </div>
                    <p className='text-center text-[15px] mt-3 leading-5 font-medium font-Helvetica Neue'>24 hours a day</p>
                    <p className='text-center text-[15px] leading-5 font-medium font-Helvetica Neue'>7 Days a Week</p>
            </div>

                  <div className='w-[265.25] mt-6 h-[158px] pt-4 '>
                    <div className='ml-[100.63px]'><Image
                      src="/mail.png"
                      width={64}
                      height={64}
                      alt="OKimg"
                      />
              </div>
                    <p className='text-center text-[15px] mt-3 leading-5 font-medium font-Helvetica Neue'>We&apos;ll reply within</p>
                    <p className='text-center text-[15px] leading-5 font-medium font-Helvetica Neue'>five business days</p>
                  </div>

                  <div className='w-[265.25] mt-6 h-[158px] pt-4 '>

                  <div className='ml-[100.63px]'><Image
                      src="/location.png"
                      width={40}
                      height={20}
                      alt="OKimg"
                      />
                    </div>
                    <p className='text-center text-[15px] mt-4 leading-5 font-medium font-Helvetica Neue'>STORE LOCATOR</p>
                    <p className='text-center text-[15px] leading-5 font-medium font-Helvetica Neue'>Find Nike retail stores near you</p>
            </div>
                   



          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;


