// ClearFlow Plumbing — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBolt, faFire, faWrench, faSink, faSearch, faToilet,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faBolt,
      title: "Emergency Plumbing",
      body: "Burst pipes, sewage backups, no water — same-day emergency response 7 days a week. We stop the damage first, then fix it right.",
      link: "/services/emergency-plumbing",
      image: "/pages/home/services/emergency.jpg",
    },
    {
      icon: faFire,
      title: "Water Heater Repair & Install",
      body: "Tank and tankless repair, flush, and full replacement. Flat-rate quotes, code-compliant install, hot water restored fast.",
      link: "/services/water-heater-repair-install",
      image: "/pages/home/services/water-heater.jpg",
    },
    {
      icon: faWrench,
      title: "Fixture Installation",
      body: "Sinks, toilets, faucets, disposals, and shower valves — clean installs with proper seals, shutoffs, and no cabinet damage.",
      link: "/services/fixture-installation",
      image: "/pages/home/services/fixture.jpg",
    },
    {
      icon: faSink,
      title: "Drain Cleaning",
      body: "Snaking and hydro-jetting for sinks, tubs, and main lines. We clear the clog and help keep it from coming back.",
      link: "/services/drain-cleaning",
      image: "/pages/home/services/drain.jpg",
    },
    {
      icon: faSearch,
      title: "Leak Detection & Repair",
      body: "Slab leaks, supply-line drips, and hidden moisture found with modern detection — then repaired with minimal disruption.",
      link: "/services/leak-detection-repair",
      image: "/pages/home/services/pipes.jpg",
    },
    {
      icon: faToilet,
      title: "Sewer Line Repair",
      body: "Camera inspection, trenchless options when possible, and full dig-and-replace when needed — honest recommendations either way.",
      link: "/services/sewer-line-repair",
      image: "/pages/home/services/repipe.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Plumbing jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 17,   label: "Years of local plumbing experience",            suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                  suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we open a wall or dig a trench. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Master Plumber · TSBPE",
      description: "Every plumber on our crew works under a TSBPE license and a bonded, insured contractor. No unlicensed freelancers.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2009",
      description: "We're not a franchise. ClearFlow was founded in Waco by Marcus Hale, a Licensed Master Plumber. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Diagnose On-Site",
      description: "A licensed plumber inspects the issue, explains it in plain English, and shows you options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warrantied",
      description: "Quality materials, clean workmanship, 1-Year Workmanship Warranty on every job. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Plumbing Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, shoes covered, work area protected, home left exactly as we found it. Every single job.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Code-Compliant Materials",
      description: "We install fixtures and fittings that meet current code — no gray-market shortcuts, no temporary patches sold as permanent fixes.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available plumbers in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",           badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",                    badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                       badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",           badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",                badge: "" },
  ];

  const faq = [
    {
      question: "How much does plumbing service cost in Waco?",
      answer: "Most repairs range from $150–$650 depending on the issue. Drain cleaning typically runs $150–$400. Water heater replacements often $1,200–$3,500 for tank units. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day and emergency plumbing service is available 7 days a week including evenings. Call us at (254) 732-9100 anytime.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most repair calls are same-day or next-day. Larger jobs (water heater swaps, sewer repairs) are typically scheduled within a few days depending on permits and material lead time.",
    },
    {
      question: "What plumbing services do you offer?",
      answer: "Emergency plumbing, water heater repair & install, fixture installation, drain cleaning, leak detection & repair, and sewer line repair.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — ClearFlow Plumbing is TSBPE-licensed, bonded, and insured. Work is performed by Licensed Master Plumbers. License number available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — every job is backed by our 1-Year Workmanship Warranty covering labor and installation defects, plus same-day emergency response when you need us.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted plumbing company — Licensed Master Plumber, TSBPE, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Plumbing Services for Your Home"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes ClearFlow Different"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <CTABanner
        headline="Burst Pipe? Clogged Drain? We're Ready Right Now."
        subline="Same-day appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Flat-rate pricing. 1-Year Workmanship Warranty."
        primaryText="Call (254) 732-9100"
        primaryLink="tel:+12547329100"
        secondaryText="Free Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="services"
          title="Plumbing Across Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="What to Expect on Every Visit"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Plumbing Service FAQs" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
