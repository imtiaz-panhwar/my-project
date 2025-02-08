import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

// ✅ Configure the Sanity client (replace with your actual values)
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,     // Dataset (e.g., 'production')
  apiVersion: '2024-01-01', // API version (use a recent one)
  useCdn: true, // Enables Sanity's CDN for performance
});

// ✅ Initialize the Image URL Builder
const builder = imageUrlBuilder(client);

// ✅ Function to generate a usable image URL
export function urlForImage(source: any) {
  return builder.image(source);
}
