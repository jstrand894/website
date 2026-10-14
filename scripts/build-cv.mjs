// Compiles the CV PDF from the LaTeX source that Astro generates (src/pages/cv-source.tex.ts), then
// puts it where the website links to it (docs/JRS_CV.pdf, plus the old address docs/qmd/cv/JRS_CV_11-14-25.pdf).
// If LaTeX is not installed, the existing PDF is left alone and a warning is printed.
import { existsSync, mkdtempSync, readFileSync, writeFileSync, copyFileSync, rmSync, mkdirSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const out = 'docs';
const src = join(out, 'cv-source.tex');
if (!existsSync(src)) { console.log('[build-cv] no cv-source.tex found; skipping'); process.exit(0); }

const tex = readFileSync(src, 'utf8');
rmSync(src); // the .tex file is only an intermediate; it should not be published

const have = (cmd) => spawnSync('which', [cmd]).status === 0;
if (!have('xelatex')) {
  console.warn('[build-cv] xelatex is not installed, so the CV PDF was NOT regenerated (the previous PDF is kept).');
  process.exit(0);
}

const dir = mkdtempSync(join(tmpdir(), 'cv-'));
writeFileSync(join(dir, 'cv.tex'), tex);
let ok = true;
for (let pass = 0; pass < 2; pass++) { // twice, so page references and links settle
  const r = spawnSync('xelatex', ['-interaction=nonstopmode', '-halt-on-error', 'cv.tex'], { cwd: dir, encoding: 'utf8' });
  if (r.status !== 0) {
    ok = false;
    console.error('[build-cv] LaTeX failed:\n' + (r.stdout ?? '').split('\n').slice(-25).join('\n'));
    break;
  }
}
if (!ok) { console.warn('[build-cv] the previous CV PDF was kept.'); process.exit(0); }

copyFileSync(join(dir, 'cv.pdf'), join(out, 'JRS_CV.pdf'));
if (existsSync(join(out, 'qmd', 'cv'))) copyFileSync(join(dir, 'cv.pdf'), join(out, 'qmd', 'cv', 'JRS_CV_11-14-25.pdf'));
rmSync(dir, { recursive: true, force: true });
console.log('[build-cv] wrote docs/JRS_CV.pdf');
