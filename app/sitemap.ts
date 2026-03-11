import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/site";

const SITE_URL = getSiteUrl();

/**
 * sitemap.xml — 검색엔진에 페이지 목록 제공 (네이버·구글 인덱싱 지원)
 * 프리뷰 배포에서도 해당 URL 기준으로 생성됨 (테스트용)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/#case-section`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#consulting-form`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#process-section`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#company-intro`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
