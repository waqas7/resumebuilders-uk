"use client";

import { usePathname } from "next/navigation";
import { StickyDownloadBar } from "@/components/conversion/sticky-download-bar";

/** Hide global sticky bar on template detail pages — they use TemplateStickyCta instead. */
export function ConditionalStickyDownloadBar() {
  const pathname = usePathname();
  const isTemplateDetail =
    pathname?.startsWith("/templates/") && pathname !== "/templates";

  if (isTemplateDetail) return null;
  return <StickyDownloadBar />;
}
