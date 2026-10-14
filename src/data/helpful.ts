// Helpful resources. Add an item to `items` and it appears on the page (and in search) automatically.

import { repos, github } from './code';

export interface Category { id: string; title: string; icon: string; blurb: string }
export interface Item {
  cat: string;
  title: string;
  desc: string;
  href: string;
  by?: string;                       // author / source line
  more?: { label: string; href: string };  // optional second link
  icon?: string;                     // overrides the category icon
}

export const categories: Category[] = [
  { id: 'mycode', title: 'My code & data', icon: 'fa-brands fa-github', blurb: 'Analysis code, data and small tools from my own research.' },
  { id: 'code', title: 'R & statistics', icon: 'fa-solid fa-chart-line', blurb: 'Learning R, making graphs, and working with mixed models.' },
  { id: 'web', title: 'Building a website', icon: 'fa-solid fa-globe', blurb: 'Tutorials and tools for building and hosting your own site.' },
  { id: 'research', title: 'Research tools', icon: 'fa-solid fa-book-open', blurb: 'Version control and reference management.' },
  { id: 'outdoors', title: 'Outdoors', icon: 'fa-solid fa-mountain', blurb: 'Trail conditions, smoke, mushrooms, and Forest Service roads around Montana.' },
  { id: 'other', title: 'Everything else', icon: 'fa-solid fa-lightbulb', blurb: 'A few other things I have found useful.' },
];

export const items: Item[] = [
  // ---- My code & data (built from the repositories listed in code.ts)
  ...repos.map((r): Item => ({
    cat: 'mycode', title: r.title, by: r.tags.join(' · '), desc: r.desc, icon: r.icon, href: `${github}/${r.repo}`,
  })),
  {
    cat: 'mycode', title: 'All repositories', by: 'GitHub', icon: 'fa-brands fa-github',
    desc: 'Everything else I have shared, including code behind other projects.',
    href: github,
  },
  // ---- R & statistics
  {
    cat: 'code', title: 'Guide to Using R', by: 'Jared Adam',
    desc: 'A comprehensive guide for R beginners that streamlines your learning with clear steps and examples.',
    href: 'https://jared-adam-psu.github.io/R-Tutorial-for-Tooker-Lab/',
    more: { label: 'Author’s site', href: 'https://jared-adam.github.io/R-Tutorial/' },
  },
  {
    cat: 'code', title: 'Codecademy: Learn R', by: 'Codecademy',
    desc: 'A free interactive tutorial that starts from the basics and builds your R skills with hands-on practice.',
    href: 'https://www.codecademy.com/learn/learn-r',
  },
  {
    cat: 'code', title: 'R Markdown Documentation', by: 'RStudio',
    desc: 'Create professional reports, PDFs, and Word documents directly from R code. Great for combining code with reports and presentations.',
    href: 'https://rmarkdown.rstudio.com/lesson-1.html',
  },
  {
    cat: 'code', title: 'R Studio Graphing Notes', by: 'Jeff Doser',
    desc: 'A deeper dive into creating visualizations and graphs with R.',
    href: 'https://www.jeffdoser.com/files/for875/_book/',
  },
  {
    cat: 'code', title: 'A Beginner’s Guide to Mixed Effects Models', by: 'meghan.rbind.io',
    desc: 'An approachable introduction to mixed effects models in R.',
    href: 'https://meghan.rbind.io/blog/2022-06-28-a-beginners-guide-to-mixed-effects-models',
  },

  // ---- Building a website
  {
    cat: 'web', title: 'How to Create a Website Using Quarto, RStudio, and GitHub Pages', by: 'YouTube tutorial', icon: 'fa-brands fa-youtube',
    desc: 'A video walkthrough of building a site with RStudio and Quarto, and hosting it on GitHub Pages.',
    href: 'https://youtu.be/YN75YXaLFGM',
  },
  {
    cat: 'web', title: 'Quarto Gallery', by: 'quarto.org',
    desc: 'Examples of different ways to format and design a Quarto website.',
    href: 'https://quarto.org/docs/gallery/',
  },
  {
    cat: 'web', title: 'Quarto: Creating a Website', by: 'quarto.org',
    desc: 'Documentation for the basics, including website navigation, search, and tools.',
    href: 'https://quarto.org/docs/websites/',
  },
  {
    cat: 'web', title: 'Astro: Build Your First Astro Blog', by: 'astro.build',
    desc: 'The official step-by-step tutorial for building a fast, modern website with Astro, the framework this site is built with.',
    href: 'https://docs.astro.build/en/tutorial/0-introduction/',
    more: { label: 'Deploy to GitHub Pages', href: 'https://docs.astro.build/en/guides/deploy/github/' },
  },
  {
    cat: 'web', title: 'Adobe Portfolio', by: 'Adobe',
    desc: 'The service I used to make my photography website.',
    href: 'https://portfolio.adobe.com/sites',
  },

  // ---- Research tools
  {
    cat: 'research', title: 'Introduction to Git and GitHub', by: 'Callum Arnold', icon: 'fa-brands fa-github',
    desc: 'A guide to using Git and GitHub for version control and collaboration.',
    href: 'https://psu-git.callumarnold.com',
  },
  {
    cat: 'research', title: 'Zotero Style Repository', by: 'zotero.org',
    desc: 'A collection of citation styles for Zotero, a free tool for managing references and generating citations.',
    href: 'https://www.zotero.org/styles',
  },

  // ---- Outdoors
  {
    cat: 'outdoors', title: 'How to Check for Snow on the Trail', by: 'Alpenflo',
    desc: 'I use this in the spring to see which trails in the area are potentially snow free.',
    href: 'https://alpenflo.com/journal/how-to-check-for-snow-on-the-trail',
  },
  {
    cat: 'outdoors', title: 'Montana Smoke Forecast', by: 'Montana DEQ', icon: 'fa-solid fa-smog',
    desc: 'How bad the smoke will be and for how long.',
    href: 'https://deq.mt.gov/air/Programs/smokeforecasts',
  },
  {
    cat: 'outdoors', title: 'Fungi Identification Guide', by: 'first-nature.com', icon: 'fa-solid fa-seedling',
    desc: 'It is nearly impossible to ID a mushroom accurately without a spore print, but this helps narrow a specimen down.',
    href: 'https://www.first-nature.com/fungi/~id-guide.php',
  },
  {
    cat: 'outdoors', title: 'Custer Gallatin National Forest Maps', by: 'US Forest Service', icon: 'fa-solid fa-map',
    desc: 'Download Motorized Vehicle Use Maps (MVUMs) that show when roads open in the spring and close in the fall.',
    href: 'http://www.fs.usda.gov/r01/custergallatin/maps-guides',
    more: { label: 'Bridgers & Bangtail map (PDF)', href: 'https://www.fs.usda.gov/sites/nfs/files/r01/custergallatin/publication/BridgersCraziesMVUMBack_Bridgers_2025.pdf' },
  },

  // ---- Everything else
  {
    cat: 'other', title: 'Conscious Spending Plan', by: 'I Will Teach You To Be Rich', icon: 'fa-solid fa-wallet',
    desc: 'A guide to building a personal financial plan that prioritizes essential spending and savings.',
    href: 'https://www.iwillteachyoutoberich.com/c-conscious-spending-plan/',
  },
  {
    cat: 'other', title: 'Gallatin Watershed Volunteering Video', by: 'YouTube', icon: 'fa-brands fa-youtube',
    desc: 'Grace and I volunteered at a park near our house to plant trees. You can see us in the back of the video at 0:43!',
    href: 'https://youtu.be/65MAB0qRtAE',
    more: { label: 'Jump to 0:43', href: 'https://youtu.be/65MAB0qRtAE?t=42' },
  },
  {
    cat: 'other', title: 'YouTube Converter', by: 'zeemo.ai', icon: 'fa-solid fa-film',
    desc: 'Turn YouTube videos into MP4 files that you can send to your friends.',
    href: 'https://zeemo.ai/tools/youtube-converter',
  },
];
