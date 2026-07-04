"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { RESUME_BUILDER_YOUTUBE_SHORT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type YouTubeShortEmbedProps = {
  className?: string;
  title?: string;
};

export function YouTubeShortEmbed({
  className,
  title = RESUME_BUILDER_YOUTUBE_SHORT.title,
}: YouTubeShortEmbedProps) {
  const [active, setActive] = useState(false);

  return (
    <figure className={cn("mx-auto w-full max-w-[280px]", className)}>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-black shadow-2xl shadow-violet-500/10">
        {active ? (
          <iframe
            src={`${RESUME_BUILDER_YOUTUBE_SHORT.embedUrl}?rel=0&modestbranding=1&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={RESUME_BUILDER_YOUTUBE_SHORT.thumbnailUrl}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-violet-700 shadow-lg transition group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
            </span>
            <span className="relative mt-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
              Tap to play demo
            </span>
          </button>
        )}
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
