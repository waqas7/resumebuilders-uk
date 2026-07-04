import { cn } from "@/lib/utils";
import type { JobCvData } from "@/lib/job-template-pages";

type JobCvPreviewProps = {
  data: JobCvData;
  className?: string;
  highlightSections?: boolean;
  /** Smaller typography — same full content as default (for template grid cards) */
  size?: "default" | "card";
  draft?: {
    fullName?: string;
    email?: string;
    phone?: string;
    jobTitle?: string;
    summary?: string;
  };
};

const sizeStyles = {
  default: {
    article: "p-6 md:p-8",
    name: "text-xl font-bold tracking-tight md:text-2xl",
    title: "text-sm font-medium text-violet-700 md:text-base",
    contact: "text-xs text-zinc-600 md:text-sm",
    headerPb: "pb-4",
    sectionMt: "mt-5",
    heading: "text-xs font-bold uppercase tracking-wide text-zinc-800",
    body: "text-sm leading-relaxed text-zinc-700",
    skills: "text-sm text-zinc-700",
    role: "text-sm font-semibold text-zinc-900",
    period: "text-xs text-zinc-500",
    company: "text-sm text-zinc-600",
    bullet: "text-sm text-zinc-700",
    expGap: "space-y-4",
    bulletGap: "space-y-1",
  },
  card: {
    article: "p-3",
    name: "text-[11px] font-bold leading-tight",
    title: "text-[9px] font-medium text-violet-700",
    contact: "text-[8px] text-zinc-600 leading-snug",
    headerPb: "pb-2",
    sectionMt: "mt-2.5",
    heading: "text-[8px] font-bold uppercase tracking-wide text-zinc-800",
    body: "text-[8px] leading-relaxed text-zinc-700",
    skills: "text-[8px] text-zinc-700",
    role: "text-[8px] font-semibold text-zinc-900",
    period: "text-[7px] text-zinc-500",
    company: "text-[8px] text-zinc-600",
    bullet: "text-[8px] text-zinc-700 leading-snug",
    expGap: "space-y-2.5",
    bulletGap: "space-y-0.5",
  },
} as const;

export function JobCvPreview({
  data,
  className,
  highlightSections = false,
  size = "default",
  draft,
}: JobCvPreviewProps) {
  const name = draft?.fullName?.trim() || data.name;
  const title = draft?.jobTitle?.trim() || data.title;
  const summary = draft?.summary?.trim() || data.summary;
  const email = draft?.email?.trim() || data.email;
  const phone = draft?.phone?.trim() || data.phone;
  const s = sizeStyles[size];

  const sectionClass = highlightSections
    ? size === "card"
      ? "rounded border border-violet-200/60 bg-violet-50/30 p-2 dark:border-violet-800/40 dark:bg-violet-950/20"
      : "rounded-lg border border-violet-200/60 bg-violet-50/30 p-3 dark:border-violet-800/40 dark:bg-violet-950/20"
    : "";

  return (
    <article
      className={cn("bg-white text-zinc-900 shadow-sm", s.article, className)}
      aria-label={`CV preview for ${title}`}
    >
      <header className={cn("border-b border-zinc-200", s.headerPb)}>
        <h2 className={s.name}>{name}</h2>
        <p className={cn("mt-0.5", s.title)}>{title}</p>
        <p className={cn("mt-1", s.contact)}>
          {email} · {phone} · {data.location}
        </p>
      </header>

      <section className={cn(s.sectionMt, sectionClass)}>
        <h3 className={s.heading}>Professional Summary</h3>
        <p className={cn("mt-1", s.body)}>{summary}</p>
      </section>

      <section className={cn(s.sectionMt, sectionClass)}>
        <h3 className={s.heading}>Skills</h3>
        <p className={cn("mt-1", s.skills)}>{data.skills.join(" · ")}</p>
      </section>

      <section className={cn(s.sectionMt, sectionClass)}>
        <h3 className={s.heading}>Experience</h3>
        <ul className={cn("mt-1.5", s.expGap)}>
          {data.experience.map((exp) => (
            <li key={`${exp.company}-${exp.role}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className={s.role}>{exp.role}</p>
                <p className={s.period}>{exp.period}</p>
              </div>
              <p className={s.company}>{exp.company}</p>
              <ul className={cn("mt-1 list-disc pl-3", s.bulletGap)}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className={s.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(s.sectionMt, sectionClass)}>
        <h3 className={s.heading}>Education</h3>
        <p className={cn("mt-1 whitespace-pre-line", s.body)}>{data.education}</p>
      </section>
    </article>
  );
}
