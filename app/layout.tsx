import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { JsonLd } from "@/app/components/JsonLd";
import { getSiteUrl, isProductionSite } from "@/app/lib/site";
import "./globals.css";

const SITE_URL = getSiteUrl();
const IS_PRODUCTION = isProductionSite();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "벨로컴퍼니 | 마케팅 실행사 · 네이버플레이스·광고·바이럴 마케팅",
  description:
    "마케팅사 벨로컴퍼니는 마케팅 실행사로 네이버플레이스, 광고, 바이럴 마케팅을 직접 실행합니다. 마케팅·네이버플레이스·광고·바이럴 전문. 수수료 0%, 매출로 증명.",
  keywords: [
    "마케팅사",
    "마케팅",
    "마케팅 실행사",
    "네이버플레이스",
    "네이버 플레이스",
    "광고",
    "바이럴",
    "바이럴 마케팅",
    "벨로컴퍼니",
    "마케팅 대행사",
    "네이버 플레이스 상위노출",
    "네이버 플레이스 마케팅",
    "광고 대행",
    "병원 마케팅",
    "식당 마케팅",
    "카페 마케팅",
    "당근마켓 마케팅",
    "인스타그램 마케팅",
    "샤오홍슈 마케팅",
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
  // 카카오·네이버는 og:image에 절대 URL 필수. 동적 이미지 경로를 절대 URL로 명시.
  openGraph: {
    title: "벨로컴퍼니 | 마케팅 실행사 · 네이버플레이스·광고·바이럴 마케팅",
    description:
      "마케팅사 벨로컴퍼니. 마케팅·네이버플레이스·광고·바이럴 전문 실행사. 수수료 0%, 매출로 증명.",
    type: "website",
    url: SITE_URL,
    siteName: "벨로컴퍼니",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "벨로컴퍼니 | 마케팅 실행사 · 네이버플레이스·광고·바이럴 마케팅",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "벨로컴퍼니 | 마케팅 실행사 · 네이버플레이스·광고·바이럴 마케팅",
    description: "마케팅사 벨로컴퍼니. 마케팅·네이버플레이스·광고·바이럴 전문 실행사.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: IS_PRODUCTION
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
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
        <JsonLd />
        <ThemeProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
