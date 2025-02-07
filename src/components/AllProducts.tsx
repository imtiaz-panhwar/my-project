"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../type/product" // Ensure this is the correct path
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries/product";
import { urlFor, urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { groq } from "next-sanity";

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for storing fetched products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Product[] = await client.fetch(allproducts); // Fetch products
        setProducts(response); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function
  }, []); // Dependency array ensures this runs only once

  return (
    <div className="bg-white p-4 w-[348px] h-[533px]">
      {products.map((product) => (
        <Link
          key={product._id} // Ensure each product has a unique key
          href={`/products/${product._id}`} // Use `_id` for dynamic routing
          className="block mt-4"
        >
          {/* Product Image */}
          {product.image && (
            <Image
            src={urlForImage(product.image)?.url() || "/fallback-image.jpg"}
            alt={product.title || "Fallback Image"}
            width={300}
            height={300}
            className="product-image"
          />
          
          )}
          {/* Product Details */}
          <p className="text-sm text-[#9E3500] mb-1">Just In</p>
          <h3 className="text-md font-medium mb-2">
            {product.productName || "Unnamed Product"}
          </h3>
          <p className="text-[15px] text-gray-500 mb-2">
            {product.category || "Uncategorized"}
          </p>
          <p>{product.colors || "N/A"}</p>
          <p className="text-xl font-semibold text-gray-800">
            MRP : ₹ {product.price?.toLocaleString("en-IN") || "0.00"}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default AllProductsPage;
