/** 성과 사례 30개 - 지정된 고화질 이미지 10종을 3회 반복 사용 */

export type CaseFilterCategory =
  | "전체"
  | "네이버 플레이스"
  | "당근마켓 동네소식"
  | "샤오홍슈/글로벌"
  | "인스타/유튜브 바이럴"
  | "배달/커머스";

export type SuccessCaseItem = {
  id: number;
  platform: string;
  category: CaseFilterCategory;
  badge: string;
  title: string;
  metrics: string;
  desc: string;
  image: string;
};

/** 지정 10종 이미지 URL (순서대로 3회 반복) */
const IMAGES: readonly string[] = [
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80", // 1. 파인다이닝/고깃집
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", // 2. 대형 미용실/헤어
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", // 3. 피부과/에스테틱
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", // 4. 카페/베이커리
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", // 5. 프리미엄 헬스장
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80", // 6. 치과/병원
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", // 7. 배달 전문점/푸드
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80", // 8. 패션/커머스
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", // 9. 필라테스/요가
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", // 10. 학원/교육
];

const RAW: Omit<SuccessCaseItem, "image">[] = [
  { id: 1, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "강남역 200평 고깃집, 빈 테이블에서 일 매출 1천만 원 달성", metrics: "메인 키워드 1페이지 장악", desc: "주변 직장인 타겟 검색량 분석 후, 영수증 리뷰와 블로그 시딩을 최적화하여 3주 만에 단체 회식 예약 풀 부킹 달성." },
  { id: 2, platform: "당근마켓 동네소식", category: "당근마켓 동네소식", badge: "당근마켓", title: "동네 골목 미용실, 당근 지역 광고로 신규 단골 300명 확보", metrics: "당근 단골 맺기 500% 폭증", desc: "원장님의 헤어 철학을 담은 동네소식 발행과 지역 타겟팅 광고로 맘카페 입소문까지 연결." },
  { id: 3, platform: "샤오홍슈", category: "샤오홍슈/글로벌", badge: "샤오홍슈", title: "홍대 K-뷰티 에스테틱, 중국인 관광객 필수 코스로 등극", metrics: "해외 고객 방문율 400% 상승", desc: "샤오홍슈 뷰티 왕홍 배포 및 한국 여행 코스형 콘텐츠 기획으로 방한 전 선예약 유도." },
  { id: 4, platform: "인스타그램 릴스", category: "인스타/유튜브 바이럴", badge: "인스타 릴스", title: "성수동 카페·베이커리, 릴스 바이럴로 주말 대기 2천 명 돌파", metrics: "조회수 150만, 웨이팅 3시간", desc: "비주얼 극대화 숏폼 기획 및 마이크로 인플루언서 동시 업로드로 2030 핫플 등극." },
  { id: 5, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "역삼 프리미엄 헬스장, 플레이스·지도 동시 상위로 신규 회원 200명", metrics: "지역 헬스 1위 노출", desc: "시설 사진·운영 시간·가격 정보 정리와 실이용자 후기 관리로 검색 시 상위 고정." },
  { id: 6, platform: "유튜브", category: "인스타/유튜브 바이럴", badge: "유튜브", title: "강남 대형 치과, 정보성 영상으로 고관여 환자 DB 싹쓸이", metrics: "임플란트 문의 월 150건 증가", desc: "원장님 신뢰도 기획 촬영 및 유튜브 SEO 세팅으로 검색 유입 극대화." },
  { id: 7, platform: "배달앱", category: "배달/커머스", badge: "배달앱", title: "부천 배달 전문 야식집, 깃발 최적화로 카테고리 1위", metrics: "주문 수 3배, 찜 2,000개 돌파", desc: "데이터 기반 핫스팟 타겟팅 및 썸네일·리뷰 이벤트 전면 개편." },
  { id: 8, platform: "스마트스토어", category: "배달/커머스", badge: "스마트스토어", title: "신생 여성 의류 쇼핑몰, 리뷰 최적화로 베스트 10 진입", metrics: "구매 전환율 8% 달성", desc: "체험단 포토 리뷰 선행 작업으로 초기 고객 구매 망설임 완벽 해결." },
  { id: 9, platform: "당근마켓", category: "당근마켓 동네소식", badge: "당근 지역광고", title: "수원 대형 필라테스, 전단지 끊고 당근으로 오픈 멤버 조기 마감", metrics: "상담 문의 250건, 등록률 60%", desc: "운동 목적별 A/B 테스트 광고 소재 기획 및 동네 커뮤니티 친화적 소통 운영." },
  { id: 10, platform: "맘카페", category: "당근마켓 동네소식", badge: "맘카페", title: "동탄 영어학원, 설명회 3일 전 전 좌석 예약 마감", metrics: "설명회 참석률 100%", desc: "지역 학부모 교육 고민을 나누는 정보성 게시글로 신뢰도 구축." },
  { id: 11, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "마곡 한식당, 플레이스 1페이지로 점심 단체 예약 풀", metrics: "메인 키워드 1~3위", desc: "직장인 점심·회식 검색 키워드 분석 후 영수증 리뷰와 메뉴 사진 최적화로 3주 만에 상위 고정." },
  { id: 12, platform: "당근마켓", category: "당근마켓 동네소식", badge: "당근마켓", title: "잠실 카페, 동네 맛집으로 입소문 나니 주말 웨이팅 일상", metrics: "당근 저장 1,200개", desc: "로스터리와 시그니처 메뉴 스토리를 동네소식에 담아 발행, 지역 타겟 광고로 첫 방문객 유입." },
  { id: 13, platform: "샤오홍슈", category: "샤오홍슈/글로벌", badge: "샤오홍슈", title: "청담 피부과, K-뷰티 관광 코스로 해외 예약 3배", metrics: "중국인 선예약 월 80건", desc: "의료법 준수 브랜드 스토리와 왕홍 콜라보로 방한 전 검색·예약까지 한 번에 연결." },
  { id: 14, platform: "인스타그램", category: "인스타/유튜브 바이럴", badge: "인스타", title: "이태원 와인바·카페, 인스타 그램으로 연인 데이트 1순위 등극", metrics: "주말 예약 2주 전 마감", desc: "분위기와 메뉴 비주얼에 맞춘 그램 전략과 마이크로 인플루언서 협업으로 20·30대 유입 극대화." },
  { id: 15, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "역삼 헬스장, 플레이스·지도 동시 상위로 신규 회원 200명", metrics: "지역 헬스 1위 노출", desc: "시설 사진·운영 시간·가격 정보 정리와 실이용자 후기 관리로 검색 시 상위 고정." },
  { id: 16, platform: "네이버 블로그", category: "네이버 플레이스", badge: "네이버 블로그", title: "판교 정형외과, 개원 1달 만에 초진 환자 예약 마감", metrics: "지역 의료 키워드 상위 노출", desc: "환자 통증 키워드 분석한 전문성 있는 질환 정보 포스팅 발행." },
  { id: 17, platform: "요기요", category: "배달/커머스", badge: "요기요", title: "강남 족발집, 깃발·리뷰 전략으로 구역 1위 달성", metrics: "주문 수 2배, 평점 4.8", desc: "핫스팟 데이터 기반 깃발 배치와 리뷰 이벤트로 노출·전환 동시 상승." },
  { id: 18, platform: "스마트스토어", category: "배달/커머스", badge: "스마트스토어", title: "건강기능식품 쇼핑몰, 리뷰 최적화로 구매 전환율 2배", metrics: "전환율 6% → 12%", desc: "실제 복용 후기와 성분 설명을 체계적으로 쌓아 검색 신뢰도와 장바구니 전환 개선." },
  { id: 19, platform: "당근마켓", category: "당근마켓 동네소식", badge: "당근마켓", title: "분당 필라테스 스튜디오, 당근 지역 광고로 오픈 멤버 조기 마감", metrics: "상담 200건, 등록 80명", desc: "다이어트·체형교정 목적별 광고 소재와 동네 입소문 연계." },
  { id: 20, platform: "맘카페", category: "당근마켓 동네소식", badge: "맘카페", title: "판교 피아노학원, 맘카페 입소문으로 신규 원생 50명", metrics: "설명회 참석 100% 전환", desc: "교육 철학과 원장님 인터뷰를 담은 정보성 글을 지역 맘카페에 자연스럽게 배포." },
  { id: 21, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "서초 파인다이닝, 플레이스 1페이지 고정 후 예약 풀", metrics: "데이트·모임 키워드 1위", desc: "메뉴·분위기 사진과 영수증 리뷰 전략으로 3주 만에 상위 고정." },
  { id: 22, platform: "당근마켓", category: "당근마켓 동네소식", badge: "당근마켓", title: "강남 대형 헤어살롱, 당근 동네소식으로 신규 단골 250명", metrics: "저장·문의 400% 증가", desc: "시술 전후 스토리와 원장 인터뷰로 동네 신뢰도 확보." },
  { id: 23, platform: "샤오홍슈", category: "샤오홍슈/글로벌", badge: "샤오홍슈", title: "명동 네일·에스테틱, 중국인 관광객 필수 체험 코스로 등록", metrics: "해외 방문객 비중 60%", desc: "K-뷰티 네일 트렌드 왕홍 콘텐츠와 예약 링크 세팅으로 방한 전 예약 유도." },
  { id: 24, platform: "인스타그램 릴스", category: "인스타/유튜브 바이럴", badge: "인스타 릴스", title: "건대 베이커리, 릴스 한 편으로 전국 택배 주문 폭주", metrics: "조회 80만, 주문 300% 증가", desc: "빵 제작 과정과 시그니처 메뉴 숏폼으로 바이럴 시드 뿌리기 및 택배 링크 전환." },
  { id: 25, platform: "네이버 플레이스", category: "네이버 플레이스", badge: "네이버 플레이스", title: "삼성동 프리미엄 헬스장, 지도·플레이스 상위로 신규 180명", metrics: "지역 검색 1~2위", desc: "시설·프로그램 정보와 후기 관리로 검색 노출 극대화." },
  { id: 26, platform: "유튜브", category: "인스타/유튜브 바이럴", badge: "유튜브", title: "송파 치과, 블로그·유튜브 연동으로 임플란트 문의 월 100건", metrics: "지역 치과 키워드 상위", desc: "환자 관점 질환·치료 정보 포스팅과 플레이스 연동으로 검색 유입부터 예약까지 일원화." },
  { id: 27, platform: "쿠팡이츠", category: "배달/커머스", badge: "쿠팡이츠", title: "광진구 치킨집, 쿠팡이츠 최적화로 주문 수 2.5배", metrics: "구역 내 5위 → 1위", desc: "썸네일·메뉴 구성·리뷰 관리 전면 개편으로 클릭률과 재주문률 동시 상승." },
  { id: 28, platform: "쿠팡", category: "배달/커머스", badge: "쿠팡", title: "주방용품·패션 브랜드, 쿠팡 베스트 10 진입 후 월 매출 2억", metrics: "카테고리 3위, 리뷰 5,000+", desc: "로켓배송 품질과 포토 리뷰 시딩 전략으로 검색 노출과 구매 전환 동시 상승." },
  { id: 29, platform: "당근마켓", category: "당근마켓 동네소식", badge: "당근 지역광고", title: "수원 대형 필라테스, 당근 지역 광고로 오픈 멤버 조기 마감", metrics: "상담 250건, 등록률 60%", desc: "운동 목적별 A/B 테스트와 동네 커뮤니티 친화적 소통으로 상담·등록 전환." },
  { id: 30, platform: "맘카페", category: "당근마켓 동네소식", badge: "맘카페", title: "동탄 영어·교육 학원, 설명회 전 좌석 예약 마감", metrics: "설명회 참석률 100%", desc: "학부모 교육 고민을 나누는 정보성 게시글로 신뢰도 구축 후 자연스러운 등록 유도." },
];

export const casesData: SuccessCaseItem[] = RAW.map((item) => ({
  ...item,
  image: IMAGES[(item.id - 1) % 10],
}));

export const CASE_FILTER_TABS: CaseFilterCategory[] = [
  "전체",
  "네이버 플레이스",
  "당근마켓 동네소식",
  "샤오홍슈/글로벌",
  "인스타/유튜브 바이럴",
  "배달/커머스",
];
