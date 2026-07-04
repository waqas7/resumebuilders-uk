import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");
const required = ["sitemap.xml", "robots.txt", "index.html"];

for (const file of required) {
  const filePath = path.join(outDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing required SEO output: out/${file}`);
    process.exit(1);
  }
}

const sitemap = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
const urlCount = (sitemap.match(/<loc>/g) ?? []).length;

if (urlCount < 40) {
  console.error(`Sitemap looks too small (${urlCount} URLs)`);
  process.exit(1);
}

console.log(`SEO output OK — sitemap has ${urlCount} URLs, robots.txt present`);
