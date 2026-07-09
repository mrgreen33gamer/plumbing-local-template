'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faDroplet, faToilet, faFire, faClock, faHouseChimney, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Not every plumbing problem is an emergency — but waiting on the wrong ones can flood floors, ruin cabinets, and contaminate living spaces. Here is a clear guide for Waco and Central Texas homeowners on when to call after hours versus when you can book a normal appointment.",
  },
  {
    type: 'cards',
    heading: 'Call Emergency Plumbing Now If…',
    cards: [
      { icon: faBolt, title: 'Active flooding or burst pipe', body: 'Shut off the main if you can, then call. Minutes matter for floors and drywall.' },
      { icon: faToilet, title: 'Sewage backup into fixtures', body: 'Raw sewage is a health hazard. Stop using water and call for same-day response.' },
      { icon: faDroplet, title: 'No water to the entire home', body: 'After checking the meter and city notices, a whole-home outage needs a plumber fast.' },
      { icon: faFire, title: 'Water heater leaking heavily', body: 'A tank dumping water can flood a garage or closet in minutes. Shut power/gas and call.' },
      { icon: faExclamationTriangle, title: 'Gas smell near a water heater', body: 'Evacuate, call your gas utility emergency line, and do not operate switches. This is safety-critical.' },
      { icon: faHouseChimney, title: 'Ceiling or wall actively saturating', body: 'Hidden supply leaks that are wetting structure should not wait until Monday.' },
      { icon: faClock, title: "You can't stop the water at a shutoff", body: 'If valves fail or you cannot isolate the leak, emergency dispatch is appropriate.' },
    ],
  },
  {
    type: 'table',
    heading: 'Emergency vs Scheduleable',
    tableHeaders: ['Problem', 'Urgency', 'What To Do'],
    tableRows: [
      ['Burst supply line', 'Emergency', 'Main shutoff + call now'],
      ['Sewage backup', 'Emergency', 'Stop water use + call now'],
      ['Dripping faucet', 'Schedule', 'Book next open slot'],
      ['Slow kitchen sink only', 'Schedule', 'DIY snake or book drain clean'],
      ['No hot water (no flooding)', 'Same-day preferred', 'Call during business hours first'],
      ['Running toilet', 'Soon', 'Shutoff at angle stop if needed'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Know where your main water shutoff is before an emergency. In many Waco homes it is near the front hose bib or at the meter — practice closing it once so you are ready.",
  },
  {
    type: 'tips',
    heading: 'Before the Plumber Arrives',
    items: [
      'Shut off water at the fixture or main if safe to do so',
      'Move valuables and electronics away from water',
      'Photograph damage for insurance if flooding occurred',
      'Note any recent work or freezing weather that may have caused the issue',
      'Clear a path to the water heater, cleanout, or affected bathroom',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="When to Call an Emergency Plumber in Waco, TX"
        description="Burst pipes, sewage backups, and no hot water at midnight — know which plumbing problems can wait and which need same-day emergency response."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="When to call an emergency plumber in Waco Texas"
        category="Emergency Plumbing"
        date="January 22, 2026"
        readTime={5}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Plumbing Emergency Right Now?"
        body="Call ClearFlow at (254) 732-9100 — same-day emergency response across Central Texas."
        buttonText="Call Emergency Line"
        buttonHref="tel:+12547329100"
      />
      <NewsletterSignup variant={1} spot="emergency-plumber-blog" />
    </>
  );
}
