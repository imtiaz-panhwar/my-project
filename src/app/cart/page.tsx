// pages/login.tsx
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

const Cart = () => {
  return (
    <div className="items-center max-w-[1440px] mx-auto h-screen mt-8 bg-white">
      <Navbar />

      <div className="w-[1100px] h-[547.89px] flex mx-auto mt-6">
        {/* Left side: Cart Items */}
        <div className="w-[733.33px] h-[547.89px]">
          <div className="w-[717.38px] bg-gray-100 border-b-2 border-gray-300 h-[62.89px]">
            <p className="pl-[15px] pt-[10px] text-[13px] leading-3 font-Inter font-medium">Free Delivery</p>
            <pre className="pl-[15px] pt-[10px] text-[11px] leading-4 font-Inter font-normal">
              Applies to orders of ₹ 14,000.00 or more.{' '}
              <span className="underline text-black">view Details</span>
            </pre>
            <h1 className="mt-3 text-[22px] font-Inter font-medium leading-8">Bag</h1>

            <div className="w-[717.33px] h-[436px]">
              {/* Cart Item 1 */}
              <div className="w-[717.33px] h-[218px] flex pt-5 gap-4 border-b-2 border-gray-200">
                <div className="w-[150px] h-[150px]">
                  <Image src="/imagecartpage.png" width={150} height={150} alt="shoeimg" />
                </div>
                <div className="w-[537.33px] h-[170px]">
                  <pre className="text-[15px] leading-5 font-medium font-Inter">
                    Nike Dri-FIT ADV TechKnit Ultra                MRP: ₹ 3,895.00
                  </pre>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Men&apos;s Short-Sleeve Running Top</p>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Ashen Slate/Cobalt Bliss</p>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <pre className="text-[13px] leading-6 text-gray-700 font-normal font-Inter">
                    Size L Quantity 1
                  </pre>

                  <div className="flex gap-4 leading-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-black"
                      viewBox="0 0 28 28"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-black"
                      viewBox="0 0 28 28"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7m5 4v6m4-6v6M9 3h6m-6 0H5m14 0h-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="w-[717.33px] h-[218px] ml-36 flex pt-5 gap-4 border-b-2 border-gray-200">
                
                <div className="w-[537.33px] h-[170px]">
                  <pre className="text-[15px] leading-5 font-medium font-Inter">
                    Nike Air Max 97 SE                            MRP: ₹ 16,995.00
                  </pre>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Men&apos;s Shoes</p>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Flat Pewter/Light Bone/Black/White</p>
                  <p className="text-[13px] leading-5 text-gray-700 font-normal font-Inter">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <pre className="text-[13px] leading-6 text-gray-700 font-normal font-Inter">
                    Size 8 Quantity 1
                  </pre>

                  <div className="flex gap-4 leading-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-black"
                      viewBox="0 0 28 28"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-black"
                      viewBox="0 0 28 28"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7m5 4v6m4-6v6M9 3h6m-6 0H5m14 0h-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Summary */}
        <div className="w-[350.67px] h-[295px]">
          <div>
            <p className="text-[21px] font-Inter font-medium leading-8">
              <h1>Summary</h1>
            </p>
          </div>
          <pre className="text-[15px] leading-7 font-Inter font-normal">Sub Total                     ₹ 20,890.00</pre>

          <div className="w-[334.62px] h-[50px] border-b-2 border-gray-200">
            <pre className="text-[15px] leading-7 font-Inter font-normal">Estimated Delivery & Handling       Free</pre>
          </div>

          <div className="w-[334.62px] h-[62px] border-b-2 border-gray-200">
            <pre className="text-[15px] leading-7 font-Inter font-medium">Total                         ₹ 20,890.00</pre>
          </div>
          <div className="w-[334.62px] h-[62px] bg-black rounded-full text-white text-[15px] pt-3 font-Inter font-medium leading-6 mt-4 ml-1 text-center">
            Member Checkout
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
