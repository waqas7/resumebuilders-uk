import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import { TemplatePageClient } from "@/components/templates/template-page-client";
import {
  getAllJobTemplateSlugs,
  getJobTemplatePage,
  getRelatedTemplates,
} from "@/lib/job-template-pages";
import { getBlogLinkForTemplate } from "@/lib/template-blog-links";
import { KEYWORDS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllJobTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getJobTemplatePage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/templates/${slug}`,
    keywords: [...KEYWORDS, ...page.keywords],
  });
}

export default async function JobTemplatePage({ params }: Props) {
  const { slug } = await params;
  const page = getJobTemplatePage(slug);
  if (!page) notFound();

  const related = getRelatedTemplates(page.relatedSlugs);
  const blogLink = getBlogLinkForTemplate(slug);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "CV Templates", path: "/templates" },
          { name: page.h1, path: `/templates/${slug}` },
        ])}
      />
      <TemplatePageClient page={page} related={related} blogLink={blogLink} />
    </>
  );
}
