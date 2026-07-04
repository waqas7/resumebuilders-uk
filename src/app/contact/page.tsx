import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Sparkles, Target, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About & Contact — Resume Builders UK",
  description:
    "Contact Resume Builders UK for CV maker app support, billing help, and template questions.",
  path: "/contact",
  keywords: [
    "Resume Builders UK contact",
    "CV maker app support",
    "resume app support UK",
  ],
});

const WHY_AI = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    text: "Get smart suggestions for summaries and bullet points — no blank page anxiety.",
  },
  {
    icon: Target,
    title: "ATS-Optimised Output",
    text: "Templates and checks designed to pass UK applicant tracking systems.",
  },
  {
    icon: Zap,
    title: "Mobile-First Speed",
    text: "Build and export your CV on Android in minutes, not hours at a desktop.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16">
        <Container>
          <h1 className="text-4xl font-bold md:text-5xl">About Resume Builders UK</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            We help UK job seekers create ATS-friendly CVs with a free Android
            app — 20+ templates, guided builder, CV examples by role, and
            one-tap PDF export.
          </p>
        </Container>
      </Section>

      <Section className="bg-muted/30 pt-0">
        <Container>
          <h2 className="text-2xl font-bold">
            Why Our CV Maker Beats Manual Word Templates
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {WHY_AI.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <item.icon className="h-8 w-8 text-violet-600" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Explore our{" "}
            <Link href="/features" className="text-violet-600 hover:underline dark:text-violet-400">
              app features
            </Link>{" "}
            or browse{" "}
            <Link href="/templates" className="text-violet-600 hover:underline dark:text-violet-400">
              UK CV examples by job
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold">Contact Support</h2>
          <p className="mt-4 text-muted-foreground">
            Need help with the app, billing, or templates? We typically respond
            within 24 hours.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-violet-600" />
            <p className="mt-4 font-semibold">Email Support</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Resume%20Builders%20UK%20Support`}
              className="mt-2 block text-lg text-violet-600 hover:underline dark:text-violet-400"
            >
              {SUPPORT_EMAIL}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Resume%20Builders%20UK%20Support`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Send Email
            </a>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="text-center">
          <PlayStoreButton ctaSource="contact_page">Download the App</PlayStoreButton>
        </Container>
      </Section>
    </>
  );
}
