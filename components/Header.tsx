"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BelloLogo } from "./BelloLogo";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/beauty", label: "뷰티/의료" },
  { href: "/local", label: "F&B/로컬" },
  { href: "/commerce", label: "커머스/온라인" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <BelloLogo />

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/10 border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴"
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
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-1">
              {navItems.map((item) => (
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
