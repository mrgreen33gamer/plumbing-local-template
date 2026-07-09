import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/emergency-plumbing';

export const metadata: Metadata = {
  title: "Emergency Plumber Waco TX | Same-Day Response | ClearFlow Plumbing",
  description: "Same-day emergency plumbing in Waco and Central Texas. Burst pipes, backups, no water — flat-rate pricing, Licensed Master Plumber, TSBPE, 1-Year Workmanship Warranty.",
  keywords: [
    "emergency plumbing Waco TX",
    "plumber Waco",
    "emergency plumbing Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Emergency Plumber Waco TX | Same-Day Response | ClearFlow Plumbing",
    description: "Same-day emergency plumbing in Waco and Central Texas. Burst pipes, backups, no water — flat-rate pricing, Licensed Master Plumber, TSBPE, 1-Year Workmanship Warranty.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Plumber Waco TX | Same-Day Response | ClearFlow Plumbing",
    description: "Same-day emergency plumbing in Waco and Central Texas. Burst pipes, backups, no water — flat-rate pricing, Licensed Master Plumber, TSBPE, 1-Year Workmanship Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing",
  description: "Same-day emergency plumbing in Waco and Central Texas. Burst pipes, backups, no water — flat-rate pricing, Licensed Master Plumber, TSBPE, 1-Year Workmanship Warranty.",
  provider: {
    "@type": "Plumber",
    name: "ClearFlow Plumbing",
    url: BASE_URL,
    telephone: "+12547329100",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1401 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Emergency Plumbing",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
