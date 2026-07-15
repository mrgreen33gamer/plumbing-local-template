// Plumbing Hero — ClearFlow (clean water editorial)
// Photographic parallax stage + an authentic plumber photo card replaces the
// masonry collage. Real imagery, ocean-teal scrim, Fraunces headline.
// Background + card photos live in /public/pages/home/welcome (sourced real
// plumbing photography). Pattern mirrors the approved HVAC pilot hero.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

  const badgeText = "Waco's Most Trusted Plumber — Since 2009";
  const headlineLines = ['Fast. Licensed.', 'Guaranteed.'];
  const headlineAccent = 'ClearFlow.';
  const subheadline =
    'Flat-rate pricing. Same-day emergency response. 1-Year Workmanship Warranty. Serving Waco and Central Texas with Licensed Master Plumbers.';
  const primaryCta = { label: 'Call (254) 732-9100', href: 'tel:+12547329100' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Same-Day Service', 'No Contracts', 'TSBPE Licensed', '17+ Yrs Local', '1-Yr Warranty'];
  const metrics = [
    { value: '8,000+', label: 'Jobs done' },
    { value: '4.9★', label: 'Google rating' },
    { value: '17+', label: 'Years local' },
    { value: '1-Yr', label: 'Warranty' },
  ];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real plumbing scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-scene.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Ocean-teal scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {subheadline}
          </motion.p>

          {/* Horizontal metric bar — unique layout vs HVAC/Electrical cards */}
          <motion.div
            className={styles.metricBar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            {metrics.map((m) => (
              <div key={m.label} className={styles.metricItem}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.46 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic plumber photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-plumber.jpg"
              alt="Uniformed plumber tightening a threaded pipe fitting with a wrench"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 520px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Master Plumber · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Flat-rate, upfront pricing
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Same-day emergency response
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
