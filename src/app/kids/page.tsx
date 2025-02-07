"use client"

import Products from '@/components/Product'
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

function Men() {
  return (
    <div className="max-w-[1440]screen mx-auto  px-4 ">
      <div>
      <Navbar />
      </div>
      <div className='flex justify-around items-center mt-12'>
<Products category="Men's Running Shoes"  />
</div>
<Footer />
    </div>
  )
}

export default Men