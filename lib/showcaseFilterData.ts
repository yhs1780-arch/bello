/**
 * '사장님의 가게, 화면에 이렇게 매력적으로 보입니다' — 플랫폼별 모바일 노출 예시.
 * 세로형 아이폰 프레임 내부는 통이미지 1장만. src는 로컬 경로 고정(실제 캡처로 덮어씌움).
 */

export type ShowcaseCategoryId = "all" | "medical" | "beauty" | "fnb" | "health" | "commerce";

export type ShowcaseCard = {
  id: string;
  /** 로컬 이미지 경로 (public 기준). 없으면 fallback 표시 */
  image: string;
  platformLabel: string;
  title: string;
  sub: string;
};

/** 예시 이미지 6종 (생성/웹 확보). 세로형 앱 캡처 느낌. 실제 캡처로 교체 시 동일 경로 덮어쓰기. */
export const SHOWCASE_CARDS: ShowcaseCard[] = [
  {
    id: "naver",
    image: "/images/mockup-naver.png",
    platformLabel: "네이버 플레이스",
    title: "[네이버 1위 노출] 지역 검색 1페이지 고정",
    sub: "검색 최상단 노출로 전화·길찾기·예약 유입 극대화",
  },
  {
    id: "daangn",
    image: "/images/mockup-danggeun.png",
    platformLabel: "당근마켓",
    title: "[당근마켓 동네소식] 조회수·단골 급증",
    sub: "단순 광고가 아닌 동네 맘카페 바이럴과 연계하여 예약 100건 돌파",
  },
  {
    id: "insta",
    image: "/images/mockup-insta.png",
    platformLabel: "인스타그램",
    title: "[인스타그램 릴스] 바이럴 조회수·예약 폭주",
    sub: "감성 콘텐츠로 150만 조회 달성, 당일 예약 마감까지",
  },
  {
    id: "xiaohongshu",
    image: "/images/mockup-xiaohongshu.png",
    platformLabel: "샤오홍슈",
    title: "[샤오홍슈 K-뷰티] 중국인 관광객 반응 폭발",
    sub: "해외 관광객 필수 코스 노출로 방문·예약 400% 상승",
  },
  {
    id: "baemin",
    image: "/images/mockup-baemin.png",
    platformLabel: "배달의민족",
    title: "[배민 랭킹 1위] 인기 메뉴 상단 노출",
    sub: "깃발·리뷰 전략으로 주문 수 극대화, 동네 배달 1위 달성",
  },
  {
    id: "blog",
    image: "/images/mockup-blog.png",
    platformLabel: "네이버 블로그",
    title: "[네이버 블로그] 검색 파급력·유입 1위",
    sub: "블로그 시딩으로 키워드 1페이지 장악, 일 유입 1만 뷰 돌파",
  },
];

export const SHOWCASE_TABS: { id: ShowcaseCategoryId; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "medical", label: "병원/의료" },
  { id: "beauty", label: "뷰티/시술" },
  { id: "fnb", label: "F&B/식당" },
  { id: "health", label: "헬스/학원" },
  { id: "commerce", label: "커머스" },
];

export function getShowcaseCardsForTab(_tab: ShowcaseCategoryId): ShowcaseCard[] {
  return SHOWCASE_CARDS;
}
