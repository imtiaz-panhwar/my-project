// lib/productUtils.ts  (or wherever you prefer to keep utils)
import client from "../../sanity/lib/client"; // Adjust path as needed
import { IProduct } from "../../../type/product"; // Adjust path as needed

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