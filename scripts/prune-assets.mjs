// After a build, delete files in docs/_astro that no page, stylesheet or script refers to.
// Astro leaves full-size originals of photos there even when only resized copies are used, which makes the
// deployed site (and the repository) many megabytes larger than it needs to be.
import { readdirSync, readFileSync, statSync, rmSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const out = 'docs';
const textExt = new Set(['.html', '.css', '.js', '.mjs', '.json', '.xml', '.svg', '.webmanifest']);

const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const files = walk(out);
const haystack = files.filter((f) => textExt.has(extname(f))).map((f) => readFileSync(f, 'utf8')).join('\n');
const dec = (s) => { try { return decodeURIComponent(s); } catch { return s; } };

let removed = 0, bytes = 0;
for (const f of files.filter((f) => f.startsWith(join(out, '_astro') + '/'))) {
  const name = basename(f);
  if (haystack.includes(name) || haystack.includes(encodeURIComponent(name)) || dec(haystack).includes(name)) continue;
  bytes += statSync(f).size; removed++;
  rmSync(f);
}
console.log(`[prune-assets] removed ${removed} unused files (${(bytes / 1048576).toFixed(1)} MB)`);
