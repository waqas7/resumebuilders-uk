import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogApp = "resume-builder" | "mindfuel";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  relatedSlugs: string[];
  app: BlogApp;
  content: string;
  htmlContent: string;
  readingTime: string;
};

function parseApp(data: Record<string, unknown>): BlogApp {
  return data.app === "mindfuel" ? "mindfuel" : "resume-builder";
}

export function getAllPosts(): Omit<BlogPost, "content" | "htmlContent">[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        keywords: (data.keywords as string[]) ?? [],
        relatedSlugs: (data.relatedSlugs as string[]) ?? [],
        app: parseApp(data),
        readingTime: stats.text,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    keywords: (data.keywords as string[]) ?? [],
    relatedSlugs: (data.relatedSlugs as string[]) ?? [],
    app: parseApp(data),
    content,
    htmlContent: processed.toString(),
    readingTime: stats.text,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getRelatedPosts(
  slug: string,
  limit = 3
): Omit<BlogPost, "content" | "htmlContent">[] {
  const posts = getAllPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return posts.filter((p) => p.slug !== slug).slice(0, limit);

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((post) => {
      let score = 0;
      if (current.relatedSlugs.includes(post.slug)) score += 10;
      if (post.relatedSlugs.includes(slug)) score += 8;
      const sharedKeywords = post.keywords.filter((k) =>
        current.keywords.some(
          (ck) => ck.toLowerCase() === k.toLowerCase()
        )
      );
      score += sharedKeywords.length * 2;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date));

  const picked = scored.filter((s) => s.score > 0).slice(0, limit);
  if (picked.length >= limit) return picked.map((s) => s.post);

  const fallback = scored
    .filter((s) => !picked.some((p) => p.post.slug === s.post.slug))
    .slice(0, limit - picked.length);

  return [...picked, ...fallback].map((s) => s.post);
}
