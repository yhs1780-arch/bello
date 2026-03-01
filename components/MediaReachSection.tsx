"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Megaphone, Smartphone, Share2 } from "lucide-react";

const MEDIA_GROUPS = [
  {
    id: "online",
    title: "온라인 매체 광고",
    icon: Megaphone,
    items: [
      "네이버 검색광고",
      "카카오 모먼트",
      "구글/유튜브 Ads",
      "메타(인스타/페북) 스폰서드",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    id: "app",
    title: "앱 광고 (버티컬)",
    icon: Smartphone,
    items: [
      "강남언니",
      "바비톡",
      "화해",
      "캐치테이블",
      "당근마켓 동네생활",
    ],
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    id: "viral",
    title: "기타 매체 (바이럴/시딩)",
    icon: Share2,
    items: [
      "샤오홍슈",
      "블라인드",
      "네이버 카페/밴드",
      "맘카페 입소문 타겟팅",
    ],
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/20",
  },
];

export function MediaReachSection() {
  const [activeTab, setActiveTab] = useState<string>("online");

  return (
    <section className="relative w-full max-w-full overflow-hidden py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-100 mb-3 sm:mb-4 break-keep">
            온라인부터 앱까지, 빈틈없는 매체 장악력
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            검색·소셜·앱·바이럴까지 한 곳에서 실행합니다.
          </p>
        </ScrollReveal>

        {/* 탭 (모바일) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 lg:hidden">
          {MEDIA_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveTab(g.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors break-keep ${
                activeTab === g.id
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        {/* 3열 그리드 (PC) / 탭 콘텐츠 (모바일) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {MEDIA_GROUPS.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-6 lg:p-8 bg-gradient-to-br ${group.gradient} ${group.border} ${
                activeTab !== group.id ? "hidden lg:block" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/10">
                  <group.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white break-keep">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300 break-keep">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
