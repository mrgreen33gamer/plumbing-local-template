// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for ClearFlow Plumbing — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Water Heater Install',
    text:     "Our 15-year tank finally gave out on a Saturday morning. ClearFlow had a new water heater installed the same day, explained the options clearly, and pricing was upfront. Hot water by evening — I can't recommend them enough.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Emergency Plumbing',
    text:     'Woke up at 6am to a burst supply line flooding the laundry room. Called ClearFlow and they had someone at my door by 8:30am. Stopped the water, replaced the line, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Drain Cleaning',
    text:     'Had three companies quote a main-line clog. ClearFlow was honest about hydro-jetting vs snaking — not just upselling the biggest package. The drain has stayed clear for months. Clean, fast, and professional.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Fixture Installation',
    text:     'They installed a new kitchen sink, disposal, and faucet package during a remodel. The finish work was clean — no cabinet damage, perfect seal, and they coordinated with our GC without drama. Worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Sewer Line Repair',
    text:     'Camera inspection found a collapsed section under the driveway. ClearFlow walked us through trenchless options vs open dig, handled permits, and fixed it right. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Leak Detection',
    text:     'Mystery high water bill for months. ClearFlow found a slab leak under the master bath without tearing up half the house. Fair pricing, no upselling, and the fix held up. My go-to plumber for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Plumbing',
    text:     'We hired ClearFlow for a restaurant grease-line cleanout and fixture swap over a closed Monday so we wouldn\'t lose service hours. They finished ahead of schedule and left the kitchen inspection-ready. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Emergency Plumbing',
    text:     'Called them about a small toilet supply leak after a move-in and they treated it like it mattered just as much as a sewer job. Fair pricing, no upselling, and the fix held up. Thank you.',
  },
];

export default reviews;
