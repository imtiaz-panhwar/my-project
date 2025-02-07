import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ugww8xuw',
  dataset: 'production',
  apiVersion: '2025-01-19',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { userEmail, orderDetails } = req.body;

    if (!userEmail || !orderDetails || orderDetails.length === 0) {
      return res.status(400).json({ error: 'Missing or invalid required fields' });
    }

    const orderDoc = {
      _type: 'order',
      title: `Order for ${userEmail}`,
      customerEmail: userEmail,
      items: orderDetails,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const result = await client.create(orderDoc);
    res.status(201).json({ message: 'Order created', order: result });

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
