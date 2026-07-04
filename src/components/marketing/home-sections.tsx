import Link from "next/link";
import Image from "next/image";
import { Star, Download, Shield, Zap } from "lucide-react";
import { Badge, Container, Section } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreBadge, PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JobTemplateCard } from "@/components/templates/job-template-card";
import {
  IMAGES,
  REVIEWS,
  RESUME_BUILDER_FAQS,
  TRUST,
} from "@/lib/constants";
import { JOB_TEMPLATE_COUNT, JOB_TEMPLATE_PAGES } from "@/lib/job-template-pages";
import {
  FEATURED_BLOG_LINKS,
  HOMEPAGE_FEATURED_TEMPLATE_SLUGS,
} from "@/lib/play-store-url";
import { AppScreenshot } from "@/components/marketing/app-screenshot";
import { YouTubeShortEmbed } from "@/components/marketing/youtube-short-embed";
import { RESUME_BUILDER_YOUTUBE_SHORT } from "@/lib/constants";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pb-12 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-6">Best Free Resume Maker App for Android</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Free CV Maker App for UK Jobs —{" "}
              <span className="gradient-text">ATS Templates & PDF Export</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Download the free CV maker app for Android. Build ATS-friendly UK
              CVs with {JOB_TEMPLATE_COUNT} job templates, offline mode, PDF export, and an ATS
              score checker — ideal for freshers and career changers.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {TRUST.rating} ({TRUST.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                {TRUST.downloadCount} downloads
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PlayStoreBadge size="lg" ctaSource="homepage_hero_badge" />
              <PlayStoreButton ctaSource="homepage_hero_button">
                Download Free
              </PlayStoreButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "No Sign-Up" },
                { icon: Zap, label: "Offline-First" },
                { icon: Download, label: "Free Forever" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-violet-600" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <AppScreenshot
            image="heroTemplates"
            priority
            containerClassName="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-violet-500/10"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Container>
    </Section>
  );
}

export function VideoDemoSection() {
  return (
    <Section className="border-y border-border bg-muted/20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <YouTubeShortEmbed />
          <div>
            <Badge className="mb-4">App Demo</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              {RESUME_BUILDER_YOUTUBE_SHORT.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {RESUME_BUILDER_YOUTUBE_SHORT.description} See the guided builder,
              ATS-friendly templates, and PDF export in action — then download
              the app free on Google Play.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "20+ professional resume templates",
                "Guided 8-step CV builder on Android",
                "One-tap PDF download — no watermark",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PlayStoreButton ctaSource="homepage_video_demo">
                Download Now
              </PlayStoreButton>
              <a
                href={RESUME_BUILDER_YOUTUBE_SHORT.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function JobTemplatesPreviewSection() {
  const featuredSet = new Set<string>(HOMEPAGE_FEATURED_TEMPLATE_SLUGS);
  const featuredPages = JOB_TEMPLATE_PAGES.filter((page) =>
    featuredSet.has(page.slug)
  );

  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            UK CV Examples by{" "}
            <span className="gradient-text">Job & Intent</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Featured CV templates for retail, care home, NHS, students, and
            more. Preview the layout, start building free, and export PDF in
            the app.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPages.map((page) => (
            <li key={page.slug}>
              <JobTemplateCard page={page} lazyPreview />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Link
            href="/templates"
            className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
          >
            View all {JOB_TEMPLATE_COUNT} CV templates →
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Read our UK CV & resume guides →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function BlogGuidesSection() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">UK CV & Resume Guides</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Expert advice on ATS formatting, personal statements, and job-specific
            applications — free on our blog.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {FEATURED_BLOG_LINKS.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="block rounded-xl border border-border bg-card p-5 transition hover:border-violet-500/40 hover:shadow-md"
              >
                <span className="font-semibold text-foreground">{post.label}</span>
                <span className="mt-2 block text-sm text-violet-600 dark:text-violet-400">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
          >
            View all blog articles →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function ATSScoreSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-4">Instant Analysis</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              ATS Score Checker
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Know your ATS compatibility score before you apply. Our Android
              app analyses keywords, formatting, sections, and skills — then
              suggests smart fixes to help your UK CV pass applicant tracking
              systems.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time score out of 100",
                "Keyword match and formatting breakdown",
                "Smart fixes for work experience, templates, and skills",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PlayStoreButton ctaSource="homepage_ats_section">
                Check Your ATS Score Free
              </PlayStoreButton>
            </div>
          </div>
          <AppScreenshot
            image="atsScoreChecker"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </Container>
    </Section>
  );
}

export function LandDreamJobSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AppScreenshot
            image="landDreamJob"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Land Your Dream Job on Android
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Download free from Google Play and build a standout ATS resume
              today. Switch between modern, minimal, and professional templates
              — all from your phone.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No sign-up required — start instantly",
                "Works offline — build anywhere",
                "Free forever with premium upgrades",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PlayStoreButton ctaSource="homepage_land_dream_job">
                Get the Android App
              </PlayStoreButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function AppShowcaseSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AppScreenshot
            image="guidedBuilder"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Guided 8-Step Builder
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From personal info to export — we guide you through every step on
              Android. Smart forms, auto-save, and drag-to-reorder sections help
              you create a UK CV faster than any manual tool.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Intelligent fields that help you fill faster",
                "Your progress is saved as you go",
                "Reorder sections to highlight what matters",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PlayStoreButton ctaSource="homepage_app_showcase">
                Start Building Free
              </PlayStoreButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SocialProofSection() {
  return (
    <Section className="border-y border-border bg-muted/20">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="mt-2 text-2xl font-bold">{TRUST.rating} out of 5</p>
          <p className="text-muted-foreground">
            Based on {TRUST.reviewCount} reviews on Google Play
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.avatarAlt}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-500/20"
                  loading="lazy"
                />
                <div>
                  <footer className="text-sm font-semibold">{review.name}</footer>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section className="border-y border-border bg-muted/20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our free resume maker and CV
            builder app for Android.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {RESUME_BUILDER_FAQS.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <VideoDemoSection />
      <JobTemplatesPreviewSection />
      <BlogGuidesSection />
      <ATSScoreSection />
      <CtaSection variant="primary" />
      <LandDreamJobSection />
      <AppShowcaseSection />
      <SocialProofSection />
      <FaqSection />
      <CtaSection variant="secondary" />
      <CtaSection variant="urgency" buttonText="Upgrade Now" />
    </>
  );
}
