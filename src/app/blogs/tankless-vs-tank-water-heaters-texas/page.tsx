'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFire, faBolt, faDollarSign, faClock, faHouseChimney, faDroplet } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas homes face long showers, hard water, and summer guest loads that push water heaters hard. Choosing between a traditional tank and a tankless unit is one of the bigger plumbing decisions a homeowner makes. Here is a practical breakdown based on what we install and service across Waco, Hewitt, Woodway, Temple, and Killeen.",
  },
  {
    type: 'cards',
    heading: 'What Matters Most for Texas Homes',
    cards: [
      { icon: faFire, title: 'Recovery under peak demand', body: 'Tank units store a fixed volume. Tankless heats on demand — great for continuous showers if gas supply and unit size are correct.' },
      { icon: faDollarSign, title: 'Upfront vs lifetime cost', body: 'Tanks cost less to install. Tankless costs more upfront but can last longer and use less energy when sized correctly.' },
      { icon: faBolt, title: 'Fuel type & electrical capacity', body: 'Electric tankless often needs a large panel upgrade. Gas tankless needs proper venting and gas line capacity.' },
      { icon: faDroplet, title: 'Hard water realities', body: 'Central Texas hard water shortens both types. Annual flushes matter more here than in soft-water markets.' },
      { icon: faClock, title: 'Lifespan expectations', body: 'Tanks often last 8–12 years. Tankless can run 15–20+ with maintenance — if scale is managed.' },
      { icon: faHouseChimney, title: 'Space & remodel goals', body: 'Tankless frees closet space and can free a garage corner for storage or a workshop.' },
    ],
  },
  {
    type: 'table',
    heading: 'Tank vs Tankless — Side-by-Side',
    tableHeaders: ['Factor', 'Traditional Tank', 'Tankless'],
    tableRows: [
      ['Typical installed cost (Waco)', '$1,200–$3,500', '$2,500–$5,500+'],
      ['Hot water supply', 'Finite tank volume', 'Continuous when sized right'],
      ['Energy efficiency', 'Standby heat loss', 'Higher efficiency, on-demand'],
      ['Maintenance', 'Flush + anode checks', 'Annual descaling essential'],
      ['Best for', 'Budget + simple swap', 'High demand + long-term efficiency'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: A tankless unit that is undersized for simultaneous showers will disappoint. Always get a load-matched quote — not a generic 'biggest unit' pitch.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Count simultaneous uses (showers, laundry, dishwasher) before choosing capacity',
      'Ask whether gas line or electrical upgrades are included in the quote',
      'Budget for annual maintenance in hard-water Central Texas',
      'Compare manufacturer warranties and labor warranties separately',
      'Get a flat-rate written install quote before committing',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Tankless vs. Tank Water Heaters: What Makes Sense for Texas Homes in 2026?"
        description="Compare tankless and traditional tank water heaters for Central Texas homes — upfront cost, energy bills, recovery rates, and which option fits your family."
        imageSrc="/pages/blogs/water-heater.jpg"
        imageAlt="Tankless vs tank water heater comparison for Texas homes"
        category="Water Heaters"
        date="March 12, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for a Water Heater Quote?"
        body="Get a flat-rate install quote from ClearFlow Plumbing — tank or tankless, sized for your home."
        buttonText="Get a Water Heater Quote"
        buttonHref="/services/water-heater-repair-install"
      />
      <NewsletterSignup variant={1} spot="tankless-vs-tank-blog" />
    </>
  );
}
