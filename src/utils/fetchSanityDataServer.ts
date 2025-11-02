import { client } from '@/lib/sanityClient';

export const fetchSanityDataServer = async (
  query: string,
  params: Record<string, unknown> = {}
) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.warn('Sanity fetch failed:', error);
  }
};

import { clientOld } from '@/lib/sanityClientOld';

export const fetchSanityDataServerOld = async (
  query: string,
  params: Record<string, unknown> = {}
) => {
  try {
    return await clientOld.fetch(query, params);
  } catch (error) {
    console.warn('Sanity fetch failed:', error);
  }
};
