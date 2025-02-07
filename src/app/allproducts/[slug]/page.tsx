import client from "../../../sanity/lib/client";
import { IProduct } from "../../../../type/product";
import { notFound } from "next/navigation";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/footer";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

// Define the type for params
interface ProductDetailParams {
  slug: string;
}

const ProductDetail = async ({ params }: { params: ProductDetailParams }) => {
  const { slug } = params; // ✅ No need to use "await" here

  // Query Sanity CMS for product details
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      slug {
        current
      },
      description,
      price,
      category,
      brand,
      stock,
      "image_url": image.asset->url
    }
  `;

  // Fetch data from Sanity
  const product = await client.fetch<IProduct | null>(query, { slug });

  if (!product) {
    notFound(); // Handle the case if no product found
  }

  return (
    <div className="max-w-1440 mx-auto bg-white">
      <Navbar3 />
      <div className="flex flex-col lg:flex-row gap-8 ml-48 p-6 lg:p-12">
        <div className="flex-shrink-0 w-full lg:w-[653px] h-[400px] lg:h-[653px] border border-gray-200 overflow-hidden">
          {product.image_url && (
            <Image
              src={urlFor(product.image_url)} // ✅ Convert image to URL
              alt={product.productName}
              width={300}
              height={300}
              layout="responsive"
            />
          )}
        </div>
        <div className="flex flex-col justify-between w-full lg:w-[376px] lg:h-[700px]">
          <h1 className="text-3xl lg:text-[48px] font-semibold font-Poppins text-[#111111] mb-4">
            {product.productName}
          </h1>
          <p className="text-gray-900 text-base lg:text-[15px] leading-7 font-Poppins font-normal mb-6">
            {product.description}
          </p>
          <div className="w-full lg:w-[374.92px] h-auto lg:h-[653px] pb-[1px]">
            <p className="text-black text-base lg:text-[20px] leading-7 font-Poppins font-semibold mb-6">
              {product.category}
            </p>
            <div className="mb-4">
              <p className="text-xl lg:text-[28px] font-bold text-gray-800 mb-2">
                Price: ₹{product.price}/-
              </p>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
