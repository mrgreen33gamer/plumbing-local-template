// ClearFlow Plumbing — Leak Detection & Repair Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faBolt, faFire, faSink, faToilet,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {

  const expectations = [
    { icon: faSearch, title: "Locate Before You Demolish", description: "We use acoustic, pressure, and moisture methods to pinpoint leaks — not random hole hunting." },
    { icon: faFileContract, title: "Repair Options Explained", description: "Spot repair vs re-pipe vs reroute — costs and trade-offs in plain English before work starts." },
    { icon: faCheckCircle, title: "Minimize Damage", description: "When walls or floors must open, we cut only what's needed and coordinate clean restoration paths." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Repairs we complete are backed for a full year of workmanship." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "High Water Bill? Call Early", description: "Catching leaks early saves floors, cabinets, and foundation headaches." },
    { icon: faWrench, title: "Supply, Slab & Fixture Leaks", description: "From under-sink drips to under-slab lines — we handle the full spectrum." },
    { icon: faShieldHalved, title: "Insurance-Friendly Documentation", description: "Clear findings and photos help homeowners working with adjusters." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",      description: "Contact us by phone, text, or online. We'll schedule you in — usually same-day during business hours.", icon: faHeadset },
    { number: 2, title: "Plumber Arrives",   description: "On time, in uniform, with a fully stocked truck. Diagnosis starts immediately.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",   description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "Completed with quality materials, tested before we leave, and backed by our workmanship warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Plumbing jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                    suffix: "%", duration: 2 },
    { icon: faClock,     value: 17,   label: "Years serving Waco-area homeowners",            suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available plumbers.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full plumbing coverage throughout Hewitt.",              badge: "" },
    { town: "Woodway",      benefit: "Same-day plumbing service for Woodway neighborhoods.",   badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.",    badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full plumbing service coverage for Bell County homes.",  badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written",  others: "❌ Hourly + estimate only" },
    { feature: "1-Year Workmanship Warranty",        us: "✅ Every job",        others: "❌ Rare or none" },
    { feature: "Licensed Master Plumber · TSBPE",    us: "✅ All crews",        others: "❌ Not always" },
    { feature: "Emergency service 7 days/week",      us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "Parts on truck — same-visit repair", us: "✅ Most repairs",     others: "❌ Often a return trip" },
  ];

  const faq = [
    { question: "How do you find a slab leak?", answer: "Pressure testing, acoustic listening, and moisture mapping help locate the leak zone before any concrete cutting." },
    { question: "How much does leak detection cost?", answer: "Detection-only visits typically run a few hundred dollars depending on property size. Repair is quoted separately once the leak is found." },
    { question: "Can a slab leak be repaired without replacing the whole line?", answer: "Sometimes spot repairs work; chronic under-slab failures may need reroutes. We recommend based on pipe condition and access." },
    { question: "My water bill jumped but I see no water — could it still be a leak?", answer: "Yes. Silent slab or yard leaks are common. We can test the system and help isolate the zone." },
    { question: "Do you repair PEX, copper, and CPVC?", answer: "Yes — material-appropriate repairs and transitions per code." },
    { question: "Will homeowners insurance cover a slab leak?", answer: "Policies vary. We provide documentation; your adjuster decides coverage." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Same-day response for bursts, backups, and no-water emergencies.", link: "/services/emergency-plumbing" },
    { icon: faFire, title: "Water Heaters", body: "Tank and tankless repair, flush, and full replacement.", link: "/services/water-heater-repair-install" },
    { icon: faWrench, title: "Fixture Installation", body: "Sinks, toilets, faucets, disposals — installed clean.", link: "/services/fixture-installation" },
    { icon: faSink, title: "Drain Cleaning", body: "Snaking and hydro-jetting for fixture and main lines.", link: "/services/drain-cleaning" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Leak Detection" },
      ]} />

      <SectionIntro
        title="Leak Detection & Repair in Waco, TX"
        subtitle="Slab leaks, supply-line drips, and mystery high water bills — modern detection and lasting repairs with minimal unnecessary demolition."
      />

      <TrustBar headline="8,000+ Central Texas homeowners trust ClearFlow for plumbing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/leak-detection-repair" title="Leak Detection Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Leak Detection FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Find Hidden Leaks Before They Destroy Floors and Foundations."
        subline="Same-day service available. Flat-rate pricing, 1-Year Workmanship Warranty, Licensed Master Plumber · TSBPE."
        primaryText="Call Us Now"
        primaryLink="tel:+12547329100"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Leak Detection Service"
          cityName="Waco"
          slug="services/leak-detection-repair"
          spot="leak-detection-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
