import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUALITY = 82;

const FOLDERS = [
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/servicesimg'),
];

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  if (fs.existsSync(webpPath)) {
    const origMtime = fs.statSync(filePath).mtime;
    const webpMtime = fs.statSync(webpPath).mtime;
    if (webpMtime >= origMtime) {
      console.log(`  ⏭️  Skipping (already exists): ${path.basename(webpPath)}`);
      return;
    }
  }

  const origSize = fs.statSync(filePath).size;

  try {
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    const saving = ((1 - newSize / origSize) * 100).toFixed(1);
    const origKB = (origSize / 1024).toFixed(0);
    const newKB = (newSize / 1024).toFixed(0);

    console.log(`  ✅ ${path.basename(filePath)} → ${path.basename(webpPath)}`);
    console.log(`     ${origKB} KB → ${newKB} KB  (${saving}% smaller)\n`);
  } catch (err) {
    console.error(`  ❌ Failed: ${path.basename(filePath)} — ${err.message}`);
  }
}

async function processFolder(folderPath) {
  console.log(`\n📁 Processing: ${path.basename(folderPath)}`);
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    await optimizeImage(fullPath);
  }
}

async function main() {
  console.log('🚀 Trivexon Image Optimizer — Converting to WebP...');
  for (const folder of FOLDERS) {
    await processFolder(folder);
  }
  console.log('\n✨ Done! All images optimized and converted to WebP.\n');
}

main().catch(console.error);
