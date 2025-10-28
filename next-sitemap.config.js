/** @type {import('next-sitemap').IConfig} */

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "md6ssm3p",
  dataset: "production",
  apiVersion: "2025-09-05",
  useCdn: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const fetchSanityDataServer = async (query, params = {}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
  }
};

export const GET_DYNAMIC_PAGES_SLUGS = `{
  "posts": *[_type == "post"] {
    "slug": slug.current,
    },
  "services": *[_type == "service"] {
    "slug": slug.current,
    category,
     }
}`;

async function getDynamicPages() {
  const res = await fetchSanityDataServer(GET_DYNAMIC_PAGES_SLUGS);

  const articles = res?.posts || [];
  const articlesPages = articles.map((article) => `/blog/${article.slug}`);

  const services = res?.services || [];
  const servicesPages = services.map(
    (service) => `/catalog/${service.category}/${service.slug}`
  );

  return [...articlesPages, ...servicesPages];
}

const sitemapConfig = {
  siteUrl: SITE_URL,
  changefreq: "monthly",
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/*" },
    ],
  },
  additionalPaths: async (config) => {
    const staticPages = [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/about",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/blog",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/price",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/contacts",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/dentistry",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/aesthetic",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/catalog/dentistry",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/catalog/aesthetic",
        changefreq: "monthly",
        priority: 0.7,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async (page) => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map((page) => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

// Експортуємо конфігурацію
export default sitemapConfig;
