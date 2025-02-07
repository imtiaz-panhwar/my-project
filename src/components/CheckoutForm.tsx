'use client';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error('Card element not found');
      setLoading(false);
      return;
    }

    // Create payment method with the 'card' type
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card', // Adding the type field
      card: cardElement, // Passing the card element
    });

    if (error) {
      console.error(error.message); // Log the error to the console (or show a custom message here)
      setLoading(false);
      return;
    }

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: 'your-price-id', // Ensure this exists
        userEmail: 'test@example.com', // Example data (add user's email if available)
        orderDetails: { productId: '12345', quantity: 1 } // Ensure product details exist
      }),
    });
    
    const session = await response.json();
    console.log('Checkout Session:', session); // Debugging

    if (session.error) {
      console.error(session.error); // Log the error to the console
      setLoading(false);
      return;
    }

    const { error: paymentError } = await stripe.confirmCardPayment(session.clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (paymentError) {
      console.error(paymentError.message); // Log the error to the console
      setLoading(false);
      return;
    }

    // Payment succeeded
    setLoading(false);
    // Redirect or show success message here
    alert('Payment succeeded!'); // For example, show an alert
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
}
