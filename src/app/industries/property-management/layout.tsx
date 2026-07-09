import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Plumbing for Property Managers | Multi-Unit Make-Ready | ClearFlow",
  description: "Plumbing services for property management companies in Central Texas — make-ready, water heaters, drain cleaning, leak response. COIs available.",
  alternates: { canonical: url },
  openGraph: {
    title: "Plumbing for Property Managers | Multi-Unit Make-Ready | ClearFlow",
    description: "Plumbing services for property management companies in Central Texas — make-ready, water heaters, drain cleaning, leak response. COIs available.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
