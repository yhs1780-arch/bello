"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

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
  const [toast, setToast] = useState<"success" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgree) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: "", contact: "", email: "", company: "", concern: "" });
        setPrivacyAgree(false);
        setToast("success");
        setTimeout(() => setToast(null), 4000);
      } else {
        setToast(null);
        alert("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="consulting-form" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2 text-center break-keep">
              무료 컨설팅 신청
            </h2>
            <p className="text-slate-400 text-sm text-center mb-8 break-keep">
              이름, 연락처를 남겨 주시면 담당자가 연락드립니다.
            </p>
            {submitted ? (
              <p className="text-center text-blue-400 font-medium py-8 break-keep">
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
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
                    연락처 <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">이메일 (선택)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">업체명 (선택)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition break-keep"
                    placeholder="ex. 벨로 식당/의원"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
                    현재 가장 고민이신 점
                  </label>
                  <textarea
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 border border-white/10 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      접수 중...
                    </>
                  ) : (
                    <>
                      문의하기
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
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
            className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 flex items-center gap-3 glass-strong rounded-xl border border-white/10 p-4 shadow-xl"
          >
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
            <p className="text-sm font-medium text-slate-100 break-keep">
              성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
