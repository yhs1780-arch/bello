"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, MapPin, BookOpen, Video, LayoutList, Instagram } from "lucide-react";

const mockups = [
  { name: "샤오홍슈", label: "K-뷰티 관광 코스", color: "from-red-500/20" },
  { name: "강남언니", label: "성형·시술 리뷰", color: "from-cyan-500/20" },
  { name: "바비톡", label: "뷰티 리뷰", color: "from-violet-500/20" },
  { name: "네이버 카페", label: "미용의료 관련", color: "from-green-500/20" },
  { name: "네이버플레이스", label: "병원 리뷰", color: "from-green-600/20" },
  { name: "굿닥", label: "병원 후기", color: "from-blue-500/20" },
  { name: "유튜브 브이로그", label: "리뷰", color: "from-red-600/20" },
  { name: "블라인드", label: "의료 후기", color: "from-slate-600/20" },
  { name: "당근 동네생활", label: "병원 경험담", color: "from-orange-500/20" },
  { name: "페이스북", label: "지역 모임", color: "from-blue-700/20" },
  { name: "인스타그램", label: "스토리 후기", color: "from-pink-500/20" },
];

export function BeautyPlatformMockups() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {mockups.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl glass border border-white/10 p-4 overflow-hidden"
        >
          <div className={`flex items-center gap-2 mb-3 p-2 rounded-lg bg-gradient-to-br ${m.color}`}>
            <Star className="w-4 h-4 text-slate-200" />
            <span className="text-xs font-semibold text-slate-200">{m.name}</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-slate-700" />
            <div className="h-2 w-4/5 rounded bg-slate-700" />
            <div className="h-2 w-3/5 rounded bg-slate-700" />
          </div>
          <p className="mt-2 text-[10px] text-slate-500">{m.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
