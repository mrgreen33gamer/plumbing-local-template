// ClearFlow Plumbing — Drain Cleaning Service Page
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
    { icon: faSearch, title: "Find the Real Blockage", description: "We locate the clog — not just punch a temporary hole through grease and flush it downstream." },
    { icon: faFileContract, title: "Method Matched to the Job", description: "Snake vs hydro-jet vs camera — recommended based on what the line actually needs." },
    { icon: faCheckCircle, title: "Clean Work Area", description: "We protect floors and leave the fixture area cleaner than we found it." },
    { icon: faShieldHalved, title: "Honest Next-Step Advice", description: "If roots, collapse, or chronic buildup need more than cleaning, we say so with camera proof when useful." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day Drain Service", description: "Most drain calls are scheduled same-day or next-day across Central Texas." },
    { icon: faWrench, title: "Branch Lines to Main Lines", description: "Kitchen sinks, tubs, showers, laundry, and main sewer cleanouts." },
    { icon: faShieldHalved, title: "Licensed Plumbers — Not Just a Cable Machine", description: "We understand piping systems, cleanouts, and when cleaning isn't enough." },
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
    { question: "How much does drain cleaning cost in Waco?", answer: "Most residential drain clears run $150–$400. Main-line jetting is higher depending on access and severity. Flat-rate before we start." },
    { question: "Snake or hydro-jet — which do I need?", answer: "Simple fixture clogs often clear with a snake. Grease, scale, and root intrusion in main lines usually need jetting or camera follow-up." },
    { question: "Why does my kitchen sink keep clogging?", answer: "Grease and food waste buildup is common. We clear the line and advise on disposal habits and possible trap or vent issues." },
    { question: "Do you camera inspect drains?", answer: "Yes — when symptoms suggest deeper issues, camera inspection helps avoid guessing." },
    { question: "Can you clean a whole-house main line?", answer: "Yes — from the cleanout to the city tap or septic, depending on access." },
    { question: "Is drain cleaning warrantied?", answer: "Workmanship is covered. Recurring clogs from roots or broken pipe may need repair — we'll show you evidence first." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Same-day response for bursts, backups, and no-water emergencies.", link: "/services/emergency-plumbing" },
    { icon: faFire, title: "Water Heaters", body: "Tank and tankless repair, flush, and full replacement.", link: "/services/water-heater-repair-install" },
    { icon: faWrench, title: "Fixture Installation", body: "Sinks, toilets, faucets, disposals — installed clean.", link: "/services/fixture-installation" },
    { icon: faSearch, title: "Leak Detection", body: "Find slab and supply leaks with minimal demolition.", link: "/services/leak-detection-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Drain Cleaning" },
      ]} />

      <SectionIntro
        title="Drain Cleaning in Waco, TX"
        subtitle="Snaking and hydro-jetting for sinks, tubs, and main lines in Waco and Central Texas. We clear the blockage and help keep it from returning."
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/drain-cleaning" title="Drain Cleaning Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Drain Cleaning FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Slow Drains & Clogs — Cleared the Right Way."
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
          title="Schedule Your Drain Cleaning Service"
          cityName="Waco"
          slug="services/drain-cleaning"
          spot="drain-cleaning-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
