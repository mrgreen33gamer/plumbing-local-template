// ClearFlow Plumbing — Fixture Installation Service Page
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
    { icon: faSearch, title: "Scope Confirmed On Arrival", description: "We verify rough-in, supply, and drain condition before installing so you're not surprised mid-job." },
    { icon: faFileContract, title: "Clear Fixture Package Pricing", description: "Labor and connection costs are written up front. Customer-supplied or we-source fixtures — your choice." },
    { icon: faCheckCircle, title: "Clean Cabinets & Finishes", description: "No scratched countertops, no leaking supply lines, no half-sealed wax rings left for next week." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "If our install leaks or fails, we come back and make it right." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Remodel & Punch-List Ready", description: "We coordinate with GCs and homeowners for tight remodel schedules." },
    { icon: faWrench, title: "Kitchen, Bath & Laundry", description: "Toilets, vanities, kitchen sinks, disposals, dishwasher hookups, shower valves, and more." },
    { icon: faShieldHalved, title: "Licensed & Insured Crews", description: "TSBPE-licensed plumbers — not handymen guessing at traps and shutoffs." },
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
    { question: "Can I buy my own fixtures?", answer: "Yes — many homeowners supply fixtures. We inspect them on arrival and install to manufacturer specs." },
    { question: "How much does toilet installation cost?", answer: "Most toilet installs range $200–$450 labor depending on flange condition and supply updates. We quote before starting." },
    { question: "Do you install garbage disposals?", answer: "Yes — including electrical coordination notes and proper drain connections." },
    { question: "Can you replace a shower valve behind the tile?", answer: "Often yes. Access may require limited tile or drywall work — we explain options before cutting." },
    { question: "Do you install fixture packages for new builds or remodels?", answer: "Yes — kitchens and baths are a core part of our fixture install work." },
    { question: "Is fixture install warrantied?", answer: "Yes — 1-Year Workmanship Warranty on our labor and connections." },
  ];

  const crossServices = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Same-day response for bursts, backups, and no-water emergencies.", link: "/services/emergency-plumbing" },
    { icon: faFire, title: "Water Heaters", body: "Tank and tankless repair, flush, and full replacement.", link: "/services/water-heater-repair-install" },
    { icon: faSink, title: "Drain Cleaning", body: "Snaking and hydro-jetting for fixture and main lines.", link: "/services/drain-cleaning" },
    { icon: faSearch, title: "Leak Detection", body: "Find slab and supply leaks with minimal demolition.", link: "/services/leak-detection-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Fixture Installation" },
      ]} />

      <SectionIntro
        title="Fixture Installation in Waco, TX"
        subtitle="Professional fixture installation for kitchens, baths, and laundry rooms across Central Texas. Proper seals, shutoffs, and finish work that lasts."
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/fixture-installation" title="Fixture Installation Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Fixture Installation FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Sinks, Toilets, Faucets & More — Installed Clean."
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
          title="Schedule Your Fixture Installation Service"
          cityName="Waco"
          slug="services/fixture-installation"
          spot="fixture-installation-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
