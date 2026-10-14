export const nav = [
  { text: 'About', href: '/about' },
  { text: 'CV', href: '/cv' },
  // `also` lists pages reached from the Research overview cards, so the Research link stays highlighted on them.
  { text: 'Research', href: '/research', also: ['/field-sites', '/publications', '/talks'] },
  {
    text: 'Data & Code',
    items: [
      { text: 'Code & Tutorials', href: '/code' },
    ],
  },
  { text: 'Teaching', href: '/teaching-philosophy' },
  { text: 'Media', href: '/media' },
  { text: 'Resources', href: '/helpful-resources' },
];

// The email address is never written into the page as plain text. It is stored here reversed, and a small
// script (in layouts/Base.astro) turns it back into a working mailto: link in the browser. To change it,
// edit the two parts below.
const [emailUser, emailDomain] = ['jstrand894', 'gmail.com'];
export const emailScrambled = [...`${emailUser}@${emailDomain}`].reverse().join('');

export const socials: { icon: string; text: string; href: string; solid?: boolean; mail?: boolean }[] = [
  { icon: 'fa-linkedin', text: 'LinkedIn', href: 'https://linkedin.com/in/jacksonstrand' },
  { icon: 'fa-envelope', text: 'Email', href: '#', mail: true, solid: true },
  { icon: 'fa-github', text: 'GitHub', href: 'https://github.com/jstrand894/' },
  { icon: 'fa-google', text: 'Google Scholar', href: 'https://scholar.google.com/citations?user=_szV1hYAAAAJ&hl=en' },
  { icon: 'fa-book', text: 'ResearchGate', href: 'https://www.researchgate.net/profile/Jackson-Strand', solid: true },
];
