"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/projects";
import { IMAGES } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { Container } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2.5">
          <Image
            src={IMAGES.logo}
            alt={IMAGES.logoAlt}
            width={36}
            height={36}
            className="shrink-0 rounded-lg"
            priority
          />
          <span className="truncate text-sm font-bold sm:text-base">
            {BRAND.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PlayStoreButton className="hidden px-4 py-2 text-sm sm:inline-flex">
            Download
          </PlayStoreButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
