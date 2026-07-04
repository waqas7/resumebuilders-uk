import type { Metadata } from "next";
import { IMAGES, KEYWORDS, SITE_URL } from "./constants";
import { BRAND } from "./projects";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  robots?: Metadata["robots"];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = KEYWORDS,
  ogImage = path === "/" ? BRAND.ogImage : IMAGES.ogDefault,
  ogImageAlt = path === "/" ? BRAND.ogImageAlt : IMAGES.ogAlt,
  robots = { index: true, follow: true },
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/"
      ? title
      : `${title} | ${BRAND.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      title: fullTitle,
      description,
      siteName: BRAND.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots,
    icons: {
      icon: [
        { url: "/images/resume-builder-app-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/images/resume-builder-app-icon-512.webp", sizes: "512x512", type: "image/webp" },
      ],
      apple: [
        { url: "/images/resume-builder-app-icon-192.png", sizes: "192x192", type: "image/png" },
      ],
    },
    manifest: "/manifest.json",
  };
}
