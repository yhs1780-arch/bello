"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/data";

export default function CasesPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors break-keep"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 break-keep"
          >
            성공 사례
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mb-14 break-keep"
          >
            뷰티·F&B·커머스 등 BELLO와 함께한 압도적인 성과입니다.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {caseStudies.map((card, i) => (
              <motion.article
                key={card.title + i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl border border-white/10 p-6 flex flex-col hover:border-white/20 transition-colors"
              >
                <span className="inline-block text-xs font-medium text-blue-400 mb-2 break-keep">
                  {card.category}
                </span>
                {card.metric && (
                  <p className="text-blue-400 font-semibold text-sm mb-2 break-keep">{card.metric}</p>
                )}
                <h2 className="text-xl font-semibold text-white mb-2 break-keep">{card.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 break-keep">{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
