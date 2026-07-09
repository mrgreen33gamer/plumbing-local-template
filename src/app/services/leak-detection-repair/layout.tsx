import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/leak-detection-repair';

export const metadata: Metadata = {
  title: "Leak Detection & Repair Waco TX | Slab Leaks | ClearFlow Plumbing",
  description: "Leak detection and repair in Waco TX. Slab leaks, supply lines, and hidden moisture found and fixed by Licensed Master Plumbers. Flat-rate quotes.",
  keywords: [
    "leak detection Waco TX",
    "plumber Waco",
    "leak detection & repair Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Leak Detection & Repair Waco TX | Slab Leaks | ClearFlow Plumbing",
    description: "Leak detection and repair in Waco TX. Slab leaks, supply lines, and hidden moisture found and fixed by Licensed Master Plumbers. Flat-rate quotes.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leak Detection & Repair Waco TX | Slab Leaks | ClearFlow Plumbing",
    description: "Leak detection and repair in Waco TX. Slab leaks, supply lines, and hidden moisture found and fixed by Licensed Master Plumbers. Flat-rate quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection & Repair",
  description: "Leak detection and repair in Waco TX. Slab leaks, supply lines, and hidden moisture found and fixed by Licensed Master Plumbers. Flat-rate quotes.",
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
  serviceType: "Leak Detection & Repair",
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
