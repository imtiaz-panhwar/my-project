// pages/login.tsx
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import React from "react";
import Footer2 from "@/components/Footer2";


const checkOut = () => {

  return (
    <div className=" max-w-[1440px] mx-auto h-[screen] bg-white">
      <Navbar2 />
      <div className="flex justify-between w-[880px] h-[2376px] mt-6 mx-auto">
        <div className=" w-[440px] h-[2206px]">
          <div className="w-[440px] h-[386px]">
            <h1 className="font-Inter text-[ 21px] leading-6 font-medium">
              How would you like to get your order?
            </h1>
            <p className="font-Inter font-normal text-[15px] mt-2 leading-6">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More
            </p>
            <div className="w-[440px] h-[82px] border-2 border-black rounded-md mt-4">
              {" "}
              <div className="p-5 flex gap-4">
                <Image src="/box.png" width={24} height={24} alt="Box-image" />{" "}
                Deliver It
              </div>
            </div>
          </div>
          <div className="w-[440px] h-[1504px]">
            <div
              className="bg-white  w-[390px] h-[screen]"
              style={{
                top: "96px",
                left: "515.5px",
              }}
            >
              {/* Heading */}
              <h2 className="text-left text-[21px] font-bold leading-6 font-Inter pt-6  text-black">
                Enter your name and address:
              </h2>

              {/* First Name Input */}
              <div className="mb-4 pt-4 ">
                <input
                  type="name"
                  placeholder="First Name"
                  className="w-[438px] h-[50px] px-2 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Input */}
              <div className="mb-4 pt-1 ">
                <input
                  type="name"
                  placeholder="Last Name"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address Line 1 Input */}
              <div className="mb-1 pt-1 ">
                <input
                  type="name"
                  placeholder="Address Line 1"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message of Shipping */}
              <div className="text-left text-[11px] text-gray-600 mb-1 ml-4 font-inter">
                We do not ship to P.O. boxes
              </div>

              {/* Address Line 2 Input */}
              <div className="mb-4 pt-1 ">
                <input
                  type="name"
                  placeholder="Address Line 2"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address Line 3 Input */}
              <div className="mb-4 pt-1 ">
                <input
                  type="name"
                  placeholder="Address Line 3"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 pt-1  flex justify-between items-center space-x-2">
                {/* Postal Code */}
                <input
                  type="name"
                  placeholder="Postal Code"
                  className="w-[213px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Input Locality */}

                <input
                  type="name"
                  placeholder="Locality"
                  className="w-[213px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 pt-1  flex justify-between items-center space-x-2">
                {/* Input Male */}
                <input
                  type="name"
                  placeholder="Male"
                  className="w-[213px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Input Female */}

                <input
                  type="name"
                  placeholder="Female"
                  className="w-[213px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 flex justify-between items-center space-x-4">
              {/* Country Dropdown */}
                <div className=" flex mb-1 pt-1  gap-0">
                <select
                    className="w-[213px] h-[50px] px-2 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="India"
                >
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="in">
                      <span className="text-gray-200">State/Teritory</span>
                    </option>
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

                <div>
                <input
                    type="name"
                  placeholder="India"
                    className="w-[202px] h-[50px] px-2 border border-gray-300 font-normal placeholder-slate-950 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
              </div>

              <div className="w-full h-[50px] flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[14px] text-gray-600 font-sans leading-3 font-normal">
                    Save this address to my profile
                  </span>
                </div>
              </div>

              <div className="w-full h-[50px] flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <Image
                    src="/Rectangle.png"
                    width={18}
                    height={18}
                    alt="Box-image"
                  />
                  <span className="text-[14px] text-gray-600 font-sans leading-3 font-normal ml-2">
                    Make this my preferred address
                  </span>
                </div>
              </div>

              <h2 className="text-left text-[21px] font-bold leading-6 font-Inter pt-3  text-black">
                What's your contact information?
              </h2>

              <div className="mb-1 pt-4 ">
                <input
                  type="Email"
                  placeholder="Email"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message  */}
              <div className="text-left text-[11px] text-gray-600 mb-1 ml-4 font-inter">
                A confirmation email will be sent after checkout.
              </div>

              <div className="mb-1 pt-1 ">
                <input
                  type="name"
                  placeholder="Phone Number"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message  */}
              <div className="text-left text-[11px] text-gray-600 mb-1 ml-4 font-inter">
                A carrier might contact you to confirm delivery.
              </div>

              <h2 className="text-left text-[21px] font-bold leading-6 font-Inter pt-4  text-black">
                What's your PAN?
              </h2>

              <div className="mb-1 pt-4">
                <input
                  type="name"
                  placeholder="PAN"
                  className="w-[438px] h-[50px] px-4 border border-gray-300 font-normal placeholder-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message  */}
              <div className="text-left text-[11px] text-gray-600 mb-1 ml-4 font-inter">
                Enter your PAN to enable payment with UPI, Net Banking or local
                card methods
              </div>

              <div className="w-full h-[50px] flex justify-between items-center mb-1">
                <div className="flex items-left">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[14px] text-gray-600 font-sans leading-3 font-normal">
                    Save PAN details to Nike Profile
                  </span>
                </div>
              </div>

              <div className="w-full h-[50px] flex justify-between items-center mb-1">
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[11px] text-gray-900 font-Inter leading-2 font-extralight">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the Privacy Statement and
                    Cookie Policy. eShopWorld is a trusted Nike partner.
                  </span>
                </div>
              </div>

              {/* Sign In Button */}
              <div className=" mt-10">
                <button className="w-[433px] h-[50px] bg-gray-100 text-black font-normal text-[12px] rounded-full hover:bg-gray-300">
                  Continue
                </button>
              </div>

              <div className="w-[440px] h-[316px]">
                <div className="w-[440px]  h-[57px] font-Inter pt-3 text-[20px] text-black font-medium leading-6 text-left">
                  Delivery
                </div>
                <div className="w-[440px] mt-[21px] h-[49px] pt-3 font-Inter text-[20px] text-[#757575] font-medium leading-6 text-left">
                  Shipping
                </div>
                <div className="w-[440px] mt-[21px] h-[49px] pt-3 font-Inter text-[20px] text-[#757575] font-medium leading-6 text-left">
                  Billing
                </div>
                <div className="w-[440px] mt-[21px] h-[49px] pt-3 font-Inter text-[20px] text-[#757575] font-medium leading-6 text-left">
                  Payment
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[721px]ml-8 font-Inter text-[21px] leading-6 font-bold">
          <h1>OLDER SUMMARY</h1>
          <div className="w-[320px] h-[135px]">
            <p className="  text-[15px] leading-7 font-Inter font-normal">
              <pre>SubTotal                  ₹ 20 890.00</pre>
            </p>

            <div className="w-[334.62px] h-[50px]  border-b-2 border-gray-200 ">
              <p className="text-[15px] leading-7 font-Inter font-normal">
                <pre>Delivery/Shipping               Free</pre>
              </p>
          </div>

            <div className="w-[334.62px] h-[62px]  border-b-2 border-gray-200 ">
              <p className="  text-[15px] leading-7 font-Inter font-extrabold ">
                <pre>Total                     ₹ 20 890.00</pre>
              </p>
            </div>
          </div>
          <p className="  text-[9px] mt-2 leading-6 font-Inter font-normal">
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>
          <div className="w-[320px] h-[474px] ">
            <div className="w-[320.33px] h-[208px] ">
              <div className="  font-Inter text-[15px] ml-2 leading-6 font-medium">
                <h1>Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
              </div>
              <div className="w-[320] h-[478px] flex justify-between">
                <div className="  w-[408px] h-[408px]">
                  <Image
                    src="/imagecartpage.png"
                    width={200}
                    height={200}
                    alt="shoeimg"
                  />
                </div>
                <div className="w-[85] h-[120px] text-[13px] leading-6 font-Inter font-normal ml-2 ">
                  <h1>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h1>
                </div>
              </div>
            </div>

            <div className="w-[320.33px] h-[208px] ">
              
              <div className="w-[320] h-[478px] flex justify-between">
                <div className="  w-[408px] h-[408px]">
                  <Image
                    src="/shoesmall.png"
                    width={200}
                    height={200}
                    alt="shoeimg"
                  />
                </div>
                <div className="w-[85] h-[120px] text-[13px] leading-6 font-Inter font-normal mr-4 ">
                  <h1>Nike Air Max 97 SE Men's Shoes</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default checkOut;
