"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronUp } from "lucide-react";

const ITEMS = [
  { label: "네이버 플레이스 순위 보장형", href: "/local#place" },
  { label: "강남언니·바비톡 최적화", href: "/beauty" },
  { label: "커머스 포토 리뷰 시딩", href: "/commerce" },
];

export function FloatingMenuSolutions() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-20 left-4 z-50 sm:bottom-24 sm:left-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-full left-0 mb-2 w-56 rounded-xl glass-strong border border-white/10 shadow-xl overflow-hidden pointer-events-auto"
          >
            <p className="px-4 py-3 text-xs font-semibold text-slate-400 border-b border-white/5 break-keep">
              인기 마케팅 솔루션 TOP 3
            </p>
            <ul className="py-2">
              {ITEMS.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-colors break-keep"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-3 rounded-full glass-strong border border-white/10 shadow-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors break-keep"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Trophy className="w-4 h-4 shrink-0 text-amber-400/90" />
        <span>인기 마케팅 솔루션</span>
        <ChevronUp
          className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </motion.button>
    </div>
  );
}
