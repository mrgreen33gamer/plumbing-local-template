// src/app/services/layout.tsx
// ClearFlow Plumbing — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Plumbing Services | Emergency, Water Heaters, Drains & More | ClearFlow",
  description:
    "ClearFlow Plumbing offers emergency plumbing, water heater repair & install, fixture installation, drain cleaning, leak detection, and sewer line repair for Waco and Central Texas. Licensed Master Plumber, TSBPE, 1-Year Workmanship Warranty.",
  keywords: [
    "plumber Waco TX",
    "plumbing services Waco",
    "emergency plumber Central Texas",
    "water heater repair Waco TX",
    "drain cleaning contractor Texas",
    "sewer line repair Waco",
    "TSBPE licensed plumber Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Plumbing Services | ClearFlow Plumbing",
    description:
      "Emergency plumbing, water heaters, fixtures, drains, leaks, and sewer lines for Waco and Central Texas. Licensed Master Plumber, 1-Year Workmanship Warranty.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Services | ClearFlow Plumbing",
    description: "Emergency plumbing, water heaters, drains & more for Central Texas. Licensed Master Plumber.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "ClearFlow Plumbing — Plumbing Services",
  description:
    "Residential and commercial plumbing services for Waco and Central Texas: emergency plumbing, water heaters, fixtures, drains, leak detection, and sewer lines.",
  provider: {
    "@type": "Plumber",
    name: "ClearFlow Plumbing",
    url: BASE_URL,
    telephone: "+12547329100",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing", url: `${BASE_URL}/services/emergency-plumbing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair & Install", url: `${BASE_URL}/services/water-heater-repair-install` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fixture Installation", url: `${BASE_URL}/services/fixture-installation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning", url: `${BASE_URL}/services/drain-cleaning` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection & Repair", url: `${BASE_URL}/services/leak-detection-repair` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair", url: `${BASE_URL}/services/sewer-line-repair` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
