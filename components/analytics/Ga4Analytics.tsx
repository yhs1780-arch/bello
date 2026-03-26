"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __belloLastScrollPercent?: number;
  }
}

const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-22TTM62517";

function safeGtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export function Ga4Analytics() {
  const pathname = usePathname();
  const firedScrollRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!GA4_MEASUREMENT_ID) return;
    // 이미 삽입돼 있으면 중복 방지
    const existing = document.querySelector('script[data-ga4="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.ga4 = "true";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // dataLayer / gtag 초기화
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      safeGtag("js", new Date());
      safeGtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
    }
  }, []);

  // 페이지뷰
  useEffect(() => {
    if (!GA4_MEASUREMENT_ID) return;
    safeGtag("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  // 스크롤 깊이(25/50/75/90/100) + 최대값 저장
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const docHeight = Math.max(doc.scrollHeight - doc.clientHeight, 1);
      const percent = Math.max(0, Math.min(100, Math.round((scrollTop / docHeight) * 100)));

      window.__belloLastScrollPercent = percent;
      try {
        window.localStorage.setItem("bello_scroll_percent", String(percent));
      } catch {
        // ignore
      }

      const thresholds = [25, 50, 75, 90, 100];
      if (thresholds.includes(percent) && !firedScrollRef.current.has(percent)) {
        firedScrollRef.current.add(percent);
        safeGtag("event", "scroll_depth", {
          percent,
        });
      }
    };

    // 첫 로드 기준값
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CTA 클릭 이벤트 수집 (주요 버튼/링크에 data-cta만 심으면 됨)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!GA4_MEASUREMENT_ID) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const ctaEl = target.closest("[data-cta]") as HTMLElement | null;
      if (!ctaEl) return;

      const ctaName = ctaEl.getAttribute("data-cta") || "unknown";
      try {
        window.localStorage.setItem("bello_last_cta", ctaName);
      } catch {
        // ignore
      }

      safeGtag("event", "cta_click", {
        cta_name: ctaName,
      });
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true } as any);
  }, []);

  // 상담(폼) 제출 이벤트 수집
  useEffect(() => {
    const handler = (event: Event) => {
      if (!GA4_MEASUREMENT_ID) return;
      const detail = (event as CustomEvent).detail as
        | { leadSource?: string; leadOrigin?: string }
        | undefined;

      let scrollPercent: string | null = null;
      let lastCta: string | null = null;
      try {
        scrollPercent = window.localStorage.getItem("bello_scroll_percent");
        lastCta = window.localStorage.getItem("bello_last_cta");
      } catch {
        // ignore
      }

      safeGtag("event", "lead_submit", {
        lead_source: detail?.leadSource || "direct",
        lead_request_path: detail?.leadOrigin || "direct",
        scroll_depth_percent: scrollPercent,
        last_cta: lastCta,
      });
    };

    window.addEventListener("bello_lead_submit", handler as EventListener);
    return () => window.removeEventListener("bello_lead_submit", handler as EventListener);
  }, []);

  return null;
}

