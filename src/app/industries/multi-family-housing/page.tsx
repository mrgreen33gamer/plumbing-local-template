"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faBolt, faFire, faWrench, faSink,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Reactive plumbing tickets eat the maintenance budget", consequence: "Without a planned program, every clog and water heater failure hits as an emergency rate instead of a forecastable expense." },
    { icon: faFileInvoiceDollar, problem: "Surprise CapEx on water heaters and sewer lines", consequence: "Aging tanks and laterals fail without a multi-unit plan — one large invoice instead of phased replacement." },
    { icon: faUsers, problem: "Tenants disrupted by no-show plumbers", consequence: "Missed access windows create complaints to the office that reliable scheduling would have avoided." },
    { icon: faBuilding, problem: "Inconsistent quality across units", consequence: "Rotating freelancers leave uneven fixture installs and temporary patches — a liability at inspection and sale." },
    { icon: faClipboardList, problem: "No single vendor for multi-property work", consequence: "Coordinating separate quotes for each building wastes management time." },
    { icon: faHandshake, problem: "Vendors who don't understand commercial timelines", consequence: "Access notices, owner approvals, and after-hours windows all move differently than residential DIY schedules." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Friendly Scheduling", description: "We plan make-ready and CapEx around your turnover calendar and after-hours windows." },
    { icon: faFileInvoiceDollar, title: "Locked Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes so ownership sees predictable numbers." },
    { icon: faUsers, title: "Tenant-Aware Crews", description: "On-time access, shoe covers, and clear communication so your office isn't fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk units/common areas, document priorities, and flag risk.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-unit pricing and a schedule synced to turnovers and CapEx cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move unit-by-unit with consistent quality and documentation.", icon: faRocket },
    { number: 4, title: "Standing Response", description: "Optional standing service so plumbing tickets stay on a plan.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "Multi-unit properties serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25, label: "Commercial accounts on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 17, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit plumbing planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated project lead", others: "❌ Different tech each time" },
    { feature: "After-hours commercial work", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "Licensed Master Plumber · TSBPE", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers and multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common areas, restaurants, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule plumbing make-ready around your turnover calendar and can often turn units same-week." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you handle restaurant grease lines after hours?", answer: "Yes — we schedule kitchen and grease-line work outside peak service hours when needed." },
    { question: "What areas do you cover for commercial work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faBolt, title: "Emergency Plumbing", body: "Fast response for bursts, backups, and unit floods.", link: "/services/emergency-plumbing" },
    { icon: faFire, title: "Water Heaters", body: "CapEx tank and tankless replacements across units.", link: "/services/water-heater-repair-install" },
    { icon: faWrench, title: "Fixture Installation", body: "Make-ready toilets, sinks, and faucet packages.", link: "/services/fixture-installation" },
    { icon: faSink, title: "Drain Cleaning", body: "Unit and main-line clears for recurring clogs.", link: "/services/drain-cleaning" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and commercial plumbing work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Residential PM coverage on our regular route.", badge: "" },
    { town: "Woodway", benefit: "Premium SFH rental portfolios.", badge: "" },
    { town: "Bellmead", benefit: "Multi-unit and light commercial properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Multi-Family Housing" }]} />
      <SectionIntro title="Plumbing for Multi-Family Housing" subtitle="Apartments, duplexes, and mixed-use residential — consistent crews, predictable pricing, camera-backed sewer work." />
      <TrustBar headline="Trusted by Central Texas property and commercial operators for reliable plumbing" />
      <div className={styles.section}><IndustryPainPoints industry="multi-family housing" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Your Operation" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Operators Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/multi-family-housing" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Multi-Family Housing FAQs" /></div>
      <CTABanner headline="Need a Reliable Plumbing Vendor?" subline="Multi-unit pricing, COIs on request, Licensed Master Plumber · TSBPE." primaryText="Call Us Now" primaryLink="tel:+12547329100" secondaryText="Request a Proposal" secondaryLink="/contact" />
      <div className={styles.section}><Variant4 title="Talk to Us About Your Properties" cityName="Waco" slug="industries/multi-family-housing" spot="multi-family-housing-industry-form" formVariant={2} /></div>
    </main>
  );
}
