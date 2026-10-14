// Talks & presentations, newest first. Text fields accept inline HTML (<em>).
import esa21 from '../assets/talks/esa21.png';
import esa22 from '../assets/talks/esa22.jpg';
import esa23 from '../assets/talks/esa23.jpg';
import esa24 from '../assets/talks/esa24.jpg';
import lres22 from '../assets/talks/lres22.png';
import lres23 from '../assets/talks/lres23.jpg';
import mwbc from '../assets/talks/mwbc.png';
import nfbc25 from '../assets/talks/nfbc25.png';
import defense from '../assets/talks/defense.png';

export type Category = 'conference' | 'lecture' | 'campus';

export interface Talk {
  year: number;
  date: string;            // display text, e.g. "Nov 11, 2024" or "2025"
  title: string;
  event: string;
  location: string;
  category: Category;
  format?: string;         // e.g. "Invited talk", "Poster", "Oral presentation"
  award?: string;          // e.g. "1st place · oral presentation"
  note?: string;           // e.g. "Presented by S.E. Sing"
  summary?: string;
  slides?: string;         // link to slides
  image?: ImageMetadata;
  imageAlt?: string;
  imageCaption?: string;
}

export const categoryLabels: Record<Category, string> = {
  conference: 'Conferences',
  lecture: 'Guest lectures & workshops',
  campus: 'Campus & defense',
};

export const defenseVideo = {
  id: 'P30QPadkdZE',
  poster: defense,
  title: 'Master’s Thesis Defense',
  date: 'Aug 19, 2024',
  heading: 'The Role of Chemical Ecology and Agroecological Importance of Smooth Brome in Biological Control of the Wheat Stem Sawfly by Native Parasitoids',
  text: 'I successfully defended my Master’s thesis at Montana State University on August 19, 2024. My research focused on the agroecological role of smooth brome (<em>Bromus inermis</em>) in supporting native parasitoids of the wheat stem sawfly (<em>Cephus cinctus</em>), with a particular emphasis on agro- and chemical ecology.',
  slides: 'https://1drv.ms/p/c/af438b0dd68ebd20/ESdYofrjdrBFhGr6sogRo40B_yUkKuJewVN1OVJWuha-_g?e=yls71e',
};

export const talks: Talk[] = [
  {
    year: 2026, date: 'Fall 2026', category: 'lecture', format: 'Guest lecture',
    title: 'Introduction to Insect Identification and Sampling',
    event: 'BIOB 260: Principals of Biological Diversity', location: 'Montana State University',
    note: 'Instructor: Dr. Lisa Rew',
  },
  {
    year: 2026, date: '2026', category: 'conference', format: 'Invited talk',
    title: 'From Release to Persistence: How exclosures may enhance biocontrol success',
    event: 'Montana Weed Control Association Conference', location: 'Billings, MT',
  },
  {
    year: 2025, date: 'Oct 2025', category: 'lecture', format: 'Guest lecture',
    title: 'Integrated Pest Management',
    event: 'ENSC 110: Land Resources and Environmental Sciences', location: 'Montana State University',
    note: 'Instructor: Frank Dougher',
  },
  {
    year: 2025, date: 'Aug 2025', category: 'lecture', format: 'Guest lecture',
    title: 'Introduction to Insect Identification and Sampling',
    event: 'BIOB 260: Principals of Biological Diversity', location: 'Montana State University',
    note: 'Instructors: Erin Teichroew and Chris Larson',
  },
  {
    year: 2025, date: 'Apr 15, 2025', category: 'conference', format: 'Contributed talk',
    title: 'Understanding Host Preference in <em>Mecinus janthinus</em> and <em>M. janthiniformis</em>: Implications of Hybridization for Effective Biological Control',
    event: 'National Forum on Biological Control', location: 'Annapolis, MD',
    summary: 'Behavioral differences between <em>Mecinus janthinus</em> and <em>M. janthiniformis</em>, focusing on hybridization and its implications for sustainable biological control of yellow and Dalmatian toadflax.',
    slides: 'https://montanaedu-my.sharepoint.com/:p:/g/personal/n47c392_student_montana_edu/Ebdqa-cWMU9KlW0wgJrp3BEBECdytJ8hjGeq1T1jraNU5g?e=g12gIO',
    image: nfbc25, imageAlt: 'National Forum on Biological Control',
  },
  {
    year: 2025, date: 'Mar 2025', category: 'lecture', format: 'Guest lecture',
    title: 'Can Bugs Help Us?',
    event: 'ENSC 210: Role of Plants in the Environment', location: 'Montana State University',
    note: 'Instructor: Will Wetzel',
  },
  {
    year: 2025, date: '2025', category: 'conference', format: 'Poster',
    title: 'Agroecological Importance of Smooth Brome in Hosting Braconid Parasitoids Associated with the Insect Pest Wheat Stem Sawfly',
    event: 'Annual Meeting of the Western Society of Weed Science', location: 'Seattle, WA',
    note: 'Presented by T.M. Sterling',
  },
  {
    year: 2024, date: 'Nov 11, 2024', category: 'conference', format: 'Contributed talk',
    title: 'Agroecological importance of smooth brome in managing wheat stem sawfly (Hymenoptera: Cephidae) via its associated braconid parasitoids',
    event: 'Entomology 2024 · Entomological Society of America', location: 'Phoenix, AZ',
    summary: 'The role of smooth brome in enhancing biological control of wheat stem sawfly through its support of native braconid parasitoid populations, and the potential for non-crop vegetation in agroecological management.',
    slides: 'https://1drv.ms/p/c/af438b0dd68ebd20/EUz2MOL0_oFEgyw8SiSMvKcBjsqJ1-Flz8-U3xT4nCa3Wg?e=wmRNfc',
    image: esa24, imageAlt: 'Standing in front of the Entomology 2024 sign', imageCaption: 'Me at Entomology 2024',
  },
  {
    year: 2024, date: 'Aug 19, 2024', category: 'campus', format: 'Thesis defense',
    title: 'Master’s Thesis Defense', event: 'Montana State University', location: 'Bozeman, MT',
    summary: 'Video recording and slides available above.',
  },
  {
    year: 2024, date: 'Apr 2024', category: 'conference', format: 'Contributed talk',
    title: 'Biological control of hybrid toadflax: insights from chemical ecology',
    event: 'National Forum on Biological Control', location: 'Annapolis, MD',
    note: 'Presented by S.E. Sing',
  },
  {
    year: 2024, date: 'Mar 18, 2024', category: 'conference', format: 'Invited talk',
    title: 'How smooth brome and parasitoids can aid in the biological control of wheat stem sawfly',
    event: 'Montana Wheat and Barley Committee · March Madness', location: 'Bozeman, MT',
    image: mwbc, imageAlt: 'MWBC March Madness logo',
  },
  {
    year: 2023, date: 'Nov 16, 2023', category: 'conference', format: 'Contributed talk', award: '2nd place · student competition',
    title: 'Using organic volatile compounds to assess the relationship between wheat stem sawfly, parasitoids, and smooth brome',
    event: 'Entomology 2023 · Entomological Society of America', location: 'National Harbor, MD',
    summary: 'Extended my earlier work on wheat stem sawfly–parasitoid–grass interactions, using organic volatile compounds to infer ecological relationships. Awarded 2nd place in the ESA Student Competition.',
    slides: 'https://1drv.ms/p/c/af438b0dd68ebd20/EfQSDfaEiQZPtHhu7CZGbPsB6pH3zyTXF7ZyWRgOnfN75Q?e=f08zBL',
    image: esa23, imageAlt: 'Holding the 2nd place ribbon at Entomology 2023', imageCaption: 'Accepting my 2nd place award!',
  },
  {
    year: 2023, date: 'Apr 2023', category: 'campus', format: 'Oral presentation', award: '1st place · oral presentation',
    title: 'The importance of smooth brome and parasitoids in wheat stem sawfly biocontrol',
    event: 'LRES Student Research Symposium', location: 'Bozeman, MT',
    summary: 'How organic volatile compounds mediate interactions between wheat stem sawfly, its braconid parasitoids, and smooth brome. Received 1st place in the oral presentation competition.',
    slides: 'https://montanaedu-my.sharepoint.com/:p:/g/personal/n47c392_student_montana_edu/Edk6U_4zOEJFtMyMobN8ne4BRcpMLDubRD428Xtc30PvSA?e=KjQbQ6',
    image: lres23, imageAlt: '2023 LRES Symposium winners', imageCaption: '2023 LRES Symposium winners!',
  },
  {
    year: 2022, date: 'Nov 14, 2022', category: 'conference', format: 'Contributed talk',
    title: 'Using organic volatile compounds to assess the relationship between wheat stem sawfly, parasitoids, and smooth brome',
    event: 'Entomology 2022 · Entomological Society of America', location: 'Vancouver, BC, Canada',
    summary: 'How organic volatile compounds can be used to understand ecological interactions among the wheat stem sawfly, its parasitoids, and the non-crop grass smooth brome.',
    slides: 'https://1drv.ms/p/c/af438b0dd68ebd20/Ecqdpf1L2EJOlGS40sLaNWUBQ9pNNvzJ99kY1XiXWbwavQ?e=oAfYTw',
    image: esa22, imageAlt: 'Vancouver harbor',
  },
  {
    year: 2022, date: 'Apr 29, 2022', category: 'campus', format: 'Oral presentation',
    title: 'Importance of parasitoids and smooth brome for integrated pest management of wheat stem sawfly',
    event: 'LRES Graduate Student Organization Colloquium', location: 'Bozeman, MT',
    summary: 'How smooth brome influences parasitoid communities and their effectiveness in the integrated pest management of wheat stem sawfly.',
    image: lres22, imageAlt: '2022 LRES Student Research Colloquium title slide',
  },
  {
    year: 2022, date: '2022', category: 'lecture', format: 'Workshop',
    title: 'Understanding Wheat Stem Sawfly',
    event: '2022 IPM Workshop · MSU Extension: Diagnosing Plant Health Problems', location: 'Bozeman, MT',
  },
  {
    year: 2021, date: 'Nov 2, 2021', category: 'conference', format: 'Contributed talk',
    title: 'Importance of parasitoids and smooth brome for integrated pest management of wheat stem sawfly',
    event: 'Entomology 2021 · Entomological Society of America', location: 'Denver, CO',
    summary: 'How two native braconid parasitoids use wheat stem sawfly larvae in both winter wheat and smooth brome, highlighting the role of non-crop habitats in biological control.',
    slides: 'https://1drv.ms/p/c/af438b0dd68ebd20/ETvd4pwl0OBDl0zF4FXmhTsBZgVGmeP6_ZjlAdTAWLg6aQ?e=6tzAhk',
    image: esa21, imageAlt: 'Entomology 2021 logo',
  },
];
