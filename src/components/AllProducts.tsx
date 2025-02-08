"use client";


import React, { useEffect, useState } from "react";
import client from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries/product"
import Link from "next/link";
import { IProduct } from "../../type/product";
import  Image  from "next/image";
import { urlForImage } from "@/sanity/lib/image";


const AllProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: IProduct[] = await client.fetch(allproducts);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    // ... (rest of your JSX - no changes needed)
    <div className="bg-white p-4 w-[348px] h-[533px]">
      {products.map((product) => (
        <Link key={product._id} href={`/products/${product._id}`} className="block mt-4">
          {product.image && (
              <Image
                src={urlForImage(product.image)?.url() || "/fallback-image.jpg"}
                alt={product.productName || "Fallback Image"}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="product-image"
              />
            )}
          {/* ... (rest of your JSX) */}
        </Link>
      ))}
    </div>
    // ...
  );
};

export default AllProductsPage;