// lib/createOrder.ts

import  client  from './client';

interface CartItem {
  productName: string;
  price: number;
  inventory: number;
}

export async function createOrderInSanity(cartItems: CartItem[]) {
  try {
    // Create an order in Sanity (you can define your own schema for orders in Sanity)
    const order = await client.create({
      _type: 'order', // This is based on your Sanity schema
      cartItems: cartItems.map(item => ({
        _type: 'cartItem',
        name: item.productName,
        price: item.price,
        quantity: item.inventory,
      })),
      totalAmount: cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
      ),
      status: 'pending', // You can change this as per your order status
    });

    return order._id; // Return the order ID to be used in the checkout process
  } catch (error) {
    console.error('Error creating order in Sanity:', error);
    throw new Error('Failed to create order in Sanity');
  }
}
