import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingRight } from "@/components/FloatingRight";
import { LiveToast } from "@/components/LiveToast";
import { AwardPopup } from "@/components/AwardPopup";
import { FloatingStatusBar } from "@/components/FloatingStatusBar";
import { MobileBottomCta } from "@/components/MobileBottomCta";
import "./globals.css";

const SITE_URL = "https://bellocompany.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "벨로컴퍼니 | 매출을 폭발시키는 하이엔드 마케팅 실행사",
  description:
    "광고비 낭비는 이제 그만. 네이버 플레이스, 블로그, 당근마켓, 인스타, 샤오홍슈까지. 데이터로 증명하는 B2B 마케팅 실행사 벨로컴퍼니가 사장님의 매출을 올려드립니다.",
  keywords: [
    "벨로컴퍼니",
    "마케팅",
    "마케팅 실행사",
    "마케팅 대행사",
    "네이버 플레이스 상위노출",
    "병원 마케팅",
    "식당 마케팅",
    "카페 마케팅",
    "당근마켓 마케팅",
    "샤오홍슈 마케팅",
    "바이럴 마케팅",
    "B2B 마케팅",
  ],
  // 네이버 서치어드바이저 소유자 확인: 서치어드바이저에서 발급한 코드로 교체하세요.
  verification: {
    other: {
      "naver-site-verification": "f60fac5db24461301132398cb3211bb00a8e250b",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "벨로컴퍼니 | 진짜 성과를 만드는 마케팅 실행사",
    description:
      "네이버 플레이스 1위, 당근마켓 단골 폭발. 결과로 증명하는 하이엔드 실행팀입니다.",
    type: "website",
    url: SITE_URL,
    siteName: "벨로컴퍼니",
    locale: "ko_KR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "벨로컴퍼니 | 매출을 폭발시키는 하이엔드 마케팅 실행사",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "벨로컴퍼니 | 진짜 성과를 만드는 마케팅 실행사",
    description: "네이버 플레이스 1위, 당근마켓 단골 폭발. 결과로 증명하는 하이엔드 실행팀입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0B1120] text-slate-100 font-sans antialiased overflow-x-hidden max-w-[100vw]">
        <ThemeProvider>
          <Header />
          <main className="relative overflow-x-hidden max-w-full min-w-0 pb-[max(5rem,env(safe-area-inset-bottom))] sm:pb-0">{children}</main>
          <Footer />
          <FloatingRight />
          <MobileBottomCta />
          <LiveToast />
          <FloatingStatusBar />
          <AwardPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
