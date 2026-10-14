// All CV content lives here. Edit this file to update the CV page.
// Text fields accept inline HTML (<i>, <u>, <a>, <strong>).

export const lastUpdated = 'June 12, 2026';

// The header and summary box at the top of the downloadable PDF (the website does not show these).
export const pdfHeader = {
  name: 'Jackson R. Strand',
  lines: [
    'Montana State University, Bozeman, MT 59717 USA',
    'jackson.strand@student.montana.edu',
    'https://jackson-strand.com \u2022 www.linkedin.com/in/jacksonstrand',
  ],
  summary:
    'Early career professional and PhD student in Ecology & Environmental Sciences at Montana State University, with a background in entomology and agroecology. My work integrates chemical ecology, host-herbivore interactions, and invasive species management, currently focusing on the biological control of yellow and Dalmatian Toadflax. Experienced in volatile analysis, life table studies, and community ecology, with a strong record of publications, presentations, and scientific leadership. More information is available at www.jackson-strand.com',
};

export const education = [
  {
    logo: 'msu',
    degree: 'PhD Ecology & Environmental Science',
    school: 'Montana State University',
    years: '2025 - present',
    notes: ['Graduate Committee: Dr. Robert Peterson (co-chair), Dr. David Weaver (co-chair), Dr. Sharlene Sing, Dr. William Wetzel'],
  },
  {
    logo: 'msu',
    degree: 'MS Entomology',
    school: 'Montana State University',
    years: '2021 - 2024',
    notes: [
      'Graduate Committee: Dr. David Weaver (co-chair), Dr. Tracy Sterling (co-chair), Dr. Robert Peterson',
      'Graduate Certificate in Applied Statistics',
    ],
  },
  {
    logo: 'umn',
    degree: 'BS Biology',
    school: 'University of Minnesota - Twin Cities',
    years: '2013 - 2017',
    notes: ['Minor: Marine Biology'],
  },
];

import { publications as allPublications } from './publications';

export const publications = allPublications.map(({ cite, doi, status }) => ({ cite, doi, status }));

export interface Entry {
  title: string;
  href?: string;
  extra?: string; // e.g. dollar amount, shown after the title
  years: string;
  details?: string[];
  featured?: boolean; // shows a gold star
}

export const awards: Entry[] = [
  { featured: true, title: 'Crawford Wildlife Habitat Graduate Fellowship', href: 'https://www.montana.edu/news/24317/montana-state-university-announces-30-million-endowment-for-crawford-wildlife-habitat-scholarships', extra: '($10,000)', years: '2026', details: ['Montana State University'] },
  { title: 'Lloyd A. Anstutz Agricultural Studies Scholarship', href: 'https://montana.academicworks.com/opportunities/29722', extra: '($950)', years: '2026', details: ['Montana State University'] },
  { title: 'Extreme Biofilms NRT Program SEED Grant', extra: '($1,500)', years: '2025', details: ['<a href="https://tbi.montana.edu/nrt-extreme-biofilms/index.html" target="_blank">Extreme Biofilms NRT</a>, Montana State University'] },
  { title: 'Angus and Anne McMillan Family Agriculture Scholarship', extra: '($1,200)', years: '2025', details: ['Montana State University'] },
  { title: 'Open Access Author Fund', href: 'https://www.lib.montana.edu/services/publication/author-fund/', extra: '($1,736)', years: '2025', details: ['Montana State University Library', 'Funded the publication of <a href="https://doi.org/10.1093/jisesa/ieaf016" target="_blank"><em>Strand et al. 2025</em></a>'] },
  { title: 'NAISMA 2025 Student Scholarship', href: 'https://naisma.org/event/national-forum-on-biological-control-conference/', years: '2025', details: ['National Forum on Biological Control, Annapolis, MD'] },
  { featured: true, title: 'Graduate Land Grant Excellence Award', href: 'https://www.montana.edu/gradschool/excellence_awards.html', years: '2024', details: ['The Graduate School, Montana State University'] },
  { title: 'Open Access Author Fund', href: 'https://www.lib.montana.edu/services/publication/author-fund/', extra: '($3,296)', years: '2023', details: ['Montana State University Library', 'Funded the publication of <a href="https://doi.org/10.1093/jee/toae246" target="_blank"><em>Strand et al. 2024</em></a>'] },
  { featured: true, title: "President's Prize - 2nd Place Speaker", href: 'https://www.entsoc.org/events/annual-meeting/student-competition/winners/2023', years: '2023', details: ['Entomology 2023, National Harbor, MD', 'Entomological Society of America'] },
  { title: 'Student Scholar Travel Award', href: 'https://landresources.montana.edu/grad/gradawards.html', extra: '($500)', years: '2023', details: ['College of Agriculture, Montana State University'] },
  { featured: true, title: '1st Place Speaker', years: '2023', details: ['2023 LRES GSO Student Research Colloquium', 'LRES Graduate Student Organization, Montana State University'] },
  { featured: true, title: 'Montana Grains Foundation Scholarship', href: 'https://www.mgga.org/grainsfoundation/', extra: '($2,500)', years: '2022', details: ['Montana Grain Growers Association'] },
  { title: 'Graduate Professional Advancement Grant', href: 'https://landresources.montana.edu/grad/gradawards.html', extra: '($500)', years: '2022', details: ['The Graduate School, Montana State University'] },
];

export const presentations = [
  {
    heading: 'Invited presentations at scientific meetings',
    items: [
      '<u>Strand JR</u>. 2026. From Release to Persistence: How exclosures may enhance biocontrol success. Montana Weed Control Association Conference. Billings, MT.',
    ],
  },
  {
    heading: 'Contributed presentations at scientific meetings',
    items: [
      'SE Sing, <u>Strand JR</u>, Peterson RKD, Weaver DK. 2025. Understanding Host Preference in <i>Mecinus janthinus</i> and <i>M. janthiniformis</i>: Implications of Hybridization for Effective Biological Control. National Forum on Biological Control Conference. Annapolis, MD.',
      'Strand JR, <u>Sterling TM</u>, Peterson RKD, Weaver DK. 2025. Agroecological Importance of Smooth Brome in Hosting Braconid Parasitoids Associated with the Insect Pest Wheat Stem Sawfly. Annual Meeting of the Western Society of Weed Science. Seattle, WA. (poster)',
      '<u>Strand JR</u>, Peterson RKD, Sterling TM, Weaver DK. 2024. Agroecological importance of smooth brome in managing wheat stem sawfly (Hymenoptera: Cephidae) via its associated braconid parasitoids. Session: Grad Competition, Plant-Insect Ecosystems: IPM – General and Field Crops. Annual Meeting of the Entomological Society of America, Phoenix, AZ.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2024. The role of chemical ecology and agroecological importance of smooth brome in biological control of the wheat stem sawfly by native parasitoids. Masters of Entomology Defense. Montana State University, Bozeman, MT.',
      '<u>Sing SE</u>, Ward SM, Peterson RKD, Strand JR, Friesenhahn E, Holland M, Hubbard CE, Randall CB, Weaver DK. 2024. Biological control of hybrid toadflax: insights from chemical ecology. National Forum on Biological Control Conference. Annapolis, MD.',
      '<u>Strand JR</u>. 2024. How smooth brome and parasitoids can aid in the biological control of wheat stem sawfly. Montana Wheat and Barley Committee - March Madness. Montana State University, Bozeman, MT.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2023. Using organic volatile compounds to assess the relationship between wheat stem sawfly, parasitoids, and smooth brome. Session: Grad Competition, Plant-Insect Ecosystems: Chemical Ecology 2. Annual Meeting of the Entomological Society of America, National Harbor, MD. <strong>Second place in section</strong>.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2023. The importance of smooth brome and parasitoids in wheat stem sawfly biocontrol. 2023 Land Resources and Environmental Sciences Graduate Student Organization Research Colloquium. Montana State University, Bozeman, MT. <strong>First place overall</strong>.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2022. Using organic volatile compounds to assess the relationship between wheat stem sawfly, parasitoids, and smooth brome. Session: Grad Competition, Plant-Insect Ecosystems: Chemical Ecology 1. Annual Meeting of the Entomological Society of America. Vancouver, BC, Canada.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2022. Importance of parasitoids and smooth brome for integrated pest management of wheat stem sawfly. 2022 Land Resources and Environmental Sciences Graduate Student Organization Research Colloquium. Montana State University, Bozeman, MT.',
      '<u>Strand JR</u>, Weaver DK, Sterling TM, Peterson RKD. 2021. Importance of parasitoids and smooth brome for integrated pest management of wheat stem sawfly. Session: Plant Insect-Ecosystems: IPM – General. Annual Meeting of the Entomological Society of America, Denver, CO.',
    ],
  },
  {
    heading: 'Invited seminars',
    items: [
      '<u>Strand JR</u>. Can Bugs Help Us? ENSC 210: Role of Plants in the Environment. Montana State University. Instructor: Will Wetzel. March 2025.',
      '<u>Strand JR</u>. Introduction to Insect Identification and Sampling. BIOB 260: Principals of Biological Diversity. Montana State University. Instructors: Erin Teichroew and Chris Larson. August 2025.',
      '<u>Strand JR</u>. Integrated Pest Management. ENSC 110: Land Resources and Environmental Sciences. Montana State University. Instructor: Frank Dougher. October 2025.',
    ],
  },
  {
    heading: 'Workshops',
    items: [
      'Understanding Wheat Stem Sawfly. 2022 Integrated Pest Management Workshop, "MSU Extension IPM Workshop: Diagnosing Plant Health Problems" Montana State University, Bozeman, MT.',
    ],
  },
];

export interface Course { title: string; code: string; lines: string[] }

export const teaching = [
  {
    heading: 'Instructor of Note',
    courses: [
      { title: 'Integrated Pest Management', code: 'AGSC 401', lines: ['Fall 2026, 3 credits', '25 undergraduates, 10 graduate students', 'Montana State University'] },
    ],
  },
  {
    heading: 'Teaching Assistant',
    courses: [
      { title: 'Integrated Pest Management', code: 'AGSC 401', lines: ['Fall 2025, 3 credits, 25 undergraduates, 10 graduate students', 'Online course taught by Dr. David Weaver', 'Montana State University'] },
      { title: 'Integrated Pest Management', code: 'AGSC 401', lines: ['Fall 2023, 3 credits, 20 undergraduates, 10 graduate students', 'Online course taught by Dr. David Weaver', 'Montana State University'] },
    ],
  },
  {
    heading: 'Invited Guest Lecturer',
    courses: [
      { title: 'Principals of Biological Diversity', code: 'BIOB 260', lines: ['Fall 2026, 5 credits', '"Introduction to Insect Identification and Sampling"', 'Course taught by Dr. Lisa Rew', 'Montana State University'] },
      { title: 'Role of Plants in the Environment', code: 'ENSC 210', lines: ['Spring 2026, 3 credits', '"Insects for Good: Biological Control"', 'Course taught by Dr. Will Wetzel', 'Montana State University'] },
      { title: 'Role of Plants in the Environment', code: 'ENSC 210', lines: ['Spring 2025, 3 credits', '"Can Bugs Help Us?"', 'Course taught by Dr. Will Wetzel', 'Montana State University'] },
      { title: 'Principals of Biological Diversity', code: 'BIOB 260', lines: ['Fall 2025, 5 credits', '"Introduction to Insect Identification and Sampling"', 'Course taught by Erin Teichroew and Chris Larson', 'Montana State University'] },
      { title: 'Land Resources and Environmental Sciences', code: 'ENSC 110', lines: ['Fall 2025, 3 credits', '"Integrated Pest Management"', 'Course taught by Frank Dougher', 'Montana State University'] },
    ],
  },
];

export const service = [
  {
    heading: 'Peer Review Journal Activity',
    items: [
      { title: 'Journal of Environmental Entomology', href: 'https://academic.oup.com/ee', years: '2024 - present' },
      { title: 'Journal of Environmental Toxicology and Chemistry', href: 'https://academic.oup.com/etc', years: '2025 - present' },
    ],
  },
  {
    heading: 'Society Memberships',
    items: [
      { title: 'LRES Graduate Student Organization (Treasurer)', href: 'https://landresources.montana.edu/gso/', years: '2025 - present' },
      { title: 'LRES Graduate Student Organization (Co-chair)', href: 'https://landresources.montana.edu/gso/', years: '2022 - present' },
      { title: 'LRES Graduate Student Organization (Treasurer)', href: 'https://landresources.montana.edu/gso/', years: '2021 - 2022' },
      { title: 'American Association for the Advancement of Science', href: 'https://www.aaas.org', years: '2026 - present' },
      { title: 'Entomological Society of America', href: 'https://entsoc.org', years: '2021 - present' },
      { title: 'Montana Grain Growers Association', href: 'https://mgga.org', years: '2022 - present' },
    ],
  },
  {
    heading: 'Active Community Member Volunteer',
    items: [
      { title: 'Southwest Montana Mountain Bike Association', href: 'https://www.southwestmontanamba.org', years: '2021 - present' },
      { title: 'Gallatin Watershed Council', href: 'https://www.gallatinwatershedcouncil.org', years: '2021 - present' },
      { title: 'Gallatin Valley Land Trust', href: 'https://gvlt.org', years: '2021 - present' },
    ],
  },
];

export const events = {
  heading: 'LRES Graduate Student Organization Annual Symposium',
  items: [
    { title: 'LEPS 2026', role: 'Treasurer', location: 'Montana State University, Bozeman, MT', date: 'April 9, 2026', link: { text: 'LEPS 2026', href: 'https://leps2026.weebly.com' } },
    { title: 'LEPS 2025', role: 'Chair', location: 'Montana State University, Bozeman, MT', date: 'April 7, 2025', link: { text: 'LEPS 2025', href: 'https://leps2025.weebly.com' } },
    { title: '2024 LRES-PSPP Student Research Symposium', role: 'Chair & event emcee', location: 'Montana State University, Bozeman, MT', date: 'April 18, 2024', link: { text: '2024 Symposium', href: 'https://lres-research-symposium.weebly.com/' } },
    { title: '2023 LRES Colloquium', role: 'Treasurer', location: 'Montana State University, Bozeman, MT', date: 'April 13, 2023' },
    { title: '2022 LRES Colloquium', role: 'Treasurer', location: 'Montana State University, Bozeman, MT', date: 'April 29, 2022' },
  ] as { title: string; role: string; location: string; date: string; link?: { text: string; href: string } }[],
};

export const employment = [
  { org: 'Pace Analytical - Onsite at 3M', href: 'https://www.pacelabs.com', role: 'Regulatory IT Analyst', years: '2017 - 2021', place: 'Maplewood, MN', bullets: [
    'Provided digital support between 3M employees and the 3M Chemical Data Management System (CDMS).',
    'Integrated, tested, and supported user and data interface between CDMS and SAP.',
    'Generated, designed, and communicated unique, detailed reports of material information using SQL, Microsoft Excel, and SAP.',
  ] },
  { org: 'Metropolitan Mosquito Control District', href: 'https://mmcd.org', role: 'Seasonal Mosquito Technician', years: '2017', place: 'Oakdale, MN', bullets: [
    'Worked on a team to collect and analyze mosquito larvae samples from wetland areas across the St. Paul metropolitan area.',
    'Independently maintained low adult mosquito populations in Oakdale, MN by surveying and treating both adults and larvae.',
  ] },
  { org: 'Leatherdale Equine Center', href: 'https://vetmed.umn.edu/equine', role: 'Barn Maintenance Crew', years: '2015 - 2017', place: 'St. Paul, MN', bullets: [
    'Maintained healthy conditions for equine patients at the University of Minnesota Horse Veterinary Center and Large Animal Hospital.',
    'Trained and managed new members of the crew.',
  ] },
  { org: 'Minnesota Youth Soccer Association', href: 'https://www.mnyouthsoccer.org', role: 'Youth Soccer Referee', years: '2010 - 2021', place: '', bullets: [] },
];
