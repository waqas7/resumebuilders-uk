import type { LucideIcon } from "lucide-react";
import {
  Brain,
  CheckCircle2,
  FileDown,
  FileText,
  Gauge,
  LayoutTemplate,
  TrendingUp,
} from "lucide-react";
import type { AndroidImageKey } from "./constants";

export type Feature = {
  id: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  image: AndroidImageKey;
  bullets: string[];
};

export const FEATURES: Feature[] = [
  {
    id: "ai-resume-generator",
    title: "AI Resume Generator",
    headline: "Write smarter resumes with AI assistance",
    description:
      "Our AI resume builder app helps you craft professional summaries, bullet points, and skills sections tailored to your job title. Create resume online in minutes—not hours.",
    icon: Brain,
    image: "guidedBuilder",
    bullets: [
      "Smart suggestions for every section",
      "Job-title-aware content generation",
      "Professional tone out of the box",
    ],
  },
  {
    id: "ats-optimization",
    title: "ATS Optimization Checker",
    headline: "Pass applicant tracking systems with confidence",
    description:
      "Get real-time ATS resume tips as you build. Our CV maker app checks formatting, keywords, and structure so recruiters and bots both read your resume correctly.",
    icon: CheckCircle2,
    image: "atsScoreChecker",
    bullets: [
      "Keyword density guidance",
      "Format compatibility checks",
      "Section structure scoring",
    ],
  },
  {
    id: "professional-templates",
    title: "Professional Templates",
    headline: "20+ ATS-friendly resume templates",
    description:
      "Choose from modern CV templates, professional layouts, and creative designs. Every template is optimized for mobile editing and PDF export.",
    icon: LayoutTemplate,
    image: "templatesGallery",
    bullets: [
      "Modern, minimal, and executive styles",
      "ATS-friendly layouts included",
      "One-tap template switching",
    ],
  },
  {
    id: "pdf-export",
    title: "One-click PDF Export",
    headline: "Export as PDF or image instantly",
    description:
      "Save your resume as a high-quality PDF or PNG/JPG and share anywhere—email, WhatsApp, LinkedIn, or Google Drive. No watermarks on export.",
    icon: FileDown,
    image: "pdfExport",
    bullets: [
      "PDF and image export options",
      "Share to any app instantly",
      "Print-ready quality",
    ],
  },
  {
    id: "cover-letter",
    title: "Cover Letter Generator",
    headline: "Matching cover letters in seconds",
    description:
      "Generate tailored cover letters that complement your resume. Perfect for job applications where a CV alone isn't enough.",
    icon: FileText,
    image: "welcomeDashboard",
    bullets: [
      "Auto-filled from resume data",
      "Professional letter templates",
      "Edit and export alongside your CV",
    ],
  },
  {
    id: "resume-score",
    title: "Resume Score Improvement Tool",
    headline: "Improve your resume score step by step",
    description:
      "See your resume score improve as you complete sections. Get actionable tips to get hired faster with a stronger, more complete CV.",
    icon: TrendingUp,
    image: "atsScoreChecker",
    bullets: [
      "Real-time ATS compatibility score",
      "Actionable improvement tips",
      "Progress saved automatically",
    ],
  },
];

export const HOME_FEATURES_PREVIEW: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: AndroidImageKey;
}[] = [
  {
    title: "Guided 8-Step Builder",
    description: "From personal info to export—we guide you through.",
    icon: Brain,
    image: "guidedBuilder",
  },
  {
    title: "20+ Stunning Templates",
    description: "Modern, minimal, professional, and creative designs.",
    icon: LayoutTemplate,
    image: "templatesGallery",
  },
  {
    title: "Live Resume Preview",
    description: "Pinch to zoom and see changes instantly.",
    icon: CheckCircle2,
    image: "livePreview",
  },
  {
    title: "ATS Score Checker",
    description: "Know your score and fix what matters instantly.",
    icon: Gauge,
    image: "atsScoreChecker",
  },
  {
    title: "Drag & Drop Reorder",
    description: "Customize every section your way.",
    icon: FileDown,
    image: "dragDrop",
  },
  {
    title: "PDF & Image Export",
    description: "Share anywhere, instantly.",
    icon: FileText,
    image: "pdfExport",
  },
  {
    title: "Manage All Resumes",
    description: "Edit, duplicate, rename, and change templates.",
    icon: TrendingUp,
    image: "manageResumes",
  },
];
