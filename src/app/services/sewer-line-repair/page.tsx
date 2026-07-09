// ClearFlow Plumbing — Sewer Line Repair Service Page
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
    { icon: faSearch, title: "Camera Inspection First", description: "We show you the pipe condition — roots, offset joints, belly, collapse — before recommending a method." },
    { icon: faFileContract, title: "Options, Not One Upsell", description: "Cleaning, spot repair, trenchless, or open dig — priced clearly so you can choose." },
    { icon: faCheckCircle, title: "Site Protection", description: "Landscaping and hardscape protection planned into the job. We leave the property orderly." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Sewer repairs we complete are backed by our workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Stop Recurring Backups", description: "If cleaning keeps failing, the line may be damaged — we find out why." },
    { icon: faWrench, title: "Residential & Multi-Family", description: "Single homes, duplexes, and light multi-unit sewer laterals." },
    { icon: faShieldHalved, title: "Licensed Master Plumber · TSBPE", description: "Permits, inspections, and code-compliant repairs you can trust at sale time." },
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
    { question: "How do I know if I need sewer repair vs cleaning?", answer: "Recurring backups, multiple fixtures affected, or roots on camera usually mean more than a simple clean." },
    { question: "Do you offer trenchless sewer repair?", answer: "When pipe condition and access allow, trenchless methods can reduce yard disruption. Not every line qualifies — camera tells the truth." },
    { question: "How much does sewer line repair cost in Waco?", answer: "Ranges widely: spot repairs may be a few thousand; full replacements cost more based on length, depth, and surface restoration. We quote after inspection." },
    { question: "How long does sewer repair take?", answer: "Spot repairs may be 1–2 days. Full replacements depend on length, permits, and restoration." },
    { question: "Can you work around driveways and trees?", answer: "We plan access to minimize damage. Sometimes boring or reroutes beat cutting a driveway — we'll explain options." },
    { question: "Do you pull permits for sewer work?", answer: "Yes when required by the city or county for the scope of work." },
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
        { label: "Sewer Line Repair" },
      ]} />

      <SectionIntro
        title="Sewer Line Repair in Waco, TX"
        subtitle="Camera inspection, trenchless options when possible, and full dig-and-replace when needed. Honest recommendations for Central Texas homes."
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/sewer-line-repair" title="Sewer Line Repair Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Sewer Line Repair FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Sewer Line Problems Solved — Camera First, Guesswork Never."
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
          title="Schedule Your Sewer Line Repair Service"
          cityName="Waco"
          slug="services/sewer-line-repair"
          spot="sewer-line-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
