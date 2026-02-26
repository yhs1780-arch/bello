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

export const metadata: Metadata = {
  title: "BELLO 벨로컴퍼니 | 데이터로 증명하는 압도적 실행력",
  description:
    "기획부터 실행까지 빈틈없는 다이렉트 솔루션. 100% 실사용자 인프라, 어뷰징 0%. 무료 매장 진단 신청.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="relative pb-20 sm:pb-0">{children}</main>
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
