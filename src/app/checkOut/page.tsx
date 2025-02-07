"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique keys
import Navbar3 from "@/components/Navbar3";

// Stripe Initialization
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Customer form values
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // Fetch the cart items on component mount (use localStorage or state)
  useEffect(() => {
    // Replace with your actual cart retrieval logic (e.g., localStorage or state)
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  // Handle form value changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle checkout logic
  const handleCheckout = async () => {
    setLoading(true);

    // Prepare the cart data for Stripe checkout
    const cartData = cartItems.map((item) => ({
      name: item.productName,        // Item name
      price: item.price * item.inventory,  // Price * Quantity
      quantity: item.inventory,      // Item quantity
      _key: uuidv4(),                // Add a unique key to each item
    }));

    // Send cart data and customer details to your API
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartData,  // Include items with unique _keys
        customerName: formValues.name,
        customerEmail: formValues.email,
        customerPhone: formValues.phone,
        shippingAddress: formValues.address,
      }),
    });

    const { sessionId } = await res.json();

    const stripe = await stripePromise;
    if (stripe) {
      stripe.redirectToCheckout({ sessionId });
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar3 />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-xl font-extrabold text-center text-gray-900">Checkout</h2>

          <div className="mt-4 space-y-4">
            {/* Customer Info Form */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-sm"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div className="text-gray-700">
                    <div className="font-semibold">{item.productName}</div>
                    <div className="text-sm text-gray-500">Quantity: {item.inventory}</div>
                  </div>
                  <div className="font-medium text-gray-900">${(item.price * item.inventory).toFixed(2)}</div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <div className="text-lg font-bold text-gray-900">Total:</div>
            <div className="text-xl font-semibold text-gray-900">
              ${cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2)}
            </div>
          </div>

          <button
            className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleCheckout}
            disabled={loading || cartItems.length === 0}
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}
