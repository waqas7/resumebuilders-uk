import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/schema";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd
        data={[
          getBlogPostingSchema(post),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <Section className="pt-16">
        <Container className="max-w-3xl">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            {" / "}
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </nav>

          <article>
            <time
              dateTime={post.date}
              className="mt-4 block text-sm text-muted-foreground"
            >
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </time>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              {post.title}
            </h1>
            <div
              className="prose-custom mt-8"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </article>

          {related.length > 0 && (
            <aside className="mt-16 border-t border-border pt-8">
              <h2 className="text-lg font-semibold">Related Articles</h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="text-violet-600 hover:underline dark:text-violet-400"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 p-6 text-center">
            <p className="font-semibold">Ready to build your CV?</p>
            <Link
              href="/"
              className="mt-2 inline-block text-sm text-violet-600 hover:underline dark:text-violet-400"
            >
              Download the free CV maker app →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
