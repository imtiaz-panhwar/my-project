import  client  from "../../sanity/lib/client";
import { IProduct } from "../../../type/product";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Correct function import
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";

export const getProductData = async () => {
  const res = await client.fetch(`
    *[_type == "product"]{
      _id,
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      slug,
      description,
      "image_url": image.asset->url
    }
  `);

  return res;
};

export default async function Home() {
  const data: IProduct[] = await getProductData(); // Fetch the products

  const calculateDiscountedPrice = (price: number, discountPercentage: number = 20): number => {
    // Assume a default 20% discount if no discount is specified
    return Math.round(price - (price * discountPercentage) / 100);
  };

  return (
<div className="max-w-[1440px] mx-auto bg-white">
      {/* Header Section */}
      <Navbar />

      <div className="w-[1440px] pl-12 pt-10 h-[51px]">
        <div className="w-[1344px] h-[36px] flex justify-between items-center">
          <div>
            <h1 className="font-semibold leading-7 text-[24px]">New(500)</h1>
          </div>
          
          <h1 className=" font-bold text-3xl">All products</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 ml-[20px]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[260px] h-auto bg-white p-4">
            {/* Categories Section */}
<div className="mb-6">
  <div className="w-[192px]">
    <ul className="space-y-4">
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/shoes">Shoes</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/sports-bras">Sports Bras</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/tops-tshirts">Tops & T-Shirts</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/hoodies-sweatshirts">Hoodies & SweatShirts</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/jackets">Jackets</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/trousers-tights">Trousers & Tights</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/shorts">Shorts</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/tracksuits">TrackSuits</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/jumpsuits-rompers">Jumpsuits & Rompers</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/skirts-dresses">Skirts & Dresses</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/socks">Socks</Link>
      </li>
      <li className="hover:text-blue-600 cursor-pointer">
        <Link href="/category/accessories-equipment">Accessories & Equipment</Link>
      </li>
    </ul>
  </div>
</div>
   </aside>
          {/* Divider between Sidebar and Products */}
          <div className="w-[11px] h-[700px] bg-gray-300 mx-4"></div>
          {/* Product Grid */}
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
                      {/* Use image_url instead of image */}
                      {product.image_url && (
        <Image
          src={urlFor(product.image_url)} // Convert Sanity image to URL
          alt={product.productName}
          width={700} // Set image width
          height={700} // Set image height
          layout="responsive" // Responsive image
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
      <div className="w-[1085px] h-[259px] ml-[350px] mt-24 mx-auto border-t-2 border-gray-200">
        <h1 className="mt-[40px] font-semibold font-sans text-[21px] leading-7">Related Categories</h1>

        <div className="w-[1092px] h-[174px]">
          <div className="flex justify-start gap-2">
            <div className="w-[160.83px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">Best Selling Products</div>
            <div className="w-[104.36px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">Best Shoes</div>
            <div className="w-[165.31px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">New Basket Ball Shoes</div>
            <div className="w-[151.56px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">New Football Shoes</div>
            <div className="w-[139.83px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">New Men&apos;s Shoes</div>
            <div className="w-[153.8px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">New Running Shoes</div>
            <div className="w-[140.92px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">Best Men&apos;s Shoes</div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="w-[145.64px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">New Jordan Shoes</div>
            <div className="w-[159.11px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">Best Women&apos;s Shoes</div>
            <div className="w-[155.47px] h-[34px] border-2 border-gray-300 rounded-full text-center p-1 text-[12px] font-Inter font-normal mt-4">Best Training & Gym</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
