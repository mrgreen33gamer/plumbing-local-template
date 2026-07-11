// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcus Hale",
  jobTitle: "Owner & Licensed Master Plumber",
  worksFor: {
    "@type": "Organization",
    name: "ClearFlow Plumbing",
    url: "https://www.clearflowplumbingtx.com",
  },
  url: "https://www.clearflowplumbingtx.com/about",
  sameAs: [
    "https://www.facebook.com/clearflowplumbingtx",
    "https://www.clearflowplumbingtx.com",
  ],
  knowsAbout: [
    "Emergency Plumbing", "Water Heater Repair & Install", "Drain Cleaning",
    "Leak Detection", "Sewer Line Repair", "Central Texas Plumbing Code",
  ],
  description:
    "Owner of ClearFlow Plumbing in Waco, TX. Licensed Master Plumber with 17+ years serving Central Texas homes and businesses. Flat-rate pricing, 1-Year Workmanship Warranty.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/home/welcome/hero-main.jpg",
  imageAlt = "Marcus Hale - Owner of ClearFlow Plumbing",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Verified Owner</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Owner & Licensed Master Plumber · ClearFlow Plumbing</p>
          <h2 className={styles.title}>Marcus Hale</h2>

          <p className={styles.description}>
            17+ years as a Licensed Master Plumber serving Central Texas
            homes and businesses. Based in <strong>Waco, TX</strong> — serving{" "}
            <strong>{cityName}</strong> and the surrounding region. Every job is
            flat-rate, warrantied, and done right the first time.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>Licensed Master Plumber · TSBPE</li>
            <li>Emergency plumbing, water heaters, drains, leaks &amp; sewers</li>
            <li>8,000+ plumbing jobs completed across Central Texas</li>
            <li>Bonded, insured, 1-Year Workmanship Warranty on every job</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real local data &amp; 2026 Texas plumbing code
          </p>

          <div className={styles.footer}>
            <a
              href="https://www.facebook.com/clearflowplumbingtx"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="Connect with ClearFlow Plumbing on Facebook"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'Connect on Facebook',
                section:      'AuthorBio',
              })}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
              Follow on Facebook
            </a>

            <div className={styles.badges}>
              <span className={styles.badge}>17+ Years</span>
              <span className={styles.badge}>4.9 ★ Rated</span>
              <span className={styles.badge}>Waco, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
