import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/industries/multi-family-housing';

export const metadata: Metadata = {
  title: "Multi-Family Plumbing Waco TX | Apartments & Duplexes | ClearFlow",
  description: "Multi-family housing plumbing in Central Texas — unit make-ready, main lines, water heaters, and emergency response for apartment communities.",
  alternates: { canonical: url },
  openGraph: {
    title: "Multi-Family Plumbing Waco TX | Apartments & Duplexes | ClearFlow",
    description: "Multi-family housing plumbing in Central Texas — unit make-ready, main lines, water heaters, and emergency response for apartment communities.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
