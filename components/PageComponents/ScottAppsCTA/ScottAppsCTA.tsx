// components/PageComponents/ScottAppsCTA/ScottAppsCTA.tsx
// Legacy component name retained for import stability — content is ClearFlow Plumbing CTA.
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faDroplet,
  faCheckCircle,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface ScottAppsCTAProps {
  headline?: string;
  subline?: string;
  variant?: 'full' | 'compact';
}

const FEATURES = [
  'Same-day emergency response',
  'Flat-rate written quotes',
  'Licensed Master Plumber · TSBPE',
  '1-Year Workmanship Warranty',
];

const ScottAppsCTA: React.FC<ScottAppsCTAProps> = ({
  headline = 'Need a Plumber You Can Trust?',
  subline = 'ClearFlow Plumbing serves Central Texas homes and businesses with emergency repairs, water heaters, drains, leaks, and sewer lines — flat-rate pricing and no contracts.',
  variant = 'full',
}) => {
  return (
    <section className={`${styles.section} ${variant === 'compact' ? styles.compact : ''}`}>
      <div className={styles.container}>

        <div className={styles.textSide}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className={styles.eyebrow}>
              <FontAwesomeIcon icon={faDroplet} />
              <span>ClearFlow Plumbing — Waco, TX</span>
            </div>

            <h2 className={styles.headline}>{headline}</h2>
            <p className={styles.subline}>{subline}</p>

            <ul className={styles.featureList}>
              {FEATURES.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                  {f}
                </motion.li>
              ))}
            </ul>

            <div className={styles.ctaRow}>
              <a
                href="tel:+12547329100"
                className={styles.btnPrimary}
              >
                Call (254) 732-9100
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <Link href="/contact" className={styles.btnGhost}>
                Request Service Online
              </Link>
            </div>
          </motion.div>
        </div>

        <div className={styles.visualSide}>
          <motion.div
            className={styles.productCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className={styles.cardTop}>
              <FontAwesomeIcon icon={faBolt} className={styles.cardIcon} />
              <span>Emergency Ready</span>
            </div>
            <p className={styles.cardBody}>
              8,000+ jobs · 4.9★ · Same-day response across Waco, Temple, Killeen &amp; Central Texas.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ScottAppsCTA;
