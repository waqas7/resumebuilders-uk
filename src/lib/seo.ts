import type { Metadata } from "next";
import { IMAGES, KEYWORDS, SITE_URL } from "./constants";
import { BRAND } from "./projects";

export const sharedMetadata: Pick<Metadata, "metadataBase" | "icons" | "manifest"> = {
  metadataBase: new URL(SITE_URL),
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

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  robots?: Metadata["robots"];
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = KEYWORDS,
  ogImage = path === "/" ? BRAND.ogImage : IMAGES.ogDefault,
  ogImageAlt = path === "/" ? BRAND.ogImageAlt : IMAGES.ogAlt,
  robots = { index: true, follow: true },
  type = "website",
  publishedTime,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/"
      ? title
      : `${title} | ${BRAND.name}`;

  return {
    ...sharedMetadata,
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_GB",
      url,
      title: fullTitle,
      description,
      siteName: BRAND.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
      ...(type === "article" && publishedTime
        ? { publishedTime, authors: [BRAND.name] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots,
  };
}
