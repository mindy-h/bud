#!/usr/bin/env node
/**
 * One-time image optimization script.
 * Converts PNGs to WebP and optimizes SVGs in src/assets/.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { optimize } from 'svgo';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ASSETS_DIR = resolve(__dirname, '..', 'src', 'assets');

// WebP quality — 80 is a good balance of quality/size for photos
const WEBP_QUALITY = 80;

// Responsive widths for srcset images
const SRCSET_IMAGES = {
  'FOA.png': [400, 800],
  'mlb.png': [400, 800],
  'icons.png': [400, 800],
  'merch.png': [400, 800],
};

async function convertPngToWebP() {
  const files = await readdir(ASSETS_DIR);
  const pngs = files.filter((f) => extname(f).toLowerCase() === '.png');

  console.log(`\nConverting ${pngs.length} PNGs to WebP...\n`);

  for (const png of pngs) {
    const inputPath = join(ASSETS_DIR, png);
    const name = basename(png, extname(png));
    const outputPath = join(ASSETS_DIR, `${name}.webp`);

    const before = (await stat(inputPath)).size;
    await sharp(inputPath).webp({ quality: WEBP_QUALITY }).toFile(outputPath);
    const after = (await stat(outputPath)).size;

    const savings = ((1 - after / before) * 100).toFixed(1);
    console.log(
      `  ${png} (${fmtSize(before)}) → ${name}.webp (${fmtSize(after)}) — ${savings}% smaller`
    );

    // Generate srcset variants if configured
    if (SRCSET_IMAGES[png]) {
      const metadata = await sharp(inputPath).metadata();
      for (const width of SRCSET_IMAGES[png]) {
        if (width < metadata.width) {
          const srcsetPath = join(ASSETS_DIR, `${name}-${width}w.webp`);
          await sharp(inputPath)
            .resize(width)
            .webp({ quality: WEBP_QUALITY })
            .toFile(srcsetPath);
          const srcsetSize = (await stat(srcsetPath)).size;
          console.log(`    ↳ ${name}-${width}w.webp (${fmtSize(srcsetSize)})`);
        }
      }
    }
  }
}

async function optimizeSvgs() {
  const files = await readdir(ASSETS_DIR);
  const svgs = files.filter((f) => extname(f).toLowerCase() === '.svg');

  console.log(`\nOptimizing ${svgs.length} SVGs...\n`);

  for (const svg of svgs) {
    const inputPath = join(ASSETS_DIR, svg);
    const before = (await stat(inputPath)).size;
    const input = await readFile(inputPath, 'utf8');

    // hero_img.svg is 2.7MB — likely contains embedded raster data.
    // Convert it to WebP instead of trying to optimize as SVG.
    if (svg === 'hero_img.svg' && before > 500_000) {
      console.log(
        `  ${svg} (${fmtSize(before)}) — very large, converting to WebP...`
      );
      const webpPath = join(ASSETS_DIR, 'hero_img.webp');
      await sharp(Buffer.from(input))
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      const after = (await stat(webpPath)).size;
      console.log(`    ↳ hero_img.webp (${fmtSize(after)})`);
      continue;
    }

    const result = optimize(input, {
      path: inputPath,
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        'removeDimensions',
      ],
    });

    await writeFile(inputPath, result.data, 'utf8');
    const after = (await stat(inputPath)).size;
    const savings = ((1 - after / before) * 100).toFixed(1);
    console.log(
      `  ${svg} (${fmtSize(before)}) → (${fmtSize(after)}) — ${savings}% smaller`
    );
  }
}

function fmtSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function main() {
  console.log('=== Budnew Image Optimization ===');
  console.log(`Assets directory: ${ASSETS_DIR}`);

  await convertPngToWebP();
  await optimizeSvgs();

  console.log('\nDone! WebP files created alongside originals.');
  console.log('Update component imports to use .webp files.');
}

main().catch(console.error);
