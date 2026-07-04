import type { MetadataRoute } from "next";
import { getAllSlugs as getBlogSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { getAllJobTemplateSlugs } from "@/lib/job-template-pages";

export const dynamic = "force-static";

function staticPriority(route: string): number {
  if (route === "") return 1;
  if (route === "/templates") return 0.95;
  if (route.startsWith("/templates/")) return 0.9;
  if (route === "/features" || route === "/pricing") return 0.85;
  if (route === "/blog") return 0.7;
  if (route === "/privacy" || route === "/terms") return 0.3;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/contact",
    "/blog",
    "/features",
    "/templates",
    "/pricing",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: route === "" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: staticPriority(route),
    })),
    ...getBlogSlugs().map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllJobTemplateSlugs().map((slug) => ({
      url: `${SITE_URL}/templates/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
