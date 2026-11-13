// Generates web-optimised portrait images and the social preview card.
// Usage: npm run images   (source: scripts/portrait-source.png)
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'scripts', 'portrait-source.png');
const out = (f) => path.join(root, 'public', 'images', f);

const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Hero portrait: full frame, 1000px wide
await sharp(src).resize({ width: 1000 }).webp({ quality: 82 }).toFile(out('kanaga-portrait.webp'));
await sharp(src).resize({ width: 1000 }).jpeg({ quality: 82, mozjpeg: true }).toFile(out('kanaga-portrait.jpg'));

// About crop: head & shoulders, tighter frame
const crop = {
  left: Math.round(meta.width * 0.25),
  top: Math.round(meta.height * 0.06),
  width: Math.round(meta.width * 0.56),
  height: Math.round(meta.height * 0.62),
};
await sharp(src).extract(crop).resize({ width: 800 }).webp({ quality: 82 }).toFile(out('kanaga-about.webp'));
await sharp(src).extract(crop).resize({ width: 800 }).jpeg({ quality: 82, mozjpeg: true }).toFile(out('kanaga-about.jpg'));

// Open Graph preview card 1200x630
const portrait = await sharp(src).resize({ height: 630 }).toBuffer();
const pMeta = await sharp(portrait).metadata();
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#FFFFFF"/>
  <rect x="0" y="0" width="14" height="630" fill="#E51B32"/>
  <text x="80" y="150" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="5" fill="#E51B32">PORTFOLIO</text>
  <text x="80" y="245" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#171717">Kanaga</text>
  <text x="80" y="330" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#E51B32">Rethnam</text>
  <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#292929">Financial Technology Graduate</text>
  <text x="80" y="520" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#777777">Digital Banking · Data · Risk · FinTech</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: portrait, left: 1200 - pMeta.width, top: 0 }])
  .jpeg({ quality: 85 })
  .toFile(out('og-image.jpg'));

// Apple touch icon from favicon svg
await sharp(path.join(root, 'public', 'favicon.svg')).resize(180, 180).png().toFile(path.join(root, 'public', 'apple-touch-icon.png'));

console.log('done');
