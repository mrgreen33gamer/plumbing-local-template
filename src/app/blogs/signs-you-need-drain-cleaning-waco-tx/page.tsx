'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSink, faToilet, faDroplet, faExclamationTriangle, faClock, faHouseChimney, faWind } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "In Central Texas the air is full of dust, pollen, and cedar — and your drains collect grease, soap scum, hair, and roots. Waiting until a full backup happens usually means more damage and higher cost. Here are seven signs Waco-area homeowners should not ignore.",
  },
  {
    type: 'cards',
    heading: '7 Signs You Need Professional Drain Cleaning',
    cards: [
      { icon: faSink, title: 'Slow drains in multiple fixtures', body: 'One slow sink can be a trap. Multiple slow fixtures often point to a branch or main-line restriction.' },
      { icon: faToilet, title: 'Gurgling toilets or showers', body: 'Air gulping through traps when another fixture drains is a classic partial blockage signal.' },
      { icon: faDroplet, title: 'Water backing up into a tub or shower', body: 'When the toilet flushes and the shower fills, the main line is likely restricted.' },
      { icon: faExclamationTriangle, title: 'Recurring clogs after DIY snakes', body: 'If you clear it and it returns within weeks, the blockage is deeper or the pipe is damaged.' },
      { icon: faClock, title: 'Drains that used to be fine now take minutes', body: 'Gradual slowdown means buildup — grease, scale, or roots — that needs more than a chemical bottle.' },
      { icon: faHouseChimney, title: 'Foul odors from drains', body: 'Persistent sewer smell can mean dried traps or waste sitting in a partial clog — both need attention.' },
      { icon: faWind, title: 'Cleanout overflow after heavy rain', body: 'Storm-related backups may involve city lines, but chronic cleanout issues still deserve a camera look.' },
    ],
  },
  {
    type: 'table',
    heading: 'DIY vs Professional Drain Cleaning',
    tableHeaders: ['Situation', 'DIY Plausible', 'Call a Plumber'],
    tableRows: [
      ['Single sink, recent grease pour', 'Yes — careful snake', 'If it returns in days'],
      ['Multiple fixtures affected', 'No', 'Yes — main line likely'],
      ['Sewage smell or backup', 'No', 'Yes — same day'],
      ['Chemical cleaners already used', 'Stop chemicals', 'Yes — camera if needed'],
      ['Roots suspected (old clay line)', 'No', 'Yes — jet + camera'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Skip harsh chemical drain openers on main lines — they rarely solve root or scale issues and can damage older pipes. Mechanical cleaning is safer and more effective.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Note which fixtures are slow and whether they fail together',
      'Locate your cleanout if you know it — it speeds service',
      'Avoid repeated chemical treatments before we arrive',
      'Ask whether snake, jet, or camera is recommended for your symptoms',
      'If backups involve sewage, treat it as an emergency',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs You Need Professional Drain Cleaning in Waco, TX"
        description="Slow sinks, gurgling toilets, and recurring clogs are early warnings. Learn when DIY is enough — and when Central Texas homeowners should call a plumber."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="Signs you need professional drain cleaning in Waco TX"
        category="Drain Cleaning"
        date="February 18, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need a Drain Cleared?"
        body="Same-day drain cleaning available across Waco and Central Texas. Flat-rate pricing before we start."
        buttonText="Schedule Drain Cleaning"
        buttonHref="/services/drain-cleaning"
      />
      <NewsletterSignup variant={1} spot="drain-cleaning-signs-blog" />
    </>
  );
}
