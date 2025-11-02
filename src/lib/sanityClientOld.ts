import { createClient } from 'next-sanity';

export const clientOld = createClient({
  projectId: 'md6ssm3p',
  dataset: 'production',
  apiVersion: '2025-09-05',
  useCdn: true,
});
