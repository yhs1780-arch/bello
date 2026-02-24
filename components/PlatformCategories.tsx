"use client";

import { ScrollReveal } from "./ScrollReveal";
import { CompanyName } from "./CompanyName";
import { platformCategories } from "@/lib/data";

export function PlatformCategories() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3 font-[var(--font-heading)]">
            100개 플랫폼, 클라이언트가 원하면 다 가능
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            <CompanyName />는 아래 9개 카테고리 100개 플랫폼에서 광고를 진행합니다.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="glass rounded-xl p-4 lg:p-5 border border-white/10"
              >
                <h3 className="text-sm font-semibold text-amber-400/90 mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
