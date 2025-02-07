// cartActions.ts

import { IProduct } from "../../../type/product";

// Get cart items from localStorage
export const getCartItems = (): IProduct[] => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Add an item to the cart
export const addToCart = (item: IProduct) => {
  const existingCart = getCartItems();  // Fetch current cart from localStorage
  const existingItemIndex = existingCart.findIndex((cartItem) => cartItem._id === item._id);
  
  if (existingItemIndex > -1) {
    // If the item is already in the cart, increase the quantity
    existingCart[existingItemIndex].inventory += 1;
  } else {
    // If the item is not in the cart, add it
    existingCart.push(item);
  }

  // Save updated cart to localStorage
  localStorage.setItem("cartItems", JSON.stringify(existingCart));
};

// Remove an item from the cart
export const removeFromCart = (id: string) => {
  const updatedCart = getCartItems().filter((item) => item._id !== id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};

// Update the quantity of an item in the cart
export const updateCartQuantity = (id: string, quantity: number) => {
  const updatedCart = getCartItems().map((item) => {
    if (item._id === id) {
      return { ...item, inventory: quantity };
    }
    return item;
  });

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};
