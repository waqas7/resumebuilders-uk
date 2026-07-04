"use client";

import Image from "next/image";
import { PLAY_STORE_URL } from "@/lib/constants";
import { getPlayStoreUrl, type PlayStoreLinkOptions } from "@/lib/play-store-url";
import { trackAppInstallClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const GOOGLE_PLAY_BADGE = "/badges/google-play-badge.png";

/** Official badge aspect ratio (646×250). */
const BADGE_HEIGHT = {
  sm: 40,
  md: 50,
  lg: 60,
} as const;

type PlayStoreCtaProps = {
  className?: string;
  ctaSource: string;
  templateSlug?: string;
  playStoreUrl?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function resolvePlayStoreHref({
  ctaSource,
  templateSlug,
  playStoreUrl,
}: Pick<PlayStoreCtaProps, "ctaSource" | "templateSlug" | "playStoreUrl">) {
  if (playStoreUrl && playStoreUrl !== PLAY_STORE_URL) return playStoreUrl;
  return getPlayStoreUrl({ source: ctaSource, templateSlug });
}

function handlePlayStoreClick(
  ctaSource: string,
  templateSlug: string | undefined,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackAppInstallClick(ctaSource, templateSlug);
    onClick?.(event);
  };
}

type PlayStoreBadgeProps = {
  size?: "sm" | "md" | "lg";
} & PlayStoreCtaProps;

export function PlayStoreBadge({
  className,
  size = "md",
  ctaSource,
  templateSlug,
  playStoreUrl,
  onClick,
  ...props
}: PlayStoreBadgeProps) {
  const href = resolvePlayStoreHref({ ctaSource, templateSlug, playStoreUrl });
  const height = BADGE_HEIGHT[size];
  const width = Math.round(height * (646 / 250));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handlePlayStoreClick(ctaSource, templateSlug, onClick)}
      className={cn("inline-block transition hover:opacity-90", className)}
      aria-label="Get it on Google Play"
      {...props}
    >
      <Image
        src={GOOGLE_PLAY_BADGE}
        alt="Get it on Google Play"
        width={width}
        height={height}
        className="h-auto w-auto"
        style={{ height, width: "auto", maxWidth: "none" }}
      />
    </a>
  );
}

export function PlayStoreButton({
  className,
  children = "Download Free",
  ctaSource,
  templateSlug,
  playStoreUrl,
  onClick,
  ...props
}: {
  children?: React.ReactNode;
} & PlayStoreCtaProps) {
  const href = resolvePlayStoreHref({ ctaSource, templateSlug, playStoreUrl });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handlePlayStoreClick(ctaSource, templateSlug, onClick)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export type { PlayStoreLinkOptions };
