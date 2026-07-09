// Plumbing Hero — Light Editorial + Photo Collage
// Soft white/blue wash (not dark full-bleed). Masonry photo stack on the right.
// Water-drop particles. Horizontal trust metrics under headline.
// Distinct from HVAC (climate command) and Electrical (live panel dial).
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function WaterCanvas({ color = '#2563eb' }: { color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    const drops = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3.5 + 1.2,
      vy: Math.random() * 0.9 + 0.35,
      o: Math.random() * 0.25 + 0.12,
    }));
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((d) => {
        ctx.save();
        ctx.globalAlpha = d.o;
        // teardrop shape
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y - d.r * 1.6);
        ctx.bezierCurveTo(
          d.x + d.r * 1.2,
          d.y - d.r * 0.2,
          d.x + d.r * 1.1,
          d.y + d.r,
          d.x,
          d.y + d.r * 1.3
        );
        ctx.bezierCurveTo(
          d.x - d.r * 1.1,
          d.y + d.r,
          d.x - d.r * 1.2,
          d.y - d.r * 0.2,
          d.x,
          d.y - d.r * 1.6
        );
        ctx.fill();
        ctx.restore();
        d.y += d.vy;
        if (d.y > canvas.height + 20) {
          d.y = -20;
          d.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [color]);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

const COLLAGE = [
  {
    src: '/pages/home/welcome/hero-main.jpg',
    alt: 'Licensed plumber repairing a kitchen sink',
    className: 'tileMain',
    label: 'Emergency ready',
  },
  {
    src: '/pages/home/welcome/hero-pipes.jpg',
    alt: 'Copper plumbing pipes',
    className: 'tileSide',
    label: 'Pipe work',
  },
  {
    src: '/pages/home/welcome/hero-faucet.jpg',
    alt: 'Modern bathroom faucet install',
    className: 'tileSide',
    label: 'Fixtures',
  },
];

export default function WelcomePage() {
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
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.wash} aria-hidden="true" />
      <WaterCanvas color="#0d9488" />

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

        {/* Masonry photo collage */}
        <motion.div
          className={styles.collage}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
        >
          <div className={styles.collageGrid}>
            {COLLAGE.map((tile, i) => (
              <motion.figure
                key={tile.label}
                className={`${styles.tile} ${styles[tile.className as 'tileMain' | 'tileSide']}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              >
                <img src={tile.src} alt={tile.alt} className={styles.tileImg} />
                <figcaption className={styles.tileCaption}>{tile.label}</figcaption>
              </motion.figure>
            ))}
          </div>
          <div className={styles.collageNote}>
            <span className={styles.noteDot} />
            Licensed Master Plumbers · Central Texas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
