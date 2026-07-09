// src/app/layout.tsx
// ClearFlow Plumbing — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — Fraunces / Figtree / Nunito Sans (clean water editorial) ──────────
const fontTitle = Fraunces({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Figtree({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Nunito_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.clearflowplumbingtx.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c4a6e" },
    { media: "(prefers-color-scheme: dark)",  color: "#0c4a6e" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ClearFlow Plumbing | Emergency Plumbing, Water Heaters & Drain Cleaning — Waco, TX",
    template: "%s | ClearFlow Plumbing",
  },
  description:
    "ClearFlow Plumbing is a Waco, TX plumbing company offering emergency plumbing, water heater repair & install, fixture installation, drain cleaning, leak detection, and sewer line repair for Central Texas homes and businesses. Licensed Master Plumber, TSBPE, bonded & insured.",
  keywords: [
    "ClearFlow Plumbing",
    "plumber Waco TX",
    "emergency plumber Waco Texas",
    "water heater repair Waco",
    "drain cleaning Central Texas",
    "leak detection Waco TX",
    "sewer line repair Hewitt TX",
    "fixture installation Waco",
    "same-day plumber Waco",
  ],
  authors: [{ name: "ClearFlow Plumbing", url: BASE_URL }],
  creator: "ClearFlow Plumbing",
  publisher: "ClearFlow Plumbing",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "ClearFlow Plumbing | Emergency Plumbing, Water Heaters & Drain Cleaning — Waco, TX",
    description:
      "Waco-based plumbing company for emergency repairs, water heaters, drains, leaks, and sewer lines across Central Texas. Licensed Master Plumber · TSBPE · Bonded & Insured.",
    url: BASE_URL,
    siteName: "ClearFlow Plumbing",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "ClearFlow Plumbing — Waco TX Plumbing Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearFlow Plumbing | Waco TX Plumbing Experts",
    description:
      "Emergency plumbing, water heaters, drain cleaning & sewer repair for Central Texas. Licensed Master Plumber — same-day response.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${BASE_URL}/#organization`,
  name: "ClearFlow Plumbing",
  alternateName: "ClearFlow Plumbing Waco",
  description:
    "Residential and commercial plumbing services in Waco and Central Texas — emergency plumbing, water heater repair & install, fixture installation, drain cleaning, leak detection & repair, and sewer line repair. Licensed Master Plumber, TSBPE, bonded & insured, 1-Year Workmanship Warranty + same-day emergency response.",
  url: BASE_URL,
  telephone: "+12547329100",
  email: "hello@clearflowplumbingtx.com",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "Marcus Hale",
    jobTitle: "Owner & Licensed Master Plumber",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1401 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Repair & Install" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fixture Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection & Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/clearflowplumbingtx",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#0d9488" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#f0f9ff",
                }}
              >
                <PulseLoader size={50} color="#0d9488" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
