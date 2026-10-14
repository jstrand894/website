// Turns the small amount of inline HTML used in the CV data (<u>, <i>, <em>, <strong>, <a>) into LaTeX.

const escapeText = (s: string) =>
  s
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([&%$#_{}])/g, '\\$1')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');

const entities: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ', '&ndash;': '–', '&mdash;': '—' };
const decode = (s: string) => s.replace(/&[a-z#0-9]+;/gi, (m) => entities[m.toLowerCase()] ?? m);

// Straight quotes become curly ones so they match the website.
const curly = (s: string) => s.replace(/"([^"]*)"/g, '“$1”').replace(/'/g, '’');

export function tex(html: string): string {
  let out = '';
  const parts = html.split(/(<\/?[a-z][^>]*>)/gi);
  for (const part of parts) {
    const tag = /^<(\/?)([a-z]+)([^>]*)>$/i.exec(part);
    if (!tag) { out += escapeText(curly(decode(part))); continue; }
    const [, closing, name, attrs] = tag;
    const n = name.toLowerCase();
    if (n === 'u') out += closing ? '}' : '\\uline{';
    else if (n === 'i' || n === 'em') out += closing ? '}' : '\\emph{';
    else if (n === 'strong' || n === 'b') out += closing ? '}' : '\\textbf{';
    else if (n === 'br') out += '\\\\ ';
    else if (n === 'a') {
      if (closing) out += '}';
      else {
        const href = /href="([^"]+)"/i.exec(attrs)?.[1] ?? '';
        out += `\\href{${href.replace(/([%#&])/g, '\\$1')}}{`;
      }
    }
  }
  return out;
}

// Same, for text that must have no markup at all.
export const plain = (html: string) => tex(html.replace(/<[^>]+>/g, ''));
