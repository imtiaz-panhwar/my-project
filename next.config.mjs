import 'dotenv/config'; // Loads .env.local

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,

    // Server-side environment variables (optional)
    SHIPENGINE_API_KEY: process.env.SHIPENGINE_API_KEY, 
    SHIPENGINE_FIRST_COURIER: process.env.SHIPENGINE_FIRST_COURIER,
    SHIPENGINE_SECOND_COURIER: process.env.SHIPENGINE_SECOND_COURIER,
    SHIPENGINE_THIRD_COURIER: process.env.SHIPENGINE_THIRD_COURIER,
    SHIPENGINE_FOURTH_COURIER: process.env.SHIPENGINE_FOURTH_COURIER,
  },
  reactStrictMode: true,
};

export default nextConfig;
