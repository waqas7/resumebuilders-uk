import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";
import TemplatesPageClient from "./templates-client";

export const metadata: Metadata = buildMetadata({
  title: "Resume Templates — ATS Friendly CV Maker with 20+ Designs",
  description:
    "Browse ATS friendly resume templates for UK and global jobs. Resume maker app with templates — modern, professional, and minimal CV layouts with PDF export.",
  path: "/templates",
  keywords: [
    ...KEYWORDS,
    "resume templates",
    "CV templates",
    "ATS friendly templates",
    "resume maker app with templates",
    "ATS friendly resume",
  ],
});

export default function TemplatesPage() {
  return <TemplatesPageClient />;
}
