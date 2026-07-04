import Link from "next/link";
import type { JobTemplatePage } from "@/lib/job-template-pages";

export function RelatedTemplates({ pages }: { pages: JobTemplatePage[] }) {
  if (pages.length === 0) return null;

  return (
    <section className="border-t border-border pt-12">
      <h2 className="text-2xl font-bold">Related CV Templates</h2>
      <p className="mt-2 text-muted-foreground">
        More UK CV examples optimised for ATS and recruiter screening.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/templates/${page.slug}`}
              className="group block rounded-xl border border-border bg-card p-5 transition hover:border-violet-500/40 hover:shadow-md"
            >
              <h3 className="font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400">
                {page.heroHeadline}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {page.heroSubtext}
              </p>
              <span className="mt-3 inline-flex text-sm font-semibold text-violet-600 dark:text-violet-400">
                View template →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
