/** @type {import('next').NextConfig} */
import 'dotenv/config'; // Automatically loads environment variables from .env.local

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**", // Matches all image paths
      },
    ],
  },
  env: {
    // Expose specific variables to the client-side
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  reactStrictMode: true, // Optional: Enable React's strict mode
};

export default nextConfig;
