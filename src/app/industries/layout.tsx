import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Property Management, Restaurants & Multi-Family | ClearFlow",
  description:
    "ClearFlow Plumbing serves property management companies, restaurants & hospitality, and multi-family housing across Central Texas with licensed, portfolio-ready plumbing services.",
  keywords: [
    "commercial plumber Waco TX",
    "property management plumbing",
    "restaurant plumber Central Texas",
    "multi-family plumbing Waco",
    "ClearFlow Plumbing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | ClearFlow Plumbing",
    description: "Plumbing for property managers, restaurants, and multi-family housing across Central Texas.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
