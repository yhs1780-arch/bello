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

/** 메인 페이지 고객 후기 26개 (무한 마키 전용) */
export const mainPageTestimonials26: { quote: string; name: string; initial: string }[] = [
  { quote: "동네 상권이라 걱정했는데, 알아서 지역 주민들에게 저희 가게를 알려주셔서 지금은 매일 저녁 예약이 꽉 찹니다.", name: "마곡 한식당 사장님", initial: "마" },
  { quote: "홈페이지나 마케팅은 하나도 모르는데, 전부 맡아서 해주시니 저희는 요리에만 집중할 수 있어 너무 든든합니다.", name: "위례 샤브샤브 대표", initial: "위" },
  { quote: "단순 문의가 아니라 실제로 병원에 방문하시고 결제까지 이어지는 진짜 환자분들이 크게 늘었습니다.", name: "강남 성형외과 원장", initial: "강" },
  { quote: "제품의 장점을 실제 사용자들의 진정성 있는 후기로 풀어주셔서, 신제품인데도 주문량이 엄청납니다.", name: "코스메틱 브랜드 대표", initial: "코" },
  { quote: "주변 미용실 경쟁이 치열한데, 동네에서 머리 잘하는 곳으로 확실하게 소문을 내주셨어요.", name: "프랜차이즈 미용실 원장", initial: "프" },
  { quote: "샤오홍슈 같은 해외 플랫폼을 활용한 맞춤 스토리텔링 덕분에 중국인 고객들의 방문이 3배 이상 뛰었습니다.", name: "청담 피부과 원장", initial: "청" },
  { quote: "관심사가 비슷한 사람들을 모은 소통방(오픈채팅)을 만들어주신 덕분에 우리 브랜드의 찐팬 1,000명이 순식간에 생겼습니다.", name: "건강기능식품 대표", initial: "건" },
  { quote: "신학기 원생 모집이 막막했는데, 학부모님들 사이에서 자연스럽게 입소문이 나게 만들어 주셨습니다.", name: "분당 수학학원 원장", initial: "분" },
  { quote: "비수기라 렌터카 예약이 텅 비었었는데, 여행 준비 단계의 고객들에게 딱 맞춰 노출해주셔서 매출을 방어했습니다.", name: "제주 렌터카 업체", initial: "제" },
  { quote: "어렵고 무서운 치과 치료에 대한 걱정을 덜어주는 따뜻한 정보 덕분에 임플란트 상담이 매일 들어옵니다.", name: "압구정 치과 원장", initial: "압" },
  { quote: "뷰티에 관심 많은 분들과 직접 소통하는 커뮤니티가 활성화되니, 광고비 없이도 재구매율이 쑥쑥 오릅니다.", name: "비건 화장품 마케터", initial: "비" },
  { quote: "인테리어 시공 퀄리티를 지역 주민들에게 제대로 보여주셔서, 아파트 입주민들의 단체 시공 문의가 쏟아집니다.", name: "수원 인테리어 대표", initial: "수" },
  { quote: "낚시 용품 신제품을 냈는데, 낚시 매니아들이 모여있는 공간에 자연스럽게 스며들어 초도 물량이 완판됐습니다.", name: "아웃도어 브랜드 대표", initial: "아" },
  { quote: "체형 교정 후기가 꼼꼼하게 퍼지면서, 통증으로 고생하시던 분들의 예약 대기가 생길 정도입니다.", name: "강남 한의원 원장", initial: "강" },
  { quote: "예쁜 카페 인테리어가 소셜 미디어를 타고 퍼지면서 주말에는 전국에서 찾아오는 핫플이 되었습니다.", name: "부산 해운대 카페 사장님", initial: "부" },
  { quote: "필라테스 오픈 전부터 지역 주민들과 친근하게 소통해주신 덕분에 첫 달부터 회원 모집을 끝냈습니다.", name: "송파구 필라테스 원장", initial: "송" },
  { quote: "까다로운 수제 간식 재료를 투명하게 공개하는 전략으로 반려인들의 굳건한 신뢰를 얻었습니다.", name: "반려동물 간식 쇼핑몰", initial: "반" },
  { quote: "집중이 잘 되는 면학 분위기가 학생들 사이에서 알려지며 시험기간 전 좌석이 매진되었습니다.", name: "판교 스터디카페 사장님", initial: "판" },
  { quote: "기념일에 가기 좋은 와인바로 확실하게 자리 잡아서 연인들의 주말 예약이 줄을 잇고 있습니다.", name: "이태원 와인바 사장님", initial: "이" },
  { quote: "남성분들도 쉽게 따라 할 수 있는 피부 관리 팁을 제공해주셔서 화장품 구매 장벽이 확 낮아졌습니다.", name: "남성 화장품 스타트업", initial: "남" },
  { quote: "동네 반려인들 사이에서 원장님의 꼼꼼한 케어가 화제가 되며 애견 미용 단골이 꽉 찼습니다.", name: "일산 애견 미용실", initial: "일" },
  { quote: "저희 시그니처 빵 사진이 먹음직스럽게 퍼지면서 전국 단위로 택배 주문이 폭주하고 있습니다.", name: "대구 대형 베이커리", initial: "대" },
  { quote: "시설의 청결함과 전문성을 강조해주셔서 운동을 망설이던 분들의 첫 등록이 크게 늘었습니다.", name: "프리미엄 요가 스튜디오", initial: "프" },
  { quote: "근처에서 맛집을 찾는 분들의 지도 앱에 우리 가게가 가장 먼저 보이게 세팅해주셔서 웨이팅이 일상이 됐습니다.", name: "건대 고깃집", initial: "건" },
  { quote: "옷의 핏과 재질을 칭찬하는 생생한 후기가 쌓이면서 단일 품목 주간 완판을 기록했습니다.", name: "여성 의류 쇼핑몰", initial: "여" },
  { quote: "해외 환자 유치에 막막했는데, 외국인들이 주로 쓰는 SNS에 K-뷰티 코스로 소개되며 큰 효과를 봤습니다.", name: "명동 성형외과", initial: "명" },
];

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

/** /cases 블로그 아티클 형태: 고민 → 전략 → 결과 */
export type CaseStudyBlog = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  category: string;
};

export const caseStudiesBlog: CaseStudyBlog[] = [
  {
    title: "강남 OOO 성형외과: K-뷰티 해외 환자 유치 성공기",
    problem: "국내 환자 경쟁이 과열되어, 구매력이 높은 외국인 관광객을 유치하고 싶었지만 해외 SNS 활용 방법을 전혀 몰랐습니다.",
    solution: "단순히 병원 이름만 알리는 것이 아니라, K-뷰티에 관심이 많은 타겟을 분석하여 샤오홍슈 등 해외 채널에 맞춤형 브랜드 스토리텔링과 의료진의 전문성을 강조하는 콘텐츠를 지속적으로 배포했습니다.",
    result: "3개월 만에 해외 고객의 내원 상담 문의가 300% 급증하였고, 실제 수술 및 시술로 이어지는 전환율이 폭발적으로 상승했습니다.",
    category: "뷰티/의료",
  },
  {
    title: "OOO 건강기능식품: 초기 인지도 부족을 극복한 찐팬 확보 전략",
    problem: "뛰어난 성분으로 신제품을 출시했지만, 대형 브랜드들에 밀려 고객들에게 브랜드를 알릴 기회조차 없었습니다.",
    solution: "건강과 영양제에 관심이 많은 타겟들을 위해 유용한 건강 정보를 공유하는 소통방(오픈채팅 커뮤니티)을 직접 기획하고 운영했습니다. 강압적인 판매가 아닌, 진정성 있는 정보 제공으로 신뢰를 쌓았습니다.",
    result: "브랜드에 호감을 가진 1,000명 이상의 충성 고객 커뮤니티가 단기간에 형성되었고, 신제품 런칭 시 초도 물량이 커뮤니티 내에서 빠르게 완판되었습니다.",
    category: "커머스",
  },
  {
    title: "위례 OOO 프랜차이즈 미용실: 동네 상권 확실한 장악",
    problem: "주변에 대형 미용실이 연이어 오픈하면서 기존 단골들의 이탈이 발생하고, 신규 고객 유입이 뚝 끊긴 상태였습니다.",
    solution: "지역 주민들이 일상적으로 모이고 소통하는 지역 기반 커뮤니티 채널에 집중했습니다. 원장님의 친절함과 실제 손님들의 예쁜 머리 완성 사진을 자연스럽게 알리며 유대감을 형성했습니다.",
    result: "\"우리 동네에 이렇게 머리 잘하는 곳이 있었냐\"는 입소문이 퍼지며 잃었던 단골을 되찾은 것은 물론, 주말 예약이 100% 마감되는 성과를 거두었습니다.",
    category: "뷰티/의료",
  },
  {
    title: "건대 OOO 고깃집: 저녁 웨이팅이 끊이지 않는 맛집으로",
    problem: "맛과 서비스에는 자신이 있었지만, 골목 안쪽에 위치해 있어 길을 걷다 우연히 들어오는 워크인 손님이 부족했습니다.",
    solution: "근처에서 약속 장소를 찾거나 회식 장소를 검색하는 고객들을 정밀하게 타겟팅했습니다. 지도 앱과 지역 검색 결과에서 가게가 가장 매력적으로 보일 수 있도록 매장 정보와 실제 방문객들의 솔직한 후기를 꼼꼼하게 세팅했습니다.",
    result: "골목 안쪽이라는 지리적 단점을 완벽히 극복하고, 현재는 평일 저녁에도 웨이팅 명부를 작성해야 할 만큼 방문객이 2배 이상 상승했습니다.",
    category: "F&B",
  },
  {
    title: "마곡 OOO 한식당: 지역 주민에게만 알려지던 가게를 지역 대표 맛집으로",
    problem: "동네 상권이라 손님이 잘 안 찾아올까 봐 걱정이었고, 인근 대형 상가에 밀려 노출이 거의 없었습니다.",
    solution: "지역 주민들이 검색하는 키워드와 지도 앱 노출 구조를 분석한 뒤, 메뉴 사진과 리뷰를 체계적으로 정리하고 예약·길찾기 전환을 높이는 맞춤 전략을 적용했습니다.",
    result: "지역 주민들에게 자연스럽게 알려지기 시작했고, 매일 저녁 예약이 꽉 차 월 매출이 크게 상승했습니다.",
    category: "F&B",
  },
  {
    title: "송파 OOO 필라테스: 오픈 전부터 회원 모집을 끝낸 비결",
    problem: "필라테스 스튜디오를 오픈했지만 인근 경쟁이 많아 신규 회원 모집 방법을 몰랐습니다.",
    solution: "오픈 전부터 지역 주민들과 소통하는 채널을 만들고, 체형 교정·통증 완화 등 수요가 높은 키워드로 검색 노출을 높였습니다. 실제 수업 분위기와 강사 소개 콘텐츠로 신뢰를 쌓았습니다.",
    result: "오픈 첫 달부터 정원을 채웠고, 지금은 대기 명단이 생길 정도로 회원 모집이 안정화되었습니다.",
    category: "뷰티/의료",
  },
  {
    title: "역삼 OOO 헬스장: 지도 앱 상위 노출로 신규 회원 유입",
    problem: "헬스장 시설과 프로그램은 좋은데, 검색했을 때 잘 안 나와 신규 상담이 적었습니다.",
    solution: "네이버 플레이스와 지도 앱 정보를 정리하고, 실제 이용자 후기와 시설 사진을 꾸준히 관리해 검색 상위에 노출되도록 했습니다.",
    result: "몇 주 만에 지도·플레이스 검색 시 상위에 노출되기 시작했고, 전화 및 방문 상담이 크게 늘어 회원 수가 목표를 달성했습니다.",
    category: "F&B",
  },
  {
    title: "강남 OOO 치과: 임플란트 상담이 매일 들어오는 이유",
    problem: "치과 치료에 대한 두려움 때문에 상담 문의가 적고, 실제 방문 후 결제로 이어지는 비율이 낮았습니다.",
    solution: "어렵고 무서운 이미지 대신, 치료 과정과 통증 관리에 대한 따뜻한 정보 콘텐츠를 배포했습니다. 실제 환자 후기와 의료진 소개로 신뢰를 높였습니다.",
    result: "임플란트·심미치료 상담 문의가 매일 들어오기 시작했고, 방문 후 결제 전환율도 함께 상승했습니다.",
    category: "뷰티/의료",
  },
  {
    title: "OOO 코스메틱 브랜드: 신제품인데 주문량이 폭주한 비결",
    problem: "신제품을 출시했지만 대형 브랜드에 밀려 검색 노출과 주문 전환이 부족했습니다.",
    solution: "제품의 장점을 실제 사용자들의 진정성 있는 후기로 풀어내는 전략을 적용했습니다. 타겟이 모이는 채널에 맞춰 포토·영상 리뷰를 꾸준히 쌓았습니다.",
    result: "신제품임에도 주문량이 급증했고, 검색 상위 노출과 재구매율이 함께 올라갔습니다.",
    category: "커머스",
  },
  {
    title: "해운대 OOO 카페: 전국에서 찾아오는 주말 핫플이 되기까지",
    problem: "인테리어와 메뉴에 자신 있었지만 지역 밖에서는 인지도가 없었습니다.",
    solution: "예쁜 카페 인테리어와 메뉴를 소셜 미디어에 맞는 콘텐츠로 제작해 배포했습니다. 방문객 후기와 사진이 자연스럽게 퍼지도록 세팅했습니다.",
    result: "주말에는 전국에서 찾아오는 핫플이 되었고, 웨이팅이 일상이 되었습니다.",
    category: "F&B",
  },
  {
    title: "분당 OOO 수학학원: 학부모 사이 입소문으로 신학기 원생 모집",
    problem: "신학기가 다가왔는데 원생 모집이 막막하고 광고비 대비 효과가 없었습니다.",
    solution: "학부모들이 모여 있는 채널에 집중해, 학원의 차별점과 성과를 자연스럽게 전달하는 콘텐츠를 배포했습니다. 강압적 광고가 아닌 정보 공유 형태로 접근했습니다.",
    result: "학부모님들 사이에서 입소문이 나기 시작했고, 신학기 원생 모집을 목표대로 완료했습니다.",
    category: "기타",
  },
  {
    title: "제주 OOO 렌터카: 비수기 매출 방어에 성공한 타겟 노출",
    problem: "비수기에는 렌터카 예약이 거의 없어 매출이 급감했습니다.",
    solution: "여행 준비 단계의 고객들이 검색하는 시점에 맞춰, 제주 렌터카 정보와 할인·편의 사항을 노출하는 맞춤 전략을 적용했습니다.",
    result: "비수기에도 예약이 유지되어 매출을 방어했고, 시즌 전 준비 덕분에 성수기 예약까지 이어졌습니다.",
    category: "기타",
  },
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
