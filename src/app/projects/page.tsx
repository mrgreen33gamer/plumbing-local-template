// src/app/projects/page.tsx
"use client";

import styles from './page.module.scss';

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import ProjectCardGrid from "#/PageComponents/ProjectCardGrid/ProjectCardGrid";
import BeforeAfter from "#/PageComponents/BeforeAfter/BeforeAfter";
import HighlightedProject from "#/PageComponents/HighlightedProject/HighlightedProject";
import CaseStudyGrid from "#/PageComponents/CaseStudyGrid/CaseStudyGrid";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import InsuredBadge from "#/PageComponents/InsuredBadge/InsuredBadge";
import SectionMap from "#/PageComponents/SectionMap/SectionMap";
import Variant1 from "#/PageComponents/ContactForms/Variant1/Form";

import reviews from "&/local-db/reviews";
import ALL_PROJECTS from "&/local-db/projects";

const beforeAfterItems = ALL_PROJECTS
  .filter((p) => p.beforeImage && p.afterImage)
  .map((p) => ({
    beforeSrc: p.beforeImage!.src,
    afterSrc: p.afterImage!.src,
    beforeAlt: p.beforeImage!.alt,
    afterAlt: p.afterImage!.alt,
    clientName: `${p.title} — ${p.location}`,
    result: p.result,
  }));

const caseStudies = [
  {
    title: 'Multi-Unit Make-Ready Program',
    client: 'Waco Property Management',
    location: 'Waco, TX',
    result: 'Recurring Contract',
    description: 'Standing make-ready plumbing for turnovers — toilets, supply lines, water heaters, and drain clears with photo documentation and board-ready invoices.',
    imageSrc: '/projects/gallery/kgh.png',
    imageAlt: 'Multi-unit plumbing make-ready',
    link: '/industries/property-management',
  },
  {
    title: 'Restaurant Grease Line Night Clean',
    client: 'Local Restaurant Group',
    location: 'Temple, TX',
    result: 'Night Shift Clear',
    description: 'After-hours grease-line jetting and fixture check so lunch service opened without backups or odors.',
    imageSrc: '/projects/gallery/jyfhtgb.png',
    imageAlt: 'Restaurant plumbing after service',
    link: '/industries/restaurants-hospitality',
  },
  {
    title: 'Apartment Sewer Lateral Repair',
    client: 'Killeen Multi-Family',
    location: 'Killeen, TX',
    result: 'Backups Stopped',
    description: 'Camera-confirmed collapse repaired with coordinated unit notices and minimal courtyard disruption.',
    imageSrc: '/projects/gallery/htf.png',
    imageAlt: 'Sewer repair at multi-family property',
    link: '/industries/multi-family-housing',
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Our Projects"
        subtitle="Real emergency repairs, water heaters, drains, leaks, and sewer jobs across Central Texas — see what ClearFlow can do for your home or property"
      />

      <div className={styles.section}>
        <HighlightedProject
          title="Woodway Tankless Water Heater Upgrade"
          description="15-year tank replaced with a properly sized gas tankless unit in one day — venting, gas line, and isolation valves done to code with hot water restored by evening."
          imageSrc="/projects/gallery/5.png"
          imageAlt="Woodway tankless water heater after install"
          projectLink="/contact"
          projectLinkLabel="Get Results Like This"
          ctaLink="/services/water-heater-repair-install"
          ctaLabel="Water Heater Details"
          tag="Flagship Job"
        />
      </div>

      {beforeAfterItems.length > 0 && (
        <div className={styles.section}>
          <BeforeAfter
            title="Before & After — Real Results"
            subtitle="Drag the slider to see the transformation — problem to fixed, side by side."
            items={beforeAfterItems}
          />
        </div>
      )}

      <div className={styles.section}>
        <ProjectCardGrid
          title="Selected Jobs"
          subtitle="Emergency repairs, water heaters, drains, leaks, sewers, and fixtures across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <CaseStudyGrid
          title="Commercial Case Studies"
          studies={caseStudies}
        />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <InsuredBadge variant="section" ctaLink="/contact" />
      </div>

      <div className={styles.section}>
        <SectionMap />
      </div>

      <div className={styles.section}>
        <Variant1
          title="Want Results Like These for Your Property?"
          cityName="Waco"
          slug="projects"
          spot="projects-page"
          formVariant={1}
        />
      </div>
    </main>
  );
}
