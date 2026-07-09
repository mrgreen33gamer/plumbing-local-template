import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/blogs/tankless-vs-tank-water-heaters-texas';

export const metadata: Metadata = {
  title: "Tankless vs. Tank Water Heaters: What Makes Sense for Texas Homes in 2026?",
  description: "Compare tankless and traditional tank water heaters for Central Texas homes — upfront cost, energy bills, recovery rates, and which option fits your family.",
  alternates: { canonical: url },
  openGraph: {
    title: "Tankless vs. Tank Water Heaters: What Makes Sense for Texas Homes in 2026?",
    description: "Compare tankless and traditional tank water heaters for Central Texas homes — upfront cost, energy bills, recovery rates, and which option fits your family.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
