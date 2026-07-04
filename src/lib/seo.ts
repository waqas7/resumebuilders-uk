import type { Metadata } from "next";
import { KEYWORDS, SITE_URL } from "./constants";
import { BRAND } from "./projects";
import { getOgImageForPath } from "./og-images";

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
  ogImage,
  ogImageAlt,
  robots = { index: true, follow: true },
  type = "website",
  publishedTime,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const brandedTitle =
    path === "/" ? title : `${title} | ${BRAND.name}`;

  const og = ogImage
    ? { url: ogImage, alt: ogImageAlt ?? description }
    : getOgImageForPath(path);

  return {
    ...sharedMetadata,
    // Layout applies `%s | ${BRAND.name}` — pass plain title for inner pages.
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_GB",
      url,
      title: brandedTitle,
      description,
      siteName: BRAND.name,
      images: [{ url: og.url, width: 1200, height: 630, alt: og.alt }],
      ...(type === "article" && publishedTime
        ? { publishedTime, authors: [BRAND.name] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [og.url],
    },
    robots,
  };
}
