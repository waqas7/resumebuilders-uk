import { ANDROID_IMAGES, IMAGES } from "./constants";
import { BRAND } from "./projects";

/** Unique OG images for high-traffic pages (1200×630 assets in /public/images). */
export const PAGE_OG_IMAGES: Record<string, { src: string; alt: string }> = {
  "/": { src: BRAND.ogImage, alt: BRAND.ogImageAlt },
  "/features": {
    src: ANDROID_IMAGES.guidedBuilder.src,
    alt: ANDROID_IMAGES.guidedBuilder.alt,
  },
  "/templates": {
    src: ANDROID_IMAGES.templatesGallery.src,
    alt: ANDROID_IMAGES.templatesGallery.alt,
  },
  "/pricing": {
    src: ANDROID_IMAGES.pdfExport.src,
    alt: ANDROID_IMAGES.pdfExport.alt,
  },
  "/blog": {
    src: ANDROID_IMAGES.heroTemplates.src,
    alt: ANDROID_IMAGES.heroTemplates.alt,
  },
  "/templates/ats-friendly-cv-template": {
    src: ANDROID_IMAGES.atsScoreChecker.src,
    alt: ANDROID_IMAGES.atsScoreChecker.alt,
  },
  "/templates/student-cv-no-experience": {
    src: ANDROID_IMAGES.welcomeDashboard.src,
    alt: ANDROID_IMAGES.welcomeDashboard.alt,
  },
  "/templates/care-home-worker-cv-uk": {
    src: ANDROID_IMAGES.manageResumes.src,
    alt: ANDROID_IMAGES.manageResumes.alt,
  },
  "/templates/retail-assistant-cv-uk": {
    src: ANDROID_IMAGES.heroTemplates.src,
    alt: ANDROID_IMAGES.heroTemplates.alt,
  },
  "/blog/top-ats-resume-tips": {
    src: ANDROID_IMAGES.atsScoreChecker.src,
    alt: "ATS resume tips — UK CV maker app with score checker",
  },
  "/blog/care-home-jobs-cv-uk": {
    src: ANDROID_IMAGES.guidedBuilder.src,
    alt: "Care home CV guide — UK care assistant resume builder",
  },
};

export function getOgImageForPath(path: string): { url: string; alt: string } {
  const match = PAGE_OG_IMAGES[path];
  if (match) return { url: match.src, alt: match.alt };
  return { url: IMAGES.ogDefault, alt: IMAGES.ogAlt };
}
