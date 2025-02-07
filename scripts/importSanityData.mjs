import axios from 'axios';
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Upload an image to Sanity
 * @param {string} imageUrl - URL of the image to upload
 * @returns {string | null} - Asset ID of the uploaded image
 */
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Failed to upload image (${imageUrl}):`, error);
    return null;
  }
}

/**
 * Import product data into Sanity
 */
async function importData() {
  try {
    console.log('Starting data migration, please wait...');

    // Fetch products from the API
    const response = await axios.get('https://template-03-api.vercel.app/api/products');
    const products = response.data.data;

    for (const product of products) {
      let imageRef = null;

      // Upload image if it exists
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      const sanityProduct = {
        _type: 'product',
        productName: product.productName,
        category: product.category,
        price: product.price,
        inventory: product.inventory,
        colors: product.colors || [],
        status: product.status,
        description: product.description || '',
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      // Upload product to Sanity
      await client.create(sanityProduct);
      console.log(`✅ Product imported: ${sanityProduct.productName}`);
    }

    console.log('✅ Data migration completed successfully!');
  } catch (error) {
    console.error('❌ Error in migrating data:', error);
  }
}

// Start the import process
importData();
