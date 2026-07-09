// ClearFlow Plumbing — Emergency Plumbing Service Page
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
    { icon: faSearch, title: "Immediate Damage Control", description: "We stop the water, contain the mess, and stabilize the situation before talking about full repairs." },
    { icon: faFileContract, title: "Flat-Rate Quote Before Permanent Work", description: "You get a written price before we open walls or replace major components. No surprise invoices." },
    { icon: faCheckCircle, title: "Stocked Trucks for First-Visit Fixes", description: "Common fittings, shutoffs, and repair parts ride with every plumber — most emergencies resolved same visit." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Emergency repairs are still warrantied. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Emergency Service — Any Time", description: "We answer 7 days a week, including evenings and weekends. Plumbing disasters don't wait until Monday." },
    { icon: faWrench, title: "Residential & Light Commercial", description: "Homes, rentals, restaurants, and multi-family — we handle urgent plumbing across property types." },
    { icon: faShieldHalved, title: "Licensed Master Plumber · TSBPE", description: "Every plumber is TSBPE-licensed. You're never dealing with an unlicensed subcontractor on our jobs." },
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
    { question: "How fast can you respond to a plumbing emergency in Waco?", answer: "Most emergencies are same-day. Call before noon and we usually dispatch within a few hours. After-hours calls are answered — call (254) 732-9100." },
    { question: "What counts as a plumbing emergency?", answer: "Burst pipes, active flooding, sewage backups, no water to the home, gas-related water heater issues, and overflowing fixtures that can't be shut off." },
    { question: "Do you charge more for emergency or after-hours work?", answer: "Emergency dispatch may include an after-hours fee, disclosed when you call. The repair itself is still flat-rate before work starts." },
    { question: "Can you stop a burst pipe without major demo?", answer: "Often yes — we isolate the zone, repair the failed section, and restore service. Larger re-pipes are only recommended when needed." },
    { question: "Do you serve Temple and Killeen for emergencies?", answer: "Yes — Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, and Bellmead are in our emergency coverage area." },
    { question: "Are emergency repairs warrantied?", answer: "Yes — our 1-Year Workmanship Warranty applies to emergency repairs we complete." },
  ];

  const crossServices = [
    { icon: faFire, title: "Water Heaters", body: "Tank and tankless repair, flush, and full replacement.", link: "/services/water-heater-repair-install" },
    { icon: faWrench, title: "Fixture Installation", body: "Sinks, toilets, faucets, disposals — installed clean.", link: "/services/fixture-installation" },
    { icon: faSink, title: "Drain Cleaning", body: "Snaking and hydro-jetting for fixture and main lines.", link: "/services/drain-cleaning" },
    { icon: faSearch, title: "Leak Detection", body: "Find slab and supply leaks with minimal demolition.", link: "/services/leak-detection-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Emergency Plumbing" },
      ]} />

      <SectionIntro
        title="Emergency Plumbing in Waco, TX"
        subtitle="Burst pipes, sewage backups, and no-water emergencies — same-day response across Waco and Central Texas. Flat-rate pricing and a 1-Year Workmanship Warranty."
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/emergency-plumbing" title="Emergency Plumbing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Emergency Plumbing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Plumbing Emergency? We're Ready Right Now."
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
          title="Schedule Your Emergency Plumbing Service"
          cityName="Waco"
          slug="services/emergency-plumbing"
          spot="emergency-plumbing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
