import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/fixture-installation';

export const metadata: Metadata = {
  title: "Fixture Installation Waco TX | Sinks, Toilets, Faucets | ClearFlow",
  description: "Professional plumbing fixture installation in Waco TX — sinks, toilets, faucets, disposals, and shower valves. Flat-rate pricing, Licensed Master Plumber.",
  keywords: [
    "fixture installation Waco TX",
    "plumber Waco",
    "fixture installation Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Fixture Installation Waco TX | Sinks, Toilets, Faucets | ClearFlow",
    description: "Professional plumbing fixture installation in Waco TX — sinks, toilets, faucets, disposals, and shower valves. Flat-rate pricing, Licensed Master Plumber.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixture Installation Waco TX | Sinks, Toilets, Faucets | ClearFlow",
    description: "Professional plumbing fixture installation in Waco TX — sinks, toilets, faucets, disposals, and shower valves. Flat-rate pricing, Licensed Master Plumber.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fixture Installation",
  description: "Professional plumbing fixture installation in Waco TX — sinks, toilets, faucets, disposals, and shower valves. Flat-rate pricing, Licensed Master Plumber.",
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
  serviceType: "Fixture Installation",
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
