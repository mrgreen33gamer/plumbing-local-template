import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowplumbingtx.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About ClearFlow Plumbing | Licensed Master Plumber Since 2009 | Waco, TX",
  description:
    "ClearFlow Plumbing is a Waco-owned plumbing company founded in 2009 by Marcus Hale. Licensed Master Plumber · TSBPE · Bonded & Insured. 8,000+ jobs completed across Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "About ClearFlow Plumbing | Waco, TX",
    description: "Locally owned plumbing experts since 2009. Licensed Master Plumber · TSBPE · Bonded & Insured.",
    url,
    siteName: "ClearFlow Plumbing",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
