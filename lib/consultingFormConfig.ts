/** 상담 신청 폼 — Formspree 필드명(한글)과 UI 옵션 공통 정의 */

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqedwqlj";

export const FORM_FIELD_LABELS = {
  name: "성함",
  location: "소재지",
  industry: "업종",
  operatingPeriod: "운영기간",
  contact: "연락처",
  companyName: "상호명",
  naverPlaceUrl: "네이버플레이스 주소",
  marketingBudget: "한달 평균 마케팅 비용",
  monthlySalesRange: "월 평균 매출 구간",
  activeChannels: "진행중인 마케팅 채널",
  mainConcern: "지금 가장 큰 고민",
  preferredContactTime: "상담 편한 시간",
  leadSource: "유입경로",
  leadOrigin: "유입요청경로",
  privacyAgree: "개인정보동의",
} as const;

export const INDUSTRY_OPTIONS = [
  "F&B / 음식점",
  "카페 / 베이커리",
  "뷰티 / 미용",
  "의료 / 병원",
  "쇼핑몰 / 커머스",
  "숙박 / 여행",
  "교육 / 학원",
  "기타",
] as const;

export const OPERATING_PERIOD_OPTIONS = [
  "6개월 미만",
  "6개월 ~ 1년",
  "1년 ~ 3년",
  "3년 ~ 5년",
  "5년 이상",
] as const;

export const MARKETING_BUDGET_OPTIONS = [
  "사용하지 않음 (예산 협의)",
  "50만원 미만",
  "50만 ~ 100만원",
  "100만 ~ 300만원",
  "300만 ~ 500만원",
  "500만원 이상",
] as const;

export const SALES_RANGE_OPTIONS = [
  "500만원 미만",
  "500만 ~ 1,000만원",
  "1,000만 ~ 3,000만원",
  "3,000만 ~ 5,000만원",
  "5,000만 ~ 1억원",
  "1억원 이상",
  "비공개 / 협의",
] as const;

export const CHANNEL_OPTIONS = [
  "네이버 플레이스 / 검색",
  "네이버 블로그",
  "인스타그램",
  "당근마켓",
  "배달앱 (배민·쿠팡이츠 등)",
  "스마트스토어 / 자사몰",
  "쿠팡 / 오픈마켓",
  "기타",
] as const;

export const CONTACT_TIME_OPTIONS = [
  "오전 (9시~12시)",
  "오후 (12시~6시)",
  "저녁 (6시~9시)",
  "언제든 가능",
  "문자·카톡 우선",
] as const;

/** 폼 하단 [필수] 동의 모달용 요약 (개인정보보호법 수집·이용 동의) */
export const PRIVACY_CONSENT_SUMMARY = `개인정보 수집 및 이용 동의

1. 수집·이용 목적
   무료 컨설팅·마케팅 진단 신청 접수, 업종·매장 현황 확인, 맞춤 노출 전략 제안, 상담 일정 조율 및 서비스 안내

2. 수집 항목
   [필수] 성함, 소재지, 업종, 운영기간, 연락처, 상호명, 네이버플레이스 주소(보유 시), 한 달 평균 마케팅 비용(또는 예산), 월 평균 매출 구간, 진행 중인 마케팅 채널, 가장 큰 고민, 상담 편한 시간
   [자동] 유입 경로(광고·링크 출처), 접속 요청 경로

3. 보유·이용 기간
   상담·문의 처리 완료 후 1년
   (전자상거래 등에서의 소비자 보호에 관한 법률, 국세기본법 등 관련 법령에 따라 보관이 필요한 경우 해당 기간까지)

4. 동의 거부권 및 불이익
   귀하는 개인정보 수집·이용에 동의하지 않을 권리가 있습니다. 다만 필수 항목 미동의 시 무료 진단·상담 신청 및 결과 안내가 제한될 수 있습니다.`;
