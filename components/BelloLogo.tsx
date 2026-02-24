"use client";

import Link from "next/link";

export function BelloLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-slate-100 hover:text-white transition-colors ${className}`}
    >
      <span
        className="font-serif italic font-semibold text-xl sm:text-2xl tracking-wide"
        style={{
          color: "#d4af37",
          textShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
        }}
      >
        BELLO
      </span>
      <span className="text-slate-400 text-sm font-medium hidden sm:inline whitespace-nowrap">
        벨로컴퍼니
      </span>
    </Link>
  );
}
