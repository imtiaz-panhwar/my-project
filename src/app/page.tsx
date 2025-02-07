"use client";

import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Featured from "@/components/Featured";
import Dont_Miss from "@/components/Dont-miss";
import Essentials from "@/components/Essentials";
import Products from "@/components/Product";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  return (
    <div className="max-w-[full] mx-auto px-4">
      <Navbar />
      
      <div className="flex justify-center my-4">
        <button
          onClick={() => router.push("/shipmentTracking")}
          className="bg-blue-600 text-white px-6 py-3 rounded text-lg sm:text-xl transition hover:bg-blue-700"
        >
          Track Shipment
        </button>
      </div>

      {/* Inner Section */}
      <div className="h-auto bg-[#F5F5F5] shadow-inner p-2 text-black flex flex-col items-center text-center">
        <p className="text-lg font-medium">Hello Nike App</p>
        <a 
          href="/path/to/your/app/file" 
          download 
          className="text-sm underline"
        >
          Download the app to access everything Nike
        </a>
      </div>

      <div className="w-full max-w-[1344px] mx-auto flex flex-col items-center text-center">
        <Image 
          src="/shoe.png" 
          width={1344} 
          height={700} 
          alt="Nike Air Max" 
          className="w-full h-auto"
        />
        <p className="mt-4 text-base sm:text-lg font-medium">First Look</p>
        <h1 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-semibold">
          NIKE AIR MAX PULSE
        </h1>
        <p className="mt-4 text-sm sm:text-base px-4 sm:px-20">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse designed to push you past your limits and help.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 rounded-full text-white bg-black hover:bg-gray-900 transition">
            Notify Me
          </button>
          <button className="px-6 py-2 rounded-full text-white bg-black hover:bg-gray-900 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      <Products category="Women's Shoes" />
      <Featured />
      <Products category="Men's Running Shoes" />
      <Dont_Miss />
      <Essentials />

      <div className="w-full max-w-[800px] mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
          { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
          { title: "Clothing", items: ["All Clothing", "Modern Shoes", "Hoodies & Pullovers", "Shirts and Tops"] },
          { title: "Kids", items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids Jordan Shoes", "Kids' Basketball Shoes"] },
        ].map((section, index) => (
          <div key={index} className="text-sm sm:text-base text-gray-500">
            <h2 className="font-bold text-black">{section.title}</h2>
            {section.items.map((item, idx) => (
              <p key={idx} className="mt-1">{item}</p>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
