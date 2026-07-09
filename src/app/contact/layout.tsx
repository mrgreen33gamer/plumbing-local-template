// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact ClearFlow Plumbing | Schedule Service in Waco & Central Texas',
  description:
    'Contact ClearFlow Plumbing to schedule plumbing repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 732-9100.',
  keywords: [
    'contact ClearFlow Plumbing',
    'plumbing service Waco TX',
    'schedule plumbing repair Waco',
    'plumbing estimate Central Texas',
    'ClearFlow contact',
    '254-732-9100',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact ClearFlow Plumbing | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, 1-Year Workmanship Warranty, Licensed Master Plumbers.',
    url,
    siteName: 'ClearFlow Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ClearFlow Plumbing | Waco & Central Texas',
    description: 'Schedule plumbing service or get a free estimate. Call (254) 732-9100.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
