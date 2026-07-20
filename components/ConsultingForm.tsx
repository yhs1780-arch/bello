"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import {
  CHANNEL_OPTIONS,
  CONTACT_TIME_OPTIONS,
  FORM_FIELD_LABELS,
  FORM_STEPS,
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

type FormData = typeof EMPTY_FORM;

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

function validateStep(step: number, data: FormData): string | null {
  const trim = (s: string) => s.trim();
  switch (step) {
    case 0:
      if (!trim(data.name)) return "성함을 입력해 주세요.";
      if (!trim(data.contact)) return "연락처를 입력해 주세요.";
      if (trim(data.contact).replace(/\D/g, "").length < 9) return "올바른 연락처를 입력해 주세요.";
      return null;
    case 1:
      if (!trim(data.companyName)) return "상호명을 입력해 주세요.";
      if (!trim(data.location)) return "소재지를 입력해 주세요.";
      if (!data.industry) return "업종을 선택해 주세요.";
      if (!data.operatingPeriod) return "운영기간을 선택해 주세요.";
      if (!trim(data.naverPlaceUrl)) return "네이버플레이스 주소를 입력해 주세요. (미등록 시 「미등록」)";
      return null;
    case 2:
      if (!data.marketingBudget) return "한 달 평균 마케팅 비용을 선택해 주세요.";
      if (!data.monthlySalesRange) return "월 평균 매출 구간을 선택해 주세요.";
      if (data.activeChannels.length === 0) return "진행 중인 마케팅 채널을 1개 이상 선택해 주세요.";
      return null;
    case 3:
      if (!trim(data.mainConcern)) return "지금 가장 큰 고민을 적어 주세요.";
      if (!data.preferredContactTime) return "상담 편한 시간을 선택해 주세요.";
      return null;
    default:
      return null;
  }
}

function StepSummary({ data }: { data: FormData }) {
  const rows: [string, string][] = [
    [FORM_FIELD_LABELS.name, data.name],
    [FORM_FIELD_LABELS.contact, data.contact],
    [FORM_FIELD_LABELS.companyName, data.companyName],
    [FORM_FIELD_LABELS.location, data.location],
    [FORM_FIELD_LABELS.industry, data.industry],
    [FORM_FIELD_LABELS.operatingPeriod, data.operatingPeriod],
    [FORM_FIELD_LABELS.marketingBudget, data.marketingBudget],
    [FORM_FIELD_LABELS.monthlySalesRange, data.monthlySalesRange],
    [FORM_FIELD_LABELS.activeChannels, data.activeChannels.join(", ")],
  ];
  return (
    <div className="rounded-xl border border-[#333] bg-[#0d1424] p-3 space-y-1.5">
      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">입력 요약</p>
      {rows.map(([label, value]) =>
        value ? (
          <div key={label} className="flex gap-2 text-[11px] leading-snug">
            <span className="text-slate-500 shrink-0 w-24">{label}</span>
            <span className="text-slate-300 break-keep">{value}</span>
          </div>
        ) : null,
      )}
    </div>
  );
}

export function ConsultingForm() {
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);
  const [leadSource, setLeadSource] = useState("direct");
  const [leadOrigin, setLeadOrigin] = useState("direct");
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<"success" | "error" | null>(null);

  const currentStep = FORM_STEPS[step];
  const isLastStep = step === FORM_STEPS.length - 1;
  const progressPct = ((step + 1) / FORM_STEPS.length) * 100;

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
    setStepError(null);
  };

  const preferredTimeDisplay = () => {
    const base = formData.preferredContactTime;
    const note = formData.preferredContactTimeNote.trim();
    if (!base) return "";
    return note ? `${base} / ${note}` : base;
  };

  const goNext = () => {
    const err = validateStep(step, formData);
    if (err) {
      setStepError(err);
      return;
    }
    setStepError(null);
    setStep((s) => Math.min(s + 1, FORM_STEPS.length - 1));
  };

  const goPrev = () => {
    setStepError(null);
    setStep((s) => Math.max(0, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = validateStep(3, formData);
    if (err) {
      setStepError(err);
      return;
    }
    if (!privacyAgree) {
      setStepError("개인정보 수집·이용에 동의해 주세요.");
      return;
    }

    setSubmitting(true);
    setStepError(null);
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
        setStep(0);
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

  const renderStepFields = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <FieldLabel required>{FORM_FIELD_LABELS.name}</FieldLabel>
              <input
                type="text"
                autoFocus
                value={formData.name}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, name: e.target.value }));
                  setStepError(null);
                }}
                className={inputClass}
                placeholder="홍길동"
              />
            </div>
            <div>
              <FieldLabel required>{FORM_FIELD_LABELS.contact}</FieldLabel>
              <input
                type="tel"
                value={formData.contact}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, contact: e.target.value }));
                  setStepError(null);
                }}
                className={inputClass}
                placeholder="010-0000-0000"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel required>{FORM_FIELD_LABELS.companyName}</FieldLabel>
                <input
                  type="text"
                  autoFocus
                  value={formData.companyName}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, companyName: e.target.value }));
                    setStepError(null);
                  }}
                  className={inputClass}
                  placeholder="ex. 벨로 식당"
                />
              </div>
              <div>
                <FieldLabel required>{FORM_FIELD_LABELS.location}</FieldLabel>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, location: e.target.value }));
                    setStepError(null);
                  }}
                  className={inputClass}
                  placeholder="ex. 서울 강남구 역삼동"
                />
              </div>
              <div>
                <FieldLabel required>{FORM_FIELD_LABELS.industry}</FieldLabel>
                <select
                  value={formData.industry}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, industry: e.target.value }));
                    setStepError(null);
                  }}
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
                  value={formData.operatingPeriod}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, operatingPeriod: e.target.value }));
                    setStepError(null);
                  }}
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
                type="text"
                value={formData.naverPlaceUrl}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, naverPlaceUrl: e.target.value }));
                  setStepError(null);
                }}
                className={inputClass}
                placeholder="플레이스 URL 또는 「미등록」"
              />
              <p className="text-[10px] text-slate-500 mt-1 break-keep">
                아직 등록 전이면 「미등록」이라고 적어 주세요.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel required>{FORM_FIELD_LABELS.marketingBudget}</FieldLabel>
                <select
                  value={formData.marketingBudget}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, marketingBudget: e.target.value }));
                    setStepError(null);
                  }}
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
                  value={formData.monthlySalesRange}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, monthlySalesRange: e.target.value }));
                    setStepError(null);
                  }}
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
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <StepSummary data={formData} />
            <div>
              <FieldLabel required>{FORM_FIELD_LABELS.mainConcern}</FieldLabel>
              <textarea
                autoFocus
                rows={3}
                value={formData.mainConcern}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, mainConcern: e.target.value }));
                  setStepError(null);
                }}
                className={textareaClass}
                placeholder="노출, 리뷰, 예약·매출, 경쟁 업체 등 지금 가장 해결하고 싶은 문제를 적어 주세요."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel required>{FORM_FIELD_LABELS.preferredContactTime}</FieldLabel>
                <select
                  value={formData.preferredContactTime}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, preferredContactTime: e.target.value }));
                    setStepError(null);
                  }}
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
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                checked={privacyAgree}
                onChange={(e) => {
                  setPrivacyAgree(e.target.checked);
                  setStepError(null);
                }}
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
          </div>
        );
      default:
        return null;
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
                {!submitted && (
                  <div className="mt-5 hidden lg:block rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-white break-keep">{currentStep.headline}</p>
                    <p className="text-xs text-slate-400 mt-1 break-keep">{currentStep.hint}</p>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                {submitted ? (
                  <p className="text-center text-[#FFD700] font-medium py-12 break-keep">
                    접수되었습니다. 작성해 주신 연락처로 빠른 시일 내에 연락드리겠습니다.
                  </p>
                ) : (
                  <div>
                    {/* 진행률 */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                        <span className="font-medium text-slate-300">
                          {step + 1} / {FORM_STEPS.length} · {currentStep.title}
                        </span>
                        <span>{Math.round(progressPct)}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#131929] overflow-hidden">
                        <motion.div
                          className="h-full bg-[#FFD600] rounded-full"
                          initial={false}
                          animate={{ width: `${progressPct}%` }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 gap-1">
                        {FORM_STEPS.map((s, i) => (
                          <span
                            key={s.id}
                            className={`text-[9px] sm:text-[10px] truncate flex-1 text-center ${
                              i <= step ? "text-[#FFD600]/90 font-medium" : "text-slate-600"
                            }`}
                          >
                            {s.title}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-white mt-3 break-keep lg:hidden">
                        {currentStep.headline}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 break-keep lg:hidden">{currentStep.hint}</p>
                    </div>

                    <form onSubmit={isLastStep ? handleSubmit : (e) => e.preventDefault()} noValidate>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.22 }}
                          className="min-h-[200px]"
                        >
                          {renderStepFields()}
                        </motion.div>
                      </AnimatePresence>

                      {stepError && (
                        <p className="mt-3 text-xs text-red-400 bg-red-950/40 border border-red-500/30 rounded-lg px-3 py-2 break-keep">
                          {stepError}
                        </p>
                      )}

                      <div className="flex gap-2 mt-5">
                        {step > 0 && (
                          <button
                            type="button"
                            onClick={goPrev}
                            className="inline-flex items-center justify-center gap-1 h-12 px-4 rounded-xl border border-[#333] text-slate-300 text-sm font-medium hover:bg-white/5 transition shrink-0"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            이전
                          </button>
                        )}
                        {!isLastStep ? (
                          <button
                            type="button"
                            onClick={goNext}
                            className="flex-1 inline-flex items-center justify-center gap-1 h-12 px-6 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] transition"
                          >
                            다음
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={!privacyAgree || submitting}
                            className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] transition disabled:opacity-50 disabled:pointer-events-none"
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
                        )}
                      </div>
                    </form>
                  </div>
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
              전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
