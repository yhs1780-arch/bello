"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { BelloLogo } from "./BelloLogo";

const navItems = [
  { href: "/#case-section", label: "성과사례" },
  { href: "/#service-category", label: "서비스" },
  { href: "/#process-section", label: "실행방식" },
  { href: "/#consulting-form", label: "무료전략" },
  { href: "/#company-intro", label: "회사소개" },
];

const fallbackNavItems = [
  { href: "/", label: "홈" },
  { href: "/beauty", label: "뷰티/의료" },
  { href: "/local", label: "F&B/로컬" },
  { href: "/commerce", label: "커머스/온라인" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";
  const items = isHome ? navItems : fallbackNavItems;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-hidden border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 min-h-[44px]">
            <BelloLogo className="shrink-0" />

            <nav className="hidden md:flex items-center gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors break-keep ${
                    pathname === item.href
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="#consulting-form"
                className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold text-sm hover:bg-[#FFE44D] transition-colors shrink-0 break-keep"
              >
                무료 전략 받기
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <button
                className="md:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-slate-400 hover:text-slate-200 flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="메뉴 열기"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0B1120]/95 backdrop-blur-xl overflow-hidden"
            >
              <nav className="flex flex-col py-4 px-4 gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium ${
                      pathname === item.href
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#consulting-form"
                  onClick={() => setMobileOpen(false)}
                  className="mx-4 mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold text-sm"
                >
                  지금 무료 전략 받기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
