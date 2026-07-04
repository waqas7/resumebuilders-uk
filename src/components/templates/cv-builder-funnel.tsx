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
  trackStartBuilderClick,
  trackCvExampleDownload,
  trackCvExamplePrint,
} from "@/lib/analytics";
import type { JobCvData, JobTemplatePage } from "@/lib/job-template-pages";
import { cn } from "@/lib/utils";
import {
  CV_CHECKLIST_DOWNLOAD_PATH,
  UK_CV_CHECKLIST,
} from "@/lib/cv-checklist";
import {
  downloadCvExampleHtml,
  mergeDraftIntoCvData,
  printCvExample,
} from "@/lib/print-cv-example";

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
                  email: draft.email,
                  phone: draft.phone,
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
              cvData={cvData}
              draft={draft}
              builderLabel={page.builderLabel}
              templateSlug={page.slug}
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
                    Step 2 of 2 — add your headline and summary. Work history
                    and education can be edited in the Android app.
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
                    Preview & save draft →
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
  cvData,
  draft,
  builderLabel,
  templateSlug,
  onStartOver,
}: {
  cvData: JobCvData;
  draft: Partial<CvBuilderDraft>;
  builderLabel: string;
  templateSlug: string;
  onStartOver: () => void;
}) {
  const exampleData = mergeDraftIntoCvData(cvData, draft);
  const exampleTitle = `${builderLabel} CV Example UK`;

  const handlePrint = () => {
    trackCvExamplePrint(templateSlug);
    const ok = printCvExample(exampleData, exampleTitle);
    if (!ok) {
      downloadCvExampleHtml(exampleData, exampleTitle);
    }
  };

  const handleDownload = () => {
    trackCvExampleDownload(templateSlug);
    downloadCvExampleHtml(exampleData, exampleTitle);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet-500/40 bg-card p-6 text-left md:p-8">
      <div className="text-center">
        <Lock className="mx-auto h-10 w-10 text-violet-600" />
        <h2 className="mt-4 text-2xl font-bold">
          Your details are saved on this device
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          We saved your name, email, phone, and summary in this browser only.
          They stay here until you clear site data — they are not sent to our
          servers and will not appear on another phone or computer.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
        <h3 className="font-semibold text-foreground">
          Want to edit work experience, education, or skills?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This page only updates your contact details and summary. Work history,
          education, and skills still show the example template. To change
          those sections, add jobs, reorder content, and export a finished PDF,
          download the free Android app.
        </p>
        <div className="mt-4">
          <PlayStoreButton ctaSource="builder_lock_screen" templateSlug={templateSlug}>
            Download Android App — Edit Full CV & Export PDF
          </PlayStoreButton>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <h3 className="font-semibold">Free on this page</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Download or print an example CV layout with your contact details
            filled in. To save as PDF, choose{" "}
            <strong className="text-foreground">Save as PDF</strong> in the
            print dialog.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold"
            >
              Download CV file (.html)
            </button>
            <a
              href={CV_CHECKLIST_DOWNLOAD_PATH}
              download="uk-cv-checklist.txt"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold"
            >
              Download checklist
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border p-4">
          <h3 className="font-semibold">Quick CV checklist</h3>
          <ul className="mt-3 max-h-48 space-y-2 overflow-y-auto text-sm text-muted-foreground">
            {UK_CV_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-violet-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onStartOver}
          className="text-sm text-muted-foreground hover:underline"
        >
          Edit my contact details again
        </button>
      </div>
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
