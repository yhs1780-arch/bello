"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import {
  CHANNEL_OPTIONS,
  CONTACT_TIME_OPTIONS,
  FORM_FIELD_LABELS,
  FORMSPREE_ENDPOINT,
  INDUSTRY_OPTIONS,
  MARKETING_BUDGET_OPTIONS,
  OPERATING_PERIOD_OPTIONS,
  PRIVACY_CONSENT_SUMMARY,
  SALES_RANGE_OPTIONS,
} from "@/lib/consultingFormConfig";

const EMPTY_FORM = {
  name: "",
  location: "",
  industry: "",
  operatingPeriod: "",
  contact: "",
  companyName: "",
  naverPlaceUrl: "",
  marketingBudget: "",
  monthlySalesRange: "",
  activeChannels: [] as string[],
  mainConcern: "",
  preferredContactTime: "",
  preferredContactTimeNote: "",
};

const inputClass =
  "w-full h-[48px] px-4 rounded-xl text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FFD600]/50 focus:border-[#FFD600] transition break-keep border border-[#333] bg-[#131929]";

const selectClass =
  "w-full h-[48px] px-4 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD600]/50 focus:border-[#FFD600] transition break-keep border border-[#333] bg-[#131929] appearance-none";

const textareaClass =
  "w-full px-4 py-3 rounded-xl border border-[#333] bg-[#131929] text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FFD600]/50 focus:border-[#FFD600] transition resize-none break-keep";

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-medium text-slate-400 mb-1.5 break-keep">
      {children}
      {required && <span className="text-amber-400 ml-0.5">*</span>}
    </label>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD600]/80 pt-1 break-keep">
      {children}
    </p>
  );
}

export function ConsultingForm() {
  const [leadSource, setLeadSource] = useState("direct");
  const [leadOrigin, setLeadOrigin] = useState("direct");
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get("src")?.trim() || params.get("utm_source")?.trim();
    const originParam = params.get("origin")?.trim() || params.get("req")?.trim();
    const fromStorage = window.localStorage.getItem("bello_lead_source");
    const originStorage = window.localStorage.getItem("bello_lead_origin");
    const nextLeadSource = fromParam || fromStorage || "direct";
    const nextLeadOrigin =
      originParam || originStorage || `${window.location.pathname}${window.location.search}`;

    if (fromParam) window.localStorage.setItem("bello_lead_source", fromParam);
    if (originParam) window.localStorage.setItem("bello_lead_origin", originParam);

    setLeadSource(nextLeadSource);
    setLeadOrigin(nextLeadOrigin);
  }, []);

  const toggleChannel = (channel: string) => {
    setFormData((p) => {
      const has = p.activeChannels.includes(channel);
      return {
        ...p,
        activeChannels: has
          ? p.activeChannels.filter((c) => c !== channel)
          : [...p.activeChannels, channel],
      };
    });
  };

  const preferredTimeDisplay = () => {
    const base = formData.preferredContactTime;
    const note = formData.preferredContactTimeNote.trim();
    if (!base) return "";
    return note ? `${base} / ${note}` : base;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgree) return;
    if (formData.activeChannels.length === 0) {
      setToast("error");
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setSubmitting(true);
    setToast(null);
    try {
      const fd = new FormData();
      fd.append(FORM_FIELD_LABELS.name, formData.name);
      fd.append(FORM_FIELD_LABELS.location, formData.location);
      fd.append(FORM_FIELD_LABELS.industry, formData.industry);
      fd.append(FORM_FIELD_LABELS.operatingPeriod, formData.operatingPeriod);
      fd.append(FORM_FIELD_LABELS.contact, formData.contact);
      fd.append(FORM_FIELD_LABELS.companyName, formData.companyName);
      fd.append(FORM_FIELD_LABELS.naverPlaceUrl, formData.naverPlaceUrl);
      fd.append(FORM_FIELD_LABELS.marketingBudget, formData.marketingBudget);
      fd.append(FORM_FIELD_LABELS.monthlySalesRange, formData.monthlySalesRange);
      fd.append(FORM_FIELD_LABELS.activeChannels, formData.activeChannels.join(", "));
      fd.append(FORM_FIELD_LABELS.mainConcern, formData.mainConcern);
      fd.append(FORM_FIELD_LABELS.preferredContactTime, preferredTimeDisplay());
      fd.append(FORM_FIELD_LABELS.leadSource, leadSource);
      fd.append(FORM_FIELD_LABELS.leadOrigin, leadOrigin);
      fd.append(FORM_FIELD_LABELS.privacyAgree, privacyAgree ? "동의함" : "");
      fd.append(
        "_subject",
        `[BELLO] 무료 컨설팅 신청 - ${formData.companyName || formData.name || "신규 문의"}`,
      );

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData(EMPTY_FORM);
        setPrivacyAgree(false);
        setToast("success");
        try {
          window.dispatchEvent(
            new CustomEvent("bello_lead_submit", {
              detail: { leadSource, leadOrigin },
            }),
          );
        } catch {
          // ignore
        }
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
      <section
        id="consulting-form"
        className="relative w-full max-w-full overflow-hidden py-8 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B1120]"
      >
        <div className="max-w-6xl mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl border-2 border-[#FFD700]/30 bg-gradient-to-br from-[#FFD700]/10 via-amber-500/5 to-transparent p-5 sm:p-8 lg:p-10 shadow-2xl shadow-amber-500/10"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] gap-8 lg:gap-10 items-start">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 break-keep leading-snug">
                  무료 상담만 받아도
                  <br />
                  30만 원 상당의 우리 가게 맞춤 노출
                  <br />
                  전략을 드립니다.
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed break-keep">
                  ✅ 우리 가게가 안 보이는 이유 진단
                  <br />
                  ✅ 손님들이 먼저 찾게 만드는 노하우
                  <br />
                  ✅ 매출 상승 체크리스트 무료 제공
                </p>
                <p className="text-slate-500 text-xs mt-4 break-keep">⚡ 월 선착순 15개 업체 한정</p>
                <p className="text-slate-500 text-[11px] mt-3 break-keep leading-relaxed hidden lg:block">
                  아래 항목을 작성해 주시면 담당자가 매장·업종에 맞는 전략을 준비합니다.
                  <br />
                  <span className="text-slate-400">표시된 항목은 필수입니다.</span>
                </p>
              </div>

              <div className="min-w-0">
                {submitted ? (
                  <p className="text-center text-[#FFD700] font-medium py-12 break-keep">
                    접수되었습니다. 작성해 주신 연락처로 빠른 시일 내에 연락드리겠습니다.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <SectionTitle>기본 정보</SectionTitle>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.name}</FieldLabel>
                        <input
                          type="text"
                          name={FORM_FIELD_LABELS.name}
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          className={inputClass}
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.contact}</FieldLabel>
                        <input
                          type="tel"
                          name={FORM_FIELD_LABELS.contact}
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                          className={inputClass}
                          placeholder="010-0000-0000"
                        />
                      </div>
                    </div>

                    <SectionTitle>업체 정보</SectionTitle>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.companyName}</FieldLabel>
                        <input
                          type="text"
                          name={FORM_FIELD_LABELS.companyName}
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData((p) => ({ ...p, companyName: e.target.value }))}
                          className={inputClass}
                          placeholder="ex. 벨로 식당"
                        />
                      </div>
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.location}</FieldLabel>
                        <input
                          type="text"
                          name={FORM_FIELD_LABELS.location}
                          required
                          value={formData.location}
                          onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                          className={inputClass}
                          placeholder="ex. 서울 강남구 역삼동"
                        />
                      </div>
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.industry}</FieldLabel>
                        <select
                          name={FORM_FIELD_LABELS.industry}
                          required
                          value={formData.industry}
                          onChange={(e) => setFormData((p) => ({ ...p, industry: e.target.value }))}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            업종 선택
                          </option>
                          {INDUSTRY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.operatingPeriod}</FieldLabel>
                        <select
                          name={FORM_FIELD_LABELS.operatingPeriod}
                          required
                          value={formData.operatingPeriod}
                          onChange={(e) => setFormData((p) => ({ ...p, operatingPeriod: e.target.value }))}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            운영 기간 선택
                          </option>
                          {OPERATING_PERIOD_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <FieldLabel required>{FORM_FIELD_LABELS.naverPlaceUrl}</FieldLabel>
                      <input
                        type="url"
                        name={FORM_FIELD_LABELS.naverPlaceUrl}
                        required
                        value={formData.naverPlaceUrl}
                        onChange={(e) => setFormData((p) => ({ ...p, naverPlaceUrl: e.target.value }))}
                        className={inputClass}
                        placeholder="https://map.naver.com/... 또는 플레이스 링크"
                      />
                      <p className="text-[10px] text-slate-500 mt-1 break-keep">
                        아직 등록 전이면 「미등록」이라고 적어 주세요.
                      </p>
                    </div>

                    <SectionTitle>마케팅·매출 현황</SectionTitle>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.marketingBudget}</FieldLabel>
                        <select
                          name={FORM_FIELD_LABELS.marketingBudget}
                          required
                          value={formData.marketingBudget}
                          onChange={(e) => setFormData((p) => ({ ...p, marketingBudget: e.target.value }))}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            선택
                          </option>
                          {MARKETING_BUDGET_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.monthlySalesRange}</FieldLabel>
                        <select
                          name={FORM_FIELD_LABELS.monthlySalesRange}
                          required
                          value={formData.monthlySalesRange}
                          onChange={(e) => setFormData((p) => ({ ...p, monthlySalesRange: e.target.value }))}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            선택
                          </option>
                          {SALES_RANGE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <FieldLabel required>{FORM_FIELD_LABELS.activeChannels}</FieldLabel>
                      <p className="text-[10px] text-slate-500 mb-2 break-keep">해당하는 채널을 모두 선택해 주세요.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {CHANNEL_OPTIONS.map((ch) => {
                          const checked = formData.activeChannels.includes(ch);
                          return (
                            <label
                              key={ch}
                              className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs cursor-pointer transition ${
                                checked
                                  ? "border-[#FFD600]/50 bg-[#FFD600]/10 text-slate-100"
                                  : "border-[#333] bg-[#131929] text-slate-400 hover:border-[#444]"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleChannel(ch)}
                                className="rounded border-white/20 bg-white/5 text-[#FFD600] focus:ring-[#FFD600]/50"
                              />
                              <span className="break-keep">{ch}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <SectionTitle>상담 요청</SectionTitle>
                    <div>
                      <FieldLabel required>{FORM_FIELD_LABELS.mainConcern}</FieldLabel>
                      <textarea
                        name={FORM_FIELD_LABELS.mainConcern}
                        required
                        rows={3}
                        value={formData.mainConcern}
                        onChange={(e) => setFormData((p) => ({ ...p, mainConcern: e.target.value }))}
                        className={textareaClass}
                        placeholder="노출, 리뷰, 예약·매출, 경쟁 업체 등 지금 가장 해결하고 싶은 문제를 적어 주세요."
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <FieldLabel required>{FORM_FIELD_LABELS.preferredContactTime}</FieldLabel>
                        <select
                          name={FORM_FIELD_LABELS.preferredContactTime}
                          required
                          value={formData.preferredContactTime}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, preferredContactTime: e.target.value }))
                          }
                          className={selectClass}
                        >
                          <option value="" disabled>
                            시간대 선택
                          </option>
                          {CONTACT_TIME_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel>추가 요청 (선택)</FieldLabel>
                        <input
                          type="text"
                          value={formData.preferredContactTimeNote}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, preferredContactTimeNote: e.target.value }))
                          }
                          className={inputClass}
                          placeholder="ex. 평일 오후 2시 이후"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="privacy"
                        name={FORM_FIELD_LABELS.privacyAgree}
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
                      className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] transition-all duration-300 border border-amber-400/30 disabled:opacity-50 disabled:pointer-events-none"
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
              <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed break-keep">
                {PRIVACY_CONSENT_SUMMARY}
              </p>
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
              전송에 실패했습니다. 필수 항목·마케팅 채널 선택을 확인한 뒤 다시 시도해 주세요.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
