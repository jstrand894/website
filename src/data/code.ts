// Repositories shown on the Code & Tutorials page. Add or remove an entry and the page updates.
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
    desc: 'Interactive tool that propagates uncertainty in mosquito mortality and transmission parameters through an age-specific vectorial capacity model, giving a distribution of Ct and a sensitivity ranking. Runs in your browser with R and Shinylive, so no data leaves your computer. Checked against Styer et al. (2007).',
    tags: ['R', 'Shinylive', 'Modeling'],
    icon: 'fa-solid fa-bug',
  },
  {
    repo: 'oxytropis-alternaria-volatiles_2026',
    title: 'Locoweed volatiles: data and analysis',
    desc: 'Data and analysis code for a study of volatile organic compound profiles in white locoweed (Oxytropis sericea) with and without the endophytic fungus Alternaria oxytropis. Includes raw spreadsheets, processing notebooks, and R scripts that reproduce the PERMANOVA, PCA, SIMPER and mixed-model results in the manuscript.',
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
