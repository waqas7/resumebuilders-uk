import type { Metadata } from "next";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { FEATURES } from "@/lib/features";
import { KEYWORDS } from "@/lib/constants";
import { AppScreenshot } from "@/components/marketing/app-screenshot";

export const metadata: Metadata = buildMetadata({
  title: "Features — AI Resume Builder, ATS Score Checker & Cover Letters",
  description:
    "AI resume builder app with ATS score checker, cover letter generator, PDF download, and watermark-free export. Offline resume builder tools for Android.",
  path: "/features",
  keywords: [
    ...KEYWORDS,
    "AI resume generator Android",
    "ATS optimization app",
    "PDF resume export Android",
    "resume maker app with cover letter",
    "ats score checker",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-16">
        <Container>
          <h1 className="text-4xl font-bold md:text-5xl">
            Powerful Android Features for Your{" "}
            <span className="gradient-text">Perfect CV</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Everything you need to create a professional UK resume on Android —
            from guided editing to ATS-friendly PDF export. Free on Google Play.
          </p>
        </Container>
      </Section>

      {FEATURES.map((feature, index) => (
        <Section
          key={feature.id}
          id={feature.id}
          className={index % 2 === 1 ? "bg-muted/30" : undefined}
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex rounded-xl bg-violet-500/10 p-3">
                  <feature.icon className="h-7 w-7 text-violet-600" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">{feature.title}</h2>
                <p className="mt-2 text-xl font-medium text-violet-600 dark:text-violet-400">
                  {feature.headline}
                </p>
                <p className="mt-4 text-muted-foreground">{feature.description}</p>
                <ul className="mt-6 space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-violet-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PlayStoreButton>Try It Free on Android</PlayStoreButton>
                </div>
              </div>
              <AppScreenshot
                image={feature.image}
                containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Container>
        </Section>
      ))}

      <CtaSection variant="primary" />
    </>
  );
}
