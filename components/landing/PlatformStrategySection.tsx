"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#FFD600";
const RESULT_GREEN = "#4ADE80";
const BG = "#0B0F1A";
const BG_LIGHT = "#131929";
const NAVER_GREEN = "#03C75A";
const DANGGEUN_ORANGE = "#FF6F0F";
const XIAOHONGSHU_RED = "#FF2442";
const BAEMIN_MINT = "#2AC1BC";

const IMAGE_URLS = {
  food: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  cafe: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80",
  beauty: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  hospital: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  delivery: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  product: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  face1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  face2: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80",
  face3: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&q=80",
};

type BeforeAfterRow = { name: string; before: number; after: number; suffix?: string; icon?: string };

const PLATFORM_DATA = [
  {
    id: "naver",
    label: "네이버 플레이스/블로그",
    color: NAVER_GREEN,
    emoji: "🟢",
    beforeAfter: [
      { name: "월간 노출", before: 320, after: 4100, icon: "👁️" },
      { name: "전화 문의", before: 8, after: 94, icon: "📞" },
      { name: "신규 예약", before: 12, after: 187, icon: "📅" },
    ] as BeforeAfterRow[],
    tags: ["#고품질블로그포스팅", "#전략키워드SEO", "#실사용자리뷰빌드업", "#플레이스최적화", "#메뉴사진교체", "#답변관리", "#주변상권분석", "#시즌키워드"],
  },
  {
    id: "danggeun",
    label: "당근마켓/맘카페",
    color: DANGGEUN_ORANGE,
    emoji: "🟠",
    beforeAfter: [
      { name: "단골", before: 0, after: 1840, icon: "🔖" },
      { name: "게시물 반응", before: 23, after: 847, icon: "❤️" },
      { name: "방문", before: 44, after: 312, icon: "👣" },
    ] as BeforeAfterRow[],
    tags: ["#동네소식발행", "#맘카페바이럴", "#단골이벤트", "#지역타겟팅", "#입소문릴레이"],
  },
  {
    id: "insta",
    label: "인스타그램/유튜브",
    color: "#E4405F",
    emoji: "🟣",
    beforeAfter: [
      { name: "팔로워", before: 1200, after: 18400, icon: "👥" },
      { name: "릴스 조회", before: 2400, after: 1270000, icon: "▶️" },
      { name: "DM 문의", before: 3, after: 284, icon: "💬" },
    ] as BeforeAfterRow[],
    tags: ["#숏폼기획", "#인플루언서섭외", "#동시다발배포", "#알고리즘최적화", "#해시태그전략"],
  },
  {
    id: "xiaohongshu",
    label: "샤오홍슈",
    color: XIAOHONGSHU_RED,
    emoji: "🔴",
    beforeAfter: [
      { name: "중국인 방문(월)", before: 4, after: 67, icon: "✈️" },
      { name: "게시물 저장", before: 0, after: 11000, icon: "⭐" },
      { name: "예약 전환", before: 0, after: 38, icon: "📅" },
    ] as BeforeAfterRow[],
    tags: ["#왕홍시딩", "#K뷰티여행코스", "#바이럴작업", "#중국타겟"],
  },
  {
    id: "baemin",
    label: "배민/커머스",
    color: BAEMIN_MINT,
    emoji: "🔵",
    beforeAfter: [
      { name: "월 주문", before: 230, after: 1240, icon: "🛒" },
      { name: "별점", before: 4.1, after: 4.9, suffix: "점", icon: "★" },
      { name: "랭킹", before: 23, after: 1, suffix: "위", icon: "🏆" },
    ] as BeforeAfterRow[],
    tags: ["#깃발핫스팟", "#포토리뷰작업", "#찜하기세팅", "#쿠팡스마트스토어", "#알림받기"],
  },
];

const TIMELINE = [
  {
    week: "1주차",
    icon: "🔍",
    iconBg: ACCENT,
    title: "정밀 진단 & 세팅",
    items: ["플레이스 키워드 분석", "경쟁사 상위 노출 역분석", "사진·메뉴판 전면 교체", "카테고리·속성 최적화"],
    badge: "평균 세팅 완료 7일",
    badgeColor: "slate",
  },
  {
    week: "2주차",
    icon: "✍️",
    iconBg: ACCENT,
    title: "콘텐츠 폭격 시작",
    items: ["네이버 블로그 포스팅 배포", "맘카페 · 지역 카페 침투", "리뷰 빌드업 착수", "인스타 릴스 제작 · 배포"],
    badge: "콘텐츠 평균 14건 배포",
    badgeColor: "slate",
  },
  {
    week: "3주차",
    icon: "📈",
    iconBg: RESULT_GREEN,
    title: "순위 상승 감지",
    items: ["플레이스 순위 가시적 상승", "블로그 상위 노출 시작", "유입 트래픽 주간 +300%", "전화 문의 증가 시작"],
    badge: "평균 순위 변화 -8위",
    badgeColor: "green",
  },
  {
    week: "4주차",
    icon: "📞",
    iconBg: ACCENT,
    title: "매출 체감 시작",
    items: ["전화·예약 폭발적 증가", "리뷰 100개+ 달성", "플레이스 상위권 안착", "재계약 전략 수립"],
    badge: "평균 문의 +847%",
    badgeColor: "yellow",
  },
  {
    week: "4주 이후",
    weekNum: "∞",
    icon: "🔄",
    iconBg: "transparent",
    title: "지속 성장 최적화",
    items: ["월간 성과 리포트 제공", "매체 알고리즘 변화 대응", "신규 채널 확장 검토", "경쟁사 동향 모니터링"],
    badge: "재계약률 97%",
    badgeColor: "greenLarge",
  },
];

function useCountUp(end: number, enabled: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const isFloat = end % 1 !== 0;
    const start = 0;
    const startTime = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(isFloat ? Math.round((start + (end - start) * eased) * 10) / 10 : Math.round(start + (end - start) * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, enabled, duration]);
  return value;
}

function useInView(threshold = 0.2) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function formatNum(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + "만";
  if (Number.isInteger(n)) return n.toLocaleString();
  return n.toFixed(1);
}

function BeforeAfterCard({ row, inView }: { row: BeforeAfterRow; inView: boolean }) {
  const displayBefore = useCountUp(row.before, inView);
  const displayAfter = useCountUp(row.after, inView);
  const max = Math.max(row.before, row.after) || 1;
  const beforePct = (row.before / max) * 100;
  const afterPct = (row.after / max) * 100;
  const increase = row.before === 0 ? (row.after > 0 ? 9999 : 0) : Math.round(((row.after - row.before) / row.before) * 100);
  const suffix = row.suffix ?? "";

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        {row.icon && <span className="text-sm">{row.icon}</span>}
        <span className="text-slate-400 text-sm">{row.name}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex-1 min-w-0 h-6 sm:h-7 rounded-lg bg-gray-700 overflow-hidden flex">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${Math.min(beforePct, 30)}%` } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-600 shrink-0"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${afterPct}%` } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="shrink-0"
            style={{ backgroundColor: RESULT_GREEN }}
          />
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 text-xs sm:text-sm flex-wrap justify-end">
          <span className="text-slate-400">{formatNum(displayBefore)}{suffix}</span>
          <span className="text-white font-semibold" style={{ color: RESULT_GREEN }}>{formatNum(displayAfter)}{suffix}</span>
          {increase > 0 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold text-white" style={{ backgroundColor: RESULT_GREEN }}>
              ▲{increase}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ImgFallback({ src, alt, className, fill, ...props }: { src: string; alt: string; className?: string; fill?: boolean; [k: string]: unknown }) {
  const [err, setErr] = useState(false);
  if (err) return <div className={className} style={{ background: "linear-gradient(135deg,#374151,#1f2937)" }} />;
  return <Image src={src} alt={alt} className={className} fill={fill} onError={() => setErr(true)} unoptimized {...props} />;
}

export function PlatformStrategySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentInView = useInView(0.15);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const [beforeAfterInView, setBeforeAfterInView] = useState(false);
  useEffect(() => {
    const el = beforeAfterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setBeforeAfterInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const active = PLATFORM_DATA[activeIndex];
  const inViewAndActive = contentInView.inView && beforeAfterInView;

  return (
    <section className="relative w-full py-10 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full border text-xs font-semibold mb-3 sm:mb-4" style={{ borderColor: ACCENT, color: ACCENT }}>PROVEN RESULTS</span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 break-keep px-1">단순 노출 X, 매출이 터지는 실행입니다</h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto">블로그 하나, 리뷰 하나도 전략적으로. 벨로컴퍼니가 실행한 플랫폼마다 사장님 매출이 달라졌습니다.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex lg:flex-col gap-2 overflow-x-auto overflow-y-hidden lg:overflow-visible pb-2 lg:pb-0 shrink-0 scroll-touch scrollbar-hide snap-x snap-mandatory lg:snap-none -mx-3 px-3 sm:mx-0 sm:px-0">
            {PLATFORM_DATA.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 min-h-[44px] px-4 py-3 rounded-xl text-left text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 snap-start ${
                  activeIndex === index ? "lg:border-l-4 lg:rounded-l-none border-2 rounded-xl" : "bg-white/5 border border-transparent hover:bg-white/10"
                }`}
                style={activeIndex === index ? { borderColor: ACCENT, backgroundColor: "rgba(255,214,0,0.12)", color: "#fff" } : {}}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-0 flex flex-col xl:flex-row gap-6 sm:gap-8" ref={contentInView.ref}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 min-w-0 flex flex-col xl:flex-row gap-6 sm:gap-8"
              >
                {/* 목업 카드 영역 */}
                <div className="flex-1 min-w-0 max-w-full">
                  {active.id === "naver" && (
                    <div className="bg-white rounded-2xl sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="h-7 sm:h-8 flex items-center px-3 sm:px-4 text-white text-xs sm:text-sm font-bold" style={{ backgroundColor: NAVER_GREEN }}>NAVER 플레이스</div>
                      <div className="relative h-[120px] sm:h-[140px] bg-gray-200">
                        <ImgFallback src={IMAGE_URLS.food} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold text-black" style={{ backgroundColor: ACCENT }}>🥇 지역 검색 1위</span>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="text-black font-bold text-base sm:text-lg">강남 ○○ 한의원</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-0.5">★★★★★ <span className="text-yellow-500">4.9</span> (리뷰 1,247개)</p>
                        <div className="border-t border-gray-200 my-2 sm:my-3" />
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                          <div><p className="text-[10px] sm:text-xs text-gray-500">월 클릭</p><p className="font-bold text-black text-sm sm:text-base">4,100회</p></div>
                          <div><p className="text-[10px] sm:text-xs text-gray-500">전화문의</p><p className="font-bold text-black text-sm sm:text-base">94건</p></div>
                          <div><p className="text-[10px] sm:text-xs text-gray-500">길찾기</p><p className="font-bold text-black text-sm sm:text-base">1,832회</p></div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-2.5 sm:p-3 space-y-2.5 sm:space-y-3">
                        <div className="flex gap-2 sm:gap-3">
                          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
                            <ImgFallback src={IMAGE_URLS.face1} alt="" fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-black text-xs sm:text-sm line-clamp-2">체형교정 후 확실히 달라졌어요. 원장님이 꼼꼼하게...</p>
                            <p className="text-yellow-500 text-[10px] sm:text-xs">★★★★★</p>
                          </div>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
                            <ImgFallback src={IMAGE_URLS.face2} alt="" fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-black text-xs sm:text-sm line-clamp-2">추나요법 받고 허리 통증이 많이 나았어요. 강추합니다!</p>
                            <p className="text-yellow-500 text-[10px] sm:text-xs">★★★★★</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active.id === "danggeun" && (
                    <div className="bg-white rounded-2xl sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="h-7 sm:h-8 flex items-center px-3 sm:px-4 text-white text-xs sm:text-sm font-bold" style={{ backgroundColor: DANGGEUN_ORANGE }}>🥕 당근마켓</div>
                      <div className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                            <ImgFallback src={IMAGE_URLS.face1} alt="" fill className="object-cover" />
                          </div>
                          <span className="font-medium text-black text-sm">○○ 맛집 공식계정</span>
                          <span className="text-gray-400 text-xs">마포구 · 방금</span>
                        </div>
                        <p className="text-black font-medium">🍜 오늘 점심, 줄 서지 말고 미리 예약하세요</p>
                        <p className="text-gray-500 text-sm mt-1">저희 가게 다음 주부터 웨이팅 시작됩니다...</p>
                        <div className="relative h-[120px] rounded-lg mt-2 overflow-hidden bg-gray-200">
                          <ImgFallback src={IMAGE_URLS.food} alt="" fill className="object-cover" />
                        </div>
                        <div className="flex gap-4 mt-2 text-sm text-gray-600">❤️ 328 &nbsp; 💬 47 &nbsp; 🔖 단골 1,840명</div>
                      </div>
                      <div className="px-4 pb-4">
                        <div className="flex items-end gap-1 h-12">
                          {[20, 35, 45, 58, 72, 100].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={contentInView.inView ? { height: `${h}%` } : {}} transition={{ delay: 0.3 + i * 0.08 }} className="flex-1 rounded-t min-w-0" style={{ backgroundColor: DANGGEUN_ORANGE }} />
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1주</span><span>2주</span><span>3주</span><span>4주</span><span>5주</span><span className="font-bold text-black">6주 1,840명</span></div>
                      </div>
                    </div>
                  )}

                  {active.id === "insta" && (
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                      <div className="bg-black rounded-[24px] sm:rounded-[30px] p-1.5 sm:p-2 shadow-xl shrink-0 mx-auto sm:mx-0 w-[160px] h-[320px] sm:w-[220px] sm:h-[440px]" style={{}}>
                        <div className="h-4 sm:h-6 flex items-center justify-center gap-0.5 sm:gap-1">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-700" />
                          <div className="w-6 h-3 sm:w-8 sm:h-4 rounded-full bg-gray-800" />
                        </div>
                        <div className="relative w-full flex-1 rounded-xl sm:rounded-2xl overflow-hidden mt-1 sm:mt-2 min-h-0" style={{ height: "calc(100% - 2rem)" }}>
                          <ImgFallback src={IMAGE_URLS.food} alt="" fill className="object-cover" />
                          <div className="absolute top-2 left-2 right-2 flex gap-1">
                            {[1,2,3,4].map(i => <div key={i} className="flex-1 h-0.5 rounded-full bg-white/60" />)}
                          </div>
                          <div className="absolute bottom-14 left-3">
                            <div className="flex items-center gap-2">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                <ImgFallback src={IMAGE_URLS.face1} alt="" fill className="object-cover" />
                              </div>
                              <span className="text-white text-xs font-bold">@bello_client</span>
                            </div>
                            <button className="text-white text-xs mt-1 border border-white/80 rounded px-2 py-0.5">팔로우</button>
                            <p className="text-white text-xs mt-2">#강남맛집 #서울데이트</p>
                          </div>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-white text-xs">
                            <span>❤️<br />4.2만</span>
                            <span>💬<br />1,847</span>
                            <span>➤<br />9,300</span>
                            <span>⋮</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-b-2xl" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 w-full sm:w-auto rounded-xl bg-gray-800/60 border border-gray-700 p-3 sm:p-4">
                        <p className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">게시 후 72시간</p>
                        <p className="text-xl sm:text-2xl font-bold text-white mb-2">조회수 <span style={{ color: RESULT_GREEN }}>127만</span></p>
                        <div className="h-16 flex items-end gap-1 mb-2">
                          {[30, 50, 45, 70, 85, 100].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={contentInView.inView ? { height: `${h}%` } : {}} transition={{ delay: 0.2 + i * 0.06 }} className="flex-1 rounded-t min-w-0" style={{ backgroundColor: RESULT_GREEN }} />
                          ))}
                        </div>
                        <p className="text-sm" style={{ color: RESULT_GREEN }}>DM 예약 문의 +284건</p>
                      </div>
                    </div>
                  )}

                  {active.id === "xiaohongshu" && (
                    <div className="bg-white rounded-2xl sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="h-7 sm:h-8 flex items-center px-3 sm:px-4 text-white text-xs sm:text-sm font-bold" style={{ backgroundColor: XIAOHONGSHU_RED }}>小红书 샤오홍슈</div>
                      <div className="relative h-28 sm:h-36 bg-gray-200">
                        <ImgFallback src={IMAGE_URLS.beauty} alt="" fill className="object-cover" />
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: XIAOHONGSHU_RED }}>K-뷰티 추천</span>
                      </div>
                      <div className="p-3 sm:p-4">
                        <p className="text-black font-medium text-sm sm:text-base">韓國必去！강남 피부과 솔직 후기 ✨</p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">♥ 2.4万 ⭐수집 1.1万 💬 847</div>
                      </div>
                      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                        <p className="text-xs text-gray-500 mb-2">중국인 관광객 방문 증가</p>
                        <div className="flex items-end gap-1 h-10">
                          {[25, 45, 70, 100].map((h, i) => (
                            <motion.div key={i} initial={{ width: 0 }} animate={contentInView.inView ? { width: `${h}%` } : {}} transition={{ delay: 0.3 + i * 0.1 }} className="flex-1 rounded-t min-w-0" style={{ backgroundColor: RESULT_GREEN, height: "100%" }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {active.id === "baemin" && (
                    <div className="bg-white rounded-2xl sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="h-7 sm:h-8 flex items-center px-3 sm:px-4 text-white text-xs sm:text-sm font-bold" style={{ backgroundColor: BAEMIN_MINT }}>배달의민족</div>
                      <div className="relative h-24 sm:h-32 bg-gray-200">
                        <ImgFallback src={IMAGE_URLS.delivery} alt="" fill className="object-cover" />
                        <span className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold text-black bg-yellow-400">🏆 이 시간 1위</span>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="text-black font-bold text-base sm:text-lg">○○ 치킨</h3>
                        <p className="text-xs sm:text-sm text-gray-600">★★★★★ 4.9 / 리뷰 3,420개 · 배달 20-30분</p>
                        <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 flex-wrap">
                          <div className="flex gap-2 flex-1 min-w-[100px] sm:min-w-0">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0">
                              <ImgFallback src={IMAGE_URLS.food} alt="" fill className="object-cover" />
                            </div>
                            <div className="min-w-0"><p className="text-black text-xs sm:text-sm font-medium truncate">후라이드</p><p className="text-gray-600 text-[10px] sm:text-xs">18,000원</p></div>
                          </div>
                          <div className="flex gap-2 flex-1 min-w-[100px] sm:min-w-0">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0">
                              <ImgFallback src={IMAGE_URLS.food} alt="" fill className="object-cover" />
                            </div>
                            <div className="min-w-0"><p className="text-black text-xs sm:text-sm font-medium truncate">반반 set</p><p className="text-gray-600 text-[10px] sm:text-xs">22,000원</p></div>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 mt-2 sm:mt-3 pt-2 sm:pt-3 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                          <span>월 주문 <strong>1,240건</strong></span>
                          <span>재주문율 <strong>68%</strong></span>
                          <span>리뷰 응답 <strong>100%</strong></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Before/After 수치 카드 */}
                <div ref={beforeAfterRef} className="xl:w-72 shrink-0 space-y-4 w-full">
                  <h4 className="text-white font-bold text-sm">실행 전 vs 실행 후</h4>
                  {active.beforeAfter.map((row, i) => (
                    <BeforeAfterCard key={i} row={row} inView={inViewAndActive} />
                  ))}
                  <div className="pt-4">
                    <h4 className="text-white font-bold text-sm mb-2">이렇게 실행합니다</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {active.tags.slice(0, 6).map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded-full border border-white/30 text-slate-300 text-[10px] sm:text-xs">{tag}</span>
                      ))}
                    </div>
                    <p className="text-slate-500 text-[10px] sm:text-xs mt-2 sm:mt-3">벨로컴퍼니가 직접 기획·실행합니다. 외주 없음.</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 타임라인 */}
        <div className="mt-12 sm:mt-24 pt-8 sm:pt-16 border-t border-white/10 rounded-2xl px-3 sm:px-6 py-6 sm:py-10" style={{ backgroundColor: BG_LIGHT }}>
          <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 px-2">계약 후 4주, 실제로 이렇게 달라집니다</h3>
          <p className="text-center text-slate-500 text-xs sm:text-sm mb-6 sm:mb-10">벨로컴퍼니 진행 사례 평균 데이터</p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-4 overflow-x-auto pb-2 md:pb-4 scroll-touch scrollbar-hide snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
            {TIMELINE.map((step, i) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col shrink-0 md:flex-1 min-w-[280px] sm:min-w-0 snap-center snap-always"
              >
                {i > 0 && (
                  <>
                    <div className="hidden md:block absolute top-8 -left-4 w-8 h-0.5 border-t-2 border-dashed border-white/20" style={{ left: "calc(-0.5rem)" }} />
                    <div className="md:hidden absolute left-6 -top-4 h-4 w-0.5 border-l-2 border-dashed border-white/20" aria-hidden />
                  </>
                )}
                <div className="rounded-xl border border-white/20 bg-gray-900/50 p-4 sm:p-5 h-full flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-black shrink-0" style={{ backgroundColor: step.iconBg === "transparent" ? RESULT_GREEN : step.iconBg }}>{"weekNum" in step ? (step as { weekNum?: string }).weekNum : step.week.replace(/[^\d]/g, "") || "∞"}</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-white/10">{step.icon}</div>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-2 sm:mb-3">{step.title}</h4>
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-1">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-slate-400 text-xs sm:text-sm flex items-center gap-2">✅ {item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {step.badgeColor === "greenLarge" ? (
                      <p className="text-lg font-bold" style={{ color: RESULT_GREEN }}>{step.badge}</p>
                    ) : (
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        step.badgeColor === "green" ? "text-white" : step.badgeColor === "yellow" ? "text-black font-bold" : "text-slate-400"
                      }`} style={
                        step.badgeColor === "green" ? { backgroundColor: RESULT_GREEN } : step.badgeColor === "yellow" ? { backgroundColor: ACCENT } : {}
                      }>{step.badge}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
