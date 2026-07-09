import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/water-heater-repair-install';

export const metadata: Metadata = {
  title: "Water Heater Repair & Install Waco TX | Tank & Tankless | ClearFlow",
  description: "Water heater repair and installation in Waco TX. Tank and tankless, flat-rate pricing, Licensed Master Plumber, same-day options when available.",
  keywords: [
    "water heaters Waco TX",
    "plumber Waco",
    "water heater repair & install Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Water Heater Repair & Install Waco TX | Tank & Tankless | ClearFlow",
    description: "Water heater repair and installation in Waco TX. Tank and tankless, flat-rate pricing, Licensed Master Plumber, same-day options when available.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Repair & Install Waco TX | Tank & Tankless | ClearFlow",
    description: "Water heater repair and installation in Waco TX. Tank and tankless, flat-rate pricing, Licensed Master Plumber, same-day options when available.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair & Install",
  description: "Water heater repair and installation in Waco TX. Tank and tankless, flat-rate pricing, Licensed Master Plumber, same-day options when available.",
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
  serviceType: "Water Heater Repair & Install",
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
