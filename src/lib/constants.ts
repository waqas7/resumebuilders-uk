export const APP_NAME = "Resume Builder & CV Maker App";
export const APP_SHORT_NAME = "Resume Builder";
export const APP_TAGLINE = "Build ATS-Friendly Resumes in Seconds with AI";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resumebuilders.uk";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=europasscvmake.app.dev";

export const RESUME_BUILDER_YOUTUBE_SHORT = {
  id: "QPfH0Amjias",
  title: "Create a professional resume in minutes",
  description:
    "Watch how our free Android resume maker app helps you build an ATS-friendly CV with templates, guided steps, and one-tap PDF export — ready for UK job applications.",
  watchUrl: "https://www.youtube.com/shorts/QPfH0Amjias",
  embedUrl: "https://www.youtube.com/embed/QPfH0Amjias",
  thumbnailUrl: "https://i.ytimg.com/vi/QPfH0Amjias/hqdefault.jpg",
  /** YouTube publish time (UTC ISO 8601) — keep in sync with the video on YouTube. */
  uploadDate: "2026-07-01T16:45:13Z",
  /** ISO 8601 duration (60s Short). */
  duration: "PT1M",
} as const;

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "mwk.pkx@gmail.com";

export const TRUST = {
  rating: 4.8,
  ratingCount: 12500,
  downloadCount: "100K+",
  reviewCount: "12K+",
};

export const KEYWORDS = [
  "resume maker",
  "cv maker",
  "resume maker app",
  "cv maker app",
  "free resume maker",
  "free cv maker",
  "resume builder app",
  "CV maker app",
  "resume maker app with templates",
  "AI resume builder app",
  "resume maker app with cover letter",
  "offline resume builder app",
  "resume maker app no watermark",
  "uk cv maker",
  "ATS friendly resume",
  "ats score checker",
  "free resume maker app for freshers",
  "ATS friendly resume builder app",
  "resume maker app with PDF download",
  "easy CV builder app for beginners",
  "best resume maker app for Android",
  "ATS resume templates",
  "create resume online",
  "AI resume builder",
  "Android resume builder app",
  "CV maker app Android",
];

export const RESUME_BUILDER_FAQS = [
  {
    question: "Is this resume maker free?",
    answer:
      "Yes. Our free resume maker and CV maker app includes 20+ ATS-friendly templates, a guided builder, and PDF export — no sign-up required. Download free on Google Play.",
  },
  {
    question: "Does the CV maker work offline?",
    answer:
      "Yes. This offline resume builder app works fully on Android without an internet connection. Create, edit, and export CVs anywhere.",
  },
  {
    question: "Does the resume maker app include templates?",
    answer:
      "Yes. Choose from 20+ ATS-friendly resume templates — modern, professional, and minimal layouts. Switch templates anytime while editing.",
  },
  {
    question: "Is there an AI resume builder in the app?",
    answer:
      "Yes. Our AI resume builder app helps you write summaries, bullet points, and skills sections faster. Premium unlocks full AI writing tools.",
  },
  {
    question: "Can I create a cover letter with the app?",
    answer:
      "Yes. The resume maker app with cover letter support lets you generate matching cover letters from your CV data. Available with Premium.",
  },
  {
    question: "Are the resumes ATS-friendly?",
    answer:
      "Yes. All templates are designed as ATS friendly resume layouts with clean formatting. Use the built-in ATS score checker for real-time tips.",
  },
  {
    question: "Does the app have an ATS score checker?",
    answer:
      "Yes. The ATS score checker analyses formatting, keywords, and structure as you build — so your resume passes applicant tracking systems.",
  },
  {
    question: "Can I export my resume as PDF?",
    answer:
      "Yes. This resume maker app with PDF download exports high-quality PDFs or images in one tap. Share directly to email, WhatsApp, or LinkedIn.",
  },
  {
    question: "Is this good for beginners and freshers?",
    answer:
      "Yes. The easy CV builder app for beginners uses a guided 8-step flow — ideal as a free resume maker app for freshers and first-time job seekers.",
  },
  {
    question: "Are exports watermark-free?",
    answer:
      "Yes. PDF and image exports have no watermark, so you can share a clean, professional CV with employers.",
  },
];

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type AndroidImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const ANDROID_IMAGES = {
  heroTemplates: {
    src: "/images/android/android-resume-builder-app-hero-templates.webp",
    alt: "Android resume builder app showing ATS-friendly CV templates on Google Play — modern, professional, and minimal layouts",
    width: 1024,
    height: 500,
  },
  landDreamJob: {
    src: "/images/android/android-resume-builder-land-dream-job-hero.webp",
    alt: "Free Android CV maker app — build professional ATS resumes on mobile with no sign-up required",
    width: 576,
    height: 1024,
  },
  guidedBuilder: {
    src: "/images/android/android-guided-resume-builder-step-editor.webp",
    alt: "Android guided 8-step resume builder editor with smart forms and auto-save — CV maker app UK",
    width: 576,
    height: 1024,
  },
  templatesGallery: {
    src: "/images/android/android-ats-resume-templates-gallery.webp",
    alt: "20+ ATS resume templates on Android — modern, minimal, professional, and corporate UK CV layouts",
    width: 576,
    height: 1024,
  },
  livePreview: {
    src: "/images/android/android-live-resume-preview-zoom.webp",
    alt: "Live resume preview on Android with pinch-to-zoom — ATS-friendly CV maker app interface UK",
    width: 576,
    height: 1024,
  },
  dragDrop: {
    src: "/images/android/android-resume-drag-drop-reorder-ui.webp",
    alt: "Drag and drop resume section reordering in Android CV builder app — customize your UK CV",
    width: 576,
    height: 1024,
  },
  pdfExport: {
    src: "/images/android/android-resume-pdf-export-feature.webp",
    alt: "Export resume as PDF or image on Android — one-click share from CV maker app UK",
    width: 576,
    height: 1024,
  },
  manageResumes: {
    src: "/images/android/android-manage-resumes-dashboard.webp",
    alt: "Manage all resumes on Android — edit, duplicate, rename, and change templates in CV maker app",
    width: 576,
    height: 1024,
  },
  welcomeDashboard: {
    src: "/images/android/android-resume-builder-welcome-dashboard.webp",
    alt: "Android resume builder welcome dashboard — create professional CVs in minutes with guided steps",
    width: 576,
    height: 1024,
  },
  atsScoreChecker: {
    src: "/images/android/android-ats-score-checker-app.webp",
    alt: "Android ATS score checker app — instant resume compatibility analysis with smart fixes for UK job applications",
    width: 576,
    height: 1024,
  },
} as const satisfies Record<string, AndroidImageAsset>;

export type AndroidImageKey = keyof typeof ANDROID_IMAGES;

export const IMAGES = {
  logo: "/images/resume-builder-cv-maker-app-logo.webp",
  logoAlt: "Resume Builder and CV Maker App logo — free Android CV maker UK",
  appIcon: "/images/resume-builder-app-icon-512.webp",
  ogDefault: "/images/og-resume-builder-android-app.webp",
  ogAlt:
    "Free Android resume builder app — create ATS-friendly UK CVs with 20+ templates and PDF export",
  avatars: {
    sarah: "/images/avatars/reviewer-sarah-marketing-uk.webp",
    james: "/images/avatars/reviewer-james-tech-uk.webp",
    priya: "/images/avatars/reviewer-priya-graduate-uk.webp",
  },
};

export const REVIEWS = [
  {
    name: "Sarah M.",
    role: "Marketing Manager, London",
    text: "Best CV maker app I've used. Created my resume in 10 minutes and got 3 interview calls!",
    rating: 5,
    avatar: IMAGES.avatars.sarah,
    avatarAlt: "Sarah M. UK marketing professional reviewing Android resume builder app",
  },
  {
    name: "James K.",
    role: "Software Engineer, Manchester",
    text: "The ATS templates actually work. My resume passed every screening system I applied to.",
    rating: 5,
    avatar: IMAGES.avatars.james,
    avatarAlt: "James K. UK tech professional ATS resume template review on Android",
  },
  {
    name: "Priya R.",
    role: "Recent Graduate, Birmingham",
    text: "Love the guided builder and PDF export. So much easier than Word templates.",
    rating: 5,
    avatar: IMAGES.avatars.priya,
    avatarAlt: "Priya R. UK graduate using Android CV maker app on Google Play",
  },
];
