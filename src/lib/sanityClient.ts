import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8k581woh",
  dataset: "production",
  apiVersion: "2025-09-05",
  useCdn: true,
});
