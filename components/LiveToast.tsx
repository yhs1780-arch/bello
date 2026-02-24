"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

// F&B/로컬 30%
const FNB_MESSAGES = [
  "방금 서초구 한식당에서 마케팅 무료 진단을 신청했습니다.",
  "현재 7명의 F&B 대표님이 BELLO 상담을 대기 중입니다.",
  "어제 마포구 브런치카페 플레이스 최적화 계약이 완료되었습니다.",
  "방금 홍대 인근 펍에서 바이럴 마케팅 문의가 접수되었습니다.",
  "성수동 맛집 오너님이 무료 매출진단을 요청하셨습니다.",
  "이번 주 23건의 로컬 F&B 무료 진단 신청이 접수되었습니다.",
  "위례 샤브샤브 사장님이 BELLO와 2차 상담을 진행 중입니다.",
  "강남역 인근 일식당에서 네이버 플레이스 컨설팅을 신청했습니다.",
  "현재 5곳의 카페 프랜차이즈가 견적 검토 중입니다.",
  "방금 건대 입구 양식당에서 리뷰 시딩 문의가 들어왔습니다.",
  "이태원 레스토랑 마케팅 진단 상담이 오늘 오후 예정입니다.",
  "어제 강남 구로 F&B 2개 매장 계약이 동시에 체결되었습니다.",
  "현재 11명의 로컬 사장님이 성공 사례 페이지를 열람 중입니다.",
  "방금 송파구 음식점에서 무료 진단을 신청했습니다.",
  "이번 달 로컬 매체 시딩 TO가 4자리 남았습니다.",
  "잠실 스포츠바 오너님이 BELLO 포트폴리오를 확인 중입니다.",
  "방금 역삼동 한정식당에서 플레이스 최적화 문의가 접수되었습니다.",
  "현재 9명의 대표님이 BELLO의 F&B 성공 사례를 열람 중입니다.",
  "어제 마포 합정동 카페 2호점 오픈 마케팅 계약이 완료되었습니다.",
  "방금 삼성동 와인바에서 바이럴 캠페인 문의를 남기셨습니다.",
  "이번 주 31건의 로컬 무료 진단 신청이 접수되었습니다.",
  "강남역 근처 베트남 음식점 상담이 내일 오전 예정입니다.",
  "현재 6곳의 F&B 업체가 계약 서명을 검토 중입니다.",
  "방금 연남동 디저트카페에서 리뷰 마케팅 문의가 들어왔습니다.",
  "오늘 하루 340명이 BELLO의 F&B 솔루션 페이지를 확인했습니다.",
  "서초구 스시오마카세 대표님이 무료 매출진단을 신청했습니다.",
  "이번 달 100개 매체 시딩 TO가 3자리 남았습니다.",
  "방금 잠실 호텔 레스토랑에서 B2B 마케팅 문의가 접수되었습니다.",
  "현재 14명의 로컬 대표님이 상담 일정을 조율 중입니다.",
  "어제 성수동 팝업스토어 프로젝트 계약이 완료되었습니다.",
];

// 뷰티/의료 30%
const BEAUTY_MESSAGES = [
  "방금 강남구 성형외과에서 마케팅 무료 진단을 신청했습니다.",
  "현재 12명의 원장님이 BELLO 상담을 대기 중입니다.",
  "어제 강남 피부과 2곳 플레이스 최적화 계약이 체결되었습니다.",
  "방금 서초구 성형외과에서 컨설팅을 신청했습니다.",
  "이번 주 19건의 뷰티·의료 무료 진단 신청이 접수되었습니다.",
  "강남 클리닉 원장님이 샤오홍슈 K-뷰티 관광 문의를 남기셨습니다.",
  "현재 8명의 대표님이 BELLO의 성공 사례를 열람 중입니다.",
  "방금 홍대 에스테틱샵에서 바이럴 마케팅 문의가 들어왔습니다.",
  "이번 달 뷰티 매체 시딩 TO가 2자리 남았습니다.",
  "강남 성형외과 원장님이 무료 매출진단을 요청하셨습니다.",
  "현재 18명의 대표님이 BELLO의 성공 사례를 열람 중입니다.",
  "방금 압구정 네일샵에서 SNS 마케팅 문의가 접수되었습니다.",
  "어제 의료 플레이스 최적화 3건이 동시에 계약 완료되었습니다.",
  "이번 주 27건의 뷰티·의료 컨설팅 신청이 접수되었습니다.",
  "방금 청담동 피부과에서 무료 진단을 신청했습니다.",
  "현재 10명의 원장님이 포트폴리오를 열람 중입니다.",
  "강남 헤어살롱 대표님이 BELLO와 상담을 진행 중입니다.",
  "방금 역삼동 클리닉에서 플레이스 리뷰 문의가 들어왔습니다.",
  "오늘 하루 512명이 BELLO의 뷰티 솔루션을 확인했습니다.",
  "이번 달 의료 매체 시딩 TO가 5자리 남았습니다.",
  "방금 삼성동 성형외과에서 해외 환자 유입 문의가 접수되었습니다.",
  "현재 15명의 뷰티 대표님이 상담 일정을 조율 중입니다.",
  "어제 강남 뷰티 클리닉 2호점 오픈 마케팅 계약이 완료되었습니다.",
  "방금 논현동 에스테틱에서 무료 진단을 신청했습니다.",
  "현재 9명의 원장님이 BELLO의 의료 성공 사례를 열람 중입니다.",
  "이번 주 33건의 뷰티·의료 무료 진단 신청이 접수되었습니다.",
  "방금 신사동 피부과에서 샤오홍슈 마케팅 문의가 들어왔습니다.",
  "강남 성형외과 2곳이 오늘 오후 BELLO 상담을 예정했습니다.",
  "현재 7곳의 뷰티 업체가 계약 서명을 검토 중입니다.",
  "방금 청담 성형외과에서 K-뷰티 관광 코스 문의가 접수되었습니다.",
];

// 커머스/온라인 30%
const COMMERCE_MESSAGES = [
  "방금 온라인 코스메틱 브랜드의 문의가 접수되었습니다.",
  "현재 13명의 쇼핑몰 대표님이 BELLO 상담을 대기 중입니다.",
  "어제 패션 쇼핑몰 스마트스토어 최적화 계약이 완료되었습니다.",
  "방금 쿠팡 셀러 브랜드에서 리뷰 시딩 문의가 들어왔습니다.",
  "이번 주 41건의 커머스 무료 진단 신청이 접수되었습니다.",
  "패션 쇼핑몰 대표님이 견적 문의를 남기셨습니다.",
  "현재 16명의 대표님이 BELLO의 커머스 성공 사례를 열람 중입니다.",
  "방금 네이버 스마트스토어 업체에서 플레이스 문의가 접수되었습니다.",
  "이번 달 커머스 매체 시딩 TO가 6자리 남았습니다.",
  "오늘 하루 1,024명이 BELLO의 마케팅 솔루션을 확인했습니다.",
  "방금 11번가 입점 브랜드에서 바이럴 마케팅 문의가 들어왔습니다.",
  "현재 8곳의 온라인 쇼핑몰이 계약 검토 중입니다.",
  "어제 코스메틱 브랜드 3사 동시 계약이 체결되었습니다.",
  "방금 티몬 셀러에서 리뷰 마케팅 문의가 접수되었습니다.",
  "이번 주 38건의 커머스 컨설팅 신청이 접수되었습니다.",
  "현재 11명의 대표님이 포트폴리오를 열람 중입니다.",
  "방금 오픈마켓 패션 브랜드에서 무료 진단을 신청했습니다.",
  "이번 달 100개 매체 시딩 TO가 3자리 남았습니다.",
  "쿠팡 로켓배송 업체 대표님이 BELLO와 2차 상담을 진행 중입니다.",
  "방금 네이버 스마트스토어 식품 브랜드 문의가 들어왔습니다.",
  "현재 14명의 커머스 대표님이 상담 일정을 조율 중입니다.",
  "어제 패션·뷰티 쇼핑몰 2곳 계약이 동시에 완료되었습니다.",
  "방금 G마켓 입점 업체에서 플레이스 최적화 문의가 접수되었습니다.",
  "오늘 하루 892명이 BELLO의 커머스 솔루션 페이지를 확인했습니다.",
  "이번 주 44건의 온라인 브랜드 무료 진단 신청이 접수되었습니다.",
  "방금 왓차패션 대표님이 바이럴 마케팅 문의를 남기셨습니다.",
  "현재 10곳의 쇼핑몰이 견적 검토 중입니다.",
  "방금 29CM 입점 브랜드에서 무료 진단을 신청했습니다.",
  "이번 달 커머스 매체 시딩 TO가 4자리 남았습니다.",
  "방금 D2C 코스메틱 브랜드에서 K-뷰티 마케팅 문의가 접수되었습니다.",
];

// 기타/브랜딩 10%
const OTHER_MESSAGES = [
  "방금 광고대행사에서 BELLO 인프라 제휴 문의가 들어왔습니다.",
  "현재 6명의 마케팅 담당자가 BELLO 솔루션을 검토 중입니다.",
  "어제 브랜드 팝업스토어 이벤트 마케팅 계약이 완료되었습니다.",
  "이번 주 12건의 브랜딩·이벤트 문의가 접수되었습니다.",
  "방금 스타트업 대표님이 무료 마케팅 진단을 신청했습니다.",
  "현재 4곳의 브랜드가 BELLO와 장기 제휴를 검토 중입니다.",
  "이번 달 100개 매체 시딩 TO가 3자리 남았습니다.",
  "방금 PR 에이전시에서 BELLO 바이럴 인프라 문의가 접수되었습니다.",
  "오늘 하루 2,100명이 BELLO 홈페이지를 방문했습니다.",
  "방금 라이프스타일 브랜드에서 통합 마케팅 문의가 들어왔습니다.",
];

const MESSAGES = [...FNB_MESSAGES, ...BEAUTY_MESSAGES, ...COMMERCE_MESSAGES, ...OTHER_MESSAGES];

const VISIBLE_DURATION_MS = 4500;
const MIN_INTERVAL_MS = 5000;
const MAX_INTERVAL_MS = 30000;

function getRandomDelayMs() {
  return MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS);
}

export function LiveToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const usedIndicesRef = useRef<Set<number>>(new Set());
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pickNextMessage = useCallback((): string | null => {
    const used = usedIndicesRef.current;
    const available: number[] = [];
    for (let i = 0; i < MESSAGES.length; i++) {
      if (!used.has(i)) available.push(i);
    }
    if (available.length === 0) {
      used.clear();
      for (let i = 0; i < MESSAGES.length; i++) available.push(i);
    }
    const idx = available[Math.floor(Math.random() * available.length)];
    used.add(idx);
    return MESSAGES[idx];
  }, []);

  useEffect(() => {
    const scheduleNext = () => {
      const delayMs = getRandomDelayMs();
      showTimerRef.current = setTimeout(() => {
        const next = pickNextMessage();
        if (next) {
          setMessage(next);
          setVisible(true);
        }
        hideTimerRef.current = setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, VISIBLE_DURATION_MS);
      }, delayMs);
    };

    const firstDelayMs = getRandomDelayMs();
    showTimerRef.current = setTimeout(() => {
      const next = pickNextMessage();
      if (next) {
        setMessage(next);
        setVisible(true);
      }
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, VISIBLE_DURATION_MS);
    }, firstDelayMs);

    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [pickNextMessage]);

  return (
    <div
      className="fixed top-20 right-4 z-[100] pointer-events-none sm:top-24 sm:right-6"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {visible && message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 shadow-xl max-w-[min(340px,calc(100vw-2rem))]"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 shrink-0">
              <Bell className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-snug break-keep">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
