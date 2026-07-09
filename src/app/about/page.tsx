// ClearFlow Plumbing — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2009",
      description: "ClearFlow was founded in Waco by Marcus Hale, a Waco native and Licensed Master Plumber with 20+ years in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every plumber on our team is background-checked, TSBPE-licensed, and bonded & insured. We treat every home we enter with the same respect we'd want for our own families — shoe covers, clean workspace, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full re-pipe when a simple repair will do. We won't cut corners on code to save an afternoon. Our reputation is built on straight talk — and 17 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 8000, label: "Plumbing jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 17,   label: "Years serving Central Texas families",           suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Diagnose Honestly", description: "A Licensed Master Plumber inspects the issue and explains options in plain English — not just the most expensive one.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Done Right, Warrantied", description: "Quality materials, clean workmanship, 1-Year Workmanship Warranty on every job.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About ClearFlow Plumbing"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2009. We do honest plumbing work at fair prices for the families and businesses we've called neighbors for 17 years."
      />

      <TrustBar headline="8,000+ Central Texas homes and businesses trust ClearFlow — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="17 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Plumbing Company — Ready When You Need Us"
        subline="Same-day and emergency service. Flat-rate pricing. 1-Year Workmanship Warranty. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547329100"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
