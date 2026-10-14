// Repositories shown in the "My code & data" section of the Resources page. Add or remove an entry and the page updates.
// `repo` is the GitHub repository name under github.com/jstrand894/.

export interface Repo {
  repo: string;
  title: string;
  desc: string;
  tags: string[];
  icon: string;
  live?: string; // optional link to a running version of the tool
}

export const github = 'https://github.com/jstrand894';

export const repos: Repo[] = [
  {
    repo: 'PVEC_app',
    title: 'Vectorial capacity uncertainty tool',
    desc: 'An interactive tool showing how uncertainty in mosquito mortality and transmission affects vectorial capacity, and which parameters matter most. Runs in your browser with R and Shinylive, so no data leaves your computer. Validated against Styer et al. (2007).',
    tags: ['R', 'Shinylive', 'Modeling'],
    icon: 'fa-solid fa-bug',
  },
  {
    repo: 'oxytropis-alternaria-volatiles_2026',
    title: 'Locoweed volatiles: data and analysis',
    desc: 'Data and analysis code for a study of volatile compounds in white locoweed (Oxytropis sericea) with and without its fungal endophyte, Alternaria oxytropis. Includes raw data, notebooks, and the R scripts that reproduce the manuscript’s results.',
    tags: ['R', 'Reproducible research', 'Chemical ecology'],
    icon: 'fa-solid fa-flask',
  },
  {
    repo: 'Field_app',
    title: 'Field data entry app',
    desc: 'A web app for entering data while in the field.',
    tags: ['HTML', 'Field work'],
    icon: 'fa-solid fa-mobile-screen',
  },
  {
    repo: 'toadflax_hybrids_2026',
    title: 'Toadflax hybrids and biocontrol agents',
    desc: 'Hybrid experiment with biocontrol agent responses.',
    tags: ['R', 'Biocontrol'],
    icon: 'fa-solid fa-seedling',
  },
];
