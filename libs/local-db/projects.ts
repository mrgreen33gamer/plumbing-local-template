// libs/local-db/projects.ts
// Completed ClearFlow Plumbing jobs for the /projects page.

export type ProjectCategory =
  | 'Emergency Plumbing'
  | 'Water Heaters'
  | 'Drain Cleaning'
  | 'Leak Detection'
  | 'Sewer Lines'
  | 'Fixtures';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  duration?: string;
  featured?: boolean;
  liveUrl?: string;
  offline?: boolean;
}

const g = (n: string) => `/projects/gallery/${n}`;

const emergency: Project[] = [
  {
    id: 'waco-burst-supply-line',
    title: 'Waco Burst Supply Line Emergency',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Emergency Plumbing',
    year: '2026',
    duration: '3 hours',
    shortDesc: 'Morning burst under kitchen sink stopped, re-piped, and restored — floors saved with same-day response.',
    fullDesc: 'Homeowner woke to flooding under the kitchen cabinets. We isolated the main, cut out the failed braided supply, replaced shutoffs and supply lines, dried the cavity, and tested for leaks. Cabinets and flooring were saved from a full gut.',
    result: 'Same-Day Restore',
    tags: ['Emergency', 'Supply Line', 'Waco'],
    images: [
      { src: g('2.png'), alt: 'Kitchen plumbing after emergency repair' },
      { src: g('3.png'), alt: 'New supply lines installed' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Before — flooded cabinet base' },
    afterImage:  { src: g('2.png'), alt: 'After — repaired and dry' },
    featured: true,
  },
];

const waterHeaters: Project[] = [
  {
    id: 'woodway-tankless-upgrade',
    title: 'Woodway Tankless Water Heater Upgrade',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Water Heaters',
    year: '2026',
    duration: '1 day',
    shortDesc: '15-year tank replaced with gas tankless — proper venting, expansion control, and hot water restored by evening.',
    fullDesc: 'The old tank was leaking at the base. We sized a tankless unit for simultaneous showers, upgraded the gas line and venting to code, installed isolation valves for future maintenance, hauled the old tank, and commissioned the system with the homeowners.',
    result: 'Endless Hot Water',
    tags: ['Tankless', 'Gas', 'Woodway'],
    images: [{ src: g('5.png'), alt: 'Tankless water heater install' }],
    beforeImage: { src: g('7.png'), alt: 'Before leaking tank water heater' },
    afterImage:  { src: g('5.png'), alt: 'After tankless install' },
    featured: true,
  },
  {
    id: 'hewitt-electric-tank-swap',
    title: 'Hewitt Electric Tank Replacement',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Water Heaters',
    year: '2025',
    duration: 'Half day',
    shortDesc: '50-gallon electric tank replaced same day after no-hot-water call — drip pan, expansion tank, and haul-away included.',
    fullDesc: 'Elements had failed on a 12-year unit. Given age and hard-water scale, replacement was the smarter path. Flat-rate quote, same-day install, and hot showers that night.',
    result: 'Hot Water Tonight',
    tags: ['Electric Tank', 'Same-Day', 'Hewitt'],
    images: [{ src: g('ertret.png'), alt: 'New electric water heater' }],
  },
];

const drains: Project[] = [
  {
    id: 'temple-main-line-jet',
    title: 'Temple Main-Line Hydro-Jet',
    client: 'Private Residence',
    location: 'Temple, TX',
    category: 'Drain Cleaning',
    year: '2025',
    duration: '2 hours',
    shortDesc: 'Recurring kitchen and bath clogs cleared with hydro-jetting after camera confirmed grease and scale buildup.',
    fullDesc: 'Three DIY snake attempts had failed. Camera showed heavy grease in the main. We hydro-jetted from the cleanout, verified flow on camera, and coached the family on disposal habits to extend the result.',
    result: 'Flow Restored',
    tags: ['Hydro-Jet', 'Main Line', 'Temple'],
    images: [{ src: g('ewew.png'), alt: 'Cleanout after jetting' }],
    beforeImage: { src: g('gythgnb.png'), alt: 'Before restricted main line' },
    afterImage:  { src: g('ewew.png'), alt: 'After hydro-jet clean' },
  },
];

const leaks: Project[] = [
  {
    id: 'china-spring-slab-leak',
    title: 'China Spring Slab Leak Spot Repair',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Leak Detection',
    year: '2025',
    duration: '1 day',
    shortDesc: 'Mystery high water bill traced to a slab leak under the master bath — pinpointed and repaired with minimal demo.',
    fullDesc: 'Pressure testing and acoustic location found the leak zone under the master bath. We opened a small access, repaired the copper, retested, and left a clean path for flooring restoration. Bill returned to normal the next cycle.',
    result: 'Bill Normalized',
    tags: ['Slab Leak', 'Detection', 'China Spring'],
    images: [{ src: g('htf.png'), alt: 'Slab leak repair access' }],
    beforeImage: { src: g('iou.png'), alt: 'Before moisture at slab' },
    afterImage:  { src: g('htf.png'), alt: 'After repair completed' },
    featured: true,
  },
];

const sewer: Project[] = [
  {
    id: 'killeen-sewer-spot-repair',
    title: 'Killeen Sewer Lateral Spot Repair',
    client: 'Private Residence',
    location: 'Killeen, TX',
    category: 'Sewer Lines',
    year: '2026',
    duration: '2 days',
    shortDesc: 'Camera found collapsed section under the side yard — open dig spot repair restored full flow without full-yard replacement.',
    fullDesc: 'Recurring backups and roots on camera pointed to a failed clay section. We quoted spot repair vs full replacement honestly, completed the dig repair, bedded new pipe, and verified with a post-repair camera run.',
    result: 'Backups Stopped',
    tags: ['Sewer', 'Camera', 'Killeen'],
    images: [{ src: g('jyfhtgb.png'), alt: 'Sewer lateral after repair' }],
    beforeImage: { src: g('kgh.png'), alt: 'Before damaged sewer section' },
    afterImage:  { src: g('jyfhtgb.png'), alt: 'After sewer repair' },
  },
];

const fixtures: Project[] = [
  {
    id: 'bellmead-bath-fixture-package',
    title: 'Bellmead Bath Fixture Package',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Fixtures',
    year: '2025',
    duration: '1 day',
    shortDesc: 'Toilet, vanity sink, faucet, and shower valve refreshed during a bathroom remodel punch list.',
    fullDesc: 'Homeowner supplied fixtures; we verified rough-in, set the toilet with a new flange repair, installed the vanity drain and supply, and swapped a shower valve cartridge assembly. Clean, leak-free, remodel-ready.',
    result: 'Remodel Ready',
    tags: ['Fixtures', 'Bath', 'Bellmead'],
    images: [{ src: g('liukj.png'), alt: 'Bathroom fixtures installed' }],
  },
  {
    id: 'mcgregor-kitchen-sink-disposal',
    title: 'McGregor Kitchen Sink & Disposal',
    client: 'Private Residence',
    location: 'McGregor, TX',
    category: 'Fixtures',
    year: '2025',
    duration: 'Half day',
    shortDesc: 'New stainless sink, faucet, and disposal installed with proper air gap and clean cabinet work.',
    fullDesc: 'Old drop-in sink was corroded and the disposal seized. We installed a new sink and disposal package, sealed the deck, and left the cabinet dry and tidy.',
    result: 'Kitchen Refresh',
    tags: ['Kitchen', 'Disposal', 'McGregor'],
    images: [{ src: g('qwe.png'), alt: 'Kitchen sink after install' }],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...emergency,
  ...waterHeaters,
  ...drains,
  ...leaks,
  ...sewer,
  ...fixtures,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Emergency Plumbing': emergency,
  'Water Heaters':      waterHeaters,
  'Drain Cleaning':     drains,
  'Leak Detection':     leaks,
  'Sewer Lines':        sewer,
  'Fixtures':           fixtures,
};

export const CATEGORIES: ProjectCategory[] = [
  'Emergency Plumbing',
  'Water Heaters',
  'Drain Cleaning',
  'Leak Detection',
  'Sewer Lines',
  'Fixtures',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export default ALL_PROJECTS;
