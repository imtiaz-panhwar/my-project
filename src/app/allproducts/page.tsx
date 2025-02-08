// app/page.tsx
import { getProductData } from "../../sanity/lib/productUtils"; // Import the utility function
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";

import { IProduct } from "../../../type/product";


export default async function Home() {
  const data: IProduct[] = await getProductData();

  const calculateDiscountedPrice = (price: number, discountPercentage: number = 20): number => {
    return Math.round(price - (price * discountPercentage) / 100);
  };

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Navbar />

      <div className="w-[1440px] pl-12 pt-10 h-[51px]">
        <div className="w-[1344px] h-[36px] flex justify-between items-center">
          <div>
            <h1 className="font-semibold leading-7 text-[24px]">New(500)</h1>
          </div>
          <h1 className="font-bold text-3xl">All products</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 ml-[20px]">
        <div className="flex">
          <aside className="w-[260px] h-auto bg-white p-4">
            <div className="mb-6">
              <div className="w-[192px]">
                <ul className="space-y-4">
                  {/* ... (Your category links - no changes needed here) */}
                  <li className="hover:text-blue-600 cursor-pointer">
                    <Link href="/category/shoes">Shoes</Link>
                  </li>
                  {/* ... (Rest of your category links) */}
                </ul>
              </div>
            </div>
          </aside>

          <div className="w-[11px] h-[700px] bg-gray-300 mx-4"></div>

          <div className="bg-white p-4 w-full">
            {data.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((product) => (
                  <Link
                    key={product._id}
                    href={`/allproducts/${product.slug.current}`}
                    className="block bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="relative">
                    / ... in your component ...
                  {product.image && (
                  <Image
                    src={product.image.fields.file.url} // Get the URL string!
                     alt={product.productName}
                      width={700}
                       height={700}
                       layout="responsive"
                    />
                    )}
                      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Just In
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">
                        {product.productName}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                      <p className="text-sm text-gray-600 mb-4">1 Color</p>
                      <div className="mb-4">
                        <p className="text-xl font-bold text-gray-800 line-through">
                          MRP: ₹ {product.price.toLocaleString("en-IN")}
                        </p>
                        <p className="text-xl font-bold text-green-600">
                          Discounted: ₹ {calculateDiscountedPrice(product.price).toLocaleString("en-IN")}
                        </p>
                      </div>

                      <AddToCartButton product={product} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>

      {/* ... (Rest of your JSX - Related Categories section and Footer) */}
        <div className="w-[1085px] h-[259px] ml-[350px] mt-24 mx-auto border-t-2 border-gray-200">
          {/* ... */}
        </div>
      <Footer />
    </div>
  );
}