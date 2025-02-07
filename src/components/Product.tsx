import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { urlFor } from "@/sanity/lib/image";
import client from "@/sanity/lib/client";
import { IProduct } from "../../type/product";
import Navbar from "./Navbar";

interface ProductsProps {
  category: string;
}

const fetchProductsByCategory = async (category: string): Promise<IProduct[]> => {
  const query = `
    *[_type == "product" && category == $category]{
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
  `;
  return await client.fetch(query, { category });
};

const Products: React.FC<ProductsProps> = ({ category }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProductsByCategory(category);
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, [category]);

  return (
    <div className="">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Category: {category}</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="w-25% grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/allproducts/${product.slug?.current || product.slug}`}
              className="block bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative">
                {product.image_url && (
                  <Image
                    src={urlFor(product.image_url)}
                    alt={product.productName}
                    width={700}
                    height={700}
                    layout="responsive"
                    className="rounded-t-2xl"
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
                <p className="text-sm text-gray-600 mb-4">
                  {product.colors?.length || 1} Color(s)
                </p>
                <p className="text-xl font-bold text-gray-800">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>
                <AddToCartButton product={product} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;