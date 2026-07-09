import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/sewer-line-repair';

export const metadata: Metadata = {
  title: "Sewer Line Repair Waco TX | Camera & Trenchless Options | ClearFlow",
  description: "Sewer line repair in Waco TX. Camera inspection, trenchless options when possible, dig-and-replace when needed. Licensed Master Plumber, flat-rate quotes.",
  keywords: [
    "sewer line repair Waco TX",
    "plumber Waco",
    "sewer line repair Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Sewer Line Repair Waco TX | Camera & Trenchless Options | ClearFlow",
    description: "Sewer line repair in Waco TX. Camera inspection, trenchless options when possible, dig-and-replace when needed. Licensed Master Plumber, flat-rate quotes.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewer Line Repair Waco TX | Camera & Trenchless Options | ClearFlow",
    description: "Sewer line repair in Waco TX. Camera inspection, trenchless options when possible, dig-and-replace when needed. Licensed Master Plumber, flat-rate quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Repair",
  description: "Sewer line repair in Waco TX. Camera inspection, trenchless options when possible, dig-and-replace when needed. Licensed Master Plumber, flat-rate quotes.",
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
  serviceType: "Sewer Line Repair",
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
