import { groq } from "next-sanity";

export const allproducts = groq `*[_type == "product]`;
export const fourProducts = groq `*[_type == "product][0..3]`;
export const singleProduct = groq `*[_type == "product][1]`;