/**
 * 배포 환경별 사이트 URL
 * - Netlify 프로덕션: Netlify UI에서 SITE_URL=https://bellocompany.co.kr 설정
 * - Netlify 프리뷰: DEPLOY_PRIME_URL 자동 주입 (예: https://xxx--site.netlify.app)
 * - 로컬: .env.local의 SITE_URL 또는 기본값
 */
export function getSiteUrl(): string {
  return (
    process.env.SITE_URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://bellocompany.co.kr"
  );
}

/** 프로덕션 도메인(bellocompany.co.kr) 여부 — 프리뷰는 검색엔진 노출 방지용 noindex */
export function isProductionSite(): boolean {
  const url = getSiteUrl();
  return url.includes("bellocompany.co.kr");
}
