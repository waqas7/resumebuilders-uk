"use client";

import { PLAY_STORE_URL } from "@/lib/constants";
import { getPlayStoreUrl, type PlayStoreLinkOptions } from "@/lib/play-store-url";
import { trackAppInstallClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

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

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handlePlayStoreClick(ctaSource, templateSlug, onClick)}
      className={cn(
        "inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white transition hover:bg-zinc-900",
        size === "sm" && "px-3 py-2 text-sm",
        size === "lg" && "px-5 py-3",
        className
      )}
      aria-label="Get it on Google Play"
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "shrink-0",
          size === "sm" ? "h-6 w-6" : size === "lg" ? "h-9 w-9" : "h-8 w-8"
        )}
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M3.6 1.8c-.3.2-.5.5-.5.9v18.6c0 .4.2.7.5.9l10.2-10.2L3.6 1.8zm11.4 9.4 2.7 2.7-9.5 5.5 6.8-8.2zm3.1 2.8 2.4 1.4c.9.5.9 1.7 0 2.2l-2.4 1.4-2.9-2.9 2.9-2.1zM5.1 2.9l9.5 5.5-2.7 2.7L5.1 2.9z"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-80">
          Get it on
        </span>
        <span className={cn("font-semibold", size === "lg" ? "text-lg" : "text-sm")}>
          Google Play
        </span>
      </span>
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
