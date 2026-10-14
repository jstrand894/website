// Content for the Research Overview page. Text fields accept inline HTML (<em>, <a>, <strong>).
import banner from '../assets/research/banner.jpg';
import rhinusa from '../assets/research/rhinusa.jpg';
import exclosure from '../assets/research/exclosure.jpg';
import trailcam from '../assets/research/trailcam.jpg';
import bromeField from '../assets/research/brome_field.jpg';
import usfs from '../assets/research/logo_usfs.png';
import mtnwtf from '../assets/research/logo_mtnwtf.png';
import msu from '../assets/research/logo_msu.png';
import cabi from '../assets/research/logo_cabi.png';
import mwbc from '../assets/research/logo_mwbc.png';
import usda from '../assets/research/logo_usda.png';
import nifa from '../assets/research/logo_nifa.png';

export const banner_image = banner;

export const intro =
  'As agricultural expansion and invasive species reshape the Northern Great Plains, the ecological relationships between plants, insects, and their natural enemies are undergoing profound shifts. My research investigates how biological control agents interact with host plants and their environments to suppress pest populations and restore ecological balance. From wheat-dominated agroecosystems to rangeland invasions, I explore how chemical signaling, habitat structure, and multi-species interactions can be leveraged to enhance biocontrol efficacy and support resilient landscapes.';

export const themes = [
  { icon: 'fa-solid fa-bug', label: 'Biological control' },
  { icon: 'fa-solid fa-flask', label: 'Chemical ecology' },
  { icon: 'fa-solid fa-seedling', label: 'Plant–insect interactions' },
  { icon: 'fa-solid fa-tree', label: 'Invasive species' },
  { icon: 'fa-solid fa-wheat-awn', label: 'Integrated pest management' },
];

export interface Logo { src: ImageMetadata; alt: string }

export const projects = [
  {
    id: 'masters',
    stackBeside: false,
    kind: 'Master’s Thesis',
    status: 'Completed 2024',
    short: 'Master’s · Smooth brome',
    period: '2021 – 2024',
    degree: 'MS, Entomology',
    glance: [
      { icon: 'fa-solid fa-wheat-awn', label: 'System', value: 'Wheat stem sawfly, its <em>Bracon</em> parasitoids, and smooth brome' },
      { icon: 'fa-solid fa-flask', label: 'Methods', value: 'Chemical ecology, behavioral assays, field surveys' },
      { icon: 'fa-solid fa-location-dot', label: 'Where', value: 'Central and northern Montana' },
    ],
    title: 'Chemical Ecology and Agroecological Importance of Smooth Brome in Biological Control of Wheat Stem Sawfly',
    advisor: { name: 'Dr. David Weaver', href: 'https://landresources.montana.edu/directory/faculty/1524725/david-weaver' },
    logos: [
      { src: msu, alt: 'Montana State University' },
      { src: mwbc, alt: 'Montana Wheat and Barley Committee' },
      { src: usda, alt: 'U.S. Department of Agriculture' },
      { src: nifa, alt: 'USDA National Institute of Food and Agriculture' },
    ] as Logo[],
    images: [
      { src: bromeField, alt: 'Aerial view of wheat fields with smooth brome strips along a road', caption: 'Aerial view of wheat fields with smooth brome strips along the road' },
    ],
    paragraphs: [
      'My Master’s thesis with <a href="https://landresources.montana.edu/directory/faculty/1524725/david-weaver" target="_blank" rel="noopener">Dr. David Weaver</a> at Montana State University combined chemical ecology, behavioral assays, and field surveys to investigate how volatile organic compounds (VOCs) emitted by wheat stem sawfly–infested smooth brome influence parasitoid attraction. Using electroantennography and gas chromatography, we found that smooth brome under sawfly attack emitted elevated levels of key volatiles — (<em>Z</em>)-3-hexenyl acetate, 6-methyl-5-hepten-2-one, and (<em>E</em>)-2-hexenal — that elicited strong antennal and behavioral responses from both <em>Bracon</em> parasitoid species.',
      'In controlled olfactometer and wind tunnel trials, parasitoids consistently preferred volatile blends from infested smooth brome over those from infested wheat. Field surveys across central and northern Montana revealed that smooth brome adjacent to wheat fields had comparable sawfly infestation rates but significantly lower larval survival. Moreover, parasitism rates in smooth brome were consistently higher, especially in fall-collected stems, suggesting that this grass provides a valuable seasonal refuge for parasitoids.',
    ],
    subprojectsHeading: '',
    subprojects: [],
    photos: [],
    findings: [
      { icon: 'fa-solid fa-bug-slash', value: '43.6%', label: 'greater sawfly larval mortality in smooth brome than in adjacent wheat' },
      { icon: 'fa-solid fa-flask', value: '3', label: 'key volatiles that drew strong responses from both <em>Bracon</em> parasitoid species' },
      { icon: 'fa-solid fa-hourglass-half', value: '5.7%', label: 'end-of-year sawfly survival in smooth brome in caged trials' },
    ],
    why: [
      'In an era of declining pesticide efficacy and increasing resistance, biological control remains one of the most sustainable tools in integrated pest management. By demonstrating that smooth brome can enhance parasitoid populations and reduce pest survival, this research reframes the role of a commonly maligned grass species. Rather than viewing smooth brome solely as an invasive threat, we propose its strategic conservation and placement as a functional component of agroecosystems — especially in landscapes where wheat and native parasitoids co-occur.',
    ],
    pubs: [
      { cite: '<strong>Strand JR</strong>, Peterson RKD, Sterling TM, Weaver DK. 2025. Sensory and behavioral responses of braconid parasitoids to changes in volatile emissions induced by wheat stem sawfly larval feeding in winter wheat and smooth brome. <em>Journal of Insect Science</em>.', doi: '10.1093/jisesa/ieaf016' },
      { cite: '<strong>Strand JR</strong>, Peterson RKD, Sterling TM, Weaver DK. 2024. Agroecological importance of smooth brome in managing wheat stem sawfly via associated braconid parasitoids. <em>Journal of Economic Entomology</em>. 117(6): 2344–2354.', doi: '10.1093/jee/toae246' },
    ],
  },
  {
    id: 'phd',
    stackBeside: true,   // sub-projects sit under the text and all photos stack in the right column
    kind: 'PhD Research',
    status: 'Current',
    short: 'PhD · Toadflax',
    period: '2025 – present',
    degree: 'PhD, Ecology & Environmental Science',
    glance: [
      { icon: 'fa-solid fa-seedling', label: 'Target weeds', value: 'Yellow and Dalmatian toadflax' },
      { icon: 'fa-solid fa-bug', label: 'Biocontrol agents', value: '<em>Rhinusa pilosa</em>, <em>Mecinus janthinus</em>, <em>M. janthiniformis</em>' },
      { icon: 'fa-solid fa-location-dot', label: 'Where', value: 'Montana and South Dakota' },
    ],
    title: 'Biological Control of Yellow and Dalmatian Toadflax in Montana and South Dakota',
    advisor: { name: 'Dr. Robert Peterson', href: 'https://www.montana.edu/rkdpeterson/' },
    logos: [
      { src: usfs, alt: 'U.S. Forest Service' },
      { src: mtnwtf, alt: 'Montana Noxious Weed Trust Fund' },
      { src: msu, alt: 'Montana State University' },
      { src: cabi, alt: 'CABI (Centre for Agriculture and Bioscience International)' },
    ] as Logo[],
    images: [{ src: rhinusa, alt: 'Rhinusa pilosa weevil', caption: '<em>Rhinusa pilosa</em>, a stem-galling weevil released against yellow toadflax' }],
    paragraphs: [
      'My current project with <a href="https://www.montana.edu/rkdpeterson/" target="_blank" rel="noopener">Dr. Robert Peterson</a> at Montana State University investigates the establishment of the biological control agents <em>Rhinusa pilosa</em> and the two sister species <em>Mecinus janthinus</em> and <em>Mecinus janthiniformis</em> and their ability to suppress populations of yellow toadflax (<em>Linaria vulgaris</em>) and Dalmatian toadflax (<em>Linaria dalmatica</em>) in Montana and South Dakota. I study how these insects respond to chemical cues from their host plants and how these interactions are impacted by large ungulate herbivores, parasitism, and temperature extremes.',
    ],
    subprojectsHeading: 'Four interconnected projects',
    subprojects: [
      { icon: 'fa-solid fa-seedling', title: 'Establishment of <em>Rhinusa pilosa</em>', text: 'Assessing survival, dispersal, and impact on plant density at release sites to see how well it controls yellow toadflax.' },
      { icon: 'fa-solid fa-cow', title: 'Large herbivore impacts', text: 'Building herbivore exclusion fences around release sites and monitoring herbivore activity in adjacent control areas.' },
      { icon: 'fa-solid fa-leaf', title: 'Comparative plant stress', text: 'Measuring plant health and chemical emissions to determine how <em>Rhinusa pilosa</em> and <em>Mecinus janthinus</em> affect yellow toadflax individually and together.' },
      { icon: 'fa-solid fa-chart-line', title: 'Life table analyses', text: 'Quantifying mortality and performance of <em>Mecinus janthinus</em> and <em>M. janthiniformis</em> in the field, including effects of parasitoids, temperature extremes, and other environmental factors.' },
    ],
    photos: [
      { src: exclosure, alt: 'Herbivore exclosure fence', caption: 'A herbivore exclosure around a release site' },
      { src: trailcam, alt: 'Trail camera image of a deer', caption: 'Trail-camera monitoring of large herbivore activity' },
    ],
    why: [
      'Invasive toadflax species can severely impact rangeland and cropland ecosystems. Biological control offers a sustainable alternative to chemical herbicides, reducing non-target impacts and supporting ecological balance. By elucidating host-specific behaviors, chemical cues, and multi-agent interactions, this research informs strategic releases and conservation of biocontrol agents to maximize suppression of toadflax populations.',
    ],
    findings: [] as { icon: string; value: string; label: string }[],
    pubs: [] as { cite: string; doi: string }[],
  },
];
