"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/projects";
import { getPlayStoreUrl } from "@/lib/play-store-url";
import { trackAppInstallClick } from "@/lib/analytics";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const playStoreHref = getPlayStoreUrl({ source: "mobile_nav" });

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={playStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppInstallClick("mobile_nav")}
              className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Download on Google Play
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
