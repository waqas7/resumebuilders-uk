import Link from "next/link";
import { JobCvPreview } from "@/components/templates/job-cv-preview";
import { LazyCvPreview } from "@/components/templates/lazy-cv-preview";
import type { JobTemplatePage } from "@/lib/job-template-pages";

type JobTemplateCardProps = {
  page: JobTemplatePage;
  lazyPreview?: boolean;
};

export function JobTemplateCard({ page, lazyPreview = false }: JobTemplateCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5">
      <div className="bg-gradient-to-br from-violet-500/5 to-blue-500/5 p-3">
        <div
          className="max-h-[min(70vw,420px)] overflow-y-auto overscroll-contain rounded-lg border border-border/50 bg-white shadow-md sm:max-h-[380px]"
          role="img"
          aria-label={`${page.builderLabel} CV preview`}
        >
          {lazyPreview ? (
            <LazyCvPreview data={page.cvData} label={page.builderLabel} />
          ) : (
            <JobCvPreview data={page.cvData} highlightSections size="card" />
          )}
        </div>
      </div>
      <Link
        href={`/templates/${page.slug}`}
        className="flex flex-1 flex-col border-t border-border p-4"
      >
        <h3 className="text-base font-semibold leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 md:text-lg">
          {page.h1}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {page.heroSubtext}
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold text-violet-600 dark:text-violet-400">
          Build this CV free →
        </span>
      </Link>
    </article>
  );
}
