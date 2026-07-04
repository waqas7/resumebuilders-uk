import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "UK CV & Resume Tips Blog — Expert Career Advice",
  description:
    "Expert guides on writing UK CVs, ATS resume tips, job formats, and common resume mistakes. Boost your job search with Resume Builders UK.",
  path: "/blog",
  keywords: [...KEYWORDS, "resume tips", "CV writing guide", "ATS tips", "UK CV advice"],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section className="pt-16">
      <Container>
        <h1 className="text-4xl font-bold md:text-5xl">
          UK CV & Resume Career Blog
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Expert guides to help you write better CVs, pass ATS screening, and
          land interviews across the UK.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-violet-500/30 hover:shadow-lg"
            >
              <time
                dateTime={post.date}
                className="text-sm text-muted-foreground"
              >
                {new Date(post.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </time>
              <h2 className="mt-3 text-xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
