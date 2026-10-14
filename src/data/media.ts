// Media coverage, features and work I have contributed to, newest first.
import mwbc from '../assets/media/mwbc.png';
import fieldNotes from '../assets/media/field_notes.png';
import sawflySolutions from '../assets/media/sawfly_solutions.png';
import studentSuccess from '../assets/media/student_success.png';
import newExplorations from '../assets/media/new_explorations.png';
import locoweed from '../assets/media/locoweed.png';
import brochure from '../assets/media/wss_brochure.png';
import wssSurvey from '../assets/media/wss_survey.png';

export type Kind = 'featured' | 'photography' | 'production';

export const kindLabels: Record<Kind, string> = {
  featured: 'Featured in',
  photography: 'My photography',
  production: 'Video & social',
};

export interface MediaItem {
  date: string;          // ISO, used for sorting and grouping
  display: string;       // shown on the page
  title: string;
  outlet: string;
  kind: Kind;
  role: string;          // short description of what I did
  summary: string;
  href: string;          // main link
  cta: string;           // main button label
  icon?: string;         // icon for the main button
  more?: { label: string; href: string }[];
  image: ImageMetadata;
  imageAlt: string;
}

export const media: MediaItem[] = [
  {
    date: '2025-11-13', display: 'Nov 13, 2025', kind: 'production', role: 'Co-wrote & photographed',
    title: 'Wheat Stem Sawfly IPM social media posts', outlet: 'Montana Wheat and Barley Committee · Facebook',
    summary: 'I co-wrote, and occasionally took the photographs for, these Montana Wheat and Barley Committee posts about wheat stem sawfly and the insects associated with it.',
    href: 'https://www.facebook.com/MTwheatbarley', cta: 'Visit the page', icon: 'fa-brands fa-facebook',
    more: [
      { label: 'Post 1', href: 'https://www.facebook.com/MTwheatbarley/posts/pfbid025jZqYUrau3mGBfbeEt1sH9DAbKXDoSEEV1Cf7zjNtEDwXBBBcVwXxof7mHZGxwVJl' },      { label: 'Post 2', href: 'https://www.facebook.com/MTwheatbarley/posts/pfbid02grzPiDYvioMCcdp4XNexB7Gy7zKgfEidRCtmPvVkMG3u2dbhkLndhraYjcDmGgXsl' },      { label: 'Post 3', href: 'https://www.facebook.com/MTwheatbarley/posts/pfbid0ijSJJguJ2SNtPYahSMeK9zc8MUqHtnJZgdGB3rnuJTJeLyJR1m6m4MaiemQvpJgwl' },      { label: 'Post 4', href: 'https://www.facebook.com/MTwheatbarley/posts/pfbid02L6wzHobfT3dv8r6eyCv3xh5THmucTjiQfmLEMe18HWpsAJWRVah8sHKmC53T13x5l' },      { label: 'Post 5', href: 'https://www.facebook.com/MTwheatbarley/posts/pfbid026FAQHQPWVEMT1ToF2ycxCVh3VDfGz5nhWsWk97bDrULXjzzzAoSBR4rzjGMeMvdBl' }
    ],
    image: mwbc, imageAlt: 'Montana Wheat and Barley Committee logo',
  },
  {
    date: '2025-08-18', display: 'Aug 18, 2025', kind: 'featured', role: 'Featured',
    title: 'Graduate Field Notes: Jackson Strand', outlet: 'Graduate Field Notes · Instagram',
    summary: 'A fellow graduate student at MSU, Ceili DeMarais, made a short video about me and my PhD project.',
    href: 'https://www.instagram.com/reel/DNgazR9SP7G/', cta: 'Watch on Instagram', icon: 'fa-brands fa-instagram',
    image: fieldNotes, imageAlt: 'A weevil on a leaf',
  },
  {
    date: '2025-05-01', display: 'May 1, 2025', kind: 'production', role: 'Photography & videography',
    title: 'Sawfly Solutions: Research Episode', outlet: 'Montana Wheat and Barley Committee · YouTube',
    summary: 'I contributed photography and videography to this episode made by the Montana Wheat and Barley Committee.',
    href: 'https://www.youtube.com/watch?v=huZTLk1JYL0', cta: 'Watch the video', icon: 'fa-brands fa-youtube',
    image: sawflySolutions, imageAlt: 'Sawfly Solutions: Research Episode video cover',
  },
  {
    date: '2025-01-15', display: 'Jan 15, 2025', kind: 'featured', role: 'Featured',
    title: 'Graduate Student Success Stories', outlet: 'Montana State University Graduate School',
    summary: 'I was featured on Montana State University’s Graduate School website.',
    href: 'https://www.montana.edu/gradschool/graduatestudentsuccessstories.html#latest-story', cta: 'Read the story', icon: 'fa-solid fa-arrow-up-right-from-square',
    image: studentSuccess, imageAlt: 'Jackson Strand at a microscope holding a sawfly',
  },
  {
    date: '2025-01-08', display: 'Jan 8, 2025', kind: 'featured', role: 'Featured',
    title: 'Montana State graduate students publish new explorations of wheat stem sawfly management', outlet: 'Montana State University News',
    summary: 'Lochlin and I were featured in an article about our master’s projects at MSU.',
    href: 'https://www.montana.edu/news/24230', cta: 'Read the article', icon: 'fa-solid fa-arrow-up-right-from-square',
    image: newExplorations, imageAlt: 'Hands holding wheat stems',
  },
  {
    date: '2024-12-04', display: 'Dec 4, 2024', kind: 'photography', role: 'My photography',
    title: 'How locoweeds host a fungus that makes them toxic to livestock, but don’t seem to care', outlet: 'MSU Extension · Invasive Plants',
    summary: 'My photography was featured in this article about locoweed.',
    href: 'https://www.montana.edu/extension/invasiveplants/extension/monthly-weed-posts/2024-december-locoweed.html', cta: 'Read the article', icon: 'fa-solid fa-arrow-up-right-from-square',
    image: locoweed, imageAlt: 'A bumble bee on a locoweed flower',
  },
  {
    date: '2024-09-10', display: 'Sep 10, 2024', kind: 'photography', role: 'Cover photography',
    title: 'Wheat Stem Sawfly: Best Management Practices', outlet: 'MSU Extension brochure',
    summary: 'My photography was used on the cover of this MSU Extension brochure on best management practices for wheat stem sawfly.',
    href: 'https://www.researchgate.net/publication/385621614_Wheat_Stem_Sawfly_Best_Management_Practices', cta: 'Get the brochure', icon: 'fa-solid fa-file-pdf',
    image: brochure, imageAlt: 'Cover of the Wheat Stem Sawfly Best Management Practices brochure',
  },
  {
    date: '2024-06-05', display: 'Jun 5, 2024', kind: 'production', role: 'Filmed & produced',
    title: '2023 Multi-State Wheat Stem Sawfly Survey', outlet: 'Montana State University · YouTube',
    summary: 'David, Lochlin, and I made this short instructional video on how to survey a field for wheat stem sawfly damage. I filmed and produced it.',
    href: 'https://youtu.be/yTCnDCONNmA', cta: 'Watch the video', icon: 'fa-brands fa-youtube',
    image: wssSurvey, imageAlt: 'Wheat Stem Sawfly Survey how-to video cover',
  },
];
