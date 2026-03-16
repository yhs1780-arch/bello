import { getSiteUrl } from "@/app/lib/site";

const SITE_URL = getSiteUrl();

/**
 * 검색엔진(네이버·구글)용 구조화 데이터
 * 마케팅사, 마케팅 실행사, 네이버플레이스, 광고, 바이럴 등 키워드 노출 지원
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "벨로컴퍼니",
    url: SITE_URL,
    description:
      "마케팅사 벨로컴퍼니는 마케팅 실행사로 네이버플레이스, 광고, 바이럴 마케팅을 직접 실행합니다. 마케팅·네이버플레이스·광고·바이럴 전문.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "ccoma2522@naver.com",
      telephone: "010-6409-9549",
      areaServed: "KR",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "벨로컴퍼니",
    url: SITE_URL,
    description: "마케팅 실행사, 네이버플레이스, 광고, 바이럴 마케팅 전문 벨로컴퍼니",
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "ko-KR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}
