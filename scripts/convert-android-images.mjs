/**
 * Converts Android app PNG screenshots to compressed WebP assets.
 * Run: node scripts/convert-android-images.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir =
  process.env.ASSETS_DIR ??
  "C:\\Users\\Omen 16\\.cursor\\projects\\e-resumesiteseo\\assets";

const destDir = path.join(root, "public", "images", "android");

/** Source filename fragment → SEO WebP output name */
const MAP = [
  ["play_feature_graphic-e600cca8", "android-resume-builder-app-hero-templates"],
  ["ss2-beeb6c9f", "android-resume-builder-land-dream-job-hero"],
  ["ss5-233a8816", "android-guided-resume-builder-step-editor"],
  ["ss1-df7d87ec", "android-ats-resume-templates-gallery"],
  ["ss9-3d67e127", "android-live-resume-preview-zoom"],
  ["ss4-2c896f1c", "android-resume-drag-drop-reorder-ui"],
  ["ss7-9d477961", "android-resume-pdf-export-feature"],
  ["ss3-d4e4f1be", "android-manage-resumes-dashboard"],
  ["ss6-4b2d5e73", "android-resume-builder-welcome-dashboard"],
  ["ats_playstore_v2-494713e8", "android-ats-score-checker-app"],
];

async function main() {
  await mkdir(destDir, { recursive: true });
  const { readdir } = await import("node:fs/promises");
  const files = await readdir(srcDir);

  for (const [fragment, name] of MAP) {
    const source = files.find(
      (f) => f.includes(fragment) && f.endsWith(".png")
    );
    if (!source) {
      console.warn(`Missing source for ${name}`);
      continue;
    }

    const input = path.join(srcDir, source);
    const output = path.join(destDir, `${name}.webp`);
    const meta = await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);

    console.log(`✓ ${name}.webp (${meta.width}×${meta.height})`);
  }

  const heroPath = path.join(
    destDir,
    "android-resume-builder-app-hero-templates.webp"
  );
  await sharp(heroPath)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(
      path.join(root, "public", "images", "og-resume-builder-android-app.webp")
    );

  console.log("✓ og-resume-builder-android-app.webp (1200×630)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
