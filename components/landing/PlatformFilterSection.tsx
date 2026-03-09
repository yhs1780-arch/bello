"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

/** 탭별 전략 & 결과 데이터 (하드코딩). 이미지는 public/images 기준(.png 사용, .jpg 미존재 시 대체). */
const strategyData = [
  {
    id: "naver",
    label: "네이버 플레이스/블로그",
    title: "검색결과 1페이지 장악, 끊임없는 예약 알림",
    how: "단순 배포가 아닌 고품질 네이버 블로그 포스팅 발행, 전략적 키워드 최적화(SEO), 실사용자 기반 영수증 리뷰 빌드업.",
    result: "해당 지역 검색 1위 고정, 네이버 플레이스 유입량 300% 상승, 신규 방문 및 예약 전환 극대화.",
    image: "/images/mockup-naver.png",
  },
  {
    id: "danggeun",
    label: "당근마켓/맘카페",
    title: "동네 상권 초토화, 지역 주민이 줄 서는 매장",
    how: "타겟팅된 당근마켓 동네소식 발행, 지역 맘카페 침투 바이럴, 단골 맺기 이벤트 기획 및 실행.",
    result: "동네소식 조회수 수천 회 돌파, 맘카페 입소문 릴레이, 당근 단골 수 급증으로 인한 안정적인 매출 확보.",
    image: "/images/mockup-danggeun.png",
  },
  {
    id: "insta",
    label: "인스타/유튜브",
    title: "조회수 100만 뷰 폭발, 전국구 핫플레이스 등극",
    how: "트렌디한 숏폼(릴스/쇼츠) 영상 기획, 마이크로/매크로 인플루언서 섭외 및 동시다발적 콘텐츠 배포.",
    result: "콘텐츠 알고리즘 노출로 조회수 폭발, 2030 타겟 고객의 폭발적인 태그 및 방문 인증 릴레이.",
    image: "/images/mockup-insta.png",
  },
  {
    id: "xiaohongshu",
    label: "샤오홍슈",
    title: "중국인 관광객 필수 코스, 글로벌 매출 확대",
    how: "샤오홍슈 뷰티/여행 왕홍(인플루언서) 시딩, K-뷰티/K-푸드 여행 코스로 자연스럽게 녹여낸 바이럴 작업.",
    result: "중국인 관광객 검색 노출 최상단, 방한 전 선예약률 400% 상승, 면세/관광 상권 매출 견인.",
    image: "/images/mockup-xiaohongshu.png",
  },
  {
    id: "baemin",
    label: "배민/커머스",
    title: "카테고리 랭킹 1위, 멈추지 않는 주문 접수",
    how: "배달의민족/요기요 깃발 꽂기 핫스팟 최적화, 쿠팡/스마트스토어 포토 리뷰 작업 및 찜하기/알림받기 세팅.",
    result: "치열한 배달/쇼핑 랭킹 상단 노출, 베스트 100 진입, 리뷰 신뢰도 상승으로 구매 전환율 2배 이상 증가.",
    image: "/images/mockup-baemin.png",
  },
];

function MockupImage({
  src,
  alt,
  imageError,
  onError,
}: {
  src: string;
  alt: string;
  imageError: boolean;
  onError: () => void;
}) {
  if (imageError) {
    return (
      <div className="absolute inset-0 z-10 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
        이미지 적용 대기중
      </div>
    );
  }
  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-black">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top min-h-full"
        onError={onError}
      />
    </div>
  );
}

export function PlatformFilterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const active = strategyData[activeIndex];

  const handleImageError = useCallback((src: string) => {
    setFailedImages((prev) => new Set(prev).add(src));
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B1120] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center break-keep mb-4"
        >
          단순한 노출이 아닙니다. 매출을 폭발시키는 매체별 타겟팅 전략
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm sm:text-base text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          네이버, 당근마켓부터 샤오홍슈까지. 벨로컴퍼니의 치밀한 작업으로 만들어낸 압도적인 성과를 확인하세요.
        </motion.p>

        {/* 인터랙티브 탭 쇼케이스: 좌측 탭 / 우측 전략+목업 */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* 탭 메뉴: 모바일은 가로 스크롤, PC는 세로 리스트 */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0">
            {strategyData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all whitespace-nowrap ${
                  activeIndex === index
                    ? "bg-[#FFD700] text-black font-bold"
                    : "bg-[#0f172a] text-slate-400 border border-gray-700 hover:border-gray-600 hover:text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 콘텐츠: 좌측 텍스트 박스 + 우측 아이폰 목업 */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-start">
            {/* 전략 텍스트 박스 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700"
              >
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-6 break-keep">
                  {active.title}
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#FFD700] text-sm font-bold mb-2">우리의 작업 (How)</p>
                    <p className="text-slate-300 text-sm leading-relaxed flex gap-2">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" aria-hidden />
                      <span>{active.how}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[#FFD700] text-sm font-bold mb-2">압도적 결과 (Result)</p>
                    <p className="text-slate-300 text-sm leading-relaxed flex gap-2">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" aria-hidden />
                      <span>{active.result}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 스마트폰 목업 (우측 1개) */}
            <div className="flex justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative mx-auto lg:mx-0 w-full max-w-[260px] sm:max-w-[280px] aspect-[9/16] bg-black rounded-[3rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden"
                >
                  <div
                    className="absolute top-0 inset-x-0 w-32 h-7 bg-gray-900 rounded-b-3xl mx-auto z-20"
                    aria-hidden
                  />
                  <MockupImage
                    src={active.image}
                    alt=""
                    imageError={failedImages.has(active.image)}
                    onError={() => handleImageError(active.image)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-18 text-center"
        >
          <p className="text-white/90 text-base sm:text-lg font-medium mb-6 break-keep">
            이런 결과를 만들어 드립니다. 우리 가게도 이렇게 보이게 해보세요.
          </p>
          <Link
            href="#consulting-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-bold text-sm sm:text-base hover:bg-[#FFE44D] transition-colors"
          >
            무료 전략 상담받기
            <ChevronRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
