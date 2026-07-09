import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/services/drain-cleaning';

export const metadata: Metadata = {
  title: "Drain Cleaning Waco TX | Snaking & Hydro-Jetting | ClearFlow Plumbing",
  description: "Professional drain cleaning in Waco TX. Kitchen, bath, and main-line clogs cleared with snaking or hydro-jetting. Flat-rate pricing, same-day options.",
  keywords: [
    "drain cleaning Waco TX",
    "plumber Waco",
    "drain cleaning Central Texas",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Drain Cleaning Waco TX | Snaking & Hydro-Jetting | ClearFlow Plumbing",
    description: "Professional drain cleaning in Waco TX. Kitchen, bath, and main-line clogs cleared with snaking or hydro-jetting. Flat-rate pricing, same-day options.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Cleaning Waco TX | Snaking & Hydro-Jetting | ClearFlow Plumbing",
    description: "Professional drain cleaning in Waco TX. Kitchen, bath, and main-line clogs cleared with snaking or hydro-jetting. Flat-rate pricing, same-day options.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning",
  description: "Professional drain cleaning in Waco TX. Kitchen, bath, and main-line clogs cleared with snaking or hydro-jetting. Flat-rate pricing, same-day options.",
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
  serviceType: "Drain Cleaning",
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
