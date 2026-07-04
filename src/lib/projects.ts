export type ProjectStatus = "live";

export type Project = {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  playStoreUrl: string;
  packageId: string;
  href: string;
  accentClass: string;
  features: string[];
  icon: string;
  iconAlt: string;
};

export const BRAND = {
  name: "Resume Builders UK",
  shortName: "Resume Builders",
  tagline: "Free UK CV maker app with ATS-friendly templates.",
  description:
    "Build ATS-friendly UK CVs in minutes. Free resume maker app with 20+ templates, guided builder, and one-tap PDF export on Android.",
  logo: "/images/-cv-maker-app-logo.webp",
  logoAlt: "Resume Builders UK — free CV maker app logo",
  ogImage: "/images/og-resume-builder-android-app.webp",
  ogImageAlt:
    "Resume Builders UK — free Android CV maker with ATS-friendly templates",
};

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const APP: Project = {
  slug: "resume-builder",
  name: "Resume Builder",
  fullName: "Resume Builder & CV Maker App",
  tagline: "ATS-friendly CV maker with PDF export",
  description:
    "Create professional UK resumes in minutes. 20+ templates, guided builder, ATS-friendly formats, and one-tap PDF export — free on Google Play.",
  category: "Productivity",
  status: "live",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=europasscvmake.app.dev",
  packageId: "europasscvmake.app.dev",
  href: "/",
  accentClass: "from-blue-600 to-violet-600",
  features: [],
  icon: "/images/-cv-maker-app-logo.webp",
  iconAlt: "Resume Builders UK app icon",
};

export function getApp() {
  return APP;
}

/** @deprecated Use getApp() */
export function getProjectBySlug(slug: string): Project | undefined {
  return slug === "resume-builder" ? APP : undefined;
}
