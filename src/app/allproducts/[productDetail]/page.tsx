import React from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/footer"

function ProductDetail() {
  return (
    
    <div className="max-w-[1440px] mx-auto bg-white">
      < Navbar3 />
      {/* Main Product Section */}
      <div className="flex gap-20 p-12">


        {/* Product Image */}
        <div className="flex-shrink-0 w-[653px] h-[653px] border border-gray-200 overflow-hidden">
          <Image
            src="/products/product3.png"
            width={653}
            height={653}
            alt="Product Image"
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between w-[376px] h-[1041]">

          {/* Product Title and Description */}
          <h1 className="text-[48px] font-semibold font-Poppins text-[#111111] mb-2">
            Air Force 1 PLT.AF.ORM
          </h1>
          <div className="w-[374.92px] h-[653px] pb-[1px]">
            <p className="text-gray-600 text-[15px] leading-7 font-Poppins font-normal">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
            </p>

            {/* Price and Add to Cart */}
            <div>
              <p className="text-xl font-semibold text-gray-800 mb-2">₹8,695.00</p>
              <button className="bg-[#000000] text-white px-6 py-3 rounded-full flex items-center gap-2">
                <ShoppingCartIcon className="w-6 h-6" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
