import { PLAY_STORE_URL } from "./constants";

export type PlayStoreLinkOptions = {
  /** GA4 / UTM campaign identifier, e.g. homepage_hero */
  source: string;
  /** Template slug when click originates from a template page */
  templateSlug?: string;
};

/** Build Google Play URL with UTM params for web → app attribution. */
export function getPlayStoreUrl({ source, templateSlug }: PlayStoreLinkOptions): string {
  const url = new URL(PLAY_STORE_URL);
  url.searchParams.set("utm_source", "resumebuilders.uk");
  url.searchParams.set("utm_medium", "web");
  url.searchParams.set("utm_campaign", source);
  if (templateSlug) {
    url.searchParams.set("utm_content", templateSlug);
  }
  return url.toString();
}

/** Homepage template cards — high-intent roles only (limits DOM weight). */
export const HOMEPAGE_FEATURED_TEMPLATE_SLUGS = [
  "retail-assistant-cv-uk",
  "care-home-worker-cv-uk",
  "student-cv-no-experience",
  "ats-friendly-cv-template",
  "warehouse-worker-cv-uk",
  "nhs-healthcare-assistant-cv-uk",
] as const;

/** Featured blog guides linked from homepage and footer. */
export const FEATURED_BLOG_LINKS = [
  {
    href: "/blog/how-to-write-perfect-cv-2026",
    label: "How to write a perfect CV",
  },
  {
    href: "/blog/top-ats-resume-tips",
    label: "Top ATS resume tips",
  },
  {
    href: "/blog/care-home-jobs-cv-uk",
    label: "Care home jobs & CV guide",
  },
] as const;
