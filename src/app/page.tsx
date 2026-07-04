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
import { JOB_TEMPLATE_COUNT } from "@/lib/job-template-pages";

export const metadata: Metadata = buildMetadata({
  title: "Free CV Maker App UK — ATS Templates & PDF Export (Android)",
  description:
    `Free CV maker app for UK jobs on Android. ATS-friendly templates, ${JOB_TEMPLATE_COUNT} job CV examples, offline mode, PDF export, and ATS score checker. Download free on Google Play.`,
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
