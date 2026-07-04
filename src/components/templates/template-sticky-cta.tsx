"use client";

import { useEffect, useState } from "react";
import { PlayStoreBadge } from "@/components/conversion/play-store-badge";
import { trackAppInstallClick } from "@/lib/analytics";

export function TemplateStickyCta({ slug }: { slug: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            Get App – Free CV Export
          </p>
          <p className="text-xs text-muted-foreground">Finish CV in 2 min</p>
        </div>
        <PlayStoreBadge
          size="sm"
          onClick={() => trackAppInstallClick("template_sticky_bar", slug)}
        />
      </div>
    </div>
  );
}
