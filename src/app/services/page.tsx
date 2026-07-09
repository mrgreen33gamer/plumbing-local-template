// ClearFlow Plumbing — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faBolt, faFire, faWrench, faSink, faSearch, faToilet,
  faTrophy, faChartLine, faClock,
  faHeadset, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Burst pipes, sewage backups, and no-water emergencies — same-day response 7 days a week.", link: "/services/emergency-plumbing" },
    { icon: faFire, title: "Water Heater Repair & Install", body: "Tank and tankless repair, flush, and full replacement with flat-rate installed pricing.", link: "/services/water-heater-repair-install" },
    { icon: faWrench, title: "Fixture Installation", body: "Sinks, toilets, faucets, disposals, and shower valves — clean installs that last.", link: "/services/fixture-installation" },
    { icon: faSink, title: "Drain Cleaning", body: "Snaking and hydro-jetting for fixtures and main lines — clear clogs the right way.", link: "/services/drain-cleaning" },
    { icon: faSearch, title: "Leak Detection & Repair", body: "Slab leaks, supply drips, and mystery high water bills found and fixed with minimal demo.", link: "/services/leak-detection-repair" },
    { icon: faToilet, title: "Sewer Line Repair", body: "Camera inspection, trenchless options when possible, dig-and-replace when needed.", link: "/services/sewer-line-repair" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Diagnosis First", description: "We explain what's wrong in plain English and show options — not just the most expensive fix." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing, no surprise add-ons. You approve the price before we start." },
    { icon: faShieldHalved, title: "Licensed Master Plumber · TSBPE", description: "Every plumber is TSBPE-licensed. Bonded and insured on every job." },
    { icon: faTag, title: "1-Year Workmanship Warranty", description: "Every job is backed by our 1-Year Workmanship Warranty." },
  ];

  const metrics = [
    { icon: faTrophy, value: 8000, label: "Plumbing jobs completed since 2009", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real ClearFlow team member — not a call center. Same-day dispatch most days." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "There's no subscription or service agreement required. You hire us because the work is done right." },
    { icon: faLock, title: "Licensed, Bonded & Insured", description: "TSBPE-licensed and fully insured. Proof of insurance available on request for property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. We'll schedule same-day or next-day when possible.", icon: faHeadset },
    { number: 2, title: "Diagnose On-Site", description: "Licensed plumber inspects and explains findings in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Complete & Warranty", description: "Quality materials, clean work, 1-Year Workmanship Warranty on every job.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay — no hourly billing." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Every job is backed for one year. If our workmanship fails, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the result? We'll return to make it right." },
    { icon: faLock, title: "Licensed, Bonded & Insured", description: "Licensed Master Plumber · TSBPE. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available plumbers.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and businesses.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "1-Year Workmanship Warranty", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "Licensed Master Plumber · TSBPE", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Same-day emergency service", us: "✅ 7 days/week", others: "❌ Business hours only" },
  ];

  const faq = [
    { question: "How much does plumbing service cost in Waco?", answer: "Repairs typically range from $150–$650. Drain cleaning runs $150–$400. Water heater replacements often $1,200–$3,500 for tanks. We always provide a flat-rate written quote before starting." },
    { question: "Are you TSBPE-licensed?", answer: "Yes — ClearFlow Plumbing is TSBPE-licensed, bonded, and insured. License number available on request." },
    { question: "Do you offer emergency service?", answer: "Yes — emergency plumbing service 7 days a week including evenings. Call (254) 732-9100." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — every job is backed by our 1-Year Workmanship Warranty." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule an assessment and provide written pricing before any work starts." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Plumbing Services for Waco & Central Texas"
        subtitle="Emergency plumbing, water heaters, fixtures, drains, leaks, and sewer lines — done right, priced upfront, backed by a 1-Year Workmanship Warranty."
      />
      <TrustBar headline="Trusted by 8,000+ Central Texas homes and businesses since 2009" />
      <div className={styles.section}><ServiceCardComponent heading="What We Do" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses ClearFlow" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Plumbing Service FAQs" /></div>
      <CTABanner
        headline="Ready to Start Your Plumbing Project?"
        subline="Same-day service available. Flat-rate pricing, 1-Year Workmanship Warranty, no contracts ever."
        primaryText="Call (254) 732-9100"
        primaryLink="tel:+12547329100"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request Service or a Free Quote" cityName="Waco" slug="services" spot="services-page-form" formVariant={2} />
      </div>
    </>
  );
}
