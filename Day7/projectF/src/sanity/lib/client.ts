import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId , } from '../env'

console.log('Sanity Project ID:',);  
console.log('Sanity Dataset:', );        
console.log('Sanity API Version:', );




export const client = createClient({
  projectId,
  dataset,
  token: process.env.SANITY_API_TOKEN,
  apiVersion,
  
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
