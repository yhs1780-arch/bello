"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#FFD600";
const RESULT_GREEN = "#4ADE80";
const BG = "#0B0F1A";

const INDUSTRY_IMAGES: Record<string, string> = {
  hospital: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
  beauty: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  fnb: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  health: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  commerce: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  etc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
};

type ChannelCard = { name: string; color: string; stars: number; reason: string; effectBadge: string };
type MetricRow = { label: string; before: string; after: string };

type IndustryData = {
  id: string;
  label: string;
  emoji: string;
  imageKey: keyof typeof INDUSTRY_IMAGES;
  channels: ChannelCard[];
  performance: {
    type: string;
    period: string;
    metrics: MetricRow[];
    quote: string;
    source: string;
  };
};

const DATA: IndustryData[] = [
  {
    id: "hospital",
    label: "병원/의료",
    emoji: "🏥",
    imageKey: "hospital",
    channels: [
      { name: "네이버 플레이스", color: "#2DB400", stars: 5, reason: "지역 검색·예약 직결", effectBadge: "노출 +300%" },
      { name: "블로그", color: "#2DB400", stars: 5, reason: "증상·치료 키워드 유입", effectBadge: "유입 +250%" },
      { name: "강남언니/바비톡", color: "#E4405F", stars: 4, reason: "시술·병원 리뷰 노출", effectBadge: "문의 +180%" },
      { name: "샤오홍슈", color: "#E01E28", stars: 3, reason: "중국인 관광객 유입", effectBadge: "해외 +340%" },
    ],
    performance: {
      type: "강남 피부과 / 시술 전문",
      period: "6주",
      metrics: [
        { label: "순위 변화", before: "18위", after: "3위" },
        { label: "월 신규 상담", before: "23건", after: "187건" },
        { label: "매출 증가", before: "-", after: "+280%" },
      ],
      quote: "3주차부터 전화가 쏟아지기 시작했어요. 예약이 2주 뒤까지 꽉 찼습니다.",
      source: "○○ 피부과 원장 (익명 요청)",
    },
  },
  {
    id: "beauty",
    label: "뷰티/시술",
    emoji: "💄",
    imageKey: "beauty",
    channels: [
      { name: "인스타그램", color: "#E4405F", stars: 5, reason: "시술 사진·영상 노출", effectBadge: "팔로워 +400%" },
      { name: "네이버 플레이스", color: "#2DB400", stars: 5, reason: "지역 검색·리뷰 신뢰", effectBadge: "노출 +320%" },
      { name: "샤오홍슈", color: "#E01E28", stars: 4, reason: "K뷰티·관광객 타겟", effectBadge: "중국인 +340%" },
      { name: "강남언니", color: "#E4405F", stars: 4, reason: "시술 후기·예약 연동", effectBadge: "예약 +200%" },
    ],
    performance: {
      type: "강남 네일/속눈썹 / 시술 전문",
      period: "6주",
      metrics: [
        { label: "팔로워", before: "1,200", after: "24,000" },
        { label: "DM 예약", before: "3건", after: "94건" },
        { label: "매출 증가", before: "-", after: "+320%" },
      ],
      quote: "인스타 릴스 하나가 터지면서 DM 예약이 하루에 30건씩 들어왔어요.",
      source: "○○ 네일샵 대표 (익명 요청)",
    },
  },
  {
    id: "fnb",
    label: "음식점",
    emoji: "🍽️",
    imageKey: "fnb",
    channels: [
      { name: "네이버 플레이스", color: "#2DB400", stars: 5, reason: "맛집 검색·예약·리뷰", effectBadge: "노출 +400%" },
      { name: "배달의민족", color: "#2AC1BC", stars: 5, reason: "배달 랭킹·주문 직결", effectBadge: "주문 +350%" },
      { name: "당근마켓", color: "#FF6B35", stars: 4, reason: "동네 입소문·단골", effectBadge: "단골 +280%" },
      { name: "인스타그램", color: "#E4405F", stars: 3, reason: "맛집 포스팅·해시태그", effectBadge: "방문 +150%" },
    ],
    performance: {
      type: "○○ 치킨 / 배달 전문",
      period: "6주",
      metrics: [
        { label: "배민 랭킹", before: "31위", after: "1위" },
        { label: "플레이스 노출", before: "400회", after: "5,200회" },
        { label: "매출 증가", before: "-", after: "+190%" },
      ],
      quote: "배민 1위 찍고 나서 월 매출이 두 배가 됐어요. 진짜 믿기지 않았습니다.",
      source: "○○ 치킨 대표 (익명 요청)",
    },
  },
  {
    id: "health",
    label: "헬스/학원",
    emoji: "🏋️",
    imageKey: "health",
    channels: [
      { name: "네이버 플레이스", color: "#2DB400", stars: 5, reason: "지역 검색·상담 문의", effectBadge: "문의 +300%" },
      { name: "당근맘카페", color: "#FF6B35", stars: 5, reason: "맘들 타겟·입소문", effectBadge: "도달 +500%" },
      { name: "블로그", color: "#2DB400", stars: 4, reason: "교육·헬스 키워드", effectBadge: "유입 +220%" },
      { name: "인스타그램", color: "#E4405F", stars: 3, reason: "운동·수업 영상", effectBadge: "팔로워 +180%" },
    ],
    performance: {
      type: "○○ 키즈체육 / 학원",
      period: "6주",
      metrics: [
        { label: "신규 등록", before: "9명", after: "87명" },
        { label: "맘카페 도달", before: "0", after: "12,000" },
        { label: "매출 증가", before: "-", after: "+410%" },
      ],
      quote: "맘카페에서 소문이 나더니 신규 등록이 폭발했어요. 3월에 정원 마감했습니다.",
      source: "○○ 키즈체육 원장 (익명 요청)",
    },
  },
  {
    id: "commerce",
    label: "쇼핑몰",
    emoji: "🛒",
    imageKey: "commerce",
    channels: [
      { name: "쿠팡", color: "#E65228", stars: 5, reason: "랭킹·로켓배송 노출", effectBadge: "판매 +400%" },
      { name: "스마트스토어", color: "#2DB400", stars: 5, reason: "검색·쇼핑 노출", effectBadge: "노출 +350%" },
      { name: "인스타그램", color: "#E4405F", stars: 4, reason: "쇼핑·광고 연동", effectBadge: "전환 +200%" },
      { name: "화해", color: "#11B288", stars: 3, reason: "뷰티·성분 검색", effectBadge: "유입 +150%" },
    ],
    performance: {
      type: "○○ 스킨케어 / 쇼핑",
      period: "6주",
      metrics: [
        { label: "쿠팡 랭킹", before: "47위", after: "2위" },
        { label: "리뷰 수", before: "128개", after: "1,247개" },
        { label: "매출 증가", before: "-", after: "+560%" },
      ],
      quote: "쿠팡 2위 올라가고 나서 재고가 일주일 만에 다 나갔어요.",
      source: "○○ 스킨케어 대표 (익명 요청)",
    },
  },
  {
    id: "etc",
    label: "인테리어/기타",
    emoji: "🏠",
    imageKey: "etc",
    channels: [
      { name: "네이버 블로그", color: "#2DB400", stars: 5, reason: "시공·인테리어 검색", effectBadge: "조회 +400%" },
      { name: "인스타그램", color: "#E4405F", stars: 5, reason: "시공 사진·포트폴리오", effectBadge: "문의 +350%" },
      { name: "당근마켓", color: "#FF6B35", stars: 4, reason: "동네 시공·리모델링", effectBadge: "문의 +220%" },
      { name: "카카오맵", color: "#FEE500", stars: 3, reason: "지역 검색·연락처", effectBadge: "노출 +150%" },
    ],
    performance: {
      type: "○○ 인테리어 / 시공",
      period: "6주",
      metrics: [
        { label: "문의", before: "4건", after: "63건" },
        { label: "블로그 조회", before: "200회", after: "34,000회" },
        { label: "매출 증가", before: "-", after: "+240%" },
      ],
      quote: "블로그 보고 연락하셨다는 분들이 갑자기 많아졌어요.",
      source: "○○ 인테리어 대표 (익명 요청)",
    },
  },
];

const TABLE_ROWS = [
  { platform: "네이버 플레이스", effect: "순위·노출", when: "2~3주", industry: "전업종", managed: true },
  { platform: "네이버 블로그", effect: "검색 유입", when: "3~4주", industry: "전업종", managed: true },
  { platform: "당근마켓", effect: "동네 입소문", when: "1~2주", industry: "F&B·뷰티·헬스", managed: true },
  { platform: "인스타그램", effect: "바이럴·팔로워", when: "2~4주", industry: "뷰티·F&B·커머스", managed: true },
  { platform: "샤오홍슈", effect: "외국인 유입", when: "3~5주", industry: "병원·뷰티", managed: true },
  { platform: "배달의민족", effect: "주문 증가", when: "1~2주", industry: "F&B", managed: true },
  { platform: "쿠팡·스마트스토어", effect: "구매 전환", when: "2~4주", industry: "커머스", managed: true },
];

const FACE_IMG = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80";

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

function ImgFallback({ src, alt, className, fill, ...props }: { src: string; alt: string; className?: string; fill?: boolean; [k: string]: unknown }) {
  const [err, setErr] = useState(false);
  if (err) return <div className={className} style={{ background: "linear-gradient(135deg,#374151,#1f2937)" }} />;
  return <Image src={src} alt={alt} className={className} fill={fill} onError={() => setErr(true)} unoptimized {...props} />;
}

export function IndustryChannelSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardInView = useInView(0.15);
  const active = DATA[activeIndex];
  const imgSrc = INDUSTRY_IMAGES[active.imageKey] || INDUSTRY_IMAGES.hospital;

  return (
    <section className="relative w-full py-10 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden" style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full border text-xs font-semibold mb-3 sm:mb-4" style={{ borderColor: ACCENT, color: ACCENT }}>CUSTOM STRATEGY</span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 break-keep px-1">우리 가게엔 어떤 채널이 맞을까요?</h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto">업종마다 효과적인 플랫폼이 다릅니다. 벨로컴퍼니는 필요한 채널만 골라 집중 공략합니다.</p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto overflow-y-hidden scroll-touch scrollbar-hide snap-x snap-mandatory sm:snap-none -mx-3 px-3 sm:mx-0 sm:px-0 pb-1">
          {DATA.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 snap-start ${
                activeIndex === index ? "border-2" : "bg-white/5 border border-transparent hover:bg-white/10"
              }`}
              style={activeIndex === index ? { borderColor: ACCENT, backgroundColor: "rgba(255,214,0,0.12)", color: "#fff" } : {}}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div ref={cardInView.ref} className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8"
            >
              {/* 좌측 60%: 실제 성과 사례 카드 */}
              <div className="lg:col-span-3 min-w-0">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-[140px] sm:h-[180px] bg-gray-200">
                    <ImgFallback src={imgSrc} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white font-bold text-sm sm:text-lg">{active.performance.type}</p>
                    <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 text-black text-[10px] sm:text-xs font-bold">진행 {active.performance.period}차</span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                      {active.performance.metrics.map((m, i) => (
                        <div key={i} className="text-center min-w-0">
                          <p className="text-gray-500 text-[10px] sm:text-xs mb-0.5 sm:mb-1 truncate">{m.label}</p>
                          <p className="text-black font-bold text-sm sm:text-lg truncate">
                            {m.before} <span className="text-gray-400">→</span> <span style={{ color: m.after.startsWith("+") ? RESULT_GREEN : "#2563eb" }}>{m.after}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 my-3 sm:my-4" />
                    <div className="bg-gray-100 rounded-xl p-3 sm:p-4 relative pl-7 sm:pl-8">
                      <span className="absolute left-2 sm:left-3 top-3 sm:top-4 text-2xl sm:text-3xl text-gray-300 font-serif">&ldquo;</span>
                      <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 sm:line-clamp-none">&ldquo;{active.performance.quote}&rdquo;</p>
                      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0">
                          <ImgFallback src={FACE_IMG} alt="" fill className="object-cover" />
                        </div>
                        <p className="text-gray-600 text-[10px] sm:text-xs truncate">{active.performance.source}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 우측 40%: 추천 채널 조합 */}
              <div className="lg:col-span-2 min-w-0">
                <h3 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">이 업종 추천 채널</h3>
                <div className="space-y-2 sm:space-y-3">
                  {active.channels.map((ch, i) => (
                    <motion.div
                      key={ch.name}
                      initial={{ opacity: 0, x: 8 }}
                      animate={cardInView.inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl border border-white/10 bg-gray-800/40"
                    >
                      <div className="w-0.5 sm:w-1 rounded-full shrink-0 self-stretch min-h-[36px] sm:min-h-[40px]" style={{ backgroundColor: ch.color }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white font-medium text-xs sm:text-sm truncate">{ch.name}</span>
                          <span className="text-yellow-400 text-[10px] sm:text-xs shrink-0">{"★".repeat(ch.stars)}</span>
                        </div>
                        <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 line-clamp-2">{ch.reason}</p>
                      </div>
                      <span className="shrink-0 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium" style={{ backgroundColor: "rgba(74,222,128,0.2)", color: RESULT_GREEN }}>{ch.effectBadge}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 sm:space-y-2">
                  <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-2">✅ 무조건 패키지 강요 없음</p>
                  <p className="text-slate-300 text-xs sm:text-sm flex items-center gap-2">✅ 필요한 채널만 골라서 진행</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 채널 비교 테이블 */}
        <div className="mt-8 sm:mt-14">
          <h3 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">어떤 채널이 효과가 빠를까요?</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 scroll-touch scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[520px] sm:min-w-[640px] text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-black text-xs sm:text-sm" style={{ backgroundColor: ACCENT }}>플랫폼</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-black text-xs sm:text-sm" style={{ backgroundColor: ACCENT }}>주요 효과</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-black text-xs sm:text-sm" style={{ backgroundColor: ACCENT }}>효과 시점</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-black text-xs sm:text-sm" style={{ backgroundColor: ACCENT }}>추천 업종</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-black text-xs sm:text-sm" style={{ backgroundColor: ACCENT }}>벨로 관리</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? "bg-white/5" : ""}`}>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm">{row.platform}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">{row.effect}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">{row.when}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">{row.industry}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm"><span style={{ color: RESULT_GREEN }}>✅ 직접 실행</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
