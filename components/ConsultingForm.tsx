"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqedwqlj";

const PRIVACY_TEXT = `개인정보 수집 및 이용 동의

1. 수집 및 이용 목적: 무료 컨설팅 신청 확인, 마케팅 진단 결과 안내, 서비스 제안 및 상담 응대
2. 수집 항목: 이름, 연락처, 이메일(선택), 업체명(선택), 문의 내용
3. 보유 및 이용 기간: 상담 완료 후 1년 보관 (단, 관련 법령에 따라 보관이 필요한 경우 해당 기간까지)
4. 동의 거부권: 귀하는 개인정보 수집 및 이용에 동의를 거부할 권리가 있습니다. 단, 거부 시 무료 진단 및 상담 서비스 이용이 제한될 수 있습니다.`;

export function ConsultingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    company: "",
    concern: "",
  });
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgree) return;
    setSubmitting(true);
    setToast(null);
    try {
      const fd = new FormData();
      fd.append("이름", formData.name);
      fd.append("연락처", formData.contact);
      fd.append("이메일", formData.email);
      fd.append("업체명", formData.company);
      fd.append("문의내용", formData.concern);
      fd.append("개인정보동의", privacyAgree ? "동의함" : "");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", contact: "", email: "", company: "", concern: "" });
        setPrivacyAgree(false);
        setToast("success");
        setTimeout(() => setToast(null), 5000);
      } else {
        setToast("error");
        setTimeout(() => setToast(null), 5000);
      }
    } catch {
      setToast("error");
      setTimeout(() => setToast(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="consulting-form" className="relative w-full max-w-full overflow-hidden py-8 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B1120]">
        <div className="max-w-5xl mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-[#FFD700]/10 via-amber-500/5 to-transparent p-5 sm:p-8 lg:p-12 shadow-2xl shadow-amber-500/10"
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 break-keep leading-snug">
                  무료 상담만 받아도
                  <br />
                  30만 원 상당의 &apos;우리 가게 맞춤 노출 전략&apos;을 드립니다.
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed space-y-1 break-keep">
                  · 우리 가게가 인터넷에서 안 보이는 이유 진단
                  <br />
                  · 손님들이 먼저 찾게 만드는 노하우
                  <br />
                  · 매출 상승 체크리스트 무료 제공
                </p>
              </div>
              <div className="order-1 lg:order-2">
            {submitted ? (
              <p className="text-center text-[#FFD700] font-medium py-8 break-keep">
                접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
                    이름 <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="이름"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full min-h-[48px] px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
                    연락처 <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="연락처"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                    className="w-full min-h-[48px] px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">이메일 (선택)</label>
                  <input
                    type="email"
                    name="이메일"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full min-h-[48px] px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">업체명 (선택)</label>
                  <input
                    type="text"
                    name="업체명"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    className="w-full min-h-[48px] px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="ex. 벨로 식당/의원"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
                    현재 가장 고민이신 점
                  </label>
                  <textarea
                    name="문의내용"
                    rows={4}
                    value={formData.concern}
                    onChange={(e) => setFormData((p) => ({ ...p, concern: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition resize-none break-keep"
                    placeholder="마케팅 목표, 예산, 현재 노출·매출 상태 등을 간단히 적어 주세요."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="개인정보동의"
                    checked={privacyAgree}
                    onChange={(e) => setPrivacyAgree(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/50"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-400 cursor-pointer break-keep">
                    <span className="text-amber-400">[필수]</span> 개인정보 수집 및 이용에 동의합니다.{" "}
                    <button
                      type="button"
                      onClick={() => setPrivacyModalOpen(true)}
                      className="text-blue-400 hover:underline"
                    >
                      자세히 보기
                    </button>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!privacyAgree || submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(255,215,0,0.5)] transition-all duration-300 border border-amber-400/30 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      지금 무료 전략 받기
                      <Send className="w-5 h-5 shrink-0" />
                    </>
                  )}
                </button>
              </form>
            )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {privacyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setPrivacyModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl border border-white/10 p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            >
              <h3 className="text-lg font-semibold text-white mb-4 break-keep">개인정보 수집 및 이용 동의</h3>
              <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed break-keep">{PRIVACY_TEXT}</p>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="mt-6 w-full py-3 rounded-xl bg-white/10 text-slate-200 font-medium hover:bg-white/15 transition break-keep"
              >
                닫기
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed top-1/2 left-4 right-4 w-[calc(100vw-2rem)] max-w-sm sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2 z-50 flex items-center gap-3 glass-strong rounded-xl border border-white/10 p-4 shadow-xl -translate-y-1/2 box-border"
          >
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
            <p className="text-sm font-medium text-slate-100 break-keep">
              성공적으로 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.
            </p>
          </motion.div>
        )}
        {toast === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed top-1/2 left-4 right-4 w-[calc(100vw-2rem)] max-w-sm sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2 z-50 flex items-center gap-3 glass-strong rounded-xl border border-red-500/30 bg-red-950/30 p-4 shadow-xl -translate-y-1/2 box-border"
          >
            <p className="text-sm font-medium text-red-200 break-keep">
              앗! 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
