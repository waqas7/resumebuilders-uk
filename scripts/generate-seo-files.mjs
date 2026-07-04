import fs from "fs";
import path from "path";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resumebuilders.uk";

function getJobTemplateSlugs() {
  const files = [
    path.join(process.cwd(), "src/lib/job-template-pages.ts"),
    path.join(process.cwd(), "src/lib/job-template-pages-extra.ts"),
  ];
  const slugs = new Set();
  for (const filePath of files) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, "utf8");
    for (const match of content.matchAll(/^\s+slug:\s*"([^"]+)"/gm)) {
      slugs.add(match[1]);
    }
  }
  return [...slugs];
}

const STATIC_ROUTES = [
  "",
  "/contact",
  "/blog",
  "/features",
  "/templates",
  "/pricing",
  "/privacy",
  "/terms",
];

function getBlogSlugs() {
  const postsDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

function keywordToPath(keyword) {
  return (
    "/" +
    keyword
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  );
}

const LEGACY_REDIRECTS = [
  ["/resume-builder/features", "/features"],
  ["/resume-builder/templates", "/templates"],
  ["/resume-builder/pricing", "/pricing"],
  ["/resume-builder", "/"],
];

const KEYWORD_DESTINATIONS = [
  {
    dest: "/",
    keywords: [
      "resume maker",
      "cv maker",
      "free resume maker",
      "free cv maker",
      "resume maker app",
      "cv maker app",
      "resume builder app",
      "uk cv maker",
      "uk cv maker app",
      "create resume online",
      "easy cv builder app for beginners",
      "best resume maker app for android",
      "android resume builder app",
      "cv maker app android",
      "offline resume builder app",
      "offline resume builder",
    ],
  },
  {
    dest: "/templates",
    keywords: ["resume maker app with templates", "ats resume templates"],
  },
  {
    dest: "/features",
    keywords: [
      "ai resume builder app",
      "ai resume builder",
      "ats score checker",
      "resume maker app with cover letter",
      "resume maker app no watermark",
      "resume maker app with pdf download",
    ],
  },
  {
    dest: "/templates/ats-friendly-cv-template",
    keywords: [
      "ats friendly resume",
      "ats friendly resume builder app",
      "ats friendly resume builder",
      "ats resume builder",
    ],
  },
  {
    dest: "/templates/student-cv-no-experience",
    keywords: ["free resume maker app for freshers"],
  },
];

const TEMPLATE_ALIASES = {
  "retail-assistant-cv-uk": ["retail-assistant-cv", "retail-cv-uk"],
  "warehouse-worker-cv-uk": ["warehouse-worker-cv", "warehouse-cv-uk"],
  "student-cv-no-experience": ["student-cv", "student-cv-uk", "cv-no-experience"],
  "ats-friendly-cv-template": ["ats-cv-template", "ats-friendly-cv"],
  "career-change-cv-uk": ["career-change-cv", "career-change-cv-template"],
  "customer-service-cv-uk": ["customer-service-cv", "call-centre-cv-uk"],
  "admin-assistant-cv-uk": ["admin-assistant-cv", "admin-cv-uk"],
  "sales-associate-cv-uk": ["sales-associate-cv", "sales-cv-uk"],
  "receptionist-cv-uk": ["receptionist-cv", "front-desk-cv-uk"],
  "simple-cv-template-interviews": ["simple-cv-template", "simple-cv-uk"],
  "professional-cv-format-uk-2026": ["professional-cv-uk", "professional-cv-format-uk"],
  "international-student-cv-uk": ["international-student-cv", "international-cv-uk"],
  "career-change-cv-no-experience": ["career-change-no-experience-cv"],
  "cv-after-career-break-uk": ["career-break-cv", "return-to-work-cv-uk"],
  "care-home-worker-cv-uk": [
    "care-home-cv",
    "care-home-worker-cv",
    "care-assistant-cv",
    "care-home-cv-uk",
    "support-worker-cv-uk",
  ],
  "hgv-driver-cv-uk": ["hgv-driver-cv", "hgv-cv-uk", "class-1-driver-cv"],
  "cleaner-cv-uk": ["cleaner-cv", "cleaning-operative-cv-uk"],
  "teaching-assistant-cv-uk": ["teaching-assistant-cv", "ta-cv-uk", "school-ta-cv"],
  "hospitality-waitress-cv-uk": ["waitress-cv-uk", "waiter-cv-uk", "hospitality-cv"],
  "nhs-healthcare-assistant-cv-uk": ["nhs-hca-cv", "healthcare-assistant-cv-uk", "band-2-hca-cv"],
  "delivery-driver-cv-uk": ["delivery-driver-cv", "van-driver-cv-uk"],
  "kitchen-porter-cv-uk": ["kitchen-porter-cv", "kp-cv-uk"],
  "bar-staff-cv-uk": ["bar-staff-cv", "bartender-cv-uk"],
  "security-guard-cv-uk": ["security-guard-cv", "sia-cv-uk", "door-supervisor-cv"],
  "apprenticeship-cv-uk": ["apprenticeship-cv", "school-leaver-cv-uk"],
};

const BLOG_ALIASES = {
  "top-ats-resume-tips": ["ats-resume-tips", "ats-tips-uk"],
  "how-to-write-perfect-cv-2026": ["how-to-write-cv", "perfect-cv-2026"],
  "best-resume-formats-uk-jobs": ["uk-cv-format", "uk-resume-format"],
  "resume-mistakes-to-avoid": ["cv-mistakes", "resume-mistakes-uk"],
  "cv-personal-statement-examples-uk": ["cv-personal-statement", "personal-statement-examples"],
  "cv-with-no-experience-uk": ["cv-no-experience", "first-cv-uk"],
  "cover-letter-tips-uk-2026": ["cover-letter-tips-uk", "uk-cover-letter"],
  "graduate-cv-guide-uk": ["graduate-cv", "graduate-cv-uk"],
  "employment-gap-cv-uk": ["employment-gap-cv", "career-gap-cv-uk"],
  "cv-skills-section-guide-uk": ["cv-skills-section", "skills-for-cv-uk"],
  "nhs-cv-tips-uk": ["nhs-cv-tips", "nhs-cv", "public-sector-cv-uk"],
  "remote-work-cv-uk": ["remote-cv-uk", "hybrid-work-cv"],
  "career-change-cv-guide-uk": ["career-change-cv-guide", "switching-careers-cv"],
  "cv-length-guide-uk": ["cv-length-uk", "how-long-should-cv-be"],
  "care-home-jobs-cv-uk": ["care-home-jobs-cv", "care-home-jobs", "care-jobs-cv-uk"],
};

function buildRedirects() {
  const redirects = new Map();

  const add = (from, to) => {
    if (from === to || from === "/" && to === "/") return;
    if (!redirects.has(from)) redirects.set(from, to);
  };

  for (const [from, to] of LEGACY_REDIRECTS) add(from, to);

  for (const { keywords, dest } of KEYWORD_DESTINATIONS) {
    for (const keyword of keywords) add(keywordToPath(keyword), dest);
  }

  for (const slug of getJobTemplateSlugs()) {
    add(`/${slug}`, `/templates/${slug}`);
    const aliases = TEMPLATE_ALIASES[slug] ?? [];
    for (const alias of aliases) add(`/${alias}`, `/templates/${slug}`);
    if (slug.endsWith("-uk")) add(`/${slug.slice(0, -3)}`, `/templates/${slug}`);
  }

  for (const slug of getBlogSlugs()) {
    add(`/${slug}`, `/blog/${slug}`);
    const aliases = BLOG_ALIASES[slug] ?? [];
    for (const alias of aliases) add(`/${alias}`, `/blog/${slug}`);
  }

  return [...redirects.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([from, to]) => `${from} ${to} 301`)
    .join("\n");
}

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });

const redirectsContent = buildRedirects();

fs.writeFileSync(path.join(publicDir, "_redirects"), `${redirectsContent}\n`, "utf8");

const urlCount =
  STATIC_ROUTES.length + getBlogSlugs().length + getJobTemplateSlugs().length;
const redirectCount = redirectsContent.split("\n").filter(Boolean).length;

console.log("Generated _redirects for", SITE_URL);
console.log(`  Expected sitemap URLs (via app/sitemap.ts): ${urlCount}`);
console.log(`  Redirect rules: ${redirectCount}`);
