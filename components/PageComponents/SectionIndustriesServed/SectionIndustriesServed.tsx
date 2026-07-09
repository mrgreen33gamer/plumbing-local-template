// components\PageComponents\SectionIndustriesServed\SectionIndustriesServed.tsx
// components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUtensils,
  faCity,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

// ── INDUSTRY DATA ────────────────────────────────────────────────────────────
// Each entry maps to an existing /industries/* route.
const INDUSTRIES = [
  { slug: 'property-management',     label: 'Property Management',     icon: faBuilding },
  { slug: 'restaurants-hospitality', label: 'Restaurants & Hospitality', icon: faUtensils },
  { slug: 'multi-family-housing',    label: 'Multi-Family Housing',    icon: faCity },
];

interface SectionIndustriesServedProps {
  /** Optional override headline */
  title?: string;
  /** Optional override subheadline */
  subtitle?: string;
  /**
   * When true the cards are NOT wrapped in <Link> tags.
   * Useful if you embed this component inside an industry page itself
   * and don't want the active industry linking to itself.
   * Default: false (links enabled).
   */
  disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Industries We Serve Across Central Texas',
  subtitle = 'Plumbing programs built for how your organization actually works.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>

      {/* ── HEADER ── */}
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>

      {/* ── INDUSTRY CARDS GRID ── */}
      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <span className={styles.industryLabel}>{label}</span>
              {!disableLinks && (
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
              )}
            </div>
          );

          return disableLinks ? (
            card
          ) : (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className={styles.cardLink}
              aria-label={`Learn about our ${label} industry services`}
            >
              {card}
            </Link>
          );
        })}
      </div>

    </section>
  );
}