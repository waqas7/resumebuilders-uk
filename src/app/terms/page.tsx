import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { BRAND } from "@/lib/projects";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for Resume Builders UK website, CV templates, and Android app download links.",
  path: "/terms",
  robots: { index: true, follow: true },
});

export default function TermsPage() {
  return (
    <Section className="pt-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: 4 July 2026
        </p>

        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
          <h2>About this site</h2>
          <p>
            {BRAND.name} provides CV examples, career guides, and links to
            download our Android CV maker app. Content is for general information
            only — not legal, HR, or careers advice.
          </p>

          <h2>CV templates and examples</h2>
          <p>
            Example CV text on template pages is illustrative. You are
            responsible for the accuracy of information in your own CV. The web
            builder saves contact details locally in your browser; full editing
            and PDF export require the Android app.
          </p>

          <h2>App downloads</h2>
          <p>
            Installing the app is subject to Google Play terms. Premium features,
            pricing, and refunds are handled through Google Play billing.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Site content, branding, and template layouts are owned by{" "}
            {BRAND.name} unless stated otherwise. Do not scrape or republish
            bulk content without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We do not guarantee interview or job outcomes from using our
            templates, guides, or app. Use at your own discretion.
          </p>

          <h2>Contact</h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>

          <p>
            See also our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
