import client from "../../sanity/lib/client";
import { IProduct } from "../../../type/product";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";
import { urlForImage } from "@/sanity/lib/image";

export const getProductData = async (): Promise<IProduct[]> => {
  try {
    const res = await client.fetch(`
      *[_type == "product"]{
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        slug { current },
        description,
        "image_url": image.asset->url
      }
    `);
    return res;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default async function Home() {
  const data: IProduct[] = await getProductData(); // Fetch the products

  const calculateDiscountedPrice = (price: number, discountPercentage: number = 20): number => {
    return Math.round(price - (price * discountPercentage) / 100);
  };

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Navbar />

      <div className="w-[1440px] pl-12 pt-10 h-[51px]">
        <div className="w-[1344px] h-[36px] flex justify-between items-center">
          <h1 className="font-semibold leading-7 text-[24px]">New (500)</h1>
          <h1 className="font-bold text-3xl">All products</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 ml-[20px] flex">
        {/* Sidebar */}
        <aside className="w-[260px] bg-white p-4">
          <ul className="space-y-4">
            <li><Link href="/category/shoes" className="hover:text-blue-600">Shoes</Link></li>
            <li><Link href="/category/sports-bras" className="hover:text-blue-600">Sports Bras</Link></li>
            <li><Link href="/category/tops-tshirts" className="hover:text-blue-600">Tops & T-Shirts</Link></li>
            <li><Link href="/category/hoodies-sweatshirts" className="hover:text-blue-600">Hoodies & SweatShirts</Link></li>
            <li><Link href="/category/jackets" className="hover:text-blue-600">Jackets</Link></li>
            <li><Link href="/category/trousers-tights" className="hover:text-blue-600">Trousers & Tights</Link></li>
            <li><Link href="/category/shorts" className="hover:text-blue-600">Shorts</Link></li>
            <li><Link href="/category/tracksuits" className="hover:text-blue-600">TrackSuits</Link></li>
            <li><Link href="/category/jumpsuits-rompers" className="hover:text-blue-600">Jumpsuits & Rompers</Link></li>
            <li><Link href="/category/skirts-dresses" className="hover:text-blue-600">Skirts & Dresses</Link></li>
            <li><Link href="/category/socks" className="hover:text-blue-600">Socks</Link></li>
            <li><Link href="/category/accessories-equipment" className="hover:text-blue-600">Accessories & Equipment</Link></li>
          </ul>
        </aside>

        {/* Divider */}
        <div className="w-[11px] h-[700px] bg-gray-300 mx-4"></div>

        {/* Product Grid */}
        <div className="bg-white p-4 w-full">
          {data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.map((product) => (
                <Link key={product._id} href={`/allproducts/${product.slug.current}`}>
                  <div className="block bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg">
                    <div className="relative">
                      {product.image && (
                                  <Image
                                    src={urlForImage(product.image)?.url() || ""}
                                    alt={product.productName}
                                    width={300}
                                    height={300}
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
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
