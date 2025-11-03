import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8k581woh';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-05';

export const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion,
  useCdn: true,
});
