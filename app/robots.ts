import type { MetadataRoute } from "next";

const SITE_URL = "https://bellocompany.co.kr";

/**
 * robots.txt — 네이버·구글 등 검색엔진 봇 크롤링 규칙
 * @see https://searchadvisor.naver.com/guide/robots
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Yeti",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
