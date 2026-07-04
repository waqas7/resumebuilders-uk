"use client";

import { useCallback, useEffect, useState } from "react";
import { Lock, Sparkles } from "lucide-react";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JobCvPreview } from "@/components/templates/job-cv-preview";
import {
  clearDraft,
  loadDraft,
  saveDraft,
  type CvBuilderDraft,
} from "@/lib/cv-builder-storage";
import {
  trackAppInstallClick,
  trackStartBuilderClick,
} from "@/lib/analytics";
import type { JobCvData, JobTemplatePage } from "@/lib/job-template-pages";
import { cn } from "@/lib/utils";

type CvBuilderFunnelProps = {
  page: JobTemplatePage;
  cvData: JobCvData;
  startRequested?: boolean;
  onStartHandled?: () => void;
};

type Step = "idle" | "step1" | "step2" | "locked";

export function CvBuilderFunnel({
  page,
  cvData,
  startRequested,
  onStartHandled,
}: CvBuilderFunnelProps) {
  const [step, setStep] = useState<Step>("idle");
  const [draft, setDraft] = useState<Partial<CvBuilderDraft>>({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: page.builderLabel,
    summary: "",
  });

  useEffect(() => {
    const saved = loadDraft(page.slug);
    if (saved) {
      setDraft(saved);
      if (saved.step >= 2) setStep("locked");
      else if (saved.step === 1) setStep("step2");
    }
  }, [page.slug]);

  const persist = useCallback(
    (next: Partial<CvBuilderDraft>, nextStep: number) => {
      const merged: CvBuilderDraft = {
        slug: page.slug,
        fullName: next.fullName ?? "",
        email: next.email ?? "",
        phone: next.phone ?? "",
        jobTitle: next.jobTitle ?? page.builderLabel,
        summary: next.summary ?? "",
        step: nextStep,
        updatedAt: new Date().toISOString(),
      };
      saveDraft(merged);
      setDraft(merged);
    },
    [page.builderLabel, page.slug]
  );

  const startBuilder = useCallback(() => {
    trackStartBuilderClick(page.slug);
    setStep("step1");
    persist(draft, 1);
  }, [draft, page.slug, persist]);

  useEffect(() => {
    if (startRequested && step === "idle") {
      startBuilder();
      onStartHandled?.();
    }
  }, [startRequested, step, startBuilder, onStartHandled]);

  const handleStartClick = () => {
    startBuilder();
    document.getElementById("cv-builder")?.scrollIntoView({ behavior: "smooth" });
  };

  const completeStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    persist(draft, 1);
    setStep("step2");
  };

  const completeStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    persist(draft, 2);
    setStep("locked");
  };

  const handleInstallClick = () => {
    trackAppInstallClick("builder_lock_screen", page.slug);
  };

  if (step === "idle") {
    return (
      <section id="cv-builder" className="scroll-mt-20">
        <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/10 to-blue-600/10 p-8 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-violet-600" />
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            Build This CV Free — Start in 60 Seconds
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Customise this {page.builderLabel.toLowerCase()} template with your
            details. Most users download the app to finish and export PDF in
            under 2 minutes.
          </p>
          <button
            type="button"
            onClick={handleStartClick}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
          >
            Build This CV Free
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="cv-builder" className="scroll-mt-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="sticky top-24">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Live preview
            </p>
            <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-border shadow-lg">
              <JobCvPreview
                data={cvData}
                draft={{
                  fullName: draft.fullName,
                  jobTitle: draft.jobTitle,
                  summary: draft.summary,
                }}
                highlightSections
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          {step === "locked" ? (
            <LockScreen
              onInstallClick={handleInstallClick}
              onStartOver={() => {
                clearDraft(page.slug);
                setStep("step1");
                setDraft({
                  fullName: "",
                  email: "",
                  phone: "",
                  jobTitle: page.builderLabel,
                  summary: "",
                });
              }}
            />
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                    step === "step1"
                      ? "bg-violet-600 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  1
                </span>
                <div className="h-px flex-1 bg-border" />
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                    step === "step2"
                      ? "bg-violet-600 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  2
                </span>
              </div>

              {step === "step1" && (
                <form onSubmit={completeStep1} className="space-y-4">
                  <h2 className="text-xl font-bold">Your contact details</h2>
                  <p className="text-sm text-muted-foreground">
                    Step 1 of 2 — we&apos;ll save your progress automatically.
                  </p>
                  <Field
                    label="Full name"
                    value={draft.fullName ?? ""}
                    onChange={(v) => setDraft((d) => ({ ...d, fullName: v }))}
                    required
                    placeholder="e.g. Alex Johnson"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={draft.email ?? ""}
                    onChange={(v) => setDraft((d) => ({ ...d, email: v }))}
                    required
                    placeholder="you@email.co.uk"
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={draft.phone ?? ""}
                    onChange={(v) => setDraft((d) => ({ ...d, phone: v }))}
                    required
                    placeholder="+44 7700 900000"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white"
                  >
                    Continue →
                  </button>
                </form>
              )}

              {step === "step2" && (
                <form onSubmit={completeStep2} className="space-y-4">
                  <h2 className="text-xl font-bold">Your headline & summary</h2>
                  <p className="text-sm text-muted-foreground">
                    Step 2 of 2 — almost done. Export unlocks in the app.
                  </p>
                  <Field
                    label="Job title"
                    value={draft.jobTitle ?? ""}
                    onChange={(v) => setDraft((d) => ({ ...d, jobTitle: v }))}
                    required
                  />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Professional summary
                    </label>
                    <textarea
                      value={draft.summary ?? ""}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, summary: e.target.value }))
                      }
                      required
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                      placeholder="2–3 sentences about your experience and goals…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white"
                  >
                    Preview & export →
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function LockScreen({
  onInstallClick,
  onStartOver,
}: {
  onInstallClick: () => void;
  onStartOver: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet-500/40 bg-card p-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      <Lock className="relative mx-auto h-12 w-12 text-violet-600" />
      <h2 className="relative mt-4 text-2xl font-bold">
        Export to PDF Available in Android App
      </h2>
      <p className="relative mx-auto mt-3 max-w-md text-muted-foreground">
        Your CV progress is saved. Download the free app to export PDF, unlock
        all templates, and finish your CV in under 2 minutes.
      </p>
      <p className="relative mt-2 text-sm font-medium text-violet-600 dark:text-violet-400">
        Most users download the app to finish their CV in under 2 minutes
      </p>
      <div className="relative mt-8">
        <PlayStoreButton onClick={onInstallClick}>
          Download App to Continue
        </PlayStoreButton>
      </div>
      <button
        type="button"
        onClick={onStartOver}
        className="relative mt-4 text-xs text-muted-foreground hover:underline"
      >
        Edit details again
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
      />
    </div>
  );
}

export function BuildCvHeroButton({
  onStart,
  className,
}: {
  onStart: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onStart}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110",
        className
      )}
    >
      Build This CV Free
    </button>
  );
}
