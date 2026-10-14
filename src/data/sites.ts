// Field sites for the toadflax biocontrol project. Add or edit an entry and the Field Sites page updates.
// `uses` picks the tags shown on each card (keys of `uses` below).

export const uses = {
  grid: { label: '<em>R. pilosa</em> releases', icon: 'fa-solid fa-table-cells' },
  release: { label: '<em>M. janthinus</em> releases', icon: 'fa-solid fa-bug' },
  lifetable: { label: 'Life table collections', icon: 'fa-solid fa-clock' },
  fire: { label: 'Post-fire study', icon: 'fa-solid fa-fire' },
} as const;

export type Use = keyof typeof uses;

export interface Site {
  name: string;
  slug: string; // matches the photo file name in src/assets/sites
  lat?: number;
  lng?: number;
  region: string;
  state: 'Montana' | 'South Dakota';
  uses: Use[];
  text: string;
}

export const mapEmbed = 'https://www.google.com/maps/d/u/0/embed?mid=1ODiqTulmXsfuWONAk-Tlu-Sk_fw8Jss&ehbc=2E312F';

export const intro = [
  'Yellow (<em>Linaria vulgaris</em>) and Dalmatian (<em>L. dalmatica</em>) toadflax are invasive plants from Europe that have spread widely across rangelands in the western United States. They form dense patches that crowd out native vegetation, reduce forage for livestock and wildlife, and are difficult or costly to control with herbicides or mechanical methods. My project focuses on biological control, using insects that naturally feed on toadflax, as a sustainable approach to long-term management.',
  'I am working with three non-native weevil species: <em>Mecinus janthinus</em>, <em>M. janthiniformis</em> and <em>Rhinusa pilosa</em>. The two <em>Mecinus</em> species lay their eggs inside the stems, and the larvae feed as they tunnel through the plant. <em>Rhinusa pilosa</em> lays its eggs in the stem and triggers the plant to form a gall that feeds and shelters the larvae.',
];

export const sites: Site[] = [
  {
    name: 'Elk Park',
    slug: 'elk-park',
    region: 'Elkhorn Mountains, Montana',
    state: 'Montana',
    lat: 46.12475,
    lng: -112.457028,
    uses: ['grid'],
    text: 'A herbivore exclosure and a paired control grid for <em>Rhinusa pilosa</em>, with trail cameras and weather data loggers at both.',
  },
  {
    name: 'Badger Gulch',
    slug: 'badger-gulch',
    region: 'Elkhorn Mountains, Montana',
    state: 'Montana',
    lat: 46.330389,
    lng: -111.676333,
    uses: ['grid'],
    text: 'Exclosure and control grids for <em>Rhinusa pilosa</em>, monitored with trail cameras and weather data loggers.',
  },
  {
    name: 'Hog Hollow',
    slug: 'hog-hollow',
    region: 'Elkhorn Mountains, Montana',
    state: 'Montana',
    lat: 46.262034,
    lng: -111.767399,
    uses: ['grid'],
    text: 'Exclosure and control grids for <em>Rhinusa pilosa</em> on Forest Service land, with trail cameras and weather data loggers.',
  },
  {
    name: 'Slim Sam Creek',
    slug: 'slim-sam-creek',
    region: 'Elkhorn Mountains, Montana',
    state: 'Montana',
    lat: 46.245639,
    lng: -111.704,
    uses: ['lifetable'],
    text: 'A Dalmatian toadflax collection site for the life table project, a short drive from Hog Hollow.',
  },
  {
    name: 'Phelps Creek',
    slug: 'phelps-creek',
    region: 'Gardiner, Montana',
    state: 'Montana',
    lat: 45.050611,
    lng: -110.704889,
    uses: ['lifetable'],
    text: 'A Dalmatian toadflax collection site for life tables, overlooking Gardiner and Yellowstone National Park.',
  },
  {
    name: 'Copper Creek',
    slug: 'copper-creek',
    region: 'Scapegoat Wilderness, Montana',
    state: 'Montana',
    lat: 47.07775,
    lng: -112.614444,
    uses: ['lifetable'],
    text: 'A yellow toadflax collection site for the life table project.',
  },
  {
    name: 'Alice Creek',
    slug: 'alice-creek',
    region: 'Scapegoat Wilderness, Montana',
    state: 'Montana',
    lat: 47.121333,
    lng: -112.470417,
    uses: ['lifetable'],
    text: 'A collection site for the life table project, visited alongside Copper Creek.',
  },
  {
    name: 'Horse Gulch Fire',
    slug: 'horse-gulch-fire',
    region: 'Big Belt Mountains, Helena-Lewis and Clark National Forest',
    state: 'Montana',
    uses: ['fire'],
    text: 'Site of the 2024 Horse Gulch Fire, north of Canyon Ferry Lake. Stems were collected from adjacent burned and unburned areas near historical <em>Mecinus janthiniformis</em> monitoring sites on Dalmatian toadflax.',
  },
  {
    name: 'Sand Lake National Wildlife Refuge',
    slug: 'sand-lake',
    region: 'Long Lake, South Dakota',
    state: 'South Dakota',
    lat: 45.802083,
    lng: -99.203722,
    uses: ['grid', 'release'],
    text: 'A <em>Rhinusa pilosa</em> exclosure and control grid, plus a caged and an open <em>Mecinus janthinus</em> release transect in another part of the refuge.',
  },
  {
    name: 'Schaunaman Ranch',
    slug: 'schaunaman-ranch',
    region: 'Aberdeen, South Dakota',
    state: 'South Dakota',
    lat: 45.407778,
    lng: -98.575528,
    uses: ['grid', 'release'],
    text: 'Privately owned rangeland with <em>Rhinusa pilosa</em> exclosure and control grids and a <em>Mecinus janthinus</em> cage and release. Thank you to Kirk and Craig Schaunaman for access to their land.',
  },
  {
    name: 'Nemo',
    slug: 'nemo',
    region: 'Black Hills, South Dakota',
    state: 'South Dakota',
    lat: 44.225528,
    lng: -103.567667,
    uses: ['grid', 'release'],
    text: 'A <em>Rhinusa pilosa</em> exclosure and control grid with caged and open <em>Mecinus janthinus</em> release transects.',
  },
  {
    name: 'Sawyer',
    slug: 'sawyer',
    region: 'Black Hills, South Dakota',
    state: 'South Dakota',
    lat: 44.279083,
    lng: -103.698528,
    uses: ['release'],
    text: 'Caged and open <em>Mecinus janthinus</em> release transects, south of Deadwood.',
  },
];
