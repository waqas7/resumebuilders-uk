import type { ResumePreviewVariant } from "@/components/marketing/mockups/resume-preview";

export type CvExperience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type JobCvData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string[];
  experience: CvExperience[];
  education: string;
};

export type JobTemplatePage = {
  slug: string;
  h1: string;
  heroHeadline: string;
  heroSubtext: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  previewVariant: ResumePreviewVariant;
  cvData: JobCvData;
  whyItWorks: string[];
  relatedSlugs: string[];
  builderLabel: string;
};
