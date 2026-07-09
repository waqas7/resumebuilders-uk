import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PROJECT_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const OUT_DIR = path.join(PROJECT_ROOT, "public", "api", "v1");
const DETAILS_DIR = path.join(OUT_DIR, "job-examples");
const SOURCE_FILES = [
  path.join(PROJECT_ROOT, "src/lib/job-template-pages.ts"),
  path.join(PROJECT_ROOT, "src/lib/job-template-pages-extra.ts"),
];

function extractBalancedObject(source, startIndex) {
  if (source[startIndex] !== "{") {
    throw new Error(`Expected '{' at index ${startIndex}`);
  }
  let depth = 0;
  let inString = false;
  let quote = null;
  let escaped = false;
  for (let i = startIndex; i < source.length; i++) {
    const ch = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) {
        return source.slice(startIndex, i + 1);
      }
    }
  }
  throw new Error("Unbalanced braces while extracting object");
}

function tsObjectLiteralToJson(literal) {
  let s = literal
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/([,{]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":')
    .replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (_, inner) =>
      JSON.stringify(JSON.parse(`"${inner.replace(/"/g, '\\"')}"`)),
    )
    .replace(/,(\s*[}\]])/g, "$1");
  return JSON.parse(s);
}

function parseEducation(education) {
  if (!education || typeof education !== "string") {
    return { degree: "", institution: "", year: "", raw: "" };
  }
  const primary = education.split("\n")[0].trim();
  const emDash = primary.split(/\s+[—–-]\s+/);
  if (emDash.length >= 2) {
    const degree = emDash[0].trim();
    const rest = emDash.slice(1).join(" — ").trim();
    const yearMatch = rest.match(/(\d{4})\s*$/);
    const year = yearMatch ? yearMatch[1] : "";
    let institution = rest;
    if (yearMatch) {
      institution = rest
        .slice(0, yearMatch.index)
        .replace(/,\s*$/, "")
        .trim();
    }
    return { degree, institution, year, raw: education };
  }
  return { degree: primary, institution: "", year: "", raw: education };
}

function extractPagesFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`Missing source file: ${filePath}`);
    return [];
  }
  const content = fs.readFileSync(filePath, "utf8");
  const pages = [];
  const slugRe = /^\s+slug:\s*"([^"]+)"/gm;
  let match;
  while ((match = slugRe.exec(content)) !== null) {
    let braceStart = match.index;
    while (braceStart > 0 && content[braceStart] !== "{") braceStart--;
    try {
      const pageLiteral = extractBalancedObject(content, braceStart);
      const page = tsObjectLiteralToJson(pageLiteral);
      if (page?.slug) pages.push(page);
    } catch (err) {
      console.warn(`Failed to parse page at slug ${match[1]}:`, err.message);
    }
  }
  return pages;
}

function buildApiPayload(page) {
  const cv = page.cvData ?? {};
  const education = parseEducation(cv.education ?? "");
  return {
    id: page.slug,
    slug: page.slug,
    title: page.h1 ?? page.heroHeadline ?? page.builderLabel ?? page.slug,
    builderLabel: page.builderLabel ?? page.slug,
    previewVariant: page.previewVariant ?? "ats-standard",
    suggestedTemplateHint: "ats",
    cv: {
      name: cv.name ?? "",
      title: cv.title ?? "",
      email: cv.email ?? "",
      phone: cv.phone ?? "",
      location: cv.location ?? "",
      summary: cv.summary ?? "",
      skills: Array.isArray(cv.skills) ? cv.skills : [],
      experience: Array.isArray(cv.experience)
        ? cv.experience.map((exp) => ({
            role: exp.role ?? "",
            company: exp.company ?? "",
            period: exp.period ?? "",
            bullets: Array.isArray(exp.bullets) ? exp.bullets : [],
          }))
        : [],
      education,
    },
  };
}

function main() {
  const pages = SOURCE_FILES.flatMap(extractPagesFromFile);
  if (pages.length === 0) {
    throw new Error("No job template pages found for API generation");
  }

  const bySlug = new Map();
  for (const page of pages) {
    bySlug.set(page.slug, page);
  }
  const unique = [...bySlug.values()];

  fs.mkdirSync(DETAILS_DIR, { recursive: true });

  const catalog = {
    version: 1,
    updatedAt: new Date().toISOString(),
    count: unique.length,
    examples: unique.map((page) => ({
      id: page.slug,
      slug: page.slug,
      title: page.h1 ?? page.heroHeadline ?? page.builderLabel ?? page.slug,
      builderLabel: page.builderLabel ?? page.slug,
      previewVariant: page.previewVariant ?? "ats-standard",
      suggestedTemplateHint: "ats",
    })),
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "job-examples.json"),
    JSON.stringify(catalog, null, 2) + "\n",
    "utf8",
  );

  for (const page of unique) {
    const detail = buildApiPayload(page);
    fs.writeFileSync(
      path.join(DETAILS_DIR, `${page.slug}.json`),
      JSON.stringify(detail, null, 2) + "\n",
      "utf8",
    );
  }

  console.log(
    `Generated job-examples API: ${unique.length} examples → public/api/v1/`,
  );
}

main();
