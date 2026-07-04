import Link from "next/link";
import { Container, Section, Badge } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JobTemplateCard } from "@/components/templates/job-template-card";
import { JOB_TEMPLATE_PAGES } from "@/lib/job-template-pages";

export default function TemplatesPageClient() {
  return (
    <>
      <Section className="pt-16">
        <Container>
          <Badge className="mb-4">{JOB_TEMPLATE_PAGES.length} UK CV Examples</Badge>
          <h1 className="text-4xl font-bold md:text-5xl">
            CV Templates & Examples for Every UK Job
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Browse real CV examples by role — retail, admin, student, ATS-friendly,
            and more. Preview each layout, customise on web, and export PDF free
            in the Android app.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JOB_TEMPLATE_PAGES.map((page) => (
              <li key={page.slug}>
                <JobTemplateCard page={page} />
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              20+ design templates inside the app.{" "}
              <Link
                href="/blog/best-resume-formats-uk-jobs"
                className="text-violet-600 hover:underline dark:text-violet-400"
              >
                Read our UK resume format guide
              </Link>{" "}
              or{" "}
              <Link
                href="/pricing"
                className="text-violet-600 hover:underline dark:text-violet-400"
              >
                compare free vs premium
              </Link>
              .
            </p>
            <div className="mt-6">
              <PlayStoreButton ctaSource="templates_index">
                Use Templates Free
              </PlayStoreButton>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection variant="secondary" />
    </>
  );
}
