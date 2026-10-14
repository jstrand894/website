// About page: a first-person story told in sections, each with an optional row of figures.
//
// To add a real photo to a placeholder: import the image at the top of this file, then replace the placeholder
// entry ({ note: '...' }) in that figure with { src: myImage, alt: '...' }. Edit captions the same way.
import insectBox1 from '../assets/about/insect-box-1.jpg';
import insectBox2 from '../assets/about/insect-box-2.jpg';
import bromeField from '../assets/research/brome_field.jpg';
import volatiles from '../assets/gallery/volatiles.jpg';
import rhinusa from '../assets/research/rhinusa.jpg';
import exclosure from '../assets/research/exclosure.jpg';
import trailcam from '../assets/research/trailcam.jpg';

// `url` is for files in public/ that must not be re-encoded (animated GIFs); give it a width/height `ratio`.
export interface Photo { src?: ImageMetadata; url?: string; ratio?: number; alt?: string; note?: string }
export interface Figure { caption: string; photos: Photo[] }
export interface Section { id: string; title: string; paragraphs: string[]; figure?: Figure }

export const tagline = 'How a regulatory data analyst ended up chasing bugs across Montana.';

export const story: Section[] = [
  {
    id: 'about-me',
    title: 'About me',
    paragraphs: [
      'Currently, I am a PhD student in Ecology &amp; Environmental Science at Montana State ' +
        'University in Bozeman. I study how insects can be used to manage invasive plants. I am ' +
        'happiest when I am outside, working with insects, and digging into statistics — a ' +
        'combination that took me a few detours to find.',
      'Below is the short version of how I got here.',
    ],
  },
  {
    id: 'wetlands',
    title: 'Mosquitoes and wetlands',
    paragraphs: [
      'At the University of Minnesota, I thought I wanted to be a geneticist. I loved dinosaurs' +
        ' as a kid (still do!), so combining dinosaurs and genetics had an obvious allure. After ' +
        'spending hours pipetting in labs with few windows and little social contact, though, I ' +
        'decided to pivot. As a junior, I switched to a general biology degree with a minor in ' +
        'marine biology. I still wasn’t sure what I wanted my career to be, but at least I was ' +
        'headed in the right direction.',
      'After graduation, I worked for the Metropolitan Mosquito Control District in Oakdale, ' +
        'MN, driving to freshwater sources to look for mosquito larvae and treat them with ' +
        'larvicide. Admittedly, I spent more time hunting for cool places and adding to my insect' +
        ' collection than I did on the job itself.',
    ],
    figure: {
      caption: 'My insect collection from the summer at the Metropolitan Mosquito Control District.',
      photos: [
        { src: insectBox1, alt: 'A wooden display box of pinned insects, including monarch and swallowtail butterflies' },
        { src: insectBox2, alt: 'A second display box of pinned, labeled insects and butterflies' },
      ],
    },
  },
  {
    id: 'cubicle',
    title: 'A cubicle at 3M',
    paragraphs: [
      'After the seasonal job ended, I took a job at 3M (think Scotch tape and Post-it notes) ' +
        'managing their database systems, including a proprietary chemical data management system' +
        ' (CDMS), SAP, and a whole lot of Excel. I stayed three years and came to realize that I ' +
        'did not want a career as a regulatory analyst. I had a biology degree, after all, and ' +
        'this was not what I had dreamed of doing.',
      'Eventually, I decided to change careers and learn more about insects and ecology.',
    ],
  },
  {
    id: 'applying',
    title: 'Applying to graduate school',
    paragraphs: [
      'I started applying to graduate programs in 2020 and 2021, when it seemed everyone else ' +
        'had the same idea. I heard back from about 10% of the positions I applied to, and half ' +
        'of those replies were some version of &ldquo;I received over 100 applicants and I am ' +
        'overwhelmed. Thank you for applying.&rdquo;',
      'Eventually, I caught a break: an email from Dr. David Weaver at Montana State ' +
        'University.',
    ],
  },
  {
    id: 'sawfly',
    title: 'Montana and the wheat stem sawfly',
    paragraphs: [
      'I started a master’s degree with Dr. Weaver in 2021. The project combined my passions: ' +
        'insects, statistics, and the outdoors. I studied the wheat stem sawfly, a pest of wheat,' +
        ' and how smooth brome and native parasitoid wasps shape it. You can learn more in my <a ' +
        'href="/talks">talks and presentations</a> and <a href="/publications">publications</a>.',
    ],
    figure: {
      caption:
        'Wheat fields with smooth brome strips along the road (left) and collecting plant ' +
        'volatiles in the greenhouse (right).',
      photos: [
        { src: bromeField, alt: 'Aerial view of wheat fields with smooth brome strips along a road' },
        { src: volatiles, alt: 'Plant volatile collection chambers in a greenhouse' },
      ],
    },
  },
  {
    id: 'good-guy',
    title: 'Continuing to a PhD',
    paragraphs: [
      'After my master’s, I wanted to keep using insects to solve real-world challenges. In ' +
        '2025, I began a PhD with Dr. Sharlene Sing and Dr. Bob Peterson, studying the biological' +
        ' control of Dalmatian and yellow toadflax, invasive weeds in the American West.',
      'I now study weevils that we raise and release to attack toadflax, and we work to ' +
        'understand how effective and resilient they are across different ecosystems and climate ' +
        'scenarios.',
    ],
    figure: {
      caption:
        'From left to right: the stem-galling weevil <em>Rhinusa pilosa</em>, a ' +
        'herbivore exclosure around a release site, and a trail-camera visitor.',
      photos: [
        { src: rhinusa, alt: 'Rhinusa pilosa weevil' },
        { src: exclosure, alt: 'Herbivore exclosure fence' },
        { src: trailcam, alt: 'Trail camera image of a deer' },
      ],
    },
  },
  {
    id: 'outside',
    title: 'Outside of research',
    paragraphs: [
      'When I am not in the field or at my desk, you will usually find me in the mountains ' +
        'around Bozeman. I spend a lot of time trail running: I’ve completed two 100-mile races, ' +
        'and a 200-miler is scheduled for the summer of 2027. I also help lead the LRES Graduate ' +
        'Student Organization at MSU.',
    ],
  },
];
