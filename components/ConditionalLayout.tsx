"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Chatbot } from "./Chatbot";
import { MobileBottomCta } from "./MobileBottomCta";
import { LiveToast } from "./LiveToast";
import { FloatingStatusBar } from "./FloatingStatusBar";
import { AwardPopup } from "./AwardPopup";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <Header />}
      <main className="relative overflow-x-hidden max-w-full min-w-0 pb-[max(5rem,env(safe-area-inset-bottom))] sm:pb-0">
        {children}
      </main>
      <Footer />
      <Chatbot />
      {!isHome && <MobileBottomCta />}
      {!isHome && <LiveToast />}
      <FloatingStatusBar />
      <AwardPopup />
    </>
  );
}
