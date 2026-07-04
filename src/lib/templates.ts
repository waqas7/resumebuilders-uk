import type { ResumePreviewVariant } from "@/components/marketing/mockups/resume-preview";

export type TemplateCategory = "modern" | "minimal" | "corporate";

export type ResumeTemplate = {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  slug: string;
  previewVariant: ResumePreviewVariant;
  imageAlt: string;
};

export const TEMPLATE_CATEGORIES: {
  id: TemplateCategory | "all";
  label: string;
  seoHeading: string;
}[] = [
  {
    id: "all",
    label: "All Templates",
    seoHeading: "All Resume Templates — CV Maker App",
  },
  {
    id: "modern",
    label: "Modern",
    seoHeading: "Modern CV Templates — Resume Builder App",
  },
  {
    id: "minimal",
    label: "Minimal",
    seoHeading: "Minimal ATS Resume Templates — Clean UK CV Formats",
  },
  {
    id: "corporate",
    label: "Corporate",
    seoHeading: "Corporate Resume Templates — Executive & Professional CVs",
  },
];

export const RESUME_TEMPLATES: ResumeTemplate[] = [
  {
    id: "modern-green",
    name: "Modern Green",
    category: "modern",
    slug: "modern-green-cv-template",
    previewVariant: "modern-green",
    imageAlt:
      "Modern green sidebar CV template UK — ATS resume builder app preview",
    description:
      "A sleek modern CV template with a green sidebar—ideal for tech and creative roles.",
  },
  {
    id: "minimal-clean",
    name: "Minimal Clean",
    category: "minimal",
    slug: "minimal-clean-cv-template",
    previewVariant: "minimal-clean",
    imageAlt:
      "Minimal clean UK resume template with whitespace — CV maker app A4 preview",
    description:
      "Minimal resume format with generous whitespace for a polished, contemporary look.",
  },
  {
    id: "classic-blue",
    name: "Classic Blue",
    category: "corporate",
    slug: "classic-blue-professional-template",
    previewVariant: "classic-blue",
    imageAlt:
      "Classic blue professional resume template UK corporate CV maker preview",
    description:
      "Traditional professional resume template with blue accents—trusted by hiring managers.",
  },
  {
    id: "executive-premium",
    name: "Executive Premium",
    category: "corporate",
    slug: "executive-premium-resume-template",
    previewVariant: "executive-premium",
    imageAlt:
      "Executive premium resume template with gold accents — UK leadership CV",
    description:
      "High-contrast executive template with gold accents for senior leadership roles.",
  },
  {
    id: "ats-simple",
    name: "ATS Simple",
    category: "minimal",
    slug: "ats-simple-resume-template",
    previewVariant: "ats-simple",
    imageAlt:
      "ATS simple single-column resume template UK — applicant tracking optimised",
    description:
      "Clean ATS resume template with single-column layout for maximum parser compatibility.",
  },
  {
    id: "ats-standard",
    name: "ATS Standard",
    category: "minimal",
    slug: "ats-standard-cv-template",
    previewVariant: "ats-standard",
    imageAlt:
      "ATS standard UK CV template with clear headings — resume builder app",
    description:
      "Standard ATS-friendly CV format with clear headings recruiters and bots love.",
  },
  {
    id: "modern-dark",
    name: "Modern Dark",
    category: "modern",
    slug: "modern-dark-cv-template",
    previewVariant: "modern-dark",
    imageAlt:
      "Modern dark CV template for designers — resume builder app UK preview",
    description:
      "Dark-mode modern CV template with bold typography for designers and developers.",
  },
  {
    id: "professional-navy",
    name: "Professional Navy",
    category: "corporate",
    slug: "professional-navy-resume-template",
    previewVariant: "professional-navy",
    imageAlt:
      "Professional navy corporate resume template UK finance and consulting CV",
    description:
      "Corporate navy professional template perfect for finance, law, and consulting.",
  },
  {
    id: "modern-gradient",
    name: "Modern Gradient",
    category: "modern",
    slug: "modern-gradient-cv-template",
    previewVariant: "modern-gradient",
    imageAlt:
      "Modern gradient CV template UK — eye-catching resume builder app preview",
    description:
      "Eye-catching modern CV with subtle gradient accents for standout applications.",
  },
  {
    id: "professional-classic",
    name: "Professional Classic",
    category: "corporate",
    slug: "professional-classic-cv-template",
    previewVariant: "professional-classic",
    imageAlt:
      "Professional classic UK CV template — timeless corporate resume format",
    description:
      "Timeless professional CV template suitable for UK jobs and international applications.",
  },
  {
    id: "ats-minimal",
    name: "ATS Minimal",
    category: "minimal",
    slug: "ats-minimal-resume-template",
    previewVariant: "ats-minimal",
    imageAlt:
      "Ultra-minimal ATS resume template UK — parser-friendly CV maker preview",
    description:
      "Ultra-minimal ATS template—no graphics, no tables, just parseable content.",
  },
  {
    id: "ats-keyword",
    name: "ATS Keyword Optimized",
    category: "minimal",
    slug: "ats-keyword-optimized-template",
    previewVariant: "ats-keyword",
    imageAlt:
      "ATS keyword-optimised resume template UK — job description matched CV",
    description:
      "ATS resume template structured for keyword-rich job descriptions and fast scanning.",
  },
];

/** Featured templates shown prominently on the templates page hero grid */
export const FEATURED_TEMPLATES = RESUME_TEMPLATES.slice(0, 8);
