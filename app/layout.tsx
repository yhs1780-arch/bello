import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { StickyCta } from "@/components/StickyCta";
import { LiveToast } from "@/components/LiveToast";
import { AwardPopup } from "@/components/AwardPopup";
import { FloatingCtaInquiry } from "@/components/FloatingCtaInquiry";
import { FloatingMenuSolutions } from "@/components/FloatingMenuSolutions";
import "./globals.css";

const SITE_URL = "https://bellocompany.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "벨로컴퍼니 | 하이엔드 B2B 마케팅 실행사",
  description:
    "데이터로 증명하는 압도적 퍼포먼스. 네이버 플레이스 최적화, 뷰티 시딩, 퍼포먼스 마케팅의 기준 BELLO입니다.",
  keywords: [
    "벨로컴퍼니",
    "벨로",
    "마케팅대행사",
    "마케팅실행사",
    "네이버플레이스",
    "퍼포먼스마케팅",
    "병원마케팅",
  ],
  verification: {
    other: {
      "naver-site-verification": "f60fac5db24461301132398cb3211bb00a8e250b",
    },
  },
  openGraph: {
    title: "벨로컴퍼니 | 하이엔드 B2B 마케팅 실행사",
    description:
      "데이터로 증명하는 압도적 퍼포먼스. 네이버 플레이스 최적화, 뷰티 시딩, 퍼포먼스 마케팅의 기준 BELLO입니다.",
    url: SITE_URL,
    siteName: "벨로컴퍼니",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden max-w-[100vw]">
        <ThemeProvider>
          <Header />
          <main className="relative pb-20 sm:pb-0 overflow-x-hidden max-w-full">{children}</main>
          <Footer />
          <StickyCta />
          <LiveToast />
          <FloatingMenuSolutions />
          <FloatingCtaInquiry />
          <Chatbot />
          <AwardPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
