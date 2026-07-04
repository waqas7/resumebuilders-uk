import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, Section, Badge } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getFAQSchema } from "@/lib/schema";
import { KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Free vs Premium Resume Builder",
  description:
    "Compare free and premium plans for our CV maker app. Remove ads, unlock AI tools, and access premium templates. Most users choose Premium.",
  path: "/pricing",
  keywords: [...KEYWORDS, "resume builder pricing", "premium CV maker"],
});

const FREE_FEATURES = [
  "20+ resume templates",
  "Guided 8-step builder",
  "PDF & image export",
  "Offline mode",
  "Manage multiple resumes",
];

const PREMIUM_FEATURES = [
  "Everything in Free",
  "Remove all ads",
  "AI tools unlocked",
  "Premium templates",
  "Cover letter generator",
  "Priority resume score tips",
];

const FAQS = [
  {
    question: "Is the resume builder app free?",
    answer:
      "Yes! You can download and use our CV maker app for free with access to 20+ templates, PDF export, and the guided builder. Premium unlocks AI tools and removes ads.",
  },
  {
    question: "What does Premium include?",
    answer:
      "Premium removes ads, unlocks AI resume generation tools, provides access to premium templates, and includes advanced resume score improvement features.",
  },
  {
    question: "Can I create ATS-friendly resumes for free?",
    answer:
      "Absolutely. Many ATS-friendly resume templates are included in the free version. Premium adds exclusive executive and creative templates.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQS)} />
      <Section className="pt-16">
        <Container>
          <div className="text-center">
            <Badge className="mb-4">Simple Pricing</Badge>
            <h1 className="text-4xl font-bold md:text-5xl">
              Free vs Premium — Choose What Fits
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Start free with our resume builder app. Upgrade to Premium for AI
              tools, ad-free experience, and exclusive templates.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold">Free</h2>
              <p className="mt-2 text-4xl font-bold">
                $0
                <span className="text-base font-normal text-muted-foreground">
                  /forever
                </span>
              </p>
              <ul className="mt-8 space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    {f}
                  </li>
                ))}
                {["Ads supported", "Limited AI tools"].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <X className="h-4 w-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <PlayStoreButton ctaSource="pricing_free" className="mt-8 w-full">
                Download Free
              </PlayStoreButton>
            </div>

            <div className="relative rounded-2xl border-2 border-violet-500 bg-card p-8 shadow-xl shadow-violet-500/10">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
              <h2 className="text-2xl font-bold">Premium</h2>
              <p className="mt-2 text-4xl font-bold">
                In-App
                <span className="text-base font-normal text-muted-foreground">
                  /upgrade
                </span>
              </p>
              <ul className="mt-8 space-y-3">
                {PREMIUM_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-violet-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <PlayStoreButton ctaSource="pricing_premium" className="mt-8 w-full" data-cta-variant="premium">
                Upgrade Now
              </PlayStoreButton>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-violet-600/10 to-blue-600/10 p-8 text-center">
            <p className="text-lg font-semibold">
              Most users choose Premium for AI tools and ad-free editing
            </p>
            <p className="mt-2 text-muted-foreground">
              Join thousands who upgraded to create better resumes faster.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border p-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection variant="urgency" buttonText="Upgrade Now" />
    </>
  );
}
