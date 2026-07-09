// ClearFlow Plumbing — Water Heater Repair & Install Service Page
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
    { icon: faSearch, title: "Honest Diagnosis First", description: "Element, thermostat, anode, or full replacement — we tell you what's actually wrong before selling equipment." },
    { icon: faFileContract, title: "Flat-Rate Install Quotes", description: "You know the installed price — unit, labor, haul-away, and permits — before we start." },
    { icon: faCheckCircle, title: "Code-Compliant Installs", description: "Proper venting, expansion tanks, drip pans, and seismic strapping where required. Inspector-ready." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Labor and install defects covered for a full year, plus manufacturer warranties on new equipment." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day Hot Water Often Available", description: "We stock common tank sizes and can often restore hot water the day you call." },
    { icon: faWrench, title: "Tank & Tankless Experts", description: "Gas, electric, hybrid, and tankless — repair when it makes sense, replace when it doesn't." },
    { icon: faShieldHalved, title: "Licensed Master Plumber · TSBPE", description: "Permits pulled when required. Bonded, insured, and accountable." },
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
    { question: "How much does a water heater replacement cost in Waco?", answer: "Most tank replacements run $1,200–$3,500 installed. Tankless systems typically $2,500–$5,500 depending on fuel type and venting. We quote flat-rate before starting." },
    { question: "Should I repair or replace my water heater?", answer: "If the tank is 8–12+ years old with a leak, replacement is usually smarter. Isolated element or thermostat failures on younger units are often worth repairing." },
    { question: "Do you install tankless water heaters?", answer: "Yes — gas and electric tankless, including proper gas line and venting upgrades when needed." },
    { question: "How long does a water heater install take?", answer: "Most tank swaps are completed in a half day. Tankless installs may take a full day if venting or gas lines need work." },
    { question: "Do you haul away the old unit?", answer: "Yes — haul-away is included in our flat-rate install quotes." },
    { question: "What brands do you install?", answer: "We install major residential brands and match capacity to your household demand — not just the biggest unit on the truck." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Same-day response for bursts, backups, and no-water emergencies.", link: "/services/emergency-plumbing" },
    { icon: faWrench, title: "Fixture Installation", body: "Sinks, toilets, faucets, disposals — installed clean.", link: "/services/fixture-installation" },
    { icon: faSink, title: "Drain Cleaning", body: "Snaking and hydro-jetting for fixture and main lines.", link: "/services/drain-cleaning" },
    { icon: faSearch, title: "Leak Detection", body: "Find slab and supply leaks with minimal demolition.", link: "/services/leak-detection-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Water Heaters" },
      ]} />

      <SectionIntro
        title="Water Heater Repair & Install in Waco, TX"
        subtitle="Tank and tankless repair, flush, and full replacement in Waco and Central Texas — flat-rate quotes, code-compliant installs, 1-Year Workmanship Warranty."
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/water-heater-repair-install" title="Water Heaters Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Water Heaters FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="No Hot Water? We Fix and Replace Water Heaters Fast."
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
          title="Schedule Your Water Heaters Service"
          cityName="Waco"
          slug="services/water-heater-repair-install"
          spot="water-heater-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
