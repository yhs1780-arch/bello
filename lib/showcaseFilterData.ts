/** 홈 '사장님의 가게, 화면에 이렇게' 섹션 - 지정 6종 이미지만 사용 (중복 없음) */

export type ShowcaseCategoryId = "all" | "medical" | "beauty" | "fnb" | "health" | "commerce";

export type ShowcaseItem = {
  id: string;
  category: ShowcaseCategoryId;
  image: string;
  title: string;
  sub: string;
};

/** 카테고리별 지정 고화질 이미지 URL (사용자 제공만 사용) */
const IMAGE_BY_CATEGORY: Record<ShowcaseCategoryId, string> = {
  all: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",       // 전체 대표 (비즈니스 성과)
  medical: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",    // 고급 병원 내부
  beauty: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",    // 세련된 에스테틱
  fnb: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",       // 고급 레스토랑 다이닝
  health: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",   // 프리미엄 피트니스
  commerce: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", // 세련된 쇼핑몰
};

/** 전체 탭: 6장 서로 다른 이미지 (대표 + 병원·뷰티·F&B·헬스·커머스 각 1장) */
const ALL_ITEMS: ShowcaseItem[] = [
  { id: "all1", category: "all", image: IMAGE_BY_CATEGORY.all, title: "데이터로 증명하는 성과", sub: "플랫폼별 노출·전환 최적화" },
  { id: "all2", category: "all", image: IMAGE_BY_CATEGORY.medical, title: "지역 검색 1페이지 고정", sub: "의료기관 플레이스·블로그 연동" },
  { id: "all3", category: "all", image: IMAGE_BY_CATEGORY.beauty, title: "K-뷰티 에스테틱 노출", sub: "샤오홍슈·당근 동네소식" },
  { id: "all4", category: "all", image: IMAGE_BY_CATEGORY.fnb, title: "고급 다이닝 예약 풀", sub: "메인 키워드 1~3위 장악" },
  { id: "all5", category: "all", image: IMAGE_BY_CATEGORY.health, title: "헬스·학원 신규 회원", sub: "지역 검색 상위·당근 광고" },
  { id: "all6", category: "all", image: IMAGE_BY_CATEGORY.commerce, title: "쇼핑몰 베스트 10 진입", sub: "리뷰 최적화·전환율 2배" },
];

/** 카테고리별 6개 카드 (동일 이미지, 제목·서브만 다름) */
const MEDICAL_ITEMS: ShowcaseItem[] = [
  { id: "m1", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "지역 검색 1페이지 고정", sub: "의료기관 플레이스·블로그 연동" },
  { id: "m2", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "초진 예약 마감", sub: "정형외과·치과 키워드 상위" },
  { id: "m3", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "유튜브 검색 상위", sub: "정보성 영상으로 환자 유입" },
  { id: "m4", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "한의원·체형교정 1위", sub: "영수증 리뷰·키워드 최적화" },
  { id: "m5", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "병원 플레이스 리뷰", sub: "전/후 노출 비교" },
  { id: "m6", category: "medical", image: IMAGE_BY_CATEGORY.medical, title: "의료 SEO 상위 노출", sub: "블로그·지도 통합 전략" },
];

const BEAUTY_ITEMS: ShowcaseItem[] = [
  { id: "b1", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "동네 미용실 단골 300명+", sub: "당근·지역광고 전/후" },
  { id: "b2", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "K-뷰티 에스테틱", sub: "샤오홍슈 해외 유입 400%" },
  { id: "b3", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "피부과 시술 문의 폭주", sub: "블로그·플레이스 연동" },
  { id: "b4", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "네일샵 중국인 필수 코스", sub: "왕홍 콘텐츠 기획" },
  { id: "b5", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "헤어살롱 예약률 상승", sub: "인스타·플레이스 동시 공략" },
  { id: "b6", category: "beauty", image: IMAGE_BY_CATEGORY.beauty, title: "뷰티 시술 전/후 노출", sub: "리뷰·사진 퀄리티 개선" },
];

const FNB_ITEMS: ShowcaseItem[] = [
  { id: "f1", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "고깃집 일 매출 1천만 원", sub: "플레이스 1페이지·단체 예약" },
  { id: "f2", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "한식당 점심 예약 풀", sub: "메인 키워드 1~3위 장악" },
  { id: "f3", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "카페 동네 맛집 등극", sub: "당근 저장 1,200+" },
  { id: "f4", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "빈 테이블 → 웨이팅", sub: "노출·리뷰 전략 전/후" },
  { id: "f5", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "와인바 데이트 1순위", sub: "인스타 그램 바이럴" },
  { id: "f6", category: "fnb", image: IMAGE_BY_CATEGORY.fnb, title: "식당 플레이스 전/후", sub: "사진·메뉴 최적화" },
];

const HEALTH_ITEMS: ShowcaseItem[] = [
  { id: "h1", category: "health", image: IMAGE_BY_CATEGORY.health, title: "헬스장 신규 회원 200명", sub: "지역 헬스 1위 노출" },
  { id: "h2", category: "health", image: IMAGE_BY_CATEGORY.health, title: "필라테스 오픈 멤버 조기 마감", sub: "당근 지역 광고 250건" },
  { id: "h3", category: "health", image: IMAGE_BY_CATEGORY.health, title: "태권도장 원생 모집 마감", sub: "동네 광고·상담 180건" },
  { id: "h4", category: "health", image: IMAGE_BY_CATEGORY.health, title: "영어학원 설명회 전 좌석", sub: "맘카페 입소문 전/후" },
  { id: "h5", category: "health", image: IMAGE_BY_CATEGORY.health, title: "피아노학원 신규 50명", sub: "교육 정보성 콘텐츠" },
  { id: "h6", category: "health", image: IMAGE_BY_CATEGORY.health, title: "학원·체육 시설 노출", sub: "플레이스·블로그 상위" },
];

const COMMERCE_ITEMS: ShowcaseItem[] = [
  { id: "c1", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "배달앱 카테고리 1위", sub: "깃발·리뷰 최적화 전/후" },
  { id: "c2", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "스마트스토어 베스트 10", sub: "리뷰 시딩·전환율 8%" },
  { id: "c3", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "쇼핑몰 구매 전환 2배", sub: "실제 후기·성분 정보" },
  { id: "c4", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "쿠팡 베스트 월 매출 2억", sub: "포토 리뷰·검색 상위" },
  { id: "c5", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "요기요 구역 1위", sub: "주문 수 2배·평점 4.8" },
  { id: "c6", category: "commerce", image: IMAGE_BY_CATEGORY.commerce, title: "치킨집 주문 2.5배", sub: "썸네일·리뷰 전면 개편" },
];

export function getShowcaseItemsForTab(tab: ShowcaseCategoryId): ShowcaseItem[] {
  switch (tab) {
    case "all": return ALL_ITEMS;
    case "medical": return MEDICAL_ITEMS;
    case "beauty": return BEAUTY_ITEMS;
    case "fnb": return FNB_ITEMS;
    case "health": return HEALTH_ITEMS;
    case "commerce": return COMMERCE_ITEMS;
  }
}

export const SHOWCASE_TABS: { id: ShowcaseCategoryId; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "medical", label: "병원/의료" },
  { id: "beauty", label: "뷰티/시술" },
  { id: "fnb", label: "F&B/식당" },
  { id: "health", label: "헬스/학원" },
  { id: "commerce", label: "커머스" },
];
