"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container, Section, Badge } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JobCvPreview } from "@/components/templates/job-cv-preview";
import {
  BuildCvHeroButton,
  CvBuilderFunnel,
} from "@/components/templates/cv-builder-funnel";
import { RelatedTemplates } from "@/components/templates/related-templates";
import { TemplateStickyCta } from "@/components/templates/template-sticky-cta";
import {
  trackAppInstallClick,
  trackTemplatePageView,
} from "@/lib/analytics";
import type { JobTemplatePage } from "@/lib/job-template-pages";

type TemplatePageClientProps = {
  page: JobTemplatePage;
  related: JobTemplatePage[];
};

export function TemplatePageClient({ page, related }: TemplatePageClientProps) {
  const [startBuilder, setStartBuilder] = useState(false);

  useEffect(() => {
    trackTemplatePageView(page.slug, page.heroHeadline);
  }, [page.slug, page.heroHeadline]);

  const handleHeroStart = () => {
    setStartBuilder(true);
    requestAnimationFrame(() => {
      document.getElementById("cv-builder")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <div className="pb-24 md:pb-0">
      <Section className="pb-8 pt-16">
        <Container>
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            {" / "}
            <Link href="/templates" className="hover:text-foreground">
              Templates
            </Link>
            {" / "}
            <span className="text-foreground">{page.builderLabel}</span>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <Badge className="mb-4">Free UK CV Template</Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                {page.h1}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {page.heroSubtext}
              </p>
              <div className="mt-8">
                <BuildCvHeroButton onStart={handleHeroStart} />
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border shadow-xl lg:max-h-[520px] lg:overflow-y-auto">
              <JobCvPreview data={page.cvData} highlightSections />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-muted/20 py-12">
        <Container>
          <h2 className="text-2xl font-bold md:text-3xl">Full CV Preview</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Scroll through the complete layout — Experience, Skills, and
            Education sections recruiters expect on UK applications.
          </p>
          <div className="mt-8 max-h-[min(70vh,640px)] overflow-y-auto rounded-xl border border-border shadow-lg">
            <JobCvPreview data={page.cvData} highlightSections />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold md:text-3xl">
            Why This CV Works
          </h2>
          <ul className="mt-6 space-y-4">
            {page.whyItWorks.map((point) => (
              <li key={point} className="flex gap-3 text-sm md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-muted/30">
        <Container>
          <CvBuilderFunnel
            page={page}
            cvData={page.cvData}
            startRequested={startBuilder}
            onStartHandled={() => setStartBuilder(false)}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-violet-800 p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">
              Finish Your CV on Android — Export PDF Free
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Most users download the app to finish their CV in under 2 minutes.
              20+ templates, ATS checker, and one-tap PDF export.
            </p>
            <div className="mt-8">
              <PlayStoreButton
                className="bg-white text-violet-700 hover:bg-white/90"
                onClick={() =>
                  trackAppInstallClick("conversion_section", page.slug)
                }
              >
                Download App to Continue
              </PlayStoreButton>
            </div>
          </div>

          <div className="mt-16">
            <RelatedTemplates pages={related} />
          </div>
        </Container>
      </Section>

      <TemplateStickyCta slug={page.slug} />
      </div>
    </>
  );
}
