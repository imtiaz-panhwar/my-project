"use client";

import { IProduct } from "../../type/product";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import React from "react";

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <button
      className="bg-[#0089B4] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
      onClick={handleAddToCart}
    >
      <ShoppingCartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
