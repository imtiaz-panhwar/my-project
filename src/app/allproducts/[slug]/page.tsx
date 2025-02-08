import client from "@/sanity/lib/client";
import { IProduct } from "../../../../type/product";
import { notFound } from "next/navigation";
import Navbar3 from "@/components/Navbar3";
import Footer from "@/components/footer";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface ProductDetailProps {
  params: Promise<{ slug: string }>; // Correct: params is a Promise
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = await params; // Correct: Await the params promise

  // Sanity query
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id, productName, description, price, category, brand, stock, image
  }`;

  // Fetch product data
  const product: IProduct | null = await client.fetch(query, { slug });

  if (!product) return notFound();

  return (
    <div className="max-w-1440 mx-auto bg-white">
      <Navbar3 />
      <div className="flex flex-col lg:flex-row gap-8 ml-48 p-6 lg:p-12">
        <div className="w-full lg:w-[653px] h-[400px] lg:h-[653px] border border-gray-200">
          {product.image && (
            <Image
              src={urlForImage(product.image)?.url() || ""}
              alt={product.productName}
              width={300}
              height={300}
              layout="responsive"
            />
          )}
        </div>
        <div className="w-full lg:w-[376px]">
          <h1 className="text-3xl lg:text-[48px] font-semibold">{product.productName}</h1>
          <p className="text-gray-900 text-base">{product.description}</p>
          <p className="text-xl lg:text-[28px] font-bold text-gray-800">Price: ₹{product.price}/-</p>
          <AddToCartButton product={product} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;