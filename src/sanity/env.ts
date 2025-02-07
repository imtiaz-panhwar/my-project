// ./src/sanity/env.ts
export const apiVersion ='2025-01-19';  // Or the specific version you're using
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ugww8xuw"   ;
export const token = process.env.SANITY_API_TOKEN;


