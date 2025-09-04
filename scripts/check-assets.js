// Simple asset import existence check to avoid production crashes due to missing files.
// Scans src/assets/icons/index.js and validates each import path exists on disk.
// Exits non-zero if any import is missing so Vercel fails fast with a clear message.

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import url from 'node:url';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const iconsIndex = resolve(projectRoot, 'src', 'assets', 'icons', 'index.js');

function main() {
  let src;
  try {
    src = readFileSync(iconsIndex, 'utf8');
  } catch (e) {
    console.error('[asset-check] Could not read', iconsIndex);
    console.error(e?.message || e);
    process.exit(1);
  }

  // Match statements like: import name from './file.ext' or "./file.ext"
  const importRegex = /import\s+[^'"\n]+from\s+['"](\.\/.+?)['"];?/g;
  const baseDir = dirname(iconsIndex);
  const missing = [];
  let m;
  while ((m = importRegex.exec(src)) !== null) {
    const rel = m[1];
    const abs = resolve(baseDir, rel);
    if (!existsSync(abs)) {
      missing.push({ import: rel, resolved: abs });
    }
  }

  if (missing.length) {
    console.error('\n[asset-check] Missing assets referenced in src/assets/icons/index.js:');
    for (const item of missing) {
      console.error(` - ${item.import} -> ${item.resolved}`);
    }
    console.error('\nPlease add the missing files or update the imports.');
    process.exit(2);
  }

  console.log('[asset-check] OK – all icon imports resolve.');
}

main();
