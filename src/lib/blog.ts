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
