"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#FFD600";
const GREEN = "#4ADE80";

type ChannelCard = { name: string; color: string; stars: number; reason: string; effectBadge: string };
type CaseData = {
  id: string;
  label: string;
  emoji: string;
  image: string;
  type: string;
  period: string;
  metrics: { label: string; value: string; color: "yellow" | "green" }[];
  quote: string;
  source: string;
  channels: ChannelCard[];
};

const DATA: CaseData[] = [
  {
    id: "hospital",
    label: "병원/의료",
    emoji: "🏥",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    type: "강남 피부과 / 시술 전문",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "18위→3위", color: "yellow" },
      { label: "월 신규상담", value: "23건→187건", color: "green" },
      { label: "매출 증가", value: "+280%", color: "green" },
    ],
    quote: "3주차부터 전화가 쏟아지기 시작했어요. 예약이 2주 뒤까지 꽉 찼습니다.",
    source: "OO 피부과 원장 (익명 요청)",
    channels: [
      { name: "네이버 플레이스", color: "#03C75A", stars: 5, reason: "지역 검색·예약 직결", effectBadge: "노출 +300%" },
      { name: "네이버 블로그", color: "#03C75A", stars: 5, reason: "증상·치료 키워드 유입", effectBadge: "유입 +250%" },
      { name: "강남언니/바비톡", color: "#FF6B9D", stars: 4, reason: "시술·병원 리뷰 노출", effectBadge: "문의 +180%" },
      { name: "샤오홍슈", color: "#FF2442", stars: 3, reason: "중국인 관광객 유입", effectBadge: "해외 +340%" },
    ],
  },
  {
    id: "beauty",
    label: "뷰티/시술",
    emoji: "💄",
    image: "/images/nail-salon-case.png",
    type: "홍대 네일샵 / 뷰티 전문",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "팔로워 1,200→24,000", color: "yellow" },
      { label: "월 신규상담", value: "DM예약 3→94건", color: "green" },
      { label: "매출 증가", value: "+320%", color: "green" },
    ],
    quote: "인스타 릴스 하나가 터지면서 DM 예약이 하루 30건씩 들어왔어요.",
    source: "OO 네일샵 원장 (익명 요청)",
    channels: [
      { name: "인스타그램", color: "#E1306C", stars: 5, reason: "시술 전후 바이럴", effectBadge: "팔로워 +1,400%" },
      { name: "네이버 플레이스", color: "#03C75A", stars: 5, reason: "지역 검색·예약", effectBadge: "노출 +300%" },
      { name: "샤오홍슈", color: "#FF2442", stars: 4, reason: "K-뷰티 외국인 유입", effectBadge: "해외 +340%" },
      { name: "강남언니/바비톡", color: "#FF6B9D", stars: 4, reason: "시술 리뷰 플랫폼", effectBadge: "문의 +200%" },
    ],
  },
  {
    id: "fnb",
    label: "음식점",
    emoji: "🍽️",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    type: "마포구 한식당 / F&B",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "배민랭킹 31위→1위", color: "yellow" },
      { label: "월 신규상담", value: "노출 400→5,200", color: "green" },
      { label: "매출 증가", value: "+190%", color: "green" },
    ],
    quote: "배민 1위 찍고 나서 월 매출이 두 배가 됐어요. 진짜 믿기지 않았습니다.",
    source: "OO 한식당 사장님 (익명 요청)",
    channels: [
      { name: "네이버 플레이스", color: "#03C75A", stars: 5, reason: "지도 검색 1위", effectBadge: "노출 +380%" },
      { name: "배달의민족", color: "#2AC1BC", stars: 5, reason: "배달 랭킹 1위", effectBadge: "주문 +340%" },
      { name: "당근마켓", color: "#FF6F0F", stars: 4, reason: "동네 단골 확보", effectBadge: "단골 신규창출" },
      { name: "인스타그램", color: "#E1306C", stars: 3, reason: "음식 바이럴", effectBadge: "팔로워 +500%" },
    ],
  },
  {
    id: "health",
    label: "헬스/학원",
    emoji: "🏋️",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    type: "강남구 키즈 체육 / 학원",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "신규등록 9→87명", color: "yellow" },
      { label: "월 신규상담", value: "맘카페도달 0→12,000", color: "green" },
      { label: "매출 증가", value: "+410%", color: "green" },
    ],
    quote: "맘카페에서 소문이 나더니 신규 등록이 폭발했어요. 3월에 정원 마감했습니다.",
    source: "OO 키즈체육 원장 (익명 요청)",
    channels: [
      { name: "네이버 플레이스", color: "#03C75A", stars: 5, reason: "지역 검색·상담", effectBadge: "문의 +300%" },
      { name: "당근마켓·맘카페", color: "#FF6F0F", stars: 5, reason: "엄마들 입소문", effectBadge: "도달 신규창출" },
      { name: "네이버 블로그", color: "#03C75A", stars: 4, reason: "교육·운동 키워드", effectBadge: "유입 +220%" },
      { name: "인스타그램", color: "#E1306C", stars: 3, reason: "운동·수업 영상", effectBadge: "팔로워 +180%" },
    ],
  },
  {
    id: "commerce",
    label: "쇼핑몰",
    emoji: "🛒",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    type: "뷰티 커머스 / 쿠팡 스토어",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "쿠팡랭킹 47위→2위", color: "yellow" },
      { label: "월 신규상담", value: "리뷰 128→1,247개", color: "green" },
      { label: "매출 증가", value: "+560%", color: "green" },
    ],
    quote: "쿠팡 2위 올라가고 나서 재고가 일주일 만에 다 나갔어요.",
    source: "OO 뷰티 브랜드 대표 (익명 요청)",
    channels: [
      { name: "쿠팡", color: "#E8003D", stars: 5, reason: "검색 상위 노출", effectBadge: "판매 +560%" },
      { name: "스마트스토어", color: "#03C75A", stars: 5, reason: "네이버 쇼핑 연동", effectBadge: "구매 +420%" },
      { name: "인스타그램", color: "#E1306C", stars: 4, reason: "제품 바이럴", effectBadge: "팔로워 +300%" },
      { name: "화해/올리브영", color: "#4CAF50", stars: 3, reason: "뷰티 리뷰 노출", effectBadge: "리뷰 +280%" },
    ],
  },
  {
    id: "etc",
    label: "인테리어/기타",
    emoji: "🏠",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    type: "수원 인테리어 / 시공",
    period: "6주차",
    metrics: [
      { label: "순위 변화", value: "문의 4→63건", color: "yellow" },
      { label: "월 신규상담", value: "블로그조회 200→34,000", color: "green" },
      { label: "매출 증가", value: "+240%", color: "green" },
    ],
    quote: "블로그 보고 연락하셨다는 분들이 갑자기 많아졌어요.",
    source: "OO 인테리어 대표 (익명 요청)",
    channels: [
      { name: "네이버 블로그", color: "#03C75A", stars: 5, reason: "시공 키워드 검색", effectBadge: "조회 +400%" },
      { name: "인스타그램", color: "#E1306C", stars: 5, reason: "시공 사진 바이럴", effectBadge: "문의 +350%" },
      { name: "당근마켓", color: "#FF6F0F", stars: 4, reason: "동네 시공 입소문", effectBadge: "문의 +220%" },
      { name: "카카오맵", color: "#FFD600", stars: 3, reason: "지역 검색 노출", effectBadge: "노출 +150%" },
    ],
  },
];

const TABLE_ROWS = [
  { platform: "네이버 플레이스", effect: "순위·노출", when: "2~3주", industry: "전업종" },
  { platform: "네이버 블로그", effect: "검색 유입", when: "3~4주", industry: "전업종" },
  { platform: "당근마켓", effect: "동네 입소문", when: "1~2주", industry: "F&B·뷰티·헬스" },
  { platform: "인스타그램", effect: "바이럴·팔로워", when: "2~4주", industry: "뷰티·F&B·커머스" },
  { platform: "샤오홍슈", effect: "외국인 유입", when: "3~5주", industry: "병원·뷰티" },
  { platform: "배달의민족", effect: "주문 증가", when: "1~2주", industry: "F&B" },
  { platform: "쿠팡·스마트스토어", effect: "구매 전환", when: "2~4주", industry: "커머스" },
];

function ImgFallback({ src, alt, className, fill, ...props }: { src: string; alt: string; className?: string; fill?: boolean; [k: string]: unknown }) {
  const [err, setErr] = useState(false);
  if (err) return <div className={className} style={{ background: "linear-gradient(180deg, transparent 40%, #131929 100%)" }} />;
  return <Image src={src} alt={alt} className={className} fill={!!fill} onError={() => setErr(true)} unoptimized {...props} />;
}

export function IndustryChannelSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = DATA[activeIndex];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-[#FFD600] text-[#FFD600] text-xs font-semibold mb-4">
            CUSTOM STRATEGY
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white break-keep mb-2">
            우리 가게엔 어떤 채널이 맞을까요?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto break-keep">
            업종마다 효과적인 플랫폼이 다릅니다. 벨로컴퍼니는 필요한 채널만 골라 집중 공략합니다.
          </p>
        </div>

        {/* 업종 탭 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {DATA.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 rounded-[30px] px-5 py-2.5 text-sm font-medium transition-all ${
                activeIndex === i ? "bg-[#FFD600] text-black font-bold" : "bg-[#1a2035] text-white"
              }`}
            >
              {item.emoji} {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
          >
          {/* 좌측 60%: 성과 사례 카드 */}
          <div className="lg:col-span-3 min-w-0">
            <div className="rounded-[20px] overflow-hidden" style={{ backgroundColor: "#131929" }}>
              <div className="relative w-full bg-[#0f1623]" style={{ aspectRatio: "16/10", minHeight: 200 }}>
                <ImgFallback src={active.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 35%, #131929 95%)" }} />
                <p className="absolute bottom-4 left-4 text-white font-bold text-base sm:text-lg">{active.type}</p>
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-white text-xs font-medium" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                  진행 {active.period}
                </span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 border-b border-[#2a3347] pb-6">
                  {active.metrics.map((m, i) => (
                    <div key={i} className={i < 2 ? "border-r border-[#2a3347]" : ""}>
                      <p className="text-xs text-[#9CA3AF] mb-1">{m.label}</p>
                      <p className="text-[22px] font-extrabold" style={{ color: m.color === "yellow" ? ACCENT : GREEN }}>{m.value}</p>
                    </div>
                  ))}
                </div>
                <div className="py-5 px-0">
                  <span className="text-[40px] leading-none text-[#FFD600]">&ldquo;</span>
                  <p className="text-[15px] text-[#E5E7EB] italic leading-relaxed mt-2">{active.quote}</p>
                  <div className="border-t border-[#2a3347] my-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#FFD600] font-bold text-sm shrink-0" style={{ backgroundColor: "#374151" }}>
                      {active.source.slice(0, 1)}
                    </div>
                    <p className="text-[13px] text-[#9CA3AF]">{active.source}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 40%: 추천 채널 */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-white font-bold text-sm sm:text-base mb-4">이 업종 추천 채널</h3>
            <div className="space-y-2">
              {active.channels.map((ch) => (
                <div
                  key={ch.name}
                  className="rounded-xl px-4 py-3.5 flex items-center justify-between gap-3 transition-colors hover:bg-[#243050]"
                  style={{ backgroundColor: "#1a2035", borderLeft: `3px solid ${ch.color}` }}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-bold text-sm truncate">{ch.name}</p>
                    <p className="text-xs text-[#9CA3AF] truncate mt-0.5">{ch.reason}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-[#FFD600] text-xs">{"★".repeat(ch.stars)}{"☆".repeat(5 - ch.stars)}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium text-[#4ADE80]" style={{ backgroundColor: "#1F2937" }}>{ch.effectBadge}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1 text-[13px] text-[#9CA3AF]">
              <p>✅ 무조건 패키지 강요 없음</p>
              <p>✅ 필요한 채널만 골라서 진행</p>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>

        {/* 채널 비교 테이블 */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-white font-bold text-lg sm:text-xl mb-4">어떤 채널이 효과가 빠를까요?</h3>
          <div className="overflow-x-auto rounded-xl -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-hide">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3.5 px-4 font-bold text-black text-sm" style={{ backgroundColor: ACCENT }}>플랫폼</th>
                  <th className="text-left py-3.5 px-4 font-bold text-black text-sm" style={{ backgroundColor: ACCENT }}>주요 효과</th>
                  <th className="text-left py-3.5 px-4 font-bold text-black text-sm" style={{ backgroundColor: ACCENT }}>효과 시점</th>
                  <th className="text-left py-3.5 px-4 font-bold text-black text-sm" style={{ backgroundColor: ACCENT }}>추천 업종</th>
                  <th className="text-left py-3.5 px-4 font-bold text-black text-sm" style={{ backgroundColor: ACCENT }}>벨로 관리</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-[#1e2d45]" style={{ backgroundColor: i % 2 === 0 ? "#0f1623" : "#131929" }}>
                    <td className="py-3.5 px-4 text-white text-sm">{row.platform}</td>
                    <td className="py-3.5 px-4 text-slate-300 text-sm">{row.effect}</td>
                    <td className="py-3.5 px-4 text-slate-300 text-sm">{row.when}</td>
                    <td className="py-3.5 px-4 text-slate-300 text-sm">{row.industry}</td>
                    <td className="py-3.5 px-4 text-sm"><span className="text-[#4ADE80]">✅ 직접 실행</span></td>
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
