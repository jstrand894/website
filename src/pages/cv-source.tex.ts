// Builds the LaTeX source of the downloadable CV from the same data the CV page uses (src/data/cv.ts).
// `npm run build` compiles this into docs/JRS_CV.pdf (see scripts/build-cv.mjs) and then removes the .tex file,
// so editing the CV data is all that is needed to update both the web page and the PDF.
import type { APIRoute } from 'astro';
import * as cv from '../data/cv';
import { tex, plain } from '../lib/latex';

const levels: Record<string, string> = { PhD: 'PhD', MS: 'MSc', BS: 'BSc' };

const section = (title: string) => String.raw`\cvsection{${plain(title)}}` + '\n';
const sub = (title: string) => String.raw`\cvsub{${plain(title)}}` + '\n';

const row = (left: string, right: string) => String.raw`\cvrow{${left}}{${right}}` + '\n';
const detail = (lines: string[]) => lines.filter(Boolean).map((l) => String.raw`\cvdetail{${tex(l)}}`).join('\n') + '\n';

function education() {
  let o = section('Education');
  for (const e of cv.education) {
    const [lv, ...rest] = e.degree.split(' ');
    o += String.raw`\begin{tabularx}{\linewidth}{@{}p{2.6em}X@{\hspace{0.8em}}r@{}}` + '\n';
    const rest2 = [tex(rest.join(' ')), ...e.notes.map(tex)].map((l) => String.raw`\hspace{1.2em}${l}`);
    const lines = [String.raw`\textbf{${tex(e.school)}}`, ...rest2].join(String.raw` \newline `);
    o += String.raw`\textbf{${levels[lv] ?? lv}} & ${lines} & ${tex(e.years)} \\` + '\n';
    o += String.raw`\end{tabularx}\vspace{5pt}` + '\n';
  }
  return o;
}

function publications() {
  let o = section('Publications');
  o += String.raw`\begin{cvnum}` + '\n';
  for (const p of cv.publications) {
    let item = tex(p.cite);
    if (p.doi) item += String.raw` DOI: \href{https://doi.org/${p.doi}}{\mbox{${tex(p.doi)}}}`;
    if (p.status) item += ` (${tex(p.status)})`;
    o += String.raw`\item ${item}` + '\n';
  }
  return o + String.raw`\end{cvnum}` + '\n';
}

function awards() {
  let o = section('Honors & Awards');
  for (const a of cv.awards) {
    const title = String.raw`\textbf{${tex(a.title)}}`;
    o += row(title + (a.extra ? ' ' + tex(a.extra) : ''), tex(a.years));
    o += detail(a.details ?? []);
    o += String.raw`\vspace{3pt}` + '\n';
  }
  return o;
}

function presentations() {
  let o = section('Presentations');
  for (const g of cv.presentations) {
    o += sub(g.heading);
    o += String.raw`\begin{cvnum}` + '\n';
    for (const it of g.items) o += String.raw`\item ${tex(it)}` + '\n';
    o += String.raw`\end{cvnum}` + '\n';
  }
  return o;
}

function events() {
  let o = section('Co-hosted Academic Events');
  for (const e of cv.events.items) {
    o += String.raw`\noindent\textbf{${tex(e.title)}.} ${tex(cv.events.heading)}. ${tex(e.date)}. ${tex(e.location)}.\par` + '\n';
    o += String.raw`\begin{cvbul}` + '\n';
    o += String.raw`\item ${tex(e.role)}` + '\n';
    if (e.link) o += String.raw`\item \href{${e.link.href}}{Link to website}` + '\n';
    o += String.raw`\end{cvbul}\vspace{4pt}` + '\n';
  }
  return o;
}

function teaching() {
  let o = section('Teaching');
  for (const g of cv.teaching) {
    o += sub(g.heading);
    for (const c of g.courses) {
      o += String.raw`\noindent\textbf{${tex(c.title)}} (${tex(c.code)})\par` + '\n';
      o += c.lines.map((l) => String.raw`\noindent ${tex(l)}\par`).join('\n') + '\n';
      o += String.raw`\vspace{5pt}` + '\n';
    }
  }
  return o;
}

function service() {
  let o = section('Service');
  for (const g of cv.service) {
    o += sub(g.heading);
    for (const s of g.items) o += row(tex(s.title), tex(s.years));
    o += String.raw`\vspace{4pt}` + '\n';
  }
  return o;
}

function employment() {
  let o = section('Employment History');
  for (const j of cv.employment) {
    o += row(String.raw`\textbf{${tex(j.org)}} -- \emph{${tex(j.role)}}`, tex(j.years));
    if (j.place) o += String.raw`\noindent(${tex(j.place)})\par` + '\n';
    if (j.bullets.length) {
      o += String.raw`\begin{cvbul}` + '\n';
      for (const b of j.bullets) o += String.raw`\item ${tex(b)}` + '\n';
      o += String.raw`\end{cvbul}` + '\n';
    }
    o += String.raw`\vspace{4pt}` + '\n';
  }
  return o;
}

const preamble = String.raw`\documentclass[10pt,letterpaper]{article}
\usepackage[margin=0.95in,top=0.8in,bottom=0.9in]{geometry}
\usepackage{fontspec}
\setmainfont{Georgia}[Numbers=Lining]
\usepackage{tabularx}
\usepackage[normalem]{ulem}
\usepackage[colorlinks=true,urlcolor=blue,linkcolor=blue]{hyperref}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\renewcommand{\arraystretch}{1.1}
\setlength{\emergencystretch}{2em}
\makeatletter
\def\ps@cv{\let\@oddhead\@empty\def\@oddfoot{\hfil\small Jackson Strand -- CV -- Page \thepage\hfil}\let\@evenhead\@empty\let\@evenfoot\@oddfoot}
\makeatother
\pagestyle{cv}
\newcounter{cvnumi}
\newenvironment{cvnum}{\begin{list}{\arabic{cvnumi}.}{\usecounter{cvnumi}\setlength{\leftmargin}{2.2em}\setlength{\labelwidth}{1.6em}\setlength{\labelsep}{0.6em}\setlength{\itemsep}{2pt}\setlength{\topsep}{2pt}\setlength{\parsep}{0pt}}}{\end{list}}
\newenvironment{cvbul}{\begin{list}{\textbullet}{\setlength{\leftmargin}{2.2em}\setlength{\labelwidth}{1em}\setlength{\labelsep}{0.6em}\setlength{\itemsep}{0pt}\setlength{\topsep}{1pt}\setlength{\parsep}{0pt}}}{\end{list}}
\newcommand{\cvsection}[1]{\par\vspace{11pt}{\large\bfseries\MakeUppercase{#1}}\par\vspace{1pt}\hrule height 1.1pt\vspace{6pt}\nopagebreak[4]}
\newcommand{\cvsub}[1]{\par\vspace{3pt}\uline{#1}\par\nopagebreak[4]\vspace{3pt}}
\newcommand{\cvrow}[2]{\noindent\begin{tabularx}{\linewidth}{@{}X@{\hspace{1em}}r@{}}#1 & #2\end{tabularx}\par\vspace{-1pt}}
\newcommand{\cvdetail}[1]{{\leftskip=1.4em\noindent #1\par}}
\hypersetup{pdftitle={Jackson R. Strand - CV},pdfauthor={Jackson R. Strand}}
`;

export const GET: APIRoute = () => {
  const h = cv.pdfHeader;
  const header =
    String.raw`\begin{center}{\LARGE\bfseries ${tex(h.name)}}\\[4pt]` + '\n' +
    h.lines.map((l) => tex(l)).join(String.raw` \\[1pt] `) + String.raw`\end{center}` + '\n' +
    String.raw`\vspace{4pt}\noindent\fbox{\parbox{\dimexpr\linewidth-2\fboxsep-2\fboxrule\relax}{\centering\small ${tex(h.summary)}}}` + '\n';

  const body = [header, education(), publications(), awards(), presentations(), events(), teaching(), service(), employment()].join('\n');
  const doc = `${preamble}\\begin{document}\n${body}\n\\end{document}\n`;
  return new Response(doc, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
