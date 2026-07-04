import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/constants";
import { BRAND } from "@/lib/projects";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Resume Builders UK — how we handle data on resumebuilders.uk and in our Android CV maker app.",
  path: "/privacy",
  robots: { index: true, follow: true },
});

export default function PrivacyPage() {
  return (
    <Section className="pt-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: 4 July 2026
        </p>

        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
          <h2>Who we are</h2>
          <p>
            {BRAND.name} ({new URL(SITE_URL).hostname})
            provides information about our Android CV maker app and free UK CV
            templates on this website.
          </p>

          <h2>Website data</h2>
          <p>
            This website is mostly static. If you use the CV builder on template
            pages, your name, email, phone, and summary are stored in your
            browser&apos;s local storage only — not on our servers. Clearing
            site data removes it.
          </p>
          <p>
            We may use Google Analytics (if enabled) to understand traffic and
            app install clicks. Google&apos;s privacy policy applies to that
            processing.
          </p>

          <h2>Android app</h2>
          <p>
            The Resume Builder &amp; CV Maker app is distributed via Google Play.
            Data collected in the app is governed by the app&apos;s Play Store
            listing and in-app privacy disclosures.
          </p>

          <h2>Cookies</h2>
          <p>
            We use essential cookies only where required by analytics providers.
            You can control cookies through your browser settings.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>

          <p>
            See also our <Link href="/terms">Terms of Use</Link>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
