import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Star,
  Instagram,
  ShoppingBag,
  Stethoscope,
  Store,
  AlertTriangle,
  Building2,
  MessageCircle,
  Utensils,
  Camera,
} from "lucide-react";

/** 고퀄리티 후기 10개 (캐러셀 전용) */
export const testimonials = [
  {
    quote: "마케팅으로 모인 고객 피드백 덕분에 메뉴 간을 맞추고 지역 핫플이 되었습니다.",
    name: "마포구 식당",
    role: "대표",
    company: "마포구 식당",
    industry: "F&B/로컬",
    initial: "대",
  },
  {
    quote: "샤오홍슈 K-뷰티 관광 코스 스토리텔링 덕분에 중국인 환자 유입이 3배 늘었습니다.",
    name: "강남 성형외과",
    role: "원장",
    company: "강남 성형외과",
    industry: "뷰티/의료",
    initial: "원",
  },
  {
    quote: "신제품 런칭 후 쿠팡 포토 리뷰가 쌓이니 단숨에 1페이지에 진입하네요. ROAS가 폭발했습니다.",
    name: "코스메틱 브랜드",
    role: "마케팅 팀장",
    company: "코스메틱 브랜드",
    industry: "커머스/온라인",
    initial: "팀",
  },
  {
    quote: "네이버 플레이스 순위가 안 올라 답답했는데, 어뷰징 없는 단계적 로직 대응으로 드디어 1페이지 안착했습니다.",
    name: "피부과",
    role: "원장",
    company: "피부과",
    industry: "뷰티/의료",
    initial: "원",
  },
  {
    quote: "매번 인플루언서 섭외하느라 버리던 시간을 아꼈습니다. 실행사 직거래라 피드백 속도가 예술입니다.",
    name: "종합쇼핑몰",
    role: "대표",
    company: "종합쇼핑몰",
    industry: "커머스/온라인",
    initial: "대",
  },
  {
    quote: "강남언니, 바비톡 리얼 리뷰 관리 후 신규 내원 환자 문의가 폭주하고 있습니다.",
    name: "치과 의원",
    role: "원장",
    company: "치과 의원",
    industry: "뷰티/의료",
    initial: "원",
  },
  {
    quote: "당근마켓과 동네 맘카페 침투 기획력이 정말 탁월합니다. 동네 단골로 예약이 꽉 찼어요.",
    name: "프랜차이즈 미용실",
    role: "원장",
    company: "프랜차이즈 미용실",
    industry: "F&B/로컬",
    initial: "원",
  },
  {
    quote: "100% 실사용자로만 트래픽을 올려주니 포털 블라인드(제재) 걱정이 없어 너무 든든합니다.",
    name: "건기식 브랜드",
    role: "대표",
    company: "건기식 브랜드",
    industry: "커머스/온라인",
    initial: "대",
  },
  {
    quote: "화해 랭킹 진입 후 입소문을 타서 올리브영 오프라인 입점까지 성공했습니다. 최고의 비즈니스 파트너입니다.",
    name: "뷰티 브랜드",
    role: "대표",
    company: "뷰티 브랜드",
    industry: "커머스/온라인",
    initial: "대",
  },
  {
    quote: "비싼 대행사 수수료 내다가 실행사 다이렉트로 바꿨는데, 마케팅 효율이 200% 이상 개선됐습니다.",
    name: "패션 쇼핑몰",
    role: "대표",
    company: "패션 쇼핑몰",
    industry: "커머스/온라인",
    initial: "대",
  },
];

export const beautyTestimonials = testimonials.filter((t) => t.industry === "뷰티/의료");

/** 뷰티/의료 페이지 전용 후기 10개 */
export const beautyTestimonialsFull = [
  { quote: "샤오홍슈 K-뷰티 관광 코스 기획 덕분에 글로벌 환자 문의가 3배 늘었습니다.", name: "강남 성형외과", role: "원장", company: "강남 성형외과", initial: "원" },
  { quote: "의료법 리스크 없이 강남언니 리얼 리뷰가 쌓이니 신규 내원율이 수직 상승했습니다.", name: "치과 의원", role: "원장", company: "치과 의원", initial: "원" },
  { quote: "바비톡·굿닥 병원 후기 동시 진행으로 검색 상위 노출이 안정적으로 유지됩니다.", name: "홍대 피부클리닉", role: "대표", company: "홍대 피부클리닉", initial: "대" },
  { quote: "당근 동네생활 병원 경험담과 블라인드 의료 후기 시너지로 지역 신뢰도가 크게 올랐어요.", name: "강남 성형외과", role: "대표", company: "강남 성형외과", initial: "대" },
  { quote: "인스타·유튜브 브이로그 리뷰까지 한 팀에서 맡기니 중국인 환자 유입이 체감되게 늘었습니다.", name: "압구정 성형외과", role: "대표원장", company: "압구정 성형외과", initial: "대" },
  { quote: "미용의료 카페와 페이스북 지역 모임까지 커버해 주셔서 오프라인 방문이 눈에 띄게 늘었습니다.", name: "이태원 뷰티클리닉", role: "대표원장", company: "이태원 뷰티클리닉", initial: "대" },
  { quote: "의료법 지키면서 해외·국내 밸런스 맞춰 주셔서 이제 마케팅만 믿고 병원 운영할 수 있습니다.", name: "청담 피부과", role: "대표원장", company: "청담 피부과", initial: "대" },
  { quote: "실사용자 풀만 쓰다 보니 포털 제재 걱정이 없고, 예약 전환도 자연스럽게 늘었어요.", name: "스킨클리닉 제주", role: "대표", company: "스킨클리닉 제주", initial: "대" },
  { quote: "대행사 수수료 없이 실행사 직거래로 바꾼 뒤 품질도 말한 대로 나와 재계약했습니다.", name: "청담 헤어살롱", role: "사업부장", company: "청담 헤어살롱", initial: "사" },
  { quote: "K-뷰티 관광 코스 스토리텔링과 강남언니 리뷰 관리 덕분에 글로벌·국내 환자 밸런스가 완벽해졌습니다.", name: "강남 세인성형외과", role: "대표원장", company: "강남 세인성형외과", initial: "대" },
];

export const localTestimonials = testimonials.filter((t) => t.industry === "F&B/로컬");

/** 로컬/F&B 페이지 전용 후기 10개 이상 */
export const localTestimonialsFull = [
  { quote: "마케팅으로 모인 고객 피드백 덕분에 메뉴 간을 맞추고 지역 핫플이 되었습니다.", name: "마포구 식당", role: "대표", company: "마포구 식당", initial: "대" },
  { quote: "당근마켓과 동네 맘카페 침투 기획력이 정말 탁월합니다. 동네 단골로 예약이 꽉 찼어요.", name: "프랜차이즈 미용실", role: "원장", company: "프랜차이즈 미용실", initial: "원" },
  { quote: "캐치테이블 웨이팅이 늘어나면서 점심시간이 막혀서 손님 받기 바쁩니다.", name: "위례 샤브샤브", role: "대표", company: "위례 샤브샤브", initial: "대" },
  { quote: "네이버 플레이스 1페이지 고정 후 전화 문의가 2배 이상 늘었어요.", name: "마곡 한식당", role: "사장", company: "마곡 한식당", initial: "사" },
  { quote: "블로그 리뷰와 영수증 리뷰 동시에 쌓아주니 검색 노출이 안정적입니다.", name: "강남 카페", role: "대표", company: "강남 카페", initial: "대" },
  { quote: "당근 동네생활에서 맛집으로 소개되니 지역 주민들이 많이 찾아옵니다.", name: "석모도 맛집", role: "사장", company: "석모도 맛집", initial: "사" },
  { quote: "매크로 없이 실방문 기반으로만 해주셔서 블라인드 걱정이 없습니다.", name: "홍대 음식점", role: "대표", company: "홍대 음식점", initial: "대" },
  { quote: "웨이팅·플레이스·리뷰를 한 팀에서 맡기니 관리 부담이 확 줄었어요.", name: "이태원 레스토랑", role: "원장", company: "이태원 레스토랑", initial: "원" },
  { quote: "지역 단골 랭킹 올라가니까 재방문률이 눈에 띄게 좋아졌습니다.", name: "성수동 카페", role: "대표", company: "성수동 카페", initial: "대" },
  { quote: "무료 진단부터 실행까지 투명하게 진행해 주셔서 믿고 맡겼습니다.", name: "건대 맛집", role: "사장", company: "건대 맛집", initial: "사" },
];

export const commerceTestimonials = testimonials.filter((t) => t.industry === "커머스/온라인");

/** 커머스 페이지 전용 후기 10개 이상 */
export const commerceTestimonialsFull = [
  { quote: "신제품 런칭 후 쿠팡 포토 리뷰가 쌓이니 단숨에 1페이지에 진입하네요. ROAS가 폭발했습니다.", name: "코스메틱 브랜드", role: "마케팅 팀장", company: "코스메틱 브랜드", initial: "팀" },
  { quote: "매번 인플루언서 섭외하느라 버리던 시간을 아꼈습니다. 실행사 직거래라 피드백 속도가 예술입니다.", name: "종합쇼핑몰", role: "대표", company: "종합쇼핑몰", initial: "대" },
  { quote: "100% 실사용자로만 트래픽을 올려주니 포털 블라인드(제재) 걱정이 없어 너무 든든합니다.", name: "건기식 브랜드", role: "대표", company: "건기식 브랜드", initial: "대" },
  { quote: "화해 랭킹 진입 후 입소문을 타서 올리브영 오프라인 입점까지 성공했습니다. 최고의 비즈니스 파트너입니다.", name: "뷰티 브랜드", role: "대표", company: "뷰티 브랜드", initial: "대" },
  { quote: "비싼 대행사 수수료 내다가 실행사 다이렉트로 바꿨는데, 마케팅 효율이 200% 이상 개선됐습니다.", name: "패션 쇼핑몰", role: "대표", company: "패션 쇼핑몰", initial: "대" },
  { quote: "스마트스토어 만점 유지하고 포토 리뷰만 쌓았더니 전환율이 2배 넘게 올랐어요.", name: "생활용품 브랜드", role: "대표", company: "생활용품 브랜드", initial: "대" },
  { quote: "쿠팡 베스트 노출 목표로 시딩했는데 한 달 만에 목표 달성했습니다.", name: "주방용품 쇼핑몰", role: "마케팅 팀장", company: "주방용품 쇼핑몰", initial: "팀" },
  { quote: "글로우픽 뷰티 앱 랭킹 들어가니까 오프라인 매장 문의가 폭주해요.", name: "스킨케어 브랜드", role: "대표", company: "스킨케어 브랜드", initial: "대" },
  { quote: "첫 페이지 노출이 안 되던 상품이 리뷰 시딩 후 검색 상위로 올라왔습니다.", name: "의류 쇼핑몰", role: "대표", company: "의류 쇼핑몰", initial: "대" },
  { quote: "무신사 타겟 포토 리뷰만으로 브랜드 인지도가 확 올라갔어요.", name: "스트릿웨어 브랜드", role: "마케팅 팀장", company: "스트릿웨어 브랜드", initial: "팀" },
];

/** Data-Driven Success 카드 6개+ */
export const successCards = [
  { title: "마곡 한식당", desc: "오픈 전부터 세팅한 결과, 월 매출 수직 상승.", metric: "월 매출 6,018만 원 수직 상승", category: "F&B" },
  { title: "위례 샤브샤브", desc: "실사용자 리뷰 기반으로 최고 매출 경신.", metric: "최고 매출 경신, 4,874만 원 증가", category: "F&B" },
  { title: "코스메틱 브랜드", desc: "실사용자 포토 리뷰 시딩으로 1페이지 진입 및 ROAS 300% 돌파.", metric: "ROAS 300% 돌파, 단숨에 1페이지 진입", category: "커머스" },
  { title: "강남 성형외과", desc: "샤오홍슈 K-뷰티 관광 코스로 해외 환자 유입 3배.", metric: "해외 환자 유입 3배", category: "뷰티/의료" },
  { title: "프랜차이즈 미용실", desc: "당근·동네 맘카페 기획으로 단골 예약 포화.", metric: "동네 단골 예약 포화", category: "F&B" },
  { title: "패션 쇼핑몰", desc: "대행사 제거 후 다이렉트 실행으로 마케팅 효율 200% 이상.", metric: "마케팅 효율 200% 이상 개선", category: "커머스" },
];

/** /cases 전용: 9개 이상 성공 사례 (Masonry용) */
export const caseStudies = [
  ...successCards,
  { title: "청담 피부과", desc: "의료법 준수 K-뷰티 코스로 해외·국내 환자 밸런스.", metric: "신규 내원 2배", category: "뷰티/의료" },
  { title: "화해 랭킹 브랜드", desc: "실사용자 리뷰 시딩으로 화해·글로우픽 상위 노출.", metric: "랭킹 1위 유지", category: "커머스" },
  { title: "석모도 맛집", desc: "블로그·플레이스 동시 공략으로 검색 1페이지 고정.", metric: "상위노출 23일째", category: "F&B" },
  { title: "건대 맛집", desc: "당근 동네생활 + 네이버 플레이스로 지역 유입 극대화.", metric: "문의 3배 증가", category: "F&B" },
  { title: "압구정 성형외과", desc: "샤오홍슈·인스타 스토리텔링으로 중국인 환자 유입.", metric: "해외 문의 3배", category: "뷰티/의료" },
];

export type PlatformCategory = {
  title: string;
  items: string[];
};

export const platformCategories: PlatformCategory[] = [
  {
    title: "네이버 계열 (국내 최다)",
    items: [
      "네이버 플레이스(영수증 리뷰)",
      "네이버 예약 리뷰",
      "네이버 블로그 리뷰",
      "네이버 카페 리뷰",
      "네이버 지식인 Q&A",
      "네이버 포스트",
      "네이버 쇼핑(스마트스토어)",
      "네이버 페이 구매후기",
      "네이버 지도 리뷰",
    ],
  },
  {
    title: "검색·지도",
    items: [
      "카카오맵",
      "카카오톡 채널 후기",
      "다음지도",
      "구글맵",
      "애플맵",
      "티맵",
      "Yelp",
      "트립어드바이저",
    ],
  },
  {
    title: "배달·음식",
    items: ["요기요", "쿠팡이츠", "위메프오", "배민 B마트", "먹깨비"],
  },
  {
    title: "숙박·여행",
    items: ["여기어때", "야놀자", "에어비앤비", "아고다", "Booking.com", "트립닷컴"],
  },
  {
    title: "이커머스·오픈마켓",
    items: ["쿠팡", "11번가", "G마켓", "위메프", "티몬", "SSG.COM", "롯데ON", "현대Hmall"],
  },
  {
    title: "패션·리셀",
    items: ["무신사", "W컨셉", "지그재그", "에이블리", "브랜디"],
  },
  {
    title: "뷰티·헬스케어",
    items: ["화해", "글로우픽", "올리브영", "랄라블라"],
  },
  {
    title: "의료·시술",
    items: ["강남언니", "바비톡", "미용의료 카페", "굿닥", "당근 동네생활(병원)"],
  },
  {
    title: "지역 기반",
    items: ["당근마켓", "당근 동네생활", "번개장터", "직방", "다방", "지역 맘카페"],
  },
];

export type PlatformItem = {
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  border: string;
};

export const platforms: PlatformItem[] = [
  { name: "네이버 플레이스", desc: "영수증·예약 리뷰로 검색 1페이지·블라인드 리스크 제로.", icon: MapPin, color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/20" },
  { name: "카카오맵", desc: "장소 검색 순위 상승과 리뷰 시딩으로 오프라인 유입 확보.", icon: MapPin, color: "from-yellow-500/20 to-amber-500/20", border: "border-yellow-500/20" },
  { name: "샤오홍슈", desc: "K-뷰티·맛집 관광 코스. 의료법 준수 스토리텔링.", icon: ShoppingBag, color: "from-red-500/20 to-rose-500/20", border: "border-red-500/20" },
  { name: "인스타그램", desc: "실제 이용 경험 UGC. 알고리즘 최적화 콘텐츠.", icon: Instagram, color: "from-pink-500/20 to-fuchsia-500/20", border: "border-pink-500/20" },
  { name: "바비톡", desc: "뷰티·의료 베스트 리뷰. 실사용자 인증·예약 전환.", icon: Star, color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/20" },
  { name: "강남언니", desc: "성형·피부 시술 1순위 채널. 예약 전환 극대화.", icon: Stethoscope, color: "from-cyan-500/20 to-teal-500/20", border: "border-cyan-500/20" },
  { name: "화해", desc: "코스메틱 랭킹·포토 리뷰. CVR·ROAS 상승.", icon: ShoppingBag, color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/20" },
  { name: "쿠팡", desc: "베스트·포토 리뷰 시딩. 1페이지 진입·실구매 인증.", icon: ShoppingBag, color: "from-sky-500/20 to-blue-500/20", border: "border-sky-500/20" },
  { name: "당근마켓·동네생활", desc: "단골 랭킹·바이럴. 지역 신뢰도·오프라인 유입.", icon: MessageCircle, color: "from-orange-500/20 to-rose-500/20", border: "border-orange-500/20" },
  { name: "틱톡", desc: "숏폼·트렌드 UGC. 자연스러운 브랜드 인지도.", icon: Camera, color: "from-slate-700/50 to-black/50", border: "border-slate-500/20" },
];

export const comparison = [
  {
    type: "기존 대행사",
    sub: "비싼 중간 수수료, 실행 품질 비가시",
    icon: Store,
    points: ["대행사 마진 30~50% 추가 부담", "실행 품질·속도 비가시", "단가 인상 시 수수료 동반 상승"],
    style: "border-amber-500/30 bg-amber-500/5",
    iconStyle: "text-amber-400",
  },
  {
    type: "불량 실행사",
    sub: "매크로·어뷰징으로 포털 제재 위험",
    icon: AlertTriangle,
    points: ["매크로·봇 기반 리뷰", "포털 블라인드·계정 제재", "브랜드 이미지 훼손"],
    style: "border-red-500/30 bg-red-500/5",
    iconStyle: "text-red-400",
  },
  {
    type: "벨로컴퍼니",
    sub: "100개 플랫폼 · 실인력 · 매출 구조부터",
    icon: Building2,
    points: [
      "100개 플랫폼 클라이언트가 원하면 다 가능",
      "10만 명급 실사용자 풀, 어뷰징 0%",
      "30일 안에 매출 구조 잡는 실행 노하우",
    ],
    style: "border-amber-400/40 bg-gradient-to-b from-amber-500/15 to-amber-500/5 ring-1 ring-amber-400/20",
    iconStyle: "text-amber-400",
  },
];

export type ReferenceCard = {
  platform: string;
  title: string;
  metric: string;
  sub: string;
  visual: "sales" | "shabu" | "magok" | "daangn" | "seokmodo" | "default";
};

export const references: ReferenceCard[] = [
  {
    platform: "실제 대행 업체 매출",
    title: "꾸준한 마케팅으로 매출 성장",
    metric: "신규→재방문 전환 · 매출 상승",
    sub: "우리 가게는 꾸준하게 노출되어야 합니다. 장사가 안 될 때만 하는 마케팅은 위험합니다.",
    visual: "sales",
  },
  {
    platform: "위례 샤브샤브집",
    title: "매출 4,874만원 증가 최고 매출 달성",
    metric: "2024.05 → 2025.03 실 매출 3,719만 → 8,594만",
    sub: "오픈 전부터 매듭과 진행. 실사용자 리뷰 기반.",
    visual: "shabu",
  },
  {
    platform: "마곡 한식집",
    title: "매출 6,018만원 증가 최고 매출 달성",
    metric: "방문자 리뷰 1,435 · 블로그 리뷰 123",
    sub: "2024.07 실 매출 3,607만 → 2025.05 9,625만원",
    visual: "magok",
  },
  {
    platform: "당근 동네생활",
    title: "바이럴 마케팅 결과",
    metric: "지역 단골 추천 · 병원 경험담",
    sub: "실제 사용자들이 경험담을 나누며 자연스럽게 추천.",
    visual: "daangn",
  },
  {
    platform: "석모도 맛집",
    title: "블로그 상위노출 23일째",
    metric: "인기 카페글 · 검색 상위 고정",
    sub: "실제 작업 사례. 꾸준한 노출로 신규·재방문 균형.",
    visual: "seokmodo",
  },
];
