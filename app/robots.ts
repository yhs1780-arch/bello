import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionSite } from "@/app/lib/site";

const SITE_URL = getSiteUrl();
const IS_PRODUCTION = isProductionSite();

/**
 * robots.txt — 네이버·구글 등 검색엔진 봇 크롤링 규칙
 * 프리뷰(비프로덕션) 배포 시에는 전체 비허용(noindex)으로 검색 노출 방지
 */
export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    return {
      rules: [{ userAgent: "*", allow: "/", disallow: "/" }],
      host: SITE_URL,
    };
  }
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
