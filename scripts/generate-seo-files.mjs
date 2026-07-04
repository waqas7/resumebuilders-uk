import fs from "fs";
import path from "path";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resumebuilders.uk";

const JOB_TEMPLATE_SLUGS = [
  "retail-assistant-cv-uk",
  "warehouse-worker-cv-uk",
  "student-cv-no-experience",
  "ats-friendly-cv-template",
  "career-change-cv-uk",
  "customer-service-cv-uk",
  "admin-assistant-cv-uk",
  "sales-associate-cv-uk",
  "receptionist-cv-uk",
  "simple-cv-template-interviews",
  "professional-cv-format-uk-2026",
  "international-student-cv-uk",
  "career-change-cv-no-experience",
  "cv-after-career-break-uk",
];

const STATIC_ROUTES = [
  "",
  "/contact",
  "/blog",
  "/features",
  "/templates",
  "/pricing",
];

function getPriority(routePath) {
  if (routePath === "") return 1.0;
  if (routePath === "/templates") return 0.95;
  if (routePath.startsWith("/templates/")) return 0.9;
  if (routePath === "/features" || routePath === "/pricing") return 0.85;
  if (routePath === "/blog") return 0.7;
  return 0.8;
}

function getBlogSlugs() {
  const postsDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml() {
  const lastmod = new Date().toISOString();
  const urls = [
    ...STATIC_ROUTES.map((routePath) => ({
      loc: `${SITE_URL}${routePath}`,
      lastmod,
      changefreq: "weekly",
      priority: getPriority(routePath),
    })),
    ...getBlogSlugs().map((slug) => ({
      loc: `${SITE_URL}/blog/${slug}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.7,
    })),
    ...JOB_TEMPLATE_SLUGS.map((slug) => ({
      loc: `${SITE_URL}/templates/${slug}`,
      lastmod,
      changefreq: "weekly",
      priority: 0.9,
    })),
  ];

  const body = urls
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), buildSitemapXml(), "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");

console.log("Generated sitemap.xml and robots.txt for", SITE_URL);
