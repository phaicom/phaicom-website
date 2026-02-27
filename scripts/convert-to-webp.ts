import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "/home/rchunsoi/Documents/personal/phaicom-website/apps/web/public/images";

const supportedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp", ".avif"];

async function processDirectory(dir: string) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
      continue;
    }

    const ext = path.extname(entry).toLowerCase();

    // Skip .webp files
    if (ext === ".webp") continue;

    // Skip unsupported files
    if (!supportedExtensions.includes(ext)) continue;

    const outputPath = path.join(dir, path.parse(entry).name + ".webp");

    try {
      // Convert if webp does not exist
      if (!fs.existsSync(outputPath)) {
        const beforeSize = fs.statSync(fullPath).size;

        await sharp(fullPath)
          .rotate()
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({
            quality: 75,
            effort: 6,
          })
          .toFile(outputPath);

        const afterSize = fs.statSync(outputPath).size;

        console.log(
          `✅ Converted: ${entry} | ${(beforeSize / 1024).toFixed(
            1,
          )}KB → ${(afterSize / 1024).toFixed(1)}KB`,
        );
      }

      // Delete original if webp exists
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(fullPath);
        console.log(`🗑 Deleted original: ${entry}`);
      }
    } catch (err) {
      console.error(`❌ Failed: ${entry}`, err);
    }
  }
}

processDirectory(inputDir)
  .then(() => console.log("\n🚀 All images processed"))
  .catch(console.error);
