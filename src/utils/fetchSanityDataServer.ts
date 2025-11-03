import { client } from '@/lib/sanityClient';

export const fetchSanityDataServer = async (
  query: string,
  params: Record<string, unknown> = {}
) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    // Intentionally swallow errors to avoid noisy logs in production
  }
};
