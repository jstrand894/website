// Single source of truth for publications. Used by the Publications page and the CV.
// Text fields accept inline HTML (<i>, <u>).
import brome from '../assets/publications/agro_brome.png';
import volatiles from '../assets/publications/ptoid_volatiles.png';
import nonTarget from '../assets/publications/non_target.jpg';
import bombus from '../assets/gallery/bombus.jpg';

export interface Publication {
  title: string;
  authors: string;      // plain text, comma separated, author list as it appears in the citation
  journal: string;
  year: number;
  issue?: string;       // volume(issue): pages
  doi?: string;
  status?: string;      // e.g. "Accepted"
  abstract?: string;
  summary?: string;     // one-line plain-language takeaway
  image?: ImageMetadata;
  tags?: string[];
  cite: string;         // formatted citation used on the CV (<u> marks your name)
}

// Newest first.
export const publications: Publication[] = [
  {
    title: 'Volatile insensitivity and localized alkaloids support commensalism in the <i>Oxytropis sericea–Alternaria oxytropis</i> association',
    authors: 'Strand JR, Burkle LA, Cook D, Gardner DR, Keith B, Wallander R, Weaver DK, Sterling TM',
    journal: 'Journal of Chemical Ecology',
    year: 2026,
    status: 'Accepted',
    image: bombus,
    cite: '<u>Strand JR</u>, Burkle LA, Cook D, Gardner DR, Keith B, Wallander R, Weaver DK, Sterling TM. 2026. Volatile insensitivity and localized alkaloids support commensalism in the <i>Oxytropis sericea–Alternaria oxytropis</i> association. Journal of Chemical Ecology.',
  },
  {
    title: 'Risk determination for non-target arthropods from outdoor space applications of mosquito adulticides',
    authors: 'Peterson RKD, Kennedy TE, Strand JR',
    journal: 'Journal of Medical Entomology',
    year: 2026,
    issue: '63(3)',
    doi: '10.1093/jme/tjag090',
    image: nonTarget,
    summary: 'Operational mosquito adulticide applications showed no deleterious effects on non-target arthropods across all taxa and insecticides reviewed.',
    abstract: 'Outdoor space applications of ultra-low-volume (ULV) insecticides are widely used for adult mosquito management, but public concerns persist about their potential effects on non-target arthropods. Therefore, we conducted a systematic review and analysis to evaluate evidence from global peer-reviewed operational studies, field studies simulating operational studies, and modeled ecological risk assessments (ERA). A total of 38 articles met inclusion criteria, representing 43 distinct studies across multiple arthropod taxa and 10 insecticidal active ingredients. Study types comprised 25 field experiments, nine operational applications, and nine ERAs. We recorded the presence or absence of acute mortality effects on non-target arthropods and analyzed associations using Fisher’s exact test and Firth logistic regression. Operational studies—representing large-scale, real-world mosquito control applications—had no deleterious effects across all taxa and insecticides. In contrast, field studies documented effects in 15 of 25 cases, although results were equivocal, with 10 studies finding no effects despite conditions favoring direct exposure (eg caged insects placed in the direct aerosol path). The ERAs showed mixed outcomes, most likely reflecting their intentionally conservative design. Study type was strongly associated with effect detection (P < 0.001), with operational applications significantly less likely to report effects. Overall, evidence suggests that risks to non-target arthropod populations from operational ULV mosquito adulticide applications are low, primarily due to reduced exposure from nighttime treatments, aerosol droplet characteristics (size and volume), rapid dispersal, and rapid breakdown. Increased emphasis on operational-scale research is needed to strengthen the understanding of risks for non-target arthropods.',
    cite: 'Peterson RKD, Kennedy TE, <u>Strand JR</u>. 2026. Risk Determination for Non-Target Arthropods from Outdoor Space Applications of Mosquito Adulticides. Journal of Medical Entomology. 63(3).',
  },
  {
    title: 'Sensory and behavioral responses of braconid parasitoids to changes in volatile emissions induced by wheat stem sawfly (Hymenoptera: Cephidae) larval feeding in winter wheat and smooth brome',
    authors: 'Strand JR, Perez Moya OG, Peterson RKD, Sterling TM, Weaver DK',
    journal: 'Journal of Insect Science',
    year: 2025,
    issue: '25(2)',
    doi: '10.1093/jisesa/ieaf016',
    image: volatiles,
    tags: ['Chemical ecology', 'Parasitoids'],
    summary: 'Sawfly-infested smooth brome emits key volatiles that strongly attract native parasitoids, supporting its role as a biocontrol-enhancing refuge.',
    abstract: 'The wheat stem sawfly, <i>Cephus cinctus</i> Norton, is a major pest of cultivated wheat (<i>Triticum aestivum</i> L.) and other cereals in North America. The native congeneric parasitoids <i>Bracon cephi</i> (Gahan) and <i>B. lissogaster</i> Muesebeck are important biocontrol agents and play a crucial role in managing wheat stem sawfly outbreaks and damage. Smooth brome grass (<i>Bromus inermis</i> Leyss) has been found to be an effective wheat stem sawfly sink and parasitoid source when grown in areas neighboring wheat fields in Montana. To better understand the ecology of the system, we investigated both the wheat stem sawfly-induced volatile organic compounds produced by smooth brome and winter wheat, and the electrophysiological and behavioral response of <i>B. cephi</i> and <i>B. lissogaster</i> to the collected volatiles via coupled electroantennography and gas chromatography-flame ionization detection. Volatile concentration analysis indicated significantly increased production of (<i>Z</i>)-3-hexenyl acetate, 6-methyl-5-hepten-2-one, and (<i>E</i>)-2-hexenal in wheat stem sawfly-infested smooth brome, and elevated production of 6-methyl-5-hepten-2-one in infested smooth brome and winter wheat when compared to their uninfested counterparts. Both <i>B. cephi</i> and <i>B. lissogaster</i> exhibited significant electrophysiological and behavioral response to (<i>Z</i>)-3-hexenyl acetate, 6-methyl-5-hepten-2-one, and hexahydrofarnesyl acetone. Our results provide important evidence supporting habitat management recommendations that will enhance the effectiveness of biological control, contributing to more sustainable agricultural practices and the preservation of vital ecological functions.',
    cite: '<u>Strand JR</u>, Peterson RKD, Sterling TM, Weaver DK. 2025. Sensory and behavioral responses of braconid parasitoids to changes in volatile emissions induced by wheat stem sawfly (Hymenoptera: Cephidae) larval feeding in winter wheat and smooth brome. Journal of Insect Science. 25(2).',
  },
  {
    title: 'Agroecological importance of smooth brome in managing wheat stem sawfly (Hymenoptera: Cephidae) via associated braconid parasitoids',
    authors: 'Strand JR, Peterson RKD, Sterling TM, Weaver DK',
    journal: 'Journal of Economic Entomology',
    year: 2024,
    issue: '117(6): 2344–2354',
    doi: '10.1093/jee/toae246',
    image: brome,
    tags: ['Ecology', 'Parasitoids', 'IPM'],
    summary: 'Smooth brome is a valuable host refuge for sawfly parasitoids, with higher larval mortality than adjacent wheat and similar parasitism.',
    abstract: 'Wheat stem sawfly (WSS), <i>Cephus cinctus</i> Norton (Hymenoptera: Cephidae), is a major pest of cereal crops throughout the Northern Great Plains of North America. Native parasitoids, <i>Bracon cephi</i> (Gahan) and <i>B. lissogaster</i> Muesebeck (Hymenoptera: Braconidae), play a key role in suppressing WSS populations and limiting associated damage. Smooth brome grass (<i>Bromus inermis</i> Leyss.) serves as a potential trap reservoir for WSS when grown in areas surrounding wheat (<i>Triticum aestivum</i> L.) fields in Montana. Its unique biology allows it to support high WSS infestation while promoting significant larval mortality throughout the growing season. Late-season WSS survivors can then serve as hosts for WSS parasitoids. Our study investigated smooth brome as a host refuge for WSS parasitoids. We measured WSS larval infestation and survival rate inside smooth brome grown within WSS-inclusion cages, finding a maximum infestation of 66.5% and an end-of-year WSS survival of 5.7%. In addition, we collected stems from sites in central and north-central Montana to measure the WSS infestation and parasitoid prevalence in wheat and adjacent smooth brome. WSS infestation was high in both Big Sandy (64.5% smooth brome, 65.7% adjacent wheat) and Moccasin, MT (50.6%, 38.6%). Year-end WSS larval mortality was 43.6% greater in smooth brome compared to adjacent wheat at both field sites, but both hosted similar numbers of WSS parasitoids. This research underscores the importance of smooth brome in providing a sustainable host refuge for WSS parasitoids and highlights its significant role in supporting the economics of wheat cultivation.',
    cite: '<u>Strand JR</u>, Peterson RKD, Sterling TM, Weaver DK. 2024. Agroecological importance of smooth brome in managing wheat stem sawfly (Hymenoptera: Cephidae) via associated braconid parasitoids. Journal of Economic Entomology. 117(6): 2344–2354.',
  },
];
