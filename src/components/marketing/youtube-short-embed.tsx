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
  return (
    <figure className={cn("mx-auto w-full max-w-[280px]", className)}>
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-black shadow-2xl shadow-violet-500/10">
        <iframe
          src={`${RESUME_BUILDER_YOUTUBE_SHORT.embedUrl}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
