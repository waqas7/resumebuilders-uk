import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found | Resume Builders UK",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section className="pt-16">
      <Container className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
      </Container>
    </Section>
  );
}
