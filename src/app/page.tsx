import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomePageContent } from "@/components/marketing/home-sections";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getFAQSchema,
  getResumeBuilderVideoSchema,
  getSoftwareApplicationSchema,
} from "@/lib/schema";
import { KEYWORDS, RESUME_BUILDER_FAQS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Best Resume Maker App UK — Free CV Builder with Templates & AI",
  description:
    "Download the best free resume maker app for UK jobs. ATS-friendly templates, CV examples, AI builder, offline mode, PDF export, and ATS score checker — ideal for freshers.",
  path: "/",
  keywords: KEYWORDS,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          getSoftwareApplicationSchema(),
          getFAQSchema(RESUME_BUILDER_FAQS),
          getResumeBuilderVideoSchema(),
        ]}
      />
      <HomePageContent />
    </>
  );
}
