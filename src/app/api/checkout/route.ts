import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import client from '@/sanity/lib/client'; // Import Sanity client

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: Request) {
  try {
    // Extract order details, including customer details, from the request
    const { items, customerName, customerEmail, customerPhone, shippingAddress } = await req.json();

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
    });

    // Calculate the total amount for the order
    const totalAmount = items.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );

    // Store the order details in Sanity
    await client.create({
      _type: 'order',
      
      customerName, // This will store "John De" if that's the value passed
      customerEmail,
      customerPhone,
      shippingAddress,
      items,
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalAmount,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
