'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Ensure these environment variables are loaded correctly
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

// Check if required values are loaded properly
if (!apiVersion || !dataset || !projectId) {
  throw new Error('Sanity configuration is missing required values (apiVersion, dataset, or projectId).')
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
