import { IProduct } from '../../../type/product';

export const addToCart = (product: IProduct) => {
  if (!product || !product._id) {
    console.error('Invalid product');
    return;
  }

  const cart: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({
      ...product,
      inventory: 1,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  if (!productId) {
    console.error('Invalid productId');
    return;
  }

  let cart: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter((item) => item._id !== productId);

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  if (!productId || quantity < 0) {
    console.error('Invalid productId or quantity');
    return;
  }

  const cart: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    console.error('Product not found in the cart');
  }
};

export const getCartItems = (): IProduct[] => {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch (error) {
    console.error('Error parsing cart items', error);
    return [];
  }
};
