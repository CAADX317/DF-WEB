#!/usr/bin/env node

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_ROOT = path.join(ROOT, "assets", "thumbnails");
const MANIFEST_PATH = path.join(OUTPUT_ROOT, "manifest.json");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".heic"]);
const IGNORE_DIRECTORIES = new Set([".git", "node_modules", "thumbnails"]);
const MAX_WIDTH = 720;
const QUALITY = 76;

function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return { version: 1, files: {} };
  }
}

function walk(directory, results = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(ROOT, absolutePath);

    if (entry.isDirectory()) {
      if (
        IGNORE_DIRECTORIES.has(entry.name) ||
        relativePath === path.join("assets", "thumbnails")
      ) {
        continue;
      }
      walk(absolutePath, results);
      continue;
    }

    if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      results.push(absolutePath);
    }
  }
  return results;
}

function fingerprint(filePath) {
  const stat = fs.statSync(filePath);
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return {
    size: stat.size,
    mtimeMs: Math.round(stat.mtimeMs),
    sha256: hash.digest("hex"),
  };
}

function thumbnailRelativePath(originalRelativePath) {
  return path.join(
    "assets",
    "thumbnails",
    `${originalRelativePath}.webp`
  );
}

async function generateOne(originalPath, outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  await sharp(originalPath, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(outputPath);
}

async function main() {
  const manifest = readManifest();
  const originals = walk(ROOT).sort();
  const nextFiles = {};
  const summary = {
    originals: originals.length,
    generated: 0,
    skipped: 0,
    failed: [],
    originalBytes: 0,
    thumbnailBytes: 0,
  };

  for (const originalPath of originals) {
    const relativePath = path.relative(ROOT, originalPath);
    const outputRelativePath = thumbnailRelativePath(relativePath);
    const outputPath = path.join(ROOT, outputRelativePath);
    const source = fingerprint(originalPath);
    const previous = manifest.files[relativePath];
    summary.originalBytes += source.size;

    const unchanged =
      fs.existsSync(outputPath) &&
      previous &&
      previous.sha256 === source.sha256;

    if (unchanged) {
      summary.skipped += 1;
    } else {
      try {
        await generateOne(originalPath, outputPath);
        summary.generated += 1;
      } catch (error) {
        summary.failed.push({
          file: relativePath,
          error: error.message,
        });
        continue;
      }
    }

    const outputStat = fs.statSync(outputPath);
    summary.thumbnailBytes += outputStat.size;
    nextFiles[relativePath] = {
      ...source,
      thumbnail: outputRelativePath.split(path.sep).join("/"),
      thumbnailBytes: outputStat.size,
    };
  }

  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  fs.writeFileSync(
    MANIFEST_PATH,
    `${JSON.stringify({ version: 1, files: nextFiles }, null, 2)}\n`
  );

  console.log(JSON.stringify(summary, null, 2));
  if (summary.failed.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
