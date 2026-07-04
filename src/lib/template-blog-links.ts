export type TemplateBlogLink = {
  slug: string;
  title: string;
};

export const TEMPLATE_BLOG_LINKS: Record<string, TemplateBlogLink> = {
  "retail-assistant-cv-uk": {
    slug: "best-resume-formats-uk-jobs",
    title: "Best resume formats for UK jobs",
  },
  "warehouse-worker-cv-uk": {
    slug: "cv-skills-section-guide-uk",
    title: "How to write a CV skills section",
  },
  "student-cv-no-experience": {
    slug: "cv-with-no-experience-uk",
    title: "How to write a CV with no experience",
  },
  "ats-friendly-cv-template": {
    slug: "top-ats-resume-tips",
    title: "Top ATS resume tips",
  },
  "career-change-cv-uk": {
    slug: "career-change-cv-guide-uk",
    title: "Career change CV guide",
  },
  "customer-service-cv-uk": {
    slug: "cv-personal-statement-examples-uk",
    title: "CV personal statement examples",
  },
  "admin-assistant-cv-uk": {
    slug: "remote-work-cv-uk",
    title: "Remote & hybrid job CV tips",
  },
  "sales-associate-cv-uk": {
    slug: "best-resume-formats-uk-jobs",
    title: "Best resume formats for UK jobs",
  },
  "receptionist-cv-uk": {
    slug: "cover-letter-tips-uk-2026",
    title: "Cover letter tips for UK jobs",
  },
  "simple-cv-template-interviews": {
    slug: "cv-length-guide-uk",
    title: "How long should a CV be in the UK?",
  },
  "professional-cv-format-uk-2026": {
    slug: "how-to-write-perfect-cv-2026",
    title: "How to write a perfect CV in 2026",
  },
  "international-student-cv-uk": {
    slug: "graduate-cv-guide-uk",
    title: "Graduate CV guide for UK applications",
  },
  "career-change-cv-no-experience": {
    slug: "career-change-cv-guide-uk",
    title: "Career change CV guide",
  },
  "cv-after-career-break-uk": {
    slug: "employment-gap-cv-uk",
    title: "How to explain an employment gap",
  },
  "care-home-worker-cv-uk": {
    slug: "care-home-jobs-cv-uk",
    title: "Care home jobs and CV guide",
  },
  "hgv-driver-cv-uk": {
    slug: "cv-skills-section-guide-uk",
    title: "CV skills section guide",
  },
  "cleaner-cv-uk": {
    slug: "cv-with-no-experience-uk",
    title: "CV with no experience guide",
  },
  "teaching-assistant-cv-uk": {
    slug: "nhs-cv-tips-uk",
    title: "Public sector CV tips",
  },
  "hospitality-waitress-cv-uk": {
    slug: "best-resume-formats-uk-jobs",
    title: "Best resume formats for UK jobs",
  },
  "nhs-healthcare-assistant-cv-uk": {
    slug: "nhs-cv-tips-uk",
    title: "NHS and public sector CV tips",
  },
  "delivery-driver-cv-uk": {
    slug: "cv-skills-section-guide-uk",
    title: "CV skills section guide",
  },
  "kitchen-porter-cv-uk": {
    slug: "cv-with-no-experience-uk",
    title: "CV with no experience guide",
  },
  "bar-staff-cv-uk": {
    slug: "best-resume-formats-uk-jobs",
    title: "Best resume formats for UK jobs",
  },
  "security-guard-cv-uk": {
    slug: "resume-mistakes-to-avoid",
    title: "Resume mistakes to avoid",
  },
  "apprenticeship-cv-uk": {
    slug: "graduate-cv-guide-uk",
    title: "Graduate & school leaver CV guide",
  },
};

export function getBlogLinkForTemplate(
  templateSlug: string
): TemplateBlogLink | undefined {
  return TEMPLATE_BLOG_LINKS[templateSlug];
}
